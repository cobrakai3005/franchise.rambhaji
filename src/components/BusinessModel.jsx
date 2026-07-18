import { useState } from "react";
import { IndianRupee, MapPin, Percent, Calendar, Check, ArrowRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { scheme } from "../colors";

const cards = [
  { icon: IndianRupee, title: "Investment", value: "₹2 - ₹5 Lakhs", desc: "Everything included — setup, training, initial stock, and franchisee dashboard access.", color: "#33C3FF", points: ["No hidden fees", "Refundable deposit", "Full branding kit"] },
  { icon: MapPin, title: "Exclusive Zone", value: "Pincode-Based", desc: "Get exclusive rights to a specific colony or pincode in Bhopal. No competition within your zone.", color: "#EA33FF", points: ["First come, first served", "Population density mapped", "Growth territory" ] },
  { icon: Percent, title: "Profit Margin", value: "20 - 25%", desc: "Earn on every bag delivered. Higher margins than any other daily-essentials franchise.", color: "#3342FF", points: ["Daily settlement", "Volume bonuses", "No royalty fees"] },
  { icon: Calendar, title: "Recurring Revenue", value: "Daily Income", desc: "Vegetables are daily essentials. Subscription-based recurring monthly income.", color: "#33C3FF", points: ["Predictable cash flow", "Low customer churn", "Scale with demand"] },
];

const lightBg = (c) => `linear-gradient(135deg, ${scheme(c).bg}, #fff 80%)`;

export default function BusinessModel() {
  const [hoverIdx, setHoverIdx] = useState(null);

  return (
    <SectionWrapper id="model" >
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] dark:opacity-[0.15]"
      //  style={{
      //   background: `
      //     radial-gradient(ellipse at 20% 50%, #3342FF 0%, transparent 60%),
      //     radial-gradient(ellipse at 80% 50%, #33C3FF 0%, transparent 60%),
      //     radial-gradient(ellipse at 50% 0%, #EA33FF 0%, transparent 60%)
      //   `,
      // }}
       />
      <div className="mb-14 text-center">
        <span className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest" style={{ color: "#3342FF", border: "1px solid rgba(51, 66, 255, 0.3)", backgroundColor: "rgba(51, 66, 255, 0.08)" }}>The Business Model</span>
        <h2 className="mt-4 text-3xl font-bold md:text-4xl" style={{ color: "#3342FF" }}>
          Complete <span className="bg-clip-text text-transparent" 
          style={{ backgroundImage: "linear-gradient(135deg, #EA33FF, #3342FF)" }}
          >Financial Clarity</span>
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {cards.map((c, i) => {
          const Icon = c.icon;
          const isHovered = hoverIdx === i;
          const isDimmed = hoverIdx !== null && !isHovered;
          const sch = scheme(c.color);

          return (
            <div
              key={c.title}
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(null)}
              className="group relative cursor-pointer rounded-3xl p-7 transition-all duration-500"
              style={{
                background: lightBg(c.color),
                border: `1px solid ${sch.border}`,
                opacity: isDimmed ? 0.95 : 1,
                transform: isHovered ? "translateY(-8px)" :  "translateY(0px)",
                boxShadow: isHovered ? `0 20px 40px -12px ${sch.border}80` : "0 4px 20px rgba(0,0,0,0.03)",
                zIndex: isHovered ? 10 : 1,
              }}
            >
              {/* Decorative blur dot */}
              <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full blur-xl" style={{ backgroundColor: sch.iconBg2 }} />

              {/* Icon */}
              <div
                className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl text-2xl transition-all duration-500 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${sch.iconBg1}, ${sch.iconBg2})`,
                  color: c.color,
                  boxShadow: `0 8px 24px ${sch.shadow}`,
                }}
              >
                <Icon size={26} />
              </div>

              {/* Title */}
              <h3 className="mb-1 text-xl font-bold" style={{ color: sch.title }}>{c.title}</h3>

              {/* Value */}
              <div className="mb-3 text-3xl font-black" style={{ color: sch.title }}>{c.value}</div>

              {/* Description */}
              {/* <p className="mb-5 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{c.desc}</p> */}

              {/* Feature list */}
              <ul className="mb-6 space-y-2.5 text-sm">
                {c.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full" style={{ backgroundColor: sch.iconBg1, color: c.color }}>
                      <Check size={11} />
                    </span>
                    <span style={{ color: "var(--text-secondary)" }}>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom link */}
              <div className="flex items-center gap-1.5 pt-4 border-t text-sm font-semibold transition-all duration-300" style={{ borderColor: sch.border, color: c.color, opacity: isHovered ? 1 : 0.6 }}>
                Learn more <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
