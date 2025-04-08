import React, { useState, useCallback } from 'react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis,
  Cell,
  Tooltip
} from 'recharts';

//NOTE: Consistent layout spacing
const SPACING = {
  container: 'p-8',
  header: 'mb-8',
  chart: 'mb-8',
  gap: 'gap-8',
  card: 'p-6',
} as const;

const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1'];

const problemData = [
  { name: 'Problema 1', value: 87 },
  { name: 'Problema 2', value: 72 },
  { name: 'Problema 3', value: 93 },
];

const problemDetailData = [
  { name: '18-24', problem1: 92, problem2: 78, problem3: 95 },
  { name: '25-34', problem1: 89, problem2: 74, problem3: 94 },
  { name: '35-44', problem1: 85, problem2: 65, problem3: 91 },
  { name: '45-54', problem1: 75, problem2: 70, problem3: 88 },
  { name: '55+', problem1: 72, problem2: 55, problem3: 84 },
];

interface ChartProps {
  className?: string;
}

const ProblemValidationChart: React.FC<ChartProps> = ({ className }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const renderSimpleChart = () => (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={problemData}
        layout="vertical"
        barSize={50}
        margin={{ top: 20, right: 20, bottom: 20, left: 100 }}
      >
        <XAxis type="number" domain={[0, 100]} />
        <YAxis 
          type="category" 
          dataKey="name" 
          tick={{ fill: '#fff' }}
          axisLine={{ stroke: '#ffffff30' }}
        />
        <Tooltip
          cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
          contentStyle={{ 
            background: 'rgba(0, 0, 0, 0.8)', 
            border: 'none',
            borderRadius: '8px',
            padding: SPACING.card 
          }}
          formatter={(value) => [`${value}%`]}
        />
        <Bar
          dataKey="value"
          animationDuration={1000}
          onMouseEnter={(_, index) => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(-1)}
        >
          {problemData.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index]}
              style={{
                filter: activeIndex === index ? 'brightness(1.2)' : 'none',
                transition: 'filter 0.3s ease',
              }}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );

  const renderDetailChart = () => (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart 
        data={problemDetailData}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <XAxis 
          dataKey="name" 
          tick={{ fill: '#fff' }}
          axisLine={{ stroke: '#ffffff30' }}
        />
        <YAxis 
          domain={[0, 100]}
          tick={{ fill: '#fff' }}
          axisLine={{ stroke: '#ffffff30' }}
        />
        <Tooltip
          cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
          contentStyle={{ 
            background: 'rgba(0, 0, 0, 0.8)', 
            border: 'none',
            borderRadius: '8px',
            padding: SPACING.card 
          }}
          formatter={(value) => [`${value}%`]}
        />
        {['problem1', 'problem2', 'problem3'].map((key, index) => (
          <Bar
            key={key}
            dataKey={key}
            fill={COLORS[index]}
            barSize={30}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(-1)}
            style={{
              filter: activeIndex === index ? 'brightness(1.2)' : 'none',
              transition: 'filter 0.3s ease',
            }}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );

  const renderStatCard = (data: { name: string, value: number }, index: number) => (
    <div
      key={data.name}
      className={`
        rounded-xl transition-all duration-300
        ${SPACING.card}
        ${activeIndex === index ? 'bg-black/50 ring-2 ring-white/20' : 'bg-black/30 hover:bg-black/40'}
      `}
      onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(-1)}
    >
      <div className="flex flex-col h-full justify-between">
        <div className="text-2xl font-bold mb-3" style={{ color: COLORS[index] }}>
          {data.value}%
        </div>
        <div className="text-sm text-gray-200">
          {`au confirmat ${data.name.toLowerCase()}`}
        </div>
      </div>
    </div>
  );

  return (
    <div className={`bg-black/40 border-white/20 rounded-xl ${SPACING.container} ${className}`}>
      <div className={`flex items-center justify-between ${SPACING.header}`}>
        <h2 className="text-lg font-semibold text-white/90">
          Validare Probleme
        </h2>
        <div className="flex items-center gap-8">
          <span className="text-sm text-gray-300">
            Sondaj cu 100+ respondenți
          </span>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className={`
              px-6 py-2.5 text-sm font-medium rounded-lg
              transition-all duration-300
              bg-white/10 text-white/80
              hover:bg-white/20 hover:text-white
              active:transform active:scale-95
            `}
          >
            {showDetails ? "Vizualizare simplă" : "Detalii demografice"}
          </button>
        </div>
      </div>

      <div className={SPACING.chart}>
        {showDetails ? renderDetailChart() : renderSimpleChart()}
      </div>

      <div className={`grid grid-cols-3 ${SPACING.gap}`}>
        {problemData.map((data, index) => renderStatCard(data, index))}
      </div>
    </div>
  );
};

export default ProblemValidationChart;