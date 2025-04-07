
import React, { useState, useEffect } from "react";
import SlideNavigation from "./SlideNavigation";

interface PresentationLayoutProps {
  children: React.ReactNode;
  slideIds: string[];
}

const PresentationLayout: React.FC<PresentationLayoutProps> = ({
  children,
  slideIds,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Detect which slide is in view
  useEffect(() => {
    const handleScroll = () => {
      for (let i = 0; i < slideIds.length; i++) {
        const element = document.getElementById(slideIds[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          const inView = rect.top >= 0 && rect.top <= window.innerHeight / 2;
          
          if (inView) {
            setCurrentSlide(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slideIds]);

  return (
    <div className="min-h-screen bg-background py-10 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="fixed top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl translate-x-1/2" />
      
      <div className="max-w-6xl mx-auto flex flex-col gap-8 relative z-10">
        {children}
      </div>
      
      <SlideNavigation
        totalSlides={slideIds.length}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        slideIds={slideIds}
      />
    </div>
  );
};

export default PresentationLayout;
