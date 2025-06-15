
import React, { useEffect, useRef } from "react";

type PreloaderModalProps = {
  videoUrl: string;
  onFinish: () => void;
};

export default function PreloaderModal({ videoUrl, onFinish }: PreloaderModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleEnded = () => {
      onFinish();
    };
    const video = videoRef.current;

    if (video) {
      video.play().catch(() => {}); // Try autoplay, ignore errors for browser restrictions
      video.addEventListener("ended", handleEnded);
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", handleEnded);
      }
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[1000] bg-black flex items-center justify-center animate-fade-in">
      <video
        ref={videoRef}
        src={videoUrl}
        autoPlay
        playsInline
        onEnded={onFinish}
        className="w-full h-full object-contain"
        controls={false}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
