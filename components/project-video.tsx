"use client";

import { useEffect, useRef } from "react";

interface ProjectVideoProps {
  src: string;
  title: string;
  /** Loop forever (default). Pass false to get an `onEnded` callback. */
  loop?: boolean;
  onEnded?: () => void;
}

/** Muted preview that plays only while on screen. Native controls give fullscreen + sound. */
export default function ProjectVideo({ src, title, loop = true, onEnded }: ProjectVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.4 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={`${src}#t=0.1`}
      muted
      loop={loop}
      playsInline
      controls
      preload="metadata"
      onEnded={onEnded}
      onError={onEnded}
      aria-label={`${title} demo video`}
      className="absolute inset-0 w-full h-full object-cover bg-black"
    />
  );
}
