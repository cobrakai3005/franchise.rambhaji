import { useState, useEffect } from "react";

import { Menu, X, Sprout } from "lucide-react";
import { useScrollSpy } from "../hooks/useScrollSpy";
import ThemeToggle from "./ThemeToggle";

const links = [
  { id: "why", label: "Why Us" },
  { id: "model", label: "Business Model" },
  { id: "process", label: "Process" },
  { id: "faq", label: "FAQ" },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar({ onNavigate, page = "franchise" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(links.map((l) => l.id), 120);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isAbout = page === "about";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "shadow-lg backdrop-blur-xl"
          : "shadow-none backdrop-blur-sm"
      }`}
      style={{ backgroundColor: "var(--navbar-bg)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <button
          onClick={() => onNavigate("franchise")}
          className="flex items-center gap-2 text-lg font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          <img className="w-15" src="./logo.webp" alt="logo" />
          {/* <Sprout size={24} style={{ color: "#33C3FF" }} /> */}
          Ram Bhaji
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {isAbout ? (
            <>
              <button
                onClick={() => scrollTo("about-hero")}
                className="rounded-lg px-4 py-2 text-sm font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                About
              </button>
              <button
                onClick={() => scrollTo("about-story")}
                className="rounded-lg px-4 py-2 text-sm font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                Our Story
              </button>
              <button
                onClick={() => scrollTo("about-mission")}
                className="rounded-lg px-4 py-2 text-sm font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                Mission
              </button>
              <button
                onClick={() => scrollTo("about-cta")}
                className="rounded-lg px-4 py-2 text-sm font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                Join Us
              </button>
            </>
          ) : (
            links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="relative rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:opacity-80"
                style={{
                  color:
                    active === link.id ? "#33C3FF" : "var(--text-secondary)",
                }}
              >
                {link.label}
                {active === link.id && (
                  <div
                    className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full"
                    style={{ backgroundColor: "#33C3FF" }}
                  />
                )}
              </button>
            ))
          )}

          <button
            onClick={() => onNavigate(isAbout ? "franchise" : "about")}
            className="rounded-lg px-4 py-2 text-sm font-medium transition-colors"
            style={{
              color: isAbout ? "#33C3FF" : "#EA33FF",
            }}
          >
            {isAbout ? "Franchise" : "About"}
          </button>

          {/* <ThemeToggle /> */}

          {!isAbout && (
            <button
              onClick={() => scrollTo("apply")}
              className="ml-2 rounded-full px-5 py-2 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #3342FF, #EA33FF)",
              }}
            >
              Apply Now
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {/* <ThemeToggle /> */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2"
            style={{ color: "var(--text-primary)" }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

        {open && (
          <div
            className="overflow-hidden border-t"
            style={{
              borderColor: "var(--border-color)",
              backgroundColor: "var(--bg-card)",
            }}
          >
            <div className="flex flex-col gap-1 px-4 pb-4 pt-2">
              {isAbout ? (
                <>
                  <button onClick={() => { scrollTo("about-hero"); setOpen(false) }} className="rounded-lg px-3 py-2 text-left text-sm font-medium" style={{ color: "var(--text-secondary)" }}>About</button>
                  <button onClick={() => { scrollTo("about-story"); setOpen(false) }} className="rounded-lg px-3 py-2 text-left text-sm font-medium" style={{ color: "var(--text-secondary)" }}>Our Story</button>
                  <button onClick={() => { scrollTo("about-mission"); setOpen(false) }} className="rounded-lg px-3 py-2 text-left text-sm font-medium" style={{ color: "var(--text-secondary)" }}>Mission</button>
                  <button onClick={() => { scrollTo("about-cta"); setOpen(false) }} className="rounded-lg px-3 py-2 text-left text-sm font-medium" style={{ color: "var(--text-secondary)" }}>Join Us</button>
                </>
              ) : (
                links.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => { scrollTo(link.id); setOpen(false) }}
                    className="rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors"
                    style={{
                      color: active === link.id ? "#33C3FF" : "var(--text-secondary)",
                      backgroundColor: active === link.id ? "rgba(51, 195, 255, 0.08)" : "transparent",
                    }}
                  >
                    {link.label}
                  </button>
                ))
              )}
              <button
                onClick={() => { onNavigate(isAbout ? "franchise" : "about"); setOpen(false) }}
                className="rounded-lg px-3 py-2 text-left text-sm font-medium"
                style={{ color: "#33C3FF" }}
              >
                {isAbout ? "View Franchise" : "About Us"}
              </button>
              {!isAbout && (
                <button
                  onClick={() => { scrollTo("apply"); setOpen(false) }}
                  className="mt-2 rounded-full py-2 text-sm font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, #3342FF, #EA33FF)" }}
                >
                  Apply Now
                </button>
              )}
            </div>
          </div>
        )}
    </nav>
  );
}
