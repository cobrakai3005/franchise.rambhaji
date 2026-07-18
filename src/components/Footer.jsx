import { Sprout } from "lucide-react";

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Footer({ onNavigate, page = "franchise" }) {
  const isAbout = page === "about";

  return (
    <footer
      className="border-t py-12 px-4"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <button
            onClick={() => onNavigate("franchise")}
            className="flex items-center gap-2 text-lg font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            <Sprout size={22} style={{ color: "#33C3FF" }} />
            Ram Bhaji
          </button>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm" style={{ color: "var(--text-secondary)" }}>
            {isAbout ? (
              <>
                <button onClick={() => scrollTo("about-hero")} className="hover:opacity-80 transition-opacity">About</button>
                <button onClick={() => scrollTo("about-story")} className="hover:opacity-80 transition-opacity">Our Story</button>
                <button onClick={() => scrollTo("about-mission")} className="hover:opacity-80 transition-opacity">Mission</button>
                <button onClick={() => onNavigate("franchise")} className="hover:opacity-80 transition-opacity">Franchise</button>
                <button onClick={() => scrollTo("about-cta")} className="hover:opacity-80 transition-opacity">Join Us</button>
              </>
            ) : (
              <>
                <button onClick={() => scrollTo("why")} className="hover:opacity-80 transition-opacity">Why Us</button>
                <button onClick={() => scrollTo("model")} className="hover:opacity-80 transition-opacity">Business Model</button>
                <button onClick={() => scrollTo("process")} className="hover:opacity-80 transition-opacity">Process</button>
                <button onClick={() => scrollTo("faq")} className="hover:opacity-80 transition-opacity">FAQ</button>
                <button onClick={() => onNavigate("about")} className="hover:opacity-80 transition-opacity">About</button>
                <button onClick={() => scrollTo("apply")} className="hover:opacity-80 transition-opacity">Apply</button>
              </>
            )}
          </div>
        </div>

        <div
          className="mt-8 text-center text-xs"
          style={{ color: "var(--text-secondary)" }}
        >
          &copy; {new Date().getFullYear()} Ram Bhaji. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
