import { Sprout, Shield, Users, TreePine, TrendingUp, ArrowRight, CheckCircle, Quote, Camera } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionWrapper from "../components/SectionWrapper";
import ImageCarousel from "../components/ImageCarousel";
import VideoSection from "../components/VideoSection";
import GallerySection from "../components/GallerySection";

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

const carouselImages = [
  { src: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80", alt: "Fresh vegetables at market", caption: "Farm-fresh produce daily" },
  { src: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80", alt: "Vegetable sorting", caption: "Rigorous quality grading" },
  { src: "https://images.unsplash.com/photo-1590779033100-9f52a70ba5a1?w=800&q=80", alt: "Organic vegetables", caption: "Chemical-free goodness" },
  { src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=80", alt: "Fresh produce display", caption: "Beautiful, nutritious, affordable" },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80", alt: "Farm fields" },
  { src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80", alt: "Team member" },
  { src: "https://images.unsplash.com/photo-1566385101042-1a0b0d51c991?w=600&q=80", alt: "Fresh vegetables" },
  { src: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=600&q=80", alt: "Vegetable delivery" },
  { src: "https://images.unsplash.com/photo-1590779033100-9f52a70ba5a1?w=600&q=80", alt: "Organic produce" },
  { src: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=80", alt: "Sorting process" },
];

export default function AboutPage({ onNavigate }) {
  return (
    <main>
      <Navbar onNavigate={onNavigate} page="about" />

      {/* ───── HERO ───── */}
      <section
        id="about-hero"
        className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-4 pt-20"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&q=80"
            alt=""
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F1E]/85 via-[#0B0F1E]/70 to-[#0B0F1E]/85" />
        <div className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(ellipse at 30% 40%, #33C3FF 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, #EA33FF 0%, transparent 50%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div
            className="mb-6 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#33C3FF", border: "1px solid rgba(51,195,255,0.3)", backgroundColor: "rgba(51,195,255,0.12)" }}
          >
            Our Story
          </div>
          <h1
            className="text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl"
          >
            Pure Food.{" "}
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #33C3FF, #EA33FF)" }}
            >
              Honest Business.
            </span>
          </h1>
          <p
            className="mx-auto mt-6 max-w-2xl text-lg text-white/80 md:text-xl"
          >
            From a small vision in Bhopal to a growing network of franchise partners —
            we're on a mission to make chemical-free food accessible to every Indian family.
          </p>
          <div className="mt-10">
            <button
              onClick={() => scrollTo("about-story")}
              className="rounded-full px-8 py-3.5 text-base font-semibold text-white shadow-xl"
              style={{ background: "linear-gradient(135deg, #3342FF, #EA33FF)" }}
            >
              Know Our Story
            </button>
          </div>

          <div
            className="mt-16 flex items-center justify-center gap-8 text-sm text-white/70"
          >
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: "#33C3FF" }}>2023</div>
              <div>Founded</div>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: "#EA33FF" }}>500+</div>
              <div>Families Served</div>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: "#3342FF" }}>15+</div>
              <div>Bhopal Zones</div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── ORIGIN STORY (with Carousel) ───── */}
      <SectionWrapper id="about-story" pink>
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#EA33FF", border: "1px solid rgba(234,51,255,0.3)", backgroundColor: "rgba(234,51,255,0.08)" }}
            >
              The Beginning
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl" style={{ color: "var(--text-primary)" }}>
              The{" "}
              <span className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #EA33FF, #3342FF)" }}
              >
                Ram Bhaji
              </span>{" "}
              Story
            </h2>
            <p className="mt-4 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Ram Bhaji was born from a simple frustration — finding truly pesticide-free
              vegetables in Bhopal was nearly impossible. Our founder, a local entrepreneur
              with deep roots in the farming community, realized that the gap wasn't in
              supply, but in trust.
            </p>
            <p className="mt-3 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              "If we could connect Bhopal's best farmers directly to its families — with
              rigorous quality checks and transparent pricing — we could change how this
              city eats," he thought. That thought became Ram Bhaji.
            </p>
            <p className="mt-3 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              The name "Ram Bhaji" reflects our commitment to honest, blessed food —
              vegetables that are grown with care, washed with alkaline water to remove
              toxins, and delivered with respect.
            </p>
          </div>

          <div>
            <ImageCarousel images={carouselImages} heightClass="h-72 md:h-96" />
            <div className="mt-4 rounded-xl border p-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-color)" }}
            >
              <Quote size={20} style={{ color: "#33C3FF", opacity: 0.4 }} />
              <p className="mt-1 text-sm italic" style={{ color: "var(--text-primary)" }}>
                "Every family deserves access to clean, affordable vegetables. We built
                Ram Bhaji not just as a delivery service, but as a movement for healthier
                Indian households."
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #33C3FF, #EA33FF)" }}
                >
                  RB
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Founder, Ram Bhaji</div>
                  <div className="text-xs" style={{ color: "var(--text-secondary)" }}>Bhopal, 2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {[
            { year: "2023", event: "Ram Bhaji founded in Bhopal", color: "#33C3FF" },
            { year: "2024", event: "First 100 daily homes reached", color: "#EA33FF" },
            { year: "2025", event: "Launched franchise model", color: "#3342FF" },
            { year: "2026", event: "15+ zones, 500+ families", color: "#33C3FF" },
          ].map((m) => (
            <div key={m.year}
              className="rounded-xl border p-4 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-color)" }}
            >
              <div className="text-2xl font-bold" style={{ color: m.color }}>{m.year}</div>
              <div className="mt-1 text-xs" style={{ color: "var(--text-secondary)" }}>{m.event}</div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ───── MISSION, VISION, VALUES ───── */}
      <SectionWrapper id="about-mission">
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#3342FF", border: "1px solid rgba(51,66,255,0.3)", backgroundColor: "rgba(51,66,255,0.08)" }}
          >
            Our Purpose
          </span>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl" style={{ color: "var(--text-primary)" }}>
            Mission, Vision &{" "}
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #33C3FF, #3342FF)" }}
            >
              Core Values
            </span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: TargetIcon,
              title: "Our Mission",
              desc: "Deliver pure, chemical-free produce to every Indian family with uncompromising quality, transparency, and affordability.",
              items: ["Zero-pesticide guarantee", "Farm-to-fork traceability", "Alkaline wash for every vegetable"],
              color: "#33C3FF",
            },
            {
              icon: TrendingUp,
              title: "Our Vision",
              desc: "Build India's most trusted fresh food franchise network — empowering local entrepreneurs to bring healthy food to their own communities.",
              items: ["100+ franchise partners by 2028", "Pan-MP expansion", "India's benchmark for clean food"],
              color: "#EA33FF",
            },
            {
              icon: HeartIcon,
              title: "Our Values",
              desc: "Every decision we make is guided by the principles of quality, transparency, community, and sustainability.",
              items: ["Quality over profit, always", "Radical transparency with partners", "Community-first growth mindset"],
              color: "#3342FF",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-color)" }}
              >
                <div className="mb-4 inline-flex rounded-xl p-3"
                  style={{ backgroundColor: `${item.color}18` }}
                >
                  <Icon size={24} style={{ color: item.color }} />
                </div>
                <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {item.items.map((li) => (
                    <li key={li} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <CheckCircle size={14} style={{ color: item.color }} />
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ───── VIDEO + GALLERY SECTION ───── */}
      <SectionWrapper pink>
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#33C3FF", border: "1px solid rgba(51,195,255,0.3)", backgroundColor: "rgba(51,195,255,0.08)" }}
          >
            Behind the Scenes
          </span>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl" style={{ color: "var(--text-primary)" }}>
            See{" "}
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #33C3FF, #EA33FF)" }}
            >
              Ram Bhaji in Action
            </span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <VideoSection
            thumbnail="https://images.unsplash.com/photo-1590779033100-9f52a70ba5a1?w=800&q=80"
            videoSrc=""
            title="From Farm to Your Doorstep"
            className="h-64 md:h-80"
          />
          <div className="grid grid-cols-2 gap-3">
            {galleryImages.slice(0, 4).map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                style={{ backgroundColor: "var(--bg-card)" }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-28 w-full object-cover transition-transform duration-500 hover:scale-110 md:h-36"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <GallerySection images={galleryImages} columns={3} />
        </div>
      </SectionWrapper>

      {/* ───── WHAT MAKES US DIFFERENT ───── */}
      <SectionWrapper id="about-different">
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#EA33FF", border: "1px solid rgba(234,51,255,0.3)", backgroundColor: "rgba(234,51,255,0.08)" }}
          >
            The Difference
          </span>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl" style={{ color: "var(--text-primary)" }}>
            What Makes{" "}
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #33C3FF, #EA33FF)" }}
            >
              Ram Bhaji Different
            </span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: TreePine,
              title: "Alkaline-Wash Technology",
              desc: "Every vegetable passes through our proprietary alkaline wash process, removing 99% of surface pesticides and contaminants before it reaches you.",
              color: "#33C3FF",
            },
            {
              icon: Shield,
              title: "Zero-Compromise Quality",
              desc: "Our central sorting unit grades every piece. Damaged or sub-standard produce never leaves our facility. Zero return-risk for our franchisees.",
              color: "#EA33FF",
            },
            {
              icon: Users,
              title: "Franchise-First Support",
              desc: "Dedicated franchise manager, ready-to-use marketing playbook, real-time tech dashboard, and same-day replacement policy. We succeed when you do.",
              color: "#3342FF",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-color)" }}
              >
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full opacity-10 blur-2xl"
                  style={{ backgroundColor: item.color }}
                />
                <div className="mb-4 inline-flex rounded-xl p-3"
                  style={{ backgroundColor: `${item.color}18` }}
                >
                  <Icon size={24} style={{ color: item.color }} />
                </div>
                <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&q=80"
            alt="Fresh vegetable sorting"
            className="h-48 w-full object-cover md:h-64"
            draggable={false}
          />
        </div>
      </SectionWrapper>

      {/* ───── THE TEAM ───── */}
      <SectionWrapper id="about-team" pink>
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#EA33FF", border: "1px solid rgba(234,51,255,0.3)", backgroundColor: "rgba(234,51,255,0.08)" }}
          >
            The People
          </span>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl" style={{ color: "var(--text-primary)" }}>
            Meet the{" "}
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #EA33FF, #3342FF)" }}
            >
              Team Behind Ram Bhaji
            </span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Rahul Sharma",
              role: "Founder & CEO",
              bio: "With 10+ years in agri-supply chain, Rahul saw the gap between farm quality and home delivery. He built Ram Bhaji to close it.",
              initials: "RS",
              color: "#33C3FF",
            },
            {
              name: "Priya Verma",
              role: "Head of Operations",
              bio: "Priya ensures every vegetable that leaves our sorting unit meets our strict quality standards. She trained every franchise partner personally.",
              initials: "PV",
              color: "#EA33FF",
            },
            {
              name: "Amit Patel",
              role: "Franchise Relations",
              bio: "Amit is the bridge between Ram Bhaji and our franchise network. He ensures every partner gets the support they need to grow.",
              initials: "AP",
              color: "#3342FF",
            },
          ].map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-color)" }}
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full text-2xl font-bold text-white"
                style={{ background: `linear-gradient(135deg, ${member.color}, #3342FF)` }}
              >
                {member.initials}
              </div>
              <h3 className="mt-4 text-lg font-semibold" style={{ color: "var(--text-primary)" }}>{member.name}</h3>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider" style={{ color: member.color }}>{member.role}</div>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{member.bio}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ───── SOCIAL PROOF ───── */}
      <SectionWrapper>
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#33C3FF", border: "1px solid rgba(51,195,255,0.3)", backgroundColor: "rgba(51,195,255,0.08)" }}
          >
            Proof
          </span>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl" style={{ color: "var(--text-primary)" }}>
            Trusted by{" "}
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #33C3FF, #EA33FF)" }}
            >
              Hundreds of Families
            </span>
          </h2>
        </div>

        <div className="rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
          style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-color)" }}
        >
          <div className="flex flex-wrap items-center justify-center gap-12">
            <div className="text-center">
              <div className="text-4xl font-bold" style={{ color: "#33C3FF" }}>500+</div>
              <div className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>Daily Homes Served</div>
            </div>
            <div className="h-12 w-px" style={{ backgroundColor: "var(--border-color)" }} />
            <div className="text-center">
              <div className="text-4xl font-bold" style={{ color: "#EA33FF" }}>98%</div>
              <div className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>On-Time Delivery</div>
            </div>
            <div className="h-12 w-px" style={{ backgroundColor: "var(--border-color)" }} />
            <div className="text-center">
              <div className="text-4xl font-bold" style={{ color: "#3342FF" }}>15+</div>
              <div className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>Zones in Bhopal</div>
            </div>
            <div className="h-12 w-px" style={{ backgroundColor: "var(--border-color)" }} />
            <div className="text-center">
              <div className="text-4xl font-bold" style={{ color: "#33C3FF" }}>4.8★</div>
              <div className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>Customer Rating</div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
          style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-color)" }}
        >
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="shrink-0">
              <Quote size={28} style={{ color: "#EA33FF", opacity: 0.4 }} />
            </div>
            <div>
              <p className="text-base leading-relaxed italic" style={{ color: "var(--text-primary)" }}>
                "I was skeptical about starting a vegetable franchise. But Ram Bhaji's team was with
                me every step of the way — from training to the first delivery. Now I serve 80+
                families in my colony and earn a consistent monthly income. Best decision I ever made."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #33C3FF, #EA33FF)" }}
                >
                  SK
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Sunil Kumar</div>
                  <div className="text-xs" style={{ color: "var(--text-secondary)" }}>Franchise Partner, Kolar Road</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ───── FRANCHISE OPPORTUNITY RECAP ───── */}
      <SectionWrapper id="about-opportunity" pink>
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#33C3FF", border: "1px solid rgba(51,195,255,0.3)", backgroundColor: "rgba(51,195,255,0.08)" }}
          >
            Opportunity
          </span>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl" style={{ color: "var(--text-primary)" }}>
            Why Partner{" "}
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #33C3FF, #3342FF)" }}
            >
              With Us?
            </span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "₹2-5 Lakhs", label: "Low Entry Investment", color: "#33C3FF" },
            { value: "20-25%", label: "Profit Margin Per Order", color: "#EA33FF" },
            { value: "15 Days", label: "Comprehensive Training", color: "#3342FF" },
            { value: "24/7", label: "HQ Support & Dashboard", color: "#33C3FF" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border p-5 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-color)" }}
            >
              <div className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
              <div className="mt-1 text-xs" style={{ color: "var(--text-secondary)" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ───── FINAL CTA ───── */}
      <SectionWrapper id="about-cta">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#EA33FF", border: "1px solid rgba(234,51,255,0.3)", backgroundColor: "rgba(234,51,255,0.08)" }}
          >
            Next Step
          </span>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl" style={{ color: "var(--text-primary)" }}>
            Ready to Partner{" "}
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #33C3FF, #EA33FF)" }}
            >
              With Us?
            </span>
          </h2>
          <p className="mt-4 text-lg" style={{ color: "var(--text-secondary)" }}>
            Join the Ram Bhaji family. Low investment, high margins, and a team that's invested in your success.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => onNavigate("franchise")}
              className="group flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold text-white shadow-xl"
              style={{ background: "linear-gradient(135deg, #3342FF, #EA33FF)" }}
            >
              Apply for Franchise
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => onNavigate("franchise")}
              className="rounded-full border-2 px-8 py-3.5 text-base font-semibold"
              style={{ borderColor: "#33C3FF", color: "#33C3FF" }}
            >
              View Full Details
            </button>
          </div>
        </div>
      </SectionWrapper>

      <Footer onNavigate={onNavigate} page="about" />
    </main>
  );
}

function TargetIcon({ size, style: styleProp }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={styleProp}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function HeartIcon({ size, style: styleProp }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={styleProp}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
