
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
    <div className="fixed inset-0 z-[1000] bg-black flex items-center justify-center animate-fade-in m-0 p-0 h-screen w-screen">
      <video
        ref={videoRef}
        src={videoUrl}
        autoPlay
        playsInline
        onEnded={onFinish}
        className="w-screen h-screen object-contain bg-black m-0 p-0"
        controls={false}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
