import { useState } from "react";
import { Warehouse, Recycle, Truck, HeartHandshake, Check } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import SectionWrapper from "./SectionWrapper";
import { scheme } from "../colors";

const pillars = [
  {
    icon: Warehouse,
    title: "Local Sourcing Power",
    desc: "We partner directly with farmers around Bhopal, eliminating middlemen for better margins.",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
    points: [
      "Direct farmer partnerships",
      "Better margins for you",
      "Fresh daily supply",
    ],
  },
  {
    icon: Recycle,
    title: "Zero-Waste Sorting",
    desc: "Our central unit carefully grades vegetables, ensuring your customers get only the best quality.",
    img: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=80",
    points: [
      "Quality-graded produce",
      "Reduced wastage",
      "Premium customer experience",
    ],
  },
  {
    icon: Truck,
    title: "Logistics Ready",
    desc: "We handle primary logistics. You manage last-mile delivery in your assigned micro-zone.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    points: [
      "Primary logistics handled",
      "Last-mile delivery only",
      "Low operational hassle",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Proven Track Record",
    desc: "Trusted by hundreds of Bhopal families with a 98% on-time delivery rate.",
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80",
    points: [
      "98% on-time delivery",
      "500+ happy homes",
      "Trusted Bhopal brand",
    ],
  },
];

const colors = ["#33C3FF", "#EA33FF", "#3342FF", "#33C3FF"];

export default function WhyRamBhaji() {
  const [hoverIdx, setHoverIdx] = useState(null);

  return (
    <SectionWrapper id="why">
      <div className="mb-14 text-center">
        <span
          className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
          style={{
            color: "#EA33FF",
            border: "1px solid rgba(234, 51, 255, 0.3)",
            backgroundColor: "rgba(234, 51, 255, 0.08)",
          }}
        >
          Why Ram Bhaji?
        </span>
        <h2
          className="mt-4 text-3xl font-bold md:text-4xl"
          style={{ color: "#33C3FF" }}
        >
          Built for{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #33C3FF, #3342FF)",
            }}
          >
            Franchise Success
          </span>
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => {
          const Icon = p.icon;
          const isHovered = hoverIdx === i;
          const isDimmed = hoverIdx !== null && !isHovered;
          const c = colors[i];
          const sch = scheme(c);

          return (
            <div
              key={p.title}
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(null)}
              className="group relative cursor-pointer rounded-3xl  transition-all duration-500"
              style={{
                background: `linear-gradient(135deg, ${sch.bg}, #fff 80%)`,
                border: `1px solid ${sch.border}`,
                opacity: isDimmed ? 0.95 : 1,
                // transform: isHovered ? "translateY(-8px)" : isDimmed ? "scale(0.93)" : "scale(1)",
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

              <div className="relative h-24 overflow-hidden rounded-t-3xl">
                <img
                  src={p.img}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  draggable={false}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, ${sch.bg} 0%, transparent 60%)`,
                  }}
                />
              </div>

              <div className="p-5">
                <div
                  className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${sch.iconBg1}, ${sch.iconBg2})`,
                    color: c,
                    boxShadow: `0 8px 24px ${sch.shadow}`,
                  }}
                >
                  <Icon size={22} />
                </div>
                <h3
                  className="mb-1.5 text-base font-bold"
                  style={{ color: sch.title }}
                >
                  {p.title}
                </h3>
                <p
                  className="mb-4 text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {p.desc}
                </p>
                <ul className="space-y-2 text-xs">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2">
                      <span
                        className="flex h-4 w-4 items-center justify-center rounded-full"
                        style={{ backgroundColor: sch.iconBg1, color: c }}
                      >
                        <Check size={9} />
                      </span>
                      <span style={{ color: "var(--text-secondary)" }}>
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="mt-12 rounded-2xl border p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border-color)",
        }}
      >
        <div className="flex flex-wrap items-center justify-center gap-12">
          <div>
            <div className="text-4xl font-bold" style={{ color: "#33C3FF" }}>
              <AnimatedCounter to={500} suffix="+" />
            </div>
            <div
              className="mt-1 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Happy Daily Homes Served
            </div>
          </div>
          <div
            className="hidden h-12 w-px md:block"
            style={{ backgroundColor: "var(--border-color)" }}
          />
          <div>
            <div className="text-4xl font-bold" style={{ color: "#EA33FF" }}>
              <AnimatedCounter to={98} suffix="%" />
            </div>
            <div
              className="mt-1 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              On-Time Delivery Rate
            </div>
          </div>
          <div
            className="hidden h-12 w-px md:block"
            style={{ backgroundColor: "var(--border-color)" }}
          />
          <div>
            <div className="text-4xl font-bold" style={{ color: "#3342FF" }}>
              <AnimatedCounter to={15} suffix="+" />
            </div>
            <div
              className="mt-1 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Exclusive Zones in Bhopal
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
