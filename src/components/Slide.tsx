
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
    blue: "from-primary/30 to-primary/10",
    orange: "from-accent/30 to-accent/10",
    purple: "from-purple-500/30 to-purple-500/10",
    green: "from-green-500/30 to-green-500/10",
  };
  
  return (
    <div
      id={id}
      className={cn(
        "slide-container glass grid-bg bg-dot",
        "shadow-lg rounded-lg p-6 md:p-10",
        `bg-gradient-to-br ${accentColors[accentColor]}`,
        {
          "flex items-center justify-center": variant === "center",
          "grid md:grid-cols-2 gap-6": variant === "split",
          "block": variant === "default",
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Slide;
