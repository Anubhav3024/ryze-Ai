import { useEffect, useCallback } from "react";

export function useSmoothScroll() {
  const scrollToSection = useCallback((targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href.startsWith("#") && href.length > 1) {
          e.preventDefault();
          const targetId = href.slice(1);
          scrollToSection(targetId);
          
          // Update URL without triggering scroll
          window.history.pushState(null, "", href);
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [scrollToSection]);

  // Handle initial hash on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.length > 1) {
      setTimeout(() => {
        scrollToSection(hash.slice(1));
      }, 100);
    }
  }, [scrollToSection]);

  return { scrollToSection };
}
