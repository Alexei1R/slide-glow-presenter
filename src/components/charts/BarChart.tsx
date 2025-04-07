
import React from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import BaseChart, { BaseChartProps, COLORS } from "./BaseChart";

interface BarChartProps extends BaseChartProps {}

const BarChartComponent: React.FC<BarChartProps> = ({ data, config = {}, height = 250 }) => {
  return (
    <BaseChart height={height}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart
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
              name={config[key]}
              fill={COLORS[index % COLORS.length]} 
              radius={[4, 4, 0, 0]} 
              className="hover:opacity-80 transition-opacity cursor-pointer" 
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </BaseChart>
  );
};

export default BarChartComponent;
