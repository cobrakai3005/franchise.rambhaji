
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel({
  images = [],
  autoPlayInterval = 4500,
  className = "",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const totalImages = images.length;

  const next = useCallback(() => {
    if (totalImages <= 1) return;

    setCurrentIndex((current) => (current + 1) % totalImages);
  }, [totalImages]);

  const previous = useCallback(() => {
    if (totalImages <= 1) return;

    setCurrentIndex((current) => (current - 1 + totalImages) % totalImages);
  }, [totalImages]);

  useEffect(() => {
    if (paused || totalImages <= 1) return;

    const interval = setInterval(next, autoPlayInterval);

    return () => clearInterval(interval);
  }, [paused, next, autoPlayInterval, totalImages]);

  if (!totalImages) return null;

  const currentSlide = images[currentIndex];

  // Returns an image based on its position around the current image
  const getImageByOffset = (offset) => {
    const index = (currentIndex + offset + totalImages) % totalImages;
    return images[index];
  };

  return (
    <section
      className={`relative overflow-hidden bg-[#BD65AE]/60 rounded-[100px] px-5 py-16 md:px-10 lg:px-16 ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto grid min-h-[500px] max-w-6xl items-center gap-14 lg:grid-cols-2">
        {/* Left image stack */}
        <div className="relative flex min-h-[390px] items-center justify-center">
          <div className="relative h-[330px] w-[260px] sm:h-[390px] sm:w-[310px]">
            {/* Back image */}
            <div className="absolute inset-0 -translate-x-10 -rotate-[12deg] overflow-hidden rounded-[22px] border border-white/20 opacity-60 shadow-2xl transition-all duration-500">
              <img
                src={getImageByOffset(-2).src}
                alt=""
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>

            {/* Middle-left image */}
            <div className="absolute inset-0 -translate-x-5 -rotate-[6deg] overflow-hidden rounded-[22px] border border-white/20 opacity-80 shadow-2xl transition-all duration-500">
              <img
                src={getImageByOffset(-1).src}
                alt=""
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>

            {/* Right back image */}
            <div className="absolute inset-0 translate-x-7 rotate-[8deg] overflow-hidden rounded-[22px] border border-white/20 opacity-75 shadow-2xl transition-all duration-500">
              <img
                src={getImageByOffset(1).src}
                alt=""
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>

            {/* Current image */}
            <div
              key={currentIndex}
              className="absolute inset-0 z-20 overflow-hidden rounded-[22px] border border-white/30 bg-zinc-900 shadow-[0_25px_60px_rgba(0,0,0,0.55)] transition-all duration-500"
            >
              <img
                src={currentSlide.src}
                alt={currentSlide.alt || ""}
                className="h-full w-full object-cover"
                draggable={false}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/5" />
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="relative z-30">
          <p className="mb-5 font-mono text-lg tracking-widest text-white/60">
            {String(currentIndex + 1).padStart(2, "0")}
            <span className="mx-1 text-white/30">/</span>
            {String(totalImages).padStart(2, "0")}
          </p>

          <div key={`content-${currentIndex}`}>
            <h2 className="max-w-lg text-3xl font-bold leading-tight text-white md:text-4xl">
              {currentSlide.title || currentSlide.alt}
            </h2>

            {currentSlide.subtitle && (
              <p className="mt-5 text-lg italic text-white/55">
                {currentSlide.subtitle}
              </p>
            )}

            {currentSlide.caption && (
              <p className="mt-5 max-w-lg text-base leading-7 text-white">
                {currentSlide.caption}
              </p>
            )}
          </div>

          {totalImages > 1 && (
            <div className="mt-10 flex items-center justify-center sm:justify-start gap-5">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous slide"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-white/[0.06] text-white transition-all duration-300 hover:scale-105 hover:bg-white/[0.12]"
              >
                <ChevronLeft size={32} strokeWidth={1.6} />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next slide"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25204f] text-[#9298ff] transition-all duration-300 hover:scale-105 hover:bg-[#312a68]"
              >
                <ChevronRight size={32} strokeWidth={1.6} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-800/10 blur-[120px]" />
    </section>
  );
}
