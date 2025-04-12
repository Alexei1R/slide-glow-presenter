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

  // Function to navigate to a specific slide
  const navigateToSlide = (index: number) => {
    if (index >= 0 && index < slideIds.length) {
      setCurrentSlide(index);
      const element = document.getElementById(slideIds[index]);
      if (element) {
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
        
        window.scrollTo({
          top: middle,
          behavior: "smooth"
        });

        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        navigateToSlide(currentSlide - 1);
      } else if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();
        navigateToSlide(currentSlide + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, slideIds]);

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
      {/* Background blur elements */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="fixed top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-accent/3 blur-3xl translate-x-1/2" />
      <div className="fixed bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-purple-500/3 blur-3xl -translate-y-1/2" />
      
      {/* Light beams */}
      <div className="fixed top-0 left-1/4 w-1 h-[30vh] bg-gradient-to-b from-primary/20 to-transparent blur-sm"></div>
      <div className="fixed top-0 right-1/3 w-1 h-[20vh] bg-gradient-to-b from-accent/20 to-transparent blur-sm"></div>
      <div className="fixed top-0 left-2/3 w-1 h-[25vh] bg-gradient-to-b from-purple-500/20 to-transparent blur-sm"></div>
      
      <div className="w-[90%] mx-auto flex flex-col gap-8 relative z-10">
        {children}
      </div>
      
      <SlideNavigation
        totalSlides={slideIds.length}
        currentSlide={currentSlide}
        setCurrentSlide={navigateToSlide}
        slideIds={slideIds}
      />
    </div>
  );
};

export default PresentationLayout;
