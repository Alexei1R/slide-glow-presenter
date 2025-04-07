
import React, { useState } from "react";
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend
} from "recharts";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import BaseChart, { BaseChartProps, COLORS } from "./BaseChart";

interface PieChartProps extends BaseChartProps {}

const PieChartComponent: React.FC<PieChartProps> = ({ data, config = {}, height = 250 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  return (
    <BaseChart height={height}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={1}
            dataKey="value"
            nameKey="name"
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
          <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
          <Legend 
            verticalAlign="bottom" 
            height={36} 
            formatter={(value) => <span className="text-xs text-gray-300">{value}</span>}
          />
        </RechartsPieChart>
      </ResponsiveContainer>
    </BaseChart>
  );
};

export default PieChartComponent;
