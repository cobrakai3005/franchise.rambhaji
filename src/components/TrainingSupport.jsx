import { useState } from "react";
import { Smartphone, Megaphone, Sun, Check } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { scheme } from "../colors";

const features = [
  {
    icon: Smartphone,
    title: "The Ram Bhaji App",
    desc: "An inventory & pricing management dashboard. Track orders, manage stock, and handle deliveries.",
    items: [
      "Real-time inventory tracking",
      "Automated pricing updates",
      "Order management dashboard",
    ],
    color: "#33C3FF",
  },
  {
    icon: Megaphone,
    title: "Marketing Support",
    desc: "Digital posters, WhatsApp templates, and introductory offers to acquire your first 50 customers.",
    items: [
      "Ready WhatsApp templates",
      "Social media creatives",
      "Launch offer strategy",
    ],
    color: "#EA33FF",
  },
  {
    icon: Sun,
    title: "Daily Supply Chain",
    desc: "Guaranteed fresh stock delivered to your doorstep every morning by 6 AM. No sourcing hassles.",
    items: [
      "Fresh stock by 6 AM",
      "Zero sourcing required",
      "Quality-checked produce",
    ],
    color: "#3342FF",
  },
];

export default function TrainingSupport() {
  const [hoverIdx, setHoverIdx] = useState(null);

  return (
    <SectionWrapper id="support" pink>
      <div className="mb-14 text-center">
        <span
          className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
          style={{
            color: "#3342FF",
            border: "1px solid rgba(51, 66, 255, 0.3)",
            backgroundColor: "rgba(51, 66, 255, 0.08)",
          }}
        >
          We've Got You Covered
        </span>
        <h2
          className="mt-4 text-3xl font-bold md:text-4xl"
          style={{ color: "#33C3FF" }}
        >
          Training &{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #33C3FF, #3342FF)",
            }}
          >
            Ongoing Support
          </span>
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map((f, i) => {
          const Icon = f.icon;
          const isHovered = hoverIdx === i;
          const isDimmed = hoverIdx !== null && !isHovered;
          const sch = scheme(f.color);

          return (
            <div
              key={f.title}
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(null)}
              className="group relative cursor-pointer rounded-3xl p-7 transition-all duration-500"
              style={{
                background: `linear-gradient(135deg, ${sch.bg}, #fff 80%)`,
                border: `1px solid ${sch.border}`,
                opacity: isDimmed ? 0.95 : 1,
                transform: isHovered ? "translateY(-8px)" : "translateY(0px)",
                boxShadow: isHovered
                  ? `0 20px 40px -12px ${sch.border}80`
                  : "0 4px 20px rgba(0,0,0,0.03)",
                zIndex: isHovered ? 10 : 1,
              }}
            >
              <div
                className="absolute -top-2 -right-2 w-16 h-16 rounded-full blur-xl"
                style={{ backgroundColor: sch.iconBg2 }}
              />

              <div
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${sch.iconBg1}, ${sch.iconBg2})`,
                  color: f.color,
                  boxShadow: `0 8px 24px ${sch.shadow}`,
                }}
              >
                <Icon size={24} />
              </div>

              <h3
                className="mb-2 text-lg font-bold"
                style={{ color: sch.title }}
              >
                {f.title}
              </h3>
              <p
                className="mb-4 text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {f.desc}
              </p>

              <ul className="space-y-2.5 text-sm">
                {f.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: sch.iconBg1, color: f.color }}
                    >
                      <Check size={11} />
                    </span>
                    <span style={{ color: "var(--text-secondary)" }}>
                      {item}
                    </span>
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
