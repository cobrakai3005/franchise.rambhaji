import { useState } from "react";

import { ChevronDown } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const faqs = [
  {
    q: "Can I run this part-time?",
    a: "Yes, you can operate part-time if you hire a reliable delivery partner. Many of our franchisees start this way and scale up as demand grows.",
  },
  {
    q: "What if vegetables get damaged?",
    a: "We have a return/replacement policy for unsold, damaged stock within 24 hours. You won't bear the loss for quality issues from our end.",
  },
  {
    q: "Do I need a commercial shop?",
    a: "No, a home-based storage space of 1200 sq ft works perfectly. You don't need a storefront — just clean, organized space for daily inventory.",
  },
  {
    q: "How much can I earn per month?",
    a: "With 20-25% margins on daily orders, franchisees typically earn between ₹30,000 to ₹1,00,000+ per month depending on order volume in their zone.",
  },
  {
    q: "Is there any royalty fee?",
    a: "No hidden royalties. Your investment covers everything — training, app access, marketing materials, and daily supply. What you earn is yours.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <SectionWrapper id="faq" >
      <div className="mb-14 text-center">
        <span
          className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
          style={{
            color: "#33C3FF",
            border: "1px solid rgba(51, 195, 255, 0.3)",
            backgroundColor: "rgba(51, 195, 255, 0.08)",
          }}
        >
          Got Questions?
        </span>
        <h2 className="mt-4 text-3xl font-bold md:text-4xl" style={{ color: "#33C3FF" }}>
          Frequently Asked{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #33C3FF, #EA33FF)" }}>Questions</span>
        </h2>
      </div>

      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIdx === i;
          return (
            <div
              key={i}
              className="rounded-2xl border overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-color)",
              }}
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                style={{ color: "var(--text-primary)" }}
              >
                <span className="font-medium">{faq.q}</span>
                <div
                  className="shrink-0 ml-3"
                  style={{ color: "#33C3FF" }}
                >
                  <ChevronDown size={20} />
                </div>
              </button>
              {isOpen && (
                <div className="overflow-hidden">
                  <div
                    className="px-6 pb-5 pt-0 text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {faq.a}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
