import ImageCarousel from "./ImageCarousel";
import SectionWrapper from "./SectionWrapper";

// const galleryImages = [
//   { src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80", alt: "Farm-fresh produce", caption: "Local Sourcing — Partnering with Bhopal farmers" },
//   { src: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&q=80", alt: "Vegetable sorting", caption: "Zero-Waste Sorting — Quality grading at our unit" },
//   { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80", alt: "Logistics warehouse", caption: "Logistics Ready — Supply chain that works" },
//   { src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80", alt: "Investment", caption: "Transparent Investment — ₹2-5 Lakhs" },
//   { src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80", alt: "Profit chart", caption: "Profit Margin — 20-25% on every delivery" },
//   { src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80", alt: "Agreement signing", caption: "Simple 5-page agreement in Hindi/English" },
//   { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80", alt: "Training session", caption: "3-Day Training — App, ops & compliance" },
//   { src: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200&q=80", alt: "Launch celebration", caption: "Grand Launch — Marketing support included" },
//   { src: "https://images.unsplash.com/photo-1552581234-26160f608093?w=1200&q=80", alt: "Customer service", caption: "Passion for Service — Build community relationships" },
//   { src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80", alt: "Mobile app", caption: "Ram Bhaji App — Manage everything from your phone" },
// ];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
    alt: "Farm-fresh produce",
    title: "Local Sourcing",
    subtitle: "Partnering with Bhopal farmers",
    caption:
      "Fresh produce sourced directly from trusted local farmers and delivered through a reliable supply network.",
  },
  {
    src: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&q=80",
    alt: "Vegetable sorting",
    title: "Zero-Waste Sorting",
    subtitle: "Quality grading at our unit",
    caption:
      "Every product is carefully inspected, sorted and prepared before it reaches customers.",
  },
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
    alt: "Logistics warehouse",
    title: "Logistics Ready",
    subtitle: "A supply chain that works",
    caption:
      "Our operational system supports inventory movement, fulfilment and timely deliveries.",
  },
  {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    alt: "Investment",
    title: "Transparent Investment",
    subtitle: "Investment from ₹2–5 lakhs",
    caption:
      "Clear investment requirements with transparent onboarding and operational support.",
  },
  {
    src: "https://images.unsplash.com/photo-1565373679107-344d38dbf734?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHJvZml0cyUyMGluZGlhfGVufDB8fDB8fHww",
    alt: "Profit chart",
    title: "Strong Profit Margin",
    subtitle: "20–25% on every delivery",
    caption:
      "A scalable franchise model designed to provide competitive margins on fulfilment.",
  },
  {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    alt: "Agreement signing",
    title: "Simple Agreement",
    subtitle: "Available in Hindi and English",
    caption:
      "A straightforward five-page agreement designed to make onboarding simple.",
  },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80",
    alt: "Training session",
    title: "Three-Day Training",
    subtitle: "Application, operations and compliance",
    caption:
      "Learn the application, daily operations, fulfilment process and compliance requirements.",
  },
  {
    src: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200&q=80",
    alt: "Launch celebration",
    title: "Grand Launch",
    subtitle: "Marketing support included",
    caption:
      "Get assistance with your franchise launch, local promotions and initial marketing.",
  },
  {
    src: "https://images.unsplash.com/photo-1552581234-26160f608093?w=1200&q=80",
    alt: "Customer service",
    title: "Passion for Service",
    subtitle: "Build strong community relationships",
    caption:
      "Deliver dependable service and build lasting relationships with local customers.",
  },
  {
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
    alt: "Mobile app",
    title: "Ram Bhaji Application",
    subtitle: "Manage everything from your phone",
    caption:
      "Control orders, inventory, deliveries and daily franchise operations from one application.",
  },
];
export default function FranchiseGallery() {
  return (
    <SectionWrapper id="gallery" pink>
      <div className="mb-10 text-center">
        <span
          className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
          style={{
            color: "#33C3FF",
            border: "1px solid rgba(51, 195, 255, 0.3)",
            backgroundColor: "rgba(51, 195, 255, 0.08)",
          }}
        >
          A Visual Tour
        </span>
        <h2
          className="mt-4 text-3xl font-bold md:text-4xl"
          style={{ color: "#33C3FF" }}
        >
          See the{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #33C3FF, #EA33FF)",
            }}
          >
            Ram Bhaji Journey
          </span>
        </h2>
      </div>

      <ImageCarousel
        images={galleryImages}
        autoPlayInterval={4500}
        heightClass="h-80 md:h-[28rem]"
      />
    </SectionWrapper>
  );
}
