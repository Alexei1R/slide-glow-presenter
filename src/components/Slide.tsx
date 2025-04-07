
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
    blue: "from-primary/15 to-primary/5",
    orange: "from-accent/15 to-accent/5",
    purple: "from-purple-500/15 to-purple-500/5",
    green: "from-green-500/15 to-green-500/5",
  };
  
  return (
    <div
      id={id}
      className={cn(
        "slide-container grid-bg bg-dot",
        "shadow-lg rounded-lg p-5 md:p-7",
        "bg-gradient-to-br animate-subtle-pulse",
        `animate-fade-in backdrop-blur-lg ${accentColors[accentColor]}`,
        {
          "flex items-center justify-center": variant === "center",
          "grid md:grid-cols-2 gap-5": variant === "split",
          "block": variant === "default",
        },
        className
      )}
    >
      <div className="absolute -z-10 inset-0 opacity-20 overflow-hidden rounded-lg">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      {children}
    </div>
  );
};

export default Slide;
