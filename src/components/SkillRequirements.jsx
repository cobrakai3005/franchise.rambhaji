import { useState } from "react";
import { Warehouse, Heart, Check } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { scheme } from "../colors";

const requirements = [
  { icon: Warehouse, title: "1200 sq ft Storage Space", desc: "A dedicated storage area in your locality to hold daily inventory of fresh vegetables.", color: "#33C3FF", points: ["Clean & dry space", "Racking provided by us", "Near your home preferred"] },
  { icon: Heart, title: "Passion for Customer Service", desc: "You'll handle deliveries, collect payments, and build relationships with your community.", color: "#EA33FF", points: ["Friendly & approachable", "Basic smartphone skills", "Commitment to quality"] },
];

export default function SkillRequirements() {
  const [hoverIdx, setHoverIdx] = useState(null);

  return (
    <SectionWrapper id="requirements">
      <div className="mb-14 text-center">
        <span className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
          style={{ color: "#EA33FF", border: "1px solid rgba(234, 51, 255, 0.3)", backgroundColor: "rgba(234, 51, 255, 0.08)" }}>What You Need</span>
        <h2 className="mt-4 text-3xl font-bold md:text-4xl" style={{ color: "#EA33FF" }}>
          Is This{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #EA33FF, #3342FF)" }}>Right for You?</span>
        </h2>
      </div>

      <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
        {requirements.map((r, i) => {
          const Icon = r.icon;
          const isHovered = hoverIdx === i;
          const isDimmed = hoverIdx !== null && !isHovered;
          const sch = scheme(r.color);

          return (
            <div
              key={r.title}
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(null)}
              className="group relative cursor-pointer rounded-3xl p-7 transition-all duration-500"
              style={{
                background: `linear-gradient(135deg, ${sch.bg}, #fff 80%)`,
                border: `1px solid ${sch.border}`,
                opacity: isDimmed ? 0.95 : 1,
                transform: isHovered ? "translateY(-8px)" : "translateY(0px)",
                boxShadow: isHovered ? `0 20px 40px -12px ${sch.border}80` : "0 4px 20px rgba(0,0,0,0.03)",
                zIndex: isHovered ? 10 : 1,
              }}
            >
              <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full blur-xl" style={{ backgroundColor: sch.iconBg2 }} />

              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${sch.iconBg1}, ${sch.iconBg2})`, color: r.color, boxShadow: `0 8px 24px ${sch.shadow}` }}>
                  <Icon size={26} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-bold" style={{ color: sch.title }}>{r.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{r.desc}</p>
                  <ul className="space-y-2 text-sm">
                    {r.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2.5">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: sch.iconBg1, color: r.color }}>
                          <Check size={11} />
                        </span>
                        <span style={{ color: "var(--text-secondary)" }}>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-10 text-center text-sm" style={{ color: "var(--text-secondary)" }}>
        Just two requirements. If you have space and a service mindset, you're ready.
      </p>
    </SectionWrapper>
  );
}
