import { useRef, useState } from "react";
import { ArrowRight, ChevronDown, Leaf, TrendingUp, MapPin, IndianRupee, Percent, ShieldCheck, Users } from "lucide-react";
import { scheme } from "../colors";

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-4 pt-20">
      {/* Mesh gradient background */}
      {/* #C85EA8 */}
      <div className="absolute inset-0 bg-[#FFFFF9] dark:hidden" />
      {/* <div className="absolute inset-0 bg-[#0B0F1E] hidden dark:block" /> */}
      <div className="absolute inset-0 opacity-50 dark:opacity-60"
        style={{
          background: `
            radial-gradient(ellipse at 15% 40%, #C85EA8 0%, transparent 50%),
            radial-gradient(ellipse at 85% 60%, #33C3FF 0%, transparent 50%),
            radial-gradient(ellipse at 50% 10%, #EA33FF 0%, transparent 45%)
          `,
        }}
      />
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #C85EA8 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-16 lg:items-stretch">

        {/* LEFT: Text */}
        <div className="flex-1 text-center lg:text-left flex flex-col justify-center">
          <span
            className="inline-block rounded-full px-4 py-1.5 w-fit text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#C85EA8", border: "1px solid rgba(200, 94, 168, 0.3)", backgroundColor: "rgba(200, 94, 168, 0.12)" }}
          >
            
            Bhopal's Trusted Farm-to-Door Service
          </span>

          <h1
            className="mt-1 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl"
            style={{ color: "var(--text-secondary)" }}
          >
            Own a Business That Brings{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #C85EA8, #33C3FF)" }}>
              Farm-Fresh Nutrition
            </span>{" "}
            to Every Doorstep.
          </h1>

          <p
            className="mt-3 max-w-xl text-lg leading-relaxed lg:text-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            Join Bhopal's fastest-growing local vegetable supply chain. We handle sourcing & sorting — you handle the local community.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <button
              onClick={() => scrollTo("apply")}
              className="group flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold text-white shadow-xl transition-shadow hover:shadow-2xl"
              style={{ background: "linear-gradient(135deg, #C85EA8, #33C3FF)" }}
            >
              Apply for Franchise
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo("model")}
              className="rounded-full border-2 px-8 py-3.5 text-base font-semibold transition-colors dark:text-white"
              style={{ borderColor: "#C85EA8", color: "#C85EA8" }}
            >
              See Investment Details
            </button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            <div className="flex items-center gap-2">
              <MapPin size={14} style={{ color: "#C85EA8" }} />
              <span>Bhopal</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf size={14} style={{ color: "#33C3FF" }} />
              <span>Farm-Direct</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp size={14} style={{ color: "#C85EA8" }} />
              <span>Low Investment</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Video — commented out, replaced with SheRise-style card */}
        {/* <div className="flex-[1.3]">
          <div className="relative mx-auto flex w-full items-center justify-center" style={{ minHeight: "calc(100vh - 100px)" }}>
            <div className="absolute h-96 w-96 rounded-full opacity-25 lg:h-[500px] lg:w-[500px]"
              style={{ background: "radial-gradient(circle, #33C3FF 0%, #EA33FF 50%, transparent 70%)" }}
            />
            <div className="relative w-full overflow-hidden rounded-2xl border shadow-2xl h-full" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              <video
                ref={videoRef}
                src="/franchise/Video Project.mp4"
                autoPlay
                muted={muted}
                loop
                playsInline
                className="h-full w-full object-cover"
                style={{ height: "calc(100vh - 90px)" }}
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              <button
                onClick={() => { videoRef.current.muted = !muted; setMuted(!muted); }}
                className="absolute bottom-3 right-3 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
              >
                {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
            </div>
          </div>
        </div> */}

        {/* RIGHT: SheRise-style card */}
        <div className="flex-[1.3] hidden lg:block">
          <div className="relative flex h-full items-center justify-center">
            {/* Main card */}
            <div className="w-full animate-pulse rounded-3xl border bg-white p-8 shadow-xl dark:border-gray-800 dark:bg-gray-9" style={{ borderColor: "#fdf2f8" }}>
              {/* Header */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#C85EA8] to-[#33C3FF] text-sm font-bold text-white">RB</div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Ram Bhaji Franchise</div>
                  <div className="text-xs" style={{ color: "var(--text-secondary)" }}>Bhopal's Farm-to-Door Network</div>
                </div>
              </div>

              {/* 2x2 Grid */}
              <div className="mb-6 grid grid-cols-2 gap-3">
                {[
                  { icon: IndianRupee, label: "Investment", value: "₹2-5 Lakhs", color: "#33C3FF" },
                  { icon: Percent, label: "Profit", value: "20-25%", color: "#EA33FF" },
                  { icon: MapPin, label: "Zone", value: "Pincode Exclusive", color: "#3342FF" },
                  { icon: ShieldCheck, label: "Training", value: "3-Day Hands-on", color: "#33C3FF" },
                ].map((item) => {
                  const sch = scheme(item.color);
                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 rounded-xl p-3 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                      style={{
                        background: `linear-gradient(135deg, ${sch.bg}, #fff)`,
                        border: `1.5px solid ${sch.border}`,
                        boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                      }}
                    >
                      <div
                        className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg"
                        style={{ background: sch.iconBg1, color: sch.icon }}
                      >
                        <item.icon size={17} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold" style={{ color: sch.title }}>{item.label}</div>
                        <div className="text-xs" style={{ color: "var(--text-secondary)" }}>{item.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom info */}
              <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid #fce7f3" }}>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#33C3FF] to-[#3342FF] text-[10px] font-bold text-white dark:border-gray-900">A</div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#EA33FF] to-[#C85EA8] text-[10px] font-bold text-white dark:border-gray-900">R</div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#3342FF] to-[#33C3FF] text-[9px] font-bold text-white dark:border-gray-900">S</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>10+ Franchisees</div>
                    <div className="text-[10px]" style={{ color: "var(--text-secondary)" }}>Across Bhopal</div>
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[10px]" style={{ color: i < 4 ? "#f59e0b" : "#e2e8f0" }}>★</span>
                  ))}
                  <span className="ml-1 text-[10px]" style={{ color: "var(--text-secondary)" }}>4.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down */}
      <button
        onClick={() => scrollTo("why")}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/60"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
