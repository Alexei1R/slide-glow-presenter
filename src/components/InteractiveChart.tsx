
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
  Area,
  AreaChart
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

interface InteractiveChartProps {
  type: "bar" | "pie" | "line" | "area";
  data: any[];
  className?: string;
  config?: any;
  height?: number;
}

const InteractiveChart: React.FC<InteractiveChartProps> = ({ 
  type, 
  data, 
  className,
  config = {},
  height = 250
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const COLORS = ['#8B5CF6', '#EC4899', '#10B981', '#3B82F6', '#F59E0B', '#EF4444'];
  
  const chartConfig = {
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

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const renderChart = () => {
    switch (type) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" fontSize={10} />
              <YAxis stroke="rgba(255,255,255,0.5)" fontSize={10} />
              <ChartTooltip content={<ChartTooltipContent />} />
              {Object.keys(config).map((key, index) => (
                <Bar 
                  key={key} 
                  dataKey={key} 
                  fill={COLORS[index % COLORS.length]} 
                  radius={[4, 4, 0, 0]} 
                  className="hover:opacity-80 transition-opacity cursor-pointer" 
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        );
      
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={1}
                dataKey="value"
                onMouseEnter={onPieEnter}
                className="hover:opacity-90 transition-opacity cursor-pointer"
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]} 
                    stroke="rgba(0,0,0,0.2)" 
                    className={`transition-all duration-300 ${activeIndex === index ? 'opacity-100 scale-105' : 'opacity-80'}`}
                  />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend 
                verticalAlign="bottom" 
                height={36} 
                formatter={(value) => <span className="text-xs text-gray-300">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        );
        
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" fontSize={10} />
              <YAxis stroke="rgba(255,255,255,0.5)" fontSize={10} />
              <ChartTooltip content={<ChartTooltipContent />} />
              {Object.keys(config).map((key, index) => (
                <Line 
                  key={key} 
                  type="monotone" 
                  dataKey={key} 
                  stroke={COLORS[index % COLORS.length]} 
                  strokeWidth={2} 
                  dot={{ r: 3 }} 
                  activeDot={{ r: 5, className: "animate-pulse" }} 
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                />
              ))}
              <Legend 
                verticalAlign="bottom" 
                height={36}
                formatter={(value) => <span className="text-xs text-gray-300">{value}</span>}
              />
            </LineChart>
          </ResponsiveContainer>
        );
        
      case 'area':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <AreaChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" fontSize={10} />
              <YAxis stroke="rgba(255,255,255,0.5)" fontSize={10} />
              <ChartTooltip content={<ChartTooltipContent />} />
              {Object.keys(config).map((key, index) => (
                <Area 
                  key={key} 
                  type="monotone" 
                  dataKey={key} 
                  fill={`${COLORS[index % COLORS.length]}40`} 
                  stroke={COLORS[index % COLORS.length]} 
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                />
              ))}
              <Legend 
                verticalAlign="bottom" 
                height={36}
                formatter={(value) => <span className="text-xs text-gray-300">{value}</span>}
              />
            </AreaChart>
          </ResponsiveContainer>
        );
        
      default:
        return <div>Chart type not supported</div>;
    }
  };

  return (
    <ChartContainer 
      config={chartConfig} 
      className={`bg-black/20 p-3 rounded-lg border border-white/10 ${className}`}
    >
      {renderChart()}
    </ChartContainer>
  );
};

export default InteractiveChart;
