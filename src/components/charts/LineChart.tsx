
import React from "react";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import BaseChart, { BaseChartProps, COLORS } from "./BaseChart";

interface LineChartProps extends BaseChartProps {}

const LineChartComponent: React.FC<LineChartProps> = ({ data, config = {}, height = 250 }) => {
  return (
    <BaseChart height={height}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsLineChart
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
              name={config[key]}
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
        </RechartsLineChart>
      </ResponsiveContainer>
    </BaseChart>
  );
};

export default LineChartComponent;
