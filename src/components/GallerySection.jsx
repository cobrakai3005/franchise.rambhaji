import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Grid3X3 } from "lucide-react";

export default function GallerySection({
  images,
  columns = 3,
  className = "",
}) {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const open = (i) => setLightboxIdx(i);
  const close = () => setLightboxIdx(null);
  const next = () => setLightboxIdx((i) => (i + 1) % images.length);
  const prev = () => setLightboxIdx((i) => (i - 1 + images.length) % images.length);

  return (
    <>
      <div
        className={`grid gap-3 md:gap-4 ${className}`}
        style={{
          gridTemplateColumns: `repeat(${Math.min(columns, images.length)}, 1fr)`,
        }}
      >
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => open(i)}
            className="group relative aspect-square overflow-hidden rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            style={{ backgroundColor: "var(--bg-card)" }}
          >
            <img
              src={img.src}
              alt={img.alt || ""}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              draggable={false}
            />
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            <div className="absolute bottom-2 right-2 rounded-full bg-black/40 p-1.5 opacity-0 transition-opacity group-hover:opacity-100">
              <Grid3X3 size={14} className="text-white" />
            </div>
          </button>
        ))}
      </div>

      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/40"
          >
            <X size={22} />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur transition-colors hover:bg-white/40"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur transition-colors hover:bg-white/40"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          <div
            className="relative flex max-h-[85vh] max-w-4xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightboxIdx].src}
              alt={images[lightboxIdx].alt || ""}
              className="max-h-[85vh] w-auto rounded-2xl object-contain shadow-2xl"
            />
            {images[lightboxIdx].caption && (
              <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-gradient-to-t from-black/60 to-transparent p-4 pt-12">
                <p className="text-sm text-white">{images[lightboxIdx].caption}</p>
              </div>
            )}
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1.5 text-xs text-white/80 backdrop-blur">
            {lightboxIdx + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
