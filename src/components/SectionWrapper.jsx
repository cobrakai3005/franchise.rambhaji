export default function SectionWrapper({
  id,
  children,
  className = "",
  pink = false,
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden px-4 py-20 md:py-28 scroll-mt-20 transition-colors duration-300 ${
        pink ? "section-sherise-pink" : "section-sherise-white"
      } ${className}`}
    >
      <div className="relative z-10 mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
