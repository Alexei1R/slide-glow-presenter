
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import InteractiveChart from './InteractiveChart';

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

interface ProblemValidationChartProps {
  className?: string;
}

const ProblemValidationChart: React.FC<ProblemValidationChartProps> = ({ className }) => {
  const [showDetails, setShowDetails] = React.useState(false);
  
  return (
    <Card className={cn("bg-black/30 border-white/10", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm text-white/90">Validare Probleme</CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">Sondaj cu 100+ respondenți</span>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="px-2 py-1 text-xs rounded transition-all duration-300 bg-black/20 text-white/60 hover:bg-black/40"
            >
              {showDetails ? "Vizualizare simplă" : "Detalii demografice"}
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {showDetails ? (
          <InteractiveChart 
            type="bar" 
            data={problemDetailData}
            config={{ 
              problem1: 'Problema 1', 
              problem2: 'Problema 2',
              problem3: 'Problema 3'
            }}
          />
        ) : (
          <InteractiveChart 
            type="pie" 
            data={problemData}
          />
        )}
        
        <div className="grid grid-cols-3 gap-3 mt-3">
          <div className="bg-black/30 p-2 rounded transition-all duration-300 hover:bg-black/40">
            <div className="text-accent text-sm font-bold">87%</div>
            <div className="text-xs text-gray-300">au confirmat problema #1</div>
          </div>
          
          <div className="bg-black/30 p-2 rounded transition-all duration-300 hover:bg-black/40">
            <div className="text-accent text-sm font-bold">72%</div>
            <div className="text-xs text-gray-300">au confirmat problema #2</div>
          </div>
          
          <div className="bg-black/30 p-2 rounded transition-all duration-300 hover:bg-black/40">
            <div className="text-accent text-sm font-bold">93%</div>
            <div className="text-xs text-gray-300">au confirmat problema #3</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProblemValidationChart;
