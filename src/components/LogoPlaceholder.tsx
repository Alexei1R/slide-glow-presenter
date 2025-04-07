
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
    sm: "w-12 h-12",
    md: "w-20 h-20",
    lg: "w-32 h-32",
  };

  return (
    <div
      className={cn(
        "relative animate-float",
        sizeClasses[size],
        className
      )}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-50 blur-md" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent animate-gradient-flow" />
      <div className="absolute inset-2 rounded-full glass flex items-center justify-center text-white font-montserrat font-bold">
        <span className="text-gradient">S</span>
      </div>
    </div>
  );
};

export default LogoPlaceholder;
