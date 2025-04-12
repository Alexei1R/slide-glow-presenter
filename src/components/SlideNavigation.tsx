import React from "react";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface SlideNavigationProps {
  totalSlides: number;
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  slideIds: string[];
}

const SlideNavigation: React.FC<SlideNavigationProps> = ({
  totalSlides,
  currentSlide,
  setCurrentSlide,
  slideIds,
}) => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30 glass px-4 py-2 rounded-full flex items-center gap-4">
      <button
        onClick={() => setCurrentSlide(currentSlide - 1)}
        disabled={currentSlide === 0}
        className={cn(
          "p-2 rounded-full transition-all duration-300",
          currentSlide === 0 
            ? "opacity-30 cursor-not-allowed" 
            : "hover:bg-white/10"
        )}
        aria-label="Previous slide"
      >
        <ChevronLeft size={18} />
      </button>
      
      <button 
        className="p-2 rounded-full hover:bg-white/10 transition-all duration-300"
        aria-label="Show all slides"
      >
        <Menu size={18} />
      </button>
      
      <div className="text-sm font-medium">
        {currentSlide + 1} / {totalSlides}
      </div>
      
      <button
        onClick={() => setCurrentSlide(currentSlide + 1)}
        disabled={currentSlide === totalSlides - 1}
        className={cn(
          "p-2 rounded-full transition-all duration-300",
          currentSlide === totalSlides - 1 
            ? "opacity-30 cursor-not-allowed" 
            : "hover:bg-white/10"
        )}
        aria-label="Next slide"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default SlideNavigation;
