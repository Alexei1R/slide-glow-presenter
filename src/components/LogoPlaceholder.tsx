
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
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  return (
    <div
      className={cn(
        "relative animate-float-subtle",
        sizeClasses[size],
        className
      )}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 opacity-40 blur-md" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 animate-gradient-flow" />
      <div className="absolute inset-2 rounded-full glass-lighter flex items-center justify-center text-white font-montserrat font-bold">
        <span className="text-gradient">S</span>
      </div>
    </div>
  );
};

export default LogoPlaceholder;
