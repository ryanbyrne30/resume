import { useEffect } from "react";

export default function useAppear(el: Element | null) {
  useEffect(() => {
    if (el !== null) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      });
      observer.observe(el);
    }
  }, [el]);
}
