"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";
import { cn, scrollToSection } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = siteConfig.navItems.map((item) =>
        item.href.replace("#", ""),
      );

      for (const id of [...sections].reverse()) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    scrollToSection(href.replace("#", ""));
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-colors duration-300",
        scrolled
          ? "border-b border-border-subtle bg-background/95 backdrop-blur-md"
          : "border-b border-transparent bg-background/85 backdrop-blur-sm",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 lg:px-8">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="text-sm font-semibold tracking-tight text-text-primary"
        >
          ColbyOS
        </a>

        <ul className="flex items-center gap-6 sm:gap-8">
          {siteConfig.navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "text-[13px] font-medium transition-colors duration-200",
                    isActive ? "text-text-primary" : "text-text-muted hover:text-text-primary",
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
