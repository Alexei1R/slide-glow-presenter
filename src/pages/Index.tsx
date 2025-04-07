
import React from "react";
import PresentationLayout from "@/components/PresentationLayout";
import Slide from "@/components/Slide";
import LogoPlaceholder from "@/components/LogoPlaceholder";
import { 
  ArrowRight, CheckCircle2, Users, PieChart, Target, 
  Rocket, DollarSign, BarChart3, Star, ThumbsUp 
} from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import ProblemValidationChart from "@/components/ProblemValidationChart";
import RevenueChart from "@/components/RevenueChart";
import InteractiveChart from "@/components/InteractiveChart";

const slideIds = [
  "intro",
  "consumers",
  "problems",
  "value",
  "solution",
  "channels",
  "revenue",
  "costs",
  "metrics",
  "differentiation",
  "team",
  "feedback"
];

// Data for charts
const customerJourneyData = [
  { name: 'Aware', value: 100 },
  { name: 'Interest', value: 80 },
  { name: 'Decision', value: 60 },
  { name: 'Action', value: 40 },
  { name: 'Loyalty', value: 30 },
];

const competitiveAnalysisData = [
  { name: 'Feature 1', us: 90, comp1: 70, comp2: 50 },
  { name: 'Feature 2', us: 85, comp1: 65, comp2: 55 },
  { name: 'Feature 3', us: 95, comp1: 60, comp2: 40 },
  { name: 'Feature 4', us: 80, comp1: 75, comp2: 60 },
];

const costStructureData = [
  { name: 'Forța de muncă', value: 45 },
  { name: 'Dezvoltare', value: 25 },
  { name: 'Marketing', value: 20 },
  { name: 'Infrastructură', value: 10 },
];

const Index = () => {
  return (
    <PresentationLayout slideIds={slideIds}>
      {/* Slide 1: Startup Introduction */}
      <Slide id="intro" variant="center" accentColor="blue">
        <div className="text-center space-y-6 max-w-3xl">
          <LogoPlaceholder size="lg" />
          
          <h1 className="text-3xl md:text-5xl font-bold text-gradient animate-fade-in">
            Startup Presentation
          </h1>
          
          <div className="glass-dark p-5 rounded-lg space-y-3 transition-all duration-300 hover:bg-black/40">
            <h2 className="text-lg md:text-xl font-medium animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Scop · Viziune · Misiune · Valori
            </h2>
            
            <p className="text-gray-300 text-sm leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Transformăm modul în care clienții interacționează cu [industria] prin soluții inovatoare și sustenabile, care rezolvă problemele reale ale utilizatorilor.
            </p>
          </div>
        </div>
      </Slide>

      {/* Slide 2: Consumers */}
      <Slide id="consumers" variant="split" accentColor="purple">
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <Users className="text-primary" size={24} />
            <h2 className="text-2xl font-bold">Consumatorii Noștri</h2>
          </div>
          
          <div className="glass p-4 rounded-lg space-y-2 transition-all duration-300 hover:bg-white/5">
            <h3 className="text-base font-medium text-primary">Segment Principal</h3>
            <p className="text-xs text-gray-300">
              [Descriere detaliată a segmentului principal de consumatori - vârstă, ocupație, nevoi, comportamente]
            </p>
          </div>
          
          <div className="glass p-4 rounded-lg space-y-2 transition-all duration-300 hover:bg-white/5">
            <h3 className="text-base font-medium text-accent">Segment Secundar</h3>
            <p className="text-xs text-gray-300">
              [Descriere detaliată a segmentului secundar de consumatori - vârstă, ocupație, nevoi, comportamente]
            </p>
          </div>
        </div>
        
        <div className="glass-dark p-5 rounded-lg h-full flex items-center">
          <div className="space-y-3 w-full">
            <h3 className="text-base font-medium">Harta Călătoriei Clientului</h3>
            
            <InteractiveChart
              type="line"
              data={customerJourneyData}
              config={{ value: "Clienți" }}
              height={200}
            />
            
            <p className="text-xs text-gray-400">
              Înțelegerea detaliată a pașilor pe care îi parcurge clientul nostru de la conștientizarea problemei până la achiziție și loialitate.
            </p>
          </div>
        </div>
      </Slide>
      
      {/* Slide 3: Problems */}
      <Slide id="problems" accentColor="orange">
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <PieChart className="text-accent" size={24} />
            <h2 className="text-2xl font-bold">Probleme Identificate</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-3">
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="glass p-4 rounded-lg space-y-2 transition-all duration-300 hover:bg-white/5 cursor-pointer">
                  <h3 className="text-sm font-medium text-primary">Problema #1</h3>
                  <p className="text-xs text-gray-300">
                    [Descriere detaliată a problemei #1 și impactul acesteia asupra utilizatorilor]
                  </p>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="bg-black/80 border-white/10 text-white w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Impact Problema #1</h4>
                  <p className="text-xs">87% dintre utilizatori se confruntă cu această problemă zilnic</p>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[87%] rounded-full"></div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="glass p-4 rounded-lg space-y-2 transition-all duration-300 hover:bg-white/5 cursor-pointer">
                  <h3 className="text-sm font-medium text-primary">Problema #2</h3>
                  <p className="text-xs text-gray-300">
                    [Descriere detaliată a problemei #2 și impactul acesteia asupra utilizatorilor]
                  </p>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="bg-black/80 border-white/10 text-white w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Impact Problema #2</h4>
                  <p className="text-xs">72% dintre utilizatori se confruntă cu această problemă săptămânal</p>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-[72%] rounded-full"></div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="glass p-4 rounded-lg space-y-2 transition-all duration-300 hover:bg-white/5 cursor-pointer">
                  <h3 className="text-sm font-medium text-primary">Problema #3</h3>
                  <p className="text-xs text-gray-300">
                    [Descriere detaliată a problemei #3 și impactul acesteia asupra utilizatorilor]
                  </p>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="bg-black/80 border-white/10 text-white w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Impact Problema #3</h4>
                  <p className="text-xs">93% dintre utilizatori se confruntă cu această problemă lunar</p>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 w-[93%] rounded-full"></div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          
          <ProblemValidationChart />
        </div>
      </Slide>
      
      {/* Slide 4: Value Proposition */}
      <Slide id="value" variant="split" accentColor="blue">
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <Target className="text-primary" size={24} />
            <h2 className="text-2xl font-bold">Propunere de Valoare</h2>
          </div>
          
          <div className="glass-dark p-5 rounded-lg space-y-3 transition-all duration-300 hover:bg-black/40">
            <h3 className="text-base font-medium text-gradient">De ce noi?</h3>
            
            <ul className="space-y-2">
              <li className="flex items-start gap-2 group transition-all duration-300 hover:translate-x-1">
                <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" size={16} />
                <p className="text-xs text-gray-300">
                  [Avantaj competitiv #1 - explicație detaliată]
                </p>
              </li>
              
              <li className="flex items-start gap-2 group transition-all duration-300 hover:translate-x-1">
                <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" size={16} />
                <p className="text-xs text-gray-300">
                  [Avantaj competitiv #2 - explicație detaliată]
                </p>
              </li>
              
              <li className="flex items-start gap-2 group transition-all duration-300 hover:translate-x-1">
                <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" size={16} />
                <p className="text-xs text-gray-300">
                  [Avantaj competitiv #3 - explicație detaliată]
                </p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="relative h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/15 rounded-lg blur-xl" />
          <div className="relative glass p-6 rounded-lg w-full h-full flex flex-col justify-center">
            <h3 className="text-lg font-medium mb-3">Beneficii Pentru Client</h3>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 group transition-all duration-300 hover:translate-x-1 hover:bg-white/5 p-1 rounded">
                <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                <p className="text-xs">[Beneficiu principal #1]</p>
              </div>
              
              <div className="flex items-center gap-2 group transition-all duration-300 hover:translate-x-1 hover:bg-white/5 p-1 rounded">
                <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                <p className="text-xs">[Beneficiu principal #2]</p>
              </div>
              
              <div className="flex items-center gap-2 group transition-all duration-300 hover:translate-x-1 hover:bg-white/5 p-1 rounded">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:scale-150 transition-transform" />
                <p className="text-xs">[Beneficiu principal #3]</p>
              </div>
              
              <div className="flex items-center gap-2 group transition-all duration-300 hover:translate-x-1 hover:bg-white/5 p-1 rounded">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 group-hover:scale-150 transition-transform" />
                <p className="text-xs">[Beneficiu principal #4]</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      
      {/* Slide 5: Solution */}
      <Slide id="solution" accentColor="green">
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <Rocket className="text-green-500" size={24} />
            <h2 className="text-2xl font-bold">Soluția Noastră</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="glass-dark p-5 rounded-lg space-y-2 transition-all duration-300 hover:bg-black/40">
              <h3 className="text-base font-medium">Produsul Minim Viabil (MVP)</h3>
              
              <p className="text-xs text-gray-300">
                [Descriere detaliată a MVP-ului - caracteristici, funcționalități, valoare oferită]
              </p>
              
              <div className="w-full bg-black/30 h-32 rounded flex items-center justify-center mt-3 group transition-all duration-300 hover:bg-black/40">
                <span className="text-gray-400 text-xs group-hover:text-white transition-colors">
                  [Imagine sau schiță a produsului]
                </span>
              </div>
            </div>
            
            <div className="glass p-5 rounded-lg h-full flex flex-col justify-between transition-all duration-300 hover:bg-white/5">
              <div className="space-y-2">
                <h3 className="text-base font-medium">Validare MVP</h3>
                <p className="text-xs text-gray-300">
                  [Descriere a procesului de validare și a rezultatelor obținute]
                </p>
              </div>
              
              <div className="mt-3">
                <h4 className="text-xs font-medium mb-2">Feedback Utilizatori:</h4>
                
                <div className="space-y-2">
                  <div className="bg-black/30 p-2 rounded group transition-all duration-300 hover:bg-black/40 hover:translate-y-[-2px]">
                    <p className="text-[10px] italic text-gray-300 group-hover:text-white transition-colors">
                      "[Citat client #1]"
                    </p>
                    <p className="text-right text-[10px] text-gray-400 mt-1 group-hover:text-gray-300">— Client #1</p>
                  </div>
                  
                  <div className="bg-black/30 p-2 rounded group transition-all duration-300 hover:bg-black/40 hover:translate-y-[-2px]">
                    <p className="text-[10px] italic text-gray-300 group-hover:text-white transition-colors">
                      "[Citat client #2]"
                    </p>
                    <p className="text-right text-[10px] text-gray-400 mt-1 group-hover:text-gray-300">— Client #2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      
      {/* Slide 6: Channels */}
      <Slide id="channels" variant="split" accentColor="purple">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <ArrowRight className="text-purple-500" size={24} />
            <h2 className="text-2xl font-bold">Canale de Distribuție</h2>
          </div>
          
          <p className="text-xs text-gray-300">
            Strategia noastră pentru a ajunge la clienți potențiali și a construi o bază de utilizatori loiali.
          </p>
          
          <div className="space-y-3">
            <div className="glass p-3 rounded-lg flex items-center gap-3 transition-all duration-300 hover:bg-white/5 hover:translate-x-1">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 text-xs">1</div>
              <div>
                <h3 className="text-sm font-medium">Social Media</h3>
                <p className="text-[10px] text-gray-300">[Detalii strategie social media]</p>
              </div>
            </div>
            
            <div className="glass p-3 rounded-lg flex items-center gap-3 transition-all duration-300 hover:bg-white/5 hover:translate-x-1">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 text-xs">2</div>
              <div>
                <h3 className="text-sm font-medium">Email Marketing</h3>
                <p className="text-[10px] text-gray-300">[Detalii strategie email marketing]</p>
              </div>
            </div>
            
            <div className="glass p-3 rounded-lg flex items-center gap-3 transition-all duration-300 hover:bg-white/5 hover:translate-x-1">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 text-xs">3</div>
              <div>
                <h3 className="text-sm font-medium">Parteneriate</h3>
                <p className="text-[10px] text-gray-300">[Detalii strategie parteneriate]</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass-dark p-5 rounded-lg h-full flex items-center">
          <div className="w-full space-y-4">
            <h3 className="text-base font-medium">Strategie de Lansare</h3>
            
            <div className="space-y-2">
              <div className="bg-black/30 p-3 rounded transition-all duration-300 hover:bg-black/40 hover:translate-y-[-2px]">
                <h4 className="text-xs font-medium text-primary mb-1">Faza 1: Awareness</h4>
                <p className="text-[10px] text-gray-300">[Detalii faza 1]</p>
              </div>
              
              <div className="bg-black/30 p-3 rounded transition-all duration-300 hover:bg-black/40 hover:translate-y-[-2px]">
                <h4 className="text-xs font-medium text-primary mb-1">Faza 2: Achiziție</h4>
                <p className="text-[10px] text-gray-300">[Detalii faza 2]</p>
              </div>
              
              <div className="bg-black/30 p-3 rounded transition-all duration-300 hover:bg-black/40 hover:translate-y-[-2px]">
                <h4 className="text-xs font-medium text-primary mb-1">Faza 3: Retenție</h4>
                <p className="text-[10px] text-gray-300">[Detalii faza 3]</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      
      {/* Slide 7: Revenue Model */}
      <Slide id="revenue" accentColor="orange">
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <DollarSign className="text-accent" size={24} />
            <h2 className="text-2xl font-bold">Model de Venituri</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5">
            <div className="glass p-5 rounded-lg transition-all duration-300 hover:bg-white/5">
              <h3 className="text-base font-medium mb-3">Surse de Venit</h3>
              
              <div className="space-y-3">
                <div className="bg-black/30 p-3 rounded transition-all duration-300 hover:bg-black/40 hover:translate-y-[-2px]">
                  <h4 className="text-xs font-medium text-accent mb-1">Sursa #1</h4>
                  <p className="text-[10px] text-gray-300">[Detalii despre sursa de venit #1]</p>
                </div>
                
                <div className="bg-black/30 p-3 rounded transition-all duration-300 hover:bg-black/40 hover:translate-y-[-2px]">
                  <h4 className="text-xs font-medium text-accent mb-1">Sursa #2</h4>
                  <p className="text-[10px] text-gray-300">[Detalii despre sursa de venit #2]</p>
                </div>
                
                <div className="bg-black/30 p-3 rounded transition-all duration-300 hover:bg-black/40 hover:translate-y-[-2px]">
                  <h4 className="text-xs font-medium text-accent mb-1">Sursa #3</h4>
                  <p className="text-[10px] text-gray-300">[Detalii despre sursa de venit #3]</p>
                </div>
              </div>
            </div>
            
            <RevenueChart />
          </div>
        </div>
      </Slide>
      
      {/* Slide 8: Costs */}
      <Slide id="costs" accentColor="blue">
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <DollarSign className="text-primary" size={24} />
            <h2 className="text-2xl font-bold">Structura de Costuri</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5">
            <div className="glass p-5 rounded-lg transition-all duration-300 hover:bg-white/5">
              <h3 className="text-base font-medium mb-3">Costuri Operaționale</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between bg-black/30 p-2 rounded transition-all duration-300 hover:bg-black/40">
                  <span className="text-xs">Forța de muncă</span>
                  <span className="text-xs text-primary">45%</span>
                </div>
                
                <div className="flex justify-between bg-black/30 p-2 rounded transition-all duration-300 hover:bg-black/40">
                  <span className="text-xs">Dezvoltare tehnologică</span>
                  <span className="text-xs text-primary">25%</span>
                </div>
                
                <div className="flex justify-between bg-black/30 p-2 rounded transition-all duration-300 hover:bg-black/40">
                  <span className="text-xs">Marketing</span>
                  <span className="text-xs text-primary">20%</span>
                </div>
                
                <div className="flex justify-between bg-black/30 p-2 rounded transition-all duration-300 hover:bg-black/40">
                  <span className="text-xs">Infrastructură</span>
                  <span className="text-xs text-primary">10%</span>
                </div>
              </div>
            </div>
            
            <div className="glass-dark p-5 rounded-lg transition-all duration-300 hover:bg-black/40">
              <h3 className="text-base font-medium mb-3">Investiții Inițiale</h3>
              
              <InteractiveChart 
                type="pie"
                data={costStructureData}
                height={180}
              />
              
              <div className="glass p-3 rounded-lg mt-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium">Investiție totală necesară</span>
                  <span className="text-sm font-bold text-primary">€25,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      
      {/* Slide 9: Key Metrics */}
      <Slide id="metrics" accentColor="purple">
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <BarChart3 className="text-purple-500" size={24} />
            <h2 className="text-2xl font-bold">Indicatori Cheie de Performanță</h2>
          </div>
          
          <div className="glass-dark p-5 rounded-lg">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-3">
                <h3 className="text-base font-medium">Obiective de Business</h3>
                
                <div className="space-y-2">
                  <div className="bg-black/30 p-2 rounded transition-all duration-300 hover:bg-black/40 hover:translate-y-[-2px]">
                    <h4 className="text-xs font-medium text-purple-400 mb-1">Utilizatori Activi</h4>
                    <p className="text-[10px] text-gray-300">[Detalii obiectiv și metrici]</p>
                    <div className="h-1 w-full bg-black/30 rounded-full overflow-hidden mt-1">
                      <div className="h-full bg-purple-400 w-[65%] rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="bg-black/30 p-2 rounded transition-all duration-300 hover:bg-black/40 hover:translate-y-[-2px]">
                    <h4 className="text-xs font-medium text-purple-400 mb-1">Rata de Conversie</h4>
                    <p className="text-[10px] text-gray-300">[Detalii obiectiv și metrici]</p>
                    <div className="h-1 w-full bg-black/30 rounded-full overflow-hidden mt-1">
                      <div className="h-full bg-purple-400 w-[42%] rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="bg-black/30 p-2 rounded transition-all duration-300 hover:bg-black/40 hover:translate-y-[-2px]">
                    <h4 className="text-xs font-medium text-purple-400 mb-1">Venituri</h4>
                    <p className="text-[10px] text-gray-300">[Detalii obiectiv și metrici]</p>
                    <div className="h-1 w-full bg-black/30 rounded-full overflow-hidden mt-1">
                      <div className="h-full bg-purple-400 w-[78%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-base font-medium">Obiective de Produs</h3>
                
                <div className="space-y-2">
                  <div className="bg-black/30 p-2 rounded transition-all duration-300 hover:bg-black/40 hover:translate-y-[-2px]">
                    <h4 className="text-xs font-medium text-purple-400 mb-1">Retenție</h4>
                    <p className="text-[10px] text-gray-300">[Detalii obiectiv și metrici]</p>
                    <div className="h-1 w-full bg-black/30 rounded-full overflow-hidden mt-1">
                      <div className="h-full bg-purple-400 w-[55%] rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="bg-black/30 p-2 rounded transition-all duration-300 hover:bg-black/40 hover:translate-y-[-2px]">
                    <h4 className="text-xs font-medium text-purple-400 mb-1">Satisfacția Utilizatorilor</h4>
                    <p className="text-[10px] text-gray-300">[Detalii obiectiv și metrici]</p>
                    <div className="h-1 w-full bg-black/30 rounded-full overflow-hidden mt-1">
                      <div className="h-full bg-purple-400 w-[82%] rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="bg-black/30 p-2 rounded transition-all duration-300 hover:bg-black/40 hover:translate-y-[-2px]">
                    <h4 className="text-xs font-medium text-purple-400 mb-1">Engagement</h4>
                    <p className="text-[10px] text-gray-300">[Detalii obiectiv și metrici]</p>
                    <div className="h-1 w-full bg-black/30 rounded-full overflow-hidden mt-1">
                      <div className="h-full bg-purple-400 w-[67%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-black/30 rounded">
              <h3 className="text-xs font-medium mb-2">Timeframe pentru Obiective</h3>
              
              <div className="w-full bg-black/20 h-6 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-600 to-primary w-1/4 relative">
                  <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[10px] font-medium">
                    Q1 2023
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      
      {/* Slide 10: Differentiation */}
      <Slide id="differentiation" variant="split" accentColor="green">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Star className="text-green-500" size={24} />
            <h2 className="text-2xl font-bold">Diferențiere</h2>
          </div>
          
          <p className="text-xs text-gray-300">
            Ce ne face unici și cum ne diferențiem de competitorii existenți pe piață.
          </p>
          
          <div className="space-y-3">
            <div className="glass p-3 rounded-lg transition-all duration-300 hover:bg-white/5 hover:translate-y-[-2px]">
              <h3 className="text-sm font-medium text-green-400 mb-1">Avantaj Competitiv #1</h3>
              <p className="text-[10px] text-gray-300">[Descriere detaliată a avantajului]</p>
            </div>
            
            <div className="glass p-3 rounded-lg transition-all duration-300 hover:bg-white/5 hover:translate-y-[-2px]">
              <h3 className="text-sm font-medium text-green-400 mb-1">Avantaj Competitiv #2</h3>
              <p className="text-[10px] text-gray-300">[Descriere detaliată a avantajului]</p>
            </div>
            
            <div className="glass p-3 rounded-lg transition-all duration-300 hover:bg-white/5 hover:translate-y-[-2px]">
              <h3 className="text-sm font-medium text-green-400 mb-1">Avantaj Competitiv #3</h3>
              <p className="text-[10px] text-gray-300">[Descriere detaliată a avantajului]</p>
            </div>
          </div>
        </div>
        
        <div className="glass-dark p-5 rounded-lg h-full">
          <h3 className="text-base font-medium mb-3">Analiza Competitivă</h3>
          
          <InteractiveChart
            type="bar"
            data={competitiveAnalysisData}
            config={{ 
              us: 'Startup Nostru', 
              comp1: 'Competitor 1',
              comp2: 'Competitor 2'
            }}
            height={200}
          />
          
          <div className="mt-3 text-[10px] text-gray-400 italic">
            Analiză bazată pe studii de piață din [perioada] și interviuri cu [număr] potențiali clienți.
          </div>
        </div>
      </Slide>
      
      {/* Slide 11: Team */}
      <Slide id="team" accentColor="blue">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Users className="text-primary" size={24} />
            <h2 className="text-2xl font-bold">Echipa Noastră</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="glass p-3 rounded-lg text-center transition-all duration-300 hover:bg-white/5 hover:scale-105">
              <div className="w-16 h-16 mx-auto rounded-full bg-black/30 flex items-center justify-center text-gray-400">
                [Foto]
              </div>
              <h3 className="text-sm font-medium mt-2">Nume #1</h3>
              <p className="text-[10px] text-gray-400">Rol / Poziție</p>
              <p className="text-[10px] text-gray-300 mt-1">
                [Contribuție la proiect]
              </p>
            </div>
            
            <div className="glass p-3 rounded-lg text-center transition-all duration-300 hover:bg-white/5 hover:scale-105">
              <div className="w-16 h-16 mx-auto rounded-full bg-black/30 flex items-center justify-center text-gray-400">
                [Foto]
              </div>
              <h3 className="text-sm font-medium mt-2">Nume #2</h3>
              <p className="text-[10px] text-gray-400">Rol / Poziție</p>
              <p className="text-[10px] text-gray-300 mt-1">
                [Contribuție la proiect]
              </p>
            </div>
            
            <div className="glass p-3 rounded-lg text-center transition-all duration-300 hover:bg-white/5 hover:scale-105">
              <div className="w-16 h-16 mx-auto rounded-full bg-black/30 flex items-center justify-center text-gray-400">
                [Foto]
              </div>
              <h3 className="text-sm font-medium mt-2">Nume #3</h3>
              <p className="text-[10px] text-gray-400">Rol / Poziție</p>
              <p className="text-[10px] text-gray-300 mt-1">
                [Contribuție la proiect]
              </p>
            </div>
            
            <div className="glass p-3 rounded-lg text-center transition-all duration-300 hover:bg-white/5 hover:scale-105">
              <div className="w-16 h-16 mx-auto rounded-full bg-black/30 flex items-center justify-center text-gray-400">
                [Foto]
              </div>
              <h3 className="text-sm font-medium mt-2">Nume #4</h3>
              <p className="text-[10px] text-gray-400">Rol / Poziție</p>
              <p className="text-[10px] text-gray-300 mt-1">
                [Contribuție la proiect]
              </p>
            </div>
          </div>
          
          <div className="glass-dark p-5 rounded-lg">
            <h3 className="text-base font-medium mb-3">Experiența Noastră</h3>
            
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-black/30 p-3 rounded transition-all duration-300 hover:bg-black/40 hover:translate-y-[-2px]">
                <h4 className="text-xs font-medium text-primary mb-1">Realizări în cadrul Gate 3</h4>
                <p className="text-[10px] text-gray-300">
                  [Descriere realizări și lecții învățate]
                </p>
              </div>
              
              <div className="bg-black/30 p-3 rounded transition-all duration-300 hover:bg-black/40 hover:translate-y-[-2px]">
                <h4 className="text-xs font-medium text-primary mb-1">Feedback Antreprenoriat</h4>
                <p className="text-[10px] text-gray-300 italic">
                  "[Feedback despre cursul de Antreprenoriat]"
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      
      {/* Slide 12: Feedback */}
      <Slide id="feedback" variant="center" accentColor="orange">
        <div className="text-center space-y-6 max-w-3xl">
          <div className="flex items-center justify-center gap-2">
            <ThumbsUp className="text-accent" size={24} />
            <h2 className="text-2xl font-bold">Feedback</h2>
          </div>
          
          <div className="glass-dark p-5 rounded-lg">
            <h3 className="text-base font-medium mb-3">Ce părere aveți despre curricula cu gate-uri?</h3>
            
            <div className="grid md:grid-cols-2 gap-3 text-left">
              <div className="bg-black/30 p-3 rounded transition-all duration-300 hover:bg-black/40">
                <h4 className="text-xs font-medium text-accent mb-1">Avantaje</h4>
                <ul className="text-[10px] text-gray-300 space-y-1 list-disc list-inside">
                  <li>[Avantaj curriculum #1]</li>
                  <li>[Avantaj curriculum #2]</li>
                  <li>[Avantaj curriculum #3]</li>
                </ul>
              </div>
              
              <div className="bg-black/30 p-3 rounded transition-all duration-300 hover:bg-black/40">
                <h4 className="text-xs font-medium text-accent mb-1">Dezavantaje</h4>
                <ul className="text-[10px] text-gray-300 space-y-1 list-disc list-inside">
                  <li>[Dezavantaj curriculum #1]</li>
                  <li>[Dezavantaj curriculum #2]</li>
                  <li>[Dezavantaj curriculum #3]</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4 flex flex-col items-center">
              <h4 className="text-xs font-medium mb-2">Preferință metode de predare:</h4>
              
              <div className="flex gap-4">
                <div className="glass p-2 rounded text-center transition-all duration-300 hover:bg-white/10 hover:scale-105">
                  <div className="text-[10px] text-gray-300">Metoda cu gate-uri</div>
                  <div className="text-accent text-lg font-bold mt-1">?</div>
                </div>
                
                <div className="glass p-2 rounded text-center transition-all duration-300 hover:bg-white/10 hover:scale-105">
                  <div className="text-[10px] text-gray-300">Metoda originală</div>
                  <div className="text-accent text-lg font-bold mt-1">?</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-2">
            <span className="text-xs text-gray-400">Prezentare creată de</span>
            <LogoPlaceholder size="sm" />
          </div>
        </div>
      </Slide>
    </PresentationLayout>
  );
};

export default Index;
