import { useState } from "react";
import { FileText, Eye, MapPin, FileCheck, CreditCard, GraduationCap, Play, Zap, Check } from "lucide-react";
import evSectionWrapper from "./SectionWrapper";
import { scheme } from "../colors";
import SectionWrapper from "./SectionWrapper";

const steps = [
  { icon: FileText, title: "Online Inquiry", subtitle: "Day 1", desc: "Fill the application form. Our team calls you back within 4 hours for a quick 10-minute screening.", color: "#33C3FF", points: ["4-hour callback", "10-min screening", "No commitment needed"] },
  { icon: Eye, title: "Visit Our Sorting Unit", subtitle: "Day 2-3", desc: "Tour our central Bhopal facility. See how we source, sort, grade, and pack.", color: "#EA33FF", points: ["Facility tour", "Meet the team", "See quality firsthand"] },
  { icon: MapPin, title: "Choose Your Zone", subtitle: "Exclusive Territory", desc: "View available micro-zones on a Bhopal map. Pick your preferred exclusive colony.", color: "#3342FF", points: ["View available zones", "First come, first served", "Exclusive pincode rights"] },
  { icon: FileCheck, title: "Sign the Agreement", subtitle: "Commercials Finalized", desc: "Clear breakdown: franchise fee, refundable deposit, and daily revenue split.", color: "#33C3FF", points: ["5-10 page agreement", "Hindi/English available", "Zero hidden clauses"] },
  { icon: CreditCard, title: "Payment & Setup", subtitle: "Day 4-5", desc: "Pay the initial investment. Get dashboard credentials, branding assets, and equipment.", color: "#EA33FF", points: ["Dashboard access", "Branding kit", "Equipment checklist"] },
  { icon: GraduationCap, title: "3-Day Training", subtitle: "Day 6-8", desc: "App & tech setup, operations & quality handover, finance & compliance.", color: "#3342FF", points: ["App & tech training", "Operations handover", "Finance & compliance"] },
  { icon: Play, title: "Soft Launch Pilot", subtitle: "Day 9-14", desc: "Serve 10-15 existing customers in your zone. HQ shadows you via WhatsApp.", color: "#33C3FF", points: ["Pilot customers", "Real-time support", "No-pressure practice"] },
  { icon: Zap, title: "Grand Marketing Launch", subtitle: "Day 15", desc: "Flip the switch! HQ provides flyers & social posts. New orders flow to your app.", color: "#EA33FF", points: ["500 flyers distributed", "Social media blast", "Orders go live"] },
];

export default function FranchiseJourney() {
  const [hoverIdx, setHoverIdx] = useState(null);

  return (
    <SectionWrapper id="process" pink>
      <div className="mb-14 text-center">
        <span className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
          style={{ color: "#33C3FF", border: "1px solid rgba(51, 195, 255, 0.3)", backgroundColor: "rgba(51, 195, 255, 0.08)" }}>Your Journey</span>
        <h2 className="mt-4 text-3xl font-bold md:text-4xl" style={{ color: "#33C3FF" }}>
          From Inquiry to{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #33C3FF, #EA33FF)" }}>Launch in 8 Steps</span>
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => {
          const Icon = s.icon;
          const isHovered = hoverIdx === i;
          const isDimmed = hoverIdx !== null && !isHovered;
          const sch = scheme(s.color);

          return (
            <div
              key={s.title}
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(null)}
              className="group relative cursor-pointer rounded-3xl p-5 transition-all duration-500"
              style={{
                background: `linear-gradient(135deg, ${sch.bg}, #fff 80%)`,
                border: `1px solid ${sch.border}`,
                opacity: isDimmed ? 0.95 : 1,
                // transform: isHovered ? "translateY(-8px)" : isDimmed ? "scale(0.93)" : "scale(1)",
                transform: isHovered ? "translateY(-8px)" : "translateY(0px)",
                boxShadow: isHovered ? `0 20px 40px -12px ${sch.border}80` : "0 4px 20px rgba(0,0,0,0.03)",
                zIndex: isHovered ? 10 : 1,
              }}
            >
              <div className="absolute -top-2 -right-2 w-14 h-14 rounded-full blur-xl" style={{ backgroundColor: sch.iconBg2 }} />

              {/* Step number + subtitle */}
              <div className="flex items-center justify-between mb-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ background: `linear-gradient(135deg, #3342FF, #EA33FF)` }}>{i + 1}</span>
                {s.subtitle && <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: s.color }}>{s.subtitle}</span>}
              </div>

              {/* Icon */}
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110"
                style={{ background: `linear-gradient(135deg, ${sch.iconBg1}, ${sch.iconBg2})`, color: s.color, boxShadow: `0 8px 24px ${sch.shadow}` }}>
                <Icon size={20} />
              </div>

              {/* Title */}
              <h3 className="mb-1.5 text-sm font-bold" style={{ color: sch.title }}>{s.title}</h3>

              {/* Description */}
              <p className="mb-3 text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{s.desc}</p>

              {/* Points */}
              <ul className="space-y-1.5 text-xs">
                {s.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full" style={{ backgroundColor: sch.iconBg1, color: s.color }}>
                      <Check size={9} />
                    </span>
                    <span style={{ color: "var(--text-secondary)" }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}