import { useState } from "react";
import { Play, X } from "lucide-react";

export default function VideoSection({
  thumbnail,
  videoSrc,
  title = "Watch Our Story",
  className = "",
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <div
        className={`group relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${className}`}
        onClick={() => setPlaying(true)}
        style={{ backgroundColor: "var(--bg-card)" }}
      >
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-xl backdrop-blur-sm transition-colors group-hover:bg-white">
            <Play size={28} className="ml-1 text-[#3342FF]" />
          </div>
        </div>
        {title && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="text-sm font-semibold text-white drop-shadow-lg">{title}</div>
          </div>
        )}
      </div>

      {playing && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setPlaying(false)}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/40"
            onClick={() => setPlaying(false)}
          >
            <X size={22} />
          </button>
          <div
            className="w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative pt-[56.25%]">
              {videoSrc ? (
                <iframe
                  src={videoSrc + "?autoplay=1"}
                  title={title}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-black">
                  <p className="text-sm text-white/60">Video placeholder — add your URL</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
