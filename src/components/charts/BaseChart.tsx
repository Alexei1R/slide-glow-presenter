
import React from "react";
import { ChartContainer } from "@/components/ui/chart";

export interface BaseChartProps {
  data: any[];
  className?: string;
  config?: any;
  height?: number;
}

export const chartConfig = {
  primary: {
    label: "Primary",
    theme: {
      dark: "#8B5CF6",
      light: "#8B5CF6",
    },
  },
  secondary: {
    label: "Secondary",
    theme: {
      dark: "#EC4899",
      light: "#EC4899",
    },
  },
  success: {
    label: "Success",
    theme: {
      dark: "#10B981",
      light: "#10B981",
    },
  },
  info: {
    label: "Info",
    theme: {
      dark: "#3B82F6",
      light: "#3B82F6",
    },
  },
  warning: {
    label: "Warning",
    theme: {
      dark: "#F59E0B",
      light: "#F59E0B",
    },
  },
  error: {
    label: "Error",
    theme: {
      dark: "#EF4444",
      light: "#EF4444",
    },
  },
};

export const COLORS = ['#8B5CF6', '#EC4899', '#10B981', '#3B82F6', '#F59E0B', '#EF4444'];

const BaseChart: React.FC<React.PropsWithChildren<BaseChartProps>> = ({ 
  children,
  className,
  height = 250 
}) => {
  return (
    <ChartContainer 
      config={chartConfig} 
      className={`bg-black/20 p-3 rounded-lg border border-white/10 ${className}`}
    >
      {children}
    </ChartContainer>
  );
};

export default BaseChart;
