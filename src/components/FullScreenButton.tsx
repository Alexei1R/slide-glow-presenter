import React, { useState, useEffect } from "react";
import { Maximize2, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";

const FullScreenButton: React.FC = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(document.fullscreenElement !== null);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <button
      onClick={toggleFullScreen}
      className={cn(
        "fixed top-4 right-4 z-50 p-2 rounded-full glass transition-all duration-300",
        "hover:bg-white/20 active:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/30"
      )}
      aria-label={isFullScreen ? "Exit fullscreen" : "Enter fullscreen"}
    >
      {isFullScreen ? (
        <Minimize2 size={20} className="text-white" />
      ) : (
        <Maximize2 size={20} className="text-white" />
      )}
    </button>
  );
};

export default FullScreenButton; 