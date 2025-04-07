
import React from "react";
import { cn } from "@/lib/utils";

interface SlideProps {
  children: React.ReactNode;
  className?: string;
  id: string;
  variant?: "default" | "center" | "split";
  accentColor?: "blue" | "orange" | "purple" | "green";
}

const Slide = ({
  children,
  className,
  id,
  variant = "default",
  accentColor = "blue",
}: SlideProps) => {
  const accentColors = {
    blue: "from-primary/20 to-primary/5",
    orange: "from-accent/20 to-accent/5",
    purple: "from-purple-500/20 to-purple-500/5",
    green: "from-green-500/20 to-green-500/5",
  };
  
  return (
    <div
      id={id}
      className={cn(
        "slide-container grid-bg bg-dot",
        "shadow-lg rounded-lg p-5 md:p-7",
        "bg-gradient-to-br animate-subtle-pulse backdrop-blur-lg",
        `animate-fade-in ${accentColors[accentColor]}`,
        {
          "flex items-center justify-center": variant === "center",
          "grid md:grid-cols-2 gap-5": variant === "split",
          "block": variant === "default",
        },
        className
      )}
    >
      <div className="absolute -z-10 inset-0 opacity-30 overflow-hidden rounded-lg">
        {/* Light beams in the background */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      {/* Glass border effect */}
      <div className="absolute -z-5 inset-0 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-10 bg-white/5 transition-opacity duration-700 ease-in-out pointer-events-none"></div>
      
      {children}
    </div>
  );
};

export default Slide;
