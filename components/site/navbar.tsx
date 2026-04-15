"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const links = useMemo(() => navItems, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { threshold: 0.35, rootMargin: "-20% 0px -60% 0px" },
    );

    links.forEach((item) => {
      const id = item.href.replace("#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [links]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-slate-200/80 px-4 py-2.5 backdrop-blur-md md:px-6",
          scrolled
            ? "bg-white/88 shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
            : "bg-white/70",
        )}
      >
        <a href="#hero" className="text-sm font-semibold tracking-[0.22em] text-slate-900">
          VM
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "link-underline relative rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-slate-900",
                  isActive && "text-slate-900",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute right-3 bottom-1 left-3 h-0.5 origin-left rounded-full bg-blue-600 transition-transform",
                    isActive ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            );
          })}
        </div>

        <Button
          variant="ghost"
          size="icon"
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </Button>
      </nav>

      {open ? (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
