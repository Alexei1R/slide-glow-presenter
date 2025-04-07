
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import InteractiveChart from './InteractiveChart';

const yearData = {
  year1: [
    { name: 'Jan', revenue: 25, expenses: 20 },
    { name: 'Feb', revenue: 30, expenses: 22 },
    { name: 'Mar', revenue: 28, expenses: 25 },
    { name: 'Apr', revenue: 35, expenses: 27 },
    { name: 'May', revenue: 40, expenses: 30 },
    { name: 'Jun', revenue: 45, expenses: 35 },
    { name: 'Jul', revenue: 50, expenses: 37 },
    { name: 'Aug', revenue: 55, expenses: 40 },
    { name: 'Sep', revenue: 48, expenses: 42 },
    { name: 'Oct', revenue: 52, expenses: 45 },
    { name: 'Nov', revenue: 58, expenses: 47 },
    { name: 'Dec', revenue: 62, expenses: 50 },
  ],
  year2: [
    { name: 'Jan', revenue: 65, expenses: 52 },
    { name: 'Feb', revenue: 70, expenses: 55 },
    { name: 'Mar', revenue: 75, expenses: 58 },
    { name: 'Apr', revenue: 80, expenses: 62 },
    { name: 'May', revenue: 90, expenses: 65 },
    { name: 'Jun', revenue: 95, expenses: 70 },
    { name: 'Jul', revenue: 100, expenses: 75 },
    { name: 'Aug', revenue: 110, expenses: 78 },
    { name: 'Sep', revenue: 105, expenses: 80 },
    { name: 'Oct', revenue: 115, expenses: 85 },
    { name: 'Nov', revenue: 120, expenses: 90 },
    { name: 'Dec', revenue: 130, expenses: 95 },
  ],
  year3: [
    { name: 'Jan', revenue: 140, expenses: 100 },
    { name: 'Feb', revenue: 150, expenses: 105 },
    { name: 'Mar', revenue: 160, expenses: 110 },
    { name: 'Apr', revenue: 170, expenses: 115 },
    { name: 'May', revenue: 180, expenses: 120 },
    { name: 'Jun', revenue: 190, expenses: 125 },
    { name: 'Jul', revenue: 200, expenses: 130 },
    { name: 'Aug', revenue: 210, expenses: 135 },
    { name: 'Sep', revenue: 220, expenses: 140 },
    { name: 'Oct', revenue: 230, expenses: 145 },
    { name: 'Nov', revenue: 240, expenses: 150 },
    { name: 'Dec', revenue: 250, expenses: 155 },
  ],
};

interface RevenueChartProps {
  className?: string;
}

const RevenueChart: React.FC<RevenueChartProps> = ({ className }) => {
  const [activeYear, setActiveYear] = useState<'year1' | 'year2' | 'year3'>('year1');

  return (
    <Card className={cn("bg-black/30 border-white/10", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm text-white/90">Proiecții Financiare</CardTitle>
          <div className="flex gap-1">
            {(['year1', 'year2', 'year3'] as const).map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={cn(
                  "px-2 py-1 text-xs rounded transition-all duration-300",
                  activeYear === year
                    ? "bg-primary/20 text-white"
                    : "bg-black/20 text-white/60 hover:bg-black/40"
                )}
              >
                Anul {year.replace('year', '')}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <InteractiveChart 
          type="area" 
          data={yearData[activeYear]} 
          config={{ 
            revenue: 'Venituri', 
            expenses: 'Cheltuieli' 
          }}
        />
        <div className="grid grid-cols-3 gap-3 mt-3">
          <div className="bg-black/30 p-2 rounded text-center">
            <div className="text-primary text-sm font-bold">
              €{activeYear === 'year1' ? '60K' : activeYear === 'year2' ? '130K' : '250K'}
            </div>
            <div className="text-xs text-gray-400">Venit Anual</div>
          </div>
          <div className="bg-black/30 p-2 rounded text-center">
            <div className="text-accent text-sm font-bold">
              €{activeYear === 'year1' ? '50K' : activeYear === 'year2' ? '95K' : '155K'}
            </div>
            <div className="text-xs text-gray-400">Cheltuieli</div>
          </div>
          <div className="bg-black/30 p-2 rounded text-center">
            <div className="text-green-400 text-sm font-bold">
              €{activeYear === 'year1' ? '10K' : activeYear === 'year2' ? '35K' : '95K'}
            </div>
            <div className="text-xs text-gray-400">Profit</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
