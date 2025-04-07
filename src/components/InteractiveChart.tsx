
import React from "react";
import BarChartComponent from "./charts/BarChart";
import PieChartComponent from "./charts/PieChart";
import LineChartComponent from "./charts/LineChart";
import AreaChartComponent from "./charts/AreaChart";

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
  const renderChart = () => {
    switch (type) {
      case 'bar':
        return <BarChartComponent data={data} config={config} height={height} />;
      case 'pie':
        return <PieChartComponent data={data} config={config} height={height} />;
      case 'line':
        return <LineChartComponent data={data} config={config} height={height} />;
      case 'area':
        return <AreaChartComponent data={data} config={config} height={height} />;
      default:
        return <div>Chart type not supported</div>;
    }
  };

  return (
    <div className={className}>
      {renderChart()}
    </div>
  );
};

export default InteractiveChart;
