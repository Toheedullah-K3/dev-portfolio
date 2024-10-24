"use client";

import { useEffect } from "react";

export const Header = () => {
  useEffect(() => {
    const handleSmoothScroll = (event: MouseEvent) => {
      const target = (event.currentTarget as HTMLAnchorElement).getAttribute("href");

      // Check if the target is valid and not "#"
      if (target && target !== "#") {
        event.preventDefault(); // Prevent the default anchor behavior
        const element = document.querySelector(target);
        
        if (element) {
          // Smooth scroll to the element
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else if (target === "#") {
        // Scroll to the top for Home link
        event.preventDefault(); // Prevent the default anchor behavior
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    // Select all navigation links
    const navLinks = document.querySelectorAll("nav a");

    // Add event listeners to each link
    navLinks.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll as EventListener);
    });

    // Clean up the event listeners on component unmount
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll as EventListener);
      });
    };
  }, []);
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      <a href="" className="nav-item"> Home </a>
        <a href="#projects" className="nav-item"> Project </a>
        <a href="#about" className="nav-item"> About </a>
        <a href="#contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"> Contact </a>
      </nav>
    </div>
  )
}
 