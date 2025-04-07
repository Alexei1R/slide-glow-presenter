
import React from "react";
import { cn } from "@/lib/utils";

interface LogoPlaceholderProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const LogoPlaceholder: React.FC<LogoPlaceholderProps> = ({
  className,
  size = "md",
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-14 h-14",
    lg: "w-20 h-20",
  };

  return (
    <div
      className={cn(
        "relative animate-float-subtle transition-all duration-300 hover:scale-105 group",
        sizeClasses[size],
        className
      )}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 opacity-40 blur-md group-hover:opacity-60 transition-opacity duration-300"></div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 animate-gradient-flow group-hover:from-primary/50 group-hover:to-accent/50 transition-colors duration-300"></div>
      <div className="absolute inset-2 rounded-full glass-lighter flex items-center justify-center text-white font-montserrat font-bold group-hover:bg-white/15 transition-colors duration-300">
        <span className="text-gradient group-hover:text-white transition-colors duration-300">S</span>
      </div>
    </div>
  );
};

export default LogoPlaceholder;
