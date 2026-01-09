import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Product", href: "#features" },
  { label: "How it Works", href: "/how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Case Studies", href: "#testimonials" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navLinks.map((link) => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-r from-[#00C2FF] to-black ${
        isScrolled ? "py-3 backdrop-blur-md" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <img
              src="/ryzen-ai-logo.png"
              alt="Ryzen AI"
              className="h-16 w-auto object-contain brightness-0 invert"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => {
            const isRoute = link.href.startsWith("/");

            if (isRoute) {
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`relative text-sm font-medium transition-colors duration-200 text-white/80 hover:text-white`}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href.slice(1)
                    ? "text-white font-semibold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
        </nav>

        {/* CTA Buttons */}
        <motion.div
          className="hidden md:flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <ThemeToggle />
          <Link to="/login">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 border border-white/30"
            >
              Login
            </Button>
          </Link>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/book-demo">
              <Button
                variant="hero"
                size="default"
                className="bg-white text-black hover:bg-gray-100"
              >
                Book a Demo
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-gradient-to-r from-[#00C2FF] to-black mt-2 mx-4 rounded-xl overflow-hidden backdrop-blur-md"
          >
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link, index) => {
                const isRoute = link.href.startsWith("/");

                if (isRoute) {
                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="py-3 px-4 rounded-lg text-sm font-medium transition-colors text-white/80 hover:text-white hover:bg-white/10"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                }

                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === link.href.slice(1)
                        ? "bg-white/20 text-white font-semibold"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
              <motion.div
                className="flex flex-col gap-2 mt-3 pt-3 border-t border-border"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center justify-between px-4 py-2">
                  <span className="text-sm text-white/80">Theme</span>
                  <ThemeToggle />
                </div>
                <Link to="/login" className="w-full">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-white hover:bg-white/20 border border-white/30"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/book-demo" className="w-full">
                  <Button
                    variant="hero"
                    size="default"
                    className="bg-white text-black hover:bg-gray-100 w-full"
                  >
                    Book a Demo
                  </Button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
