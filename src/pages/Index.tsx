
import React from "react";
import PresentationLayout from "@/components/PresentationLayout";
import Slide from "@/components/Slide";
import LogoPlaceholder from "@/components/LogoPlaceholder";
import { ArrowRight, CheckCircle2, Users, PieChart, Target, Rocket, DollarSign, BarChart3, Star, ThumbsUp } from "lucide-react";

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

const Index = () => {
  return (
    <PresentationLayout slideIds={slideIds}>
      {/* Slide 1: Startup Introduction */}
      <Slide id="intro" variant="center" accentColor="blue">
        <div className="text-center space-y-8 max-w-3xl">
          <LogoPlaceholder size="lg" />
          
          <h1 className="text-4xl md:text-6xl font-bold text-gradient">
            Startup Presentation
          </h1>
          
          <div className="glass-dark p-6 rounded-lg space-y-4">
            <h2 className="text-xl md:text-2xl font-medium">
              Scop · Viziune · Misiune · Valori
            </h2>
            
            <p className="text-gray-300 leading-relaxed">
              Transformăm modul în care clienții interacționează cu [industria] prin soluții inovatoare și sustenabile, care rezolvă problemele reale ale utilizatorilor.
            </p>
          </div>
        </div>
      </Slide>

      {/* Slide 2: Consumers */}
      <Slide id="consumers" variant="split" accentColor="purple">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Users className="text-primary" size={28} />
            <h2 className="text-3xl font-bold">Consumatorii Noștri</h2>
          </div>
          
          <div className="glass p-5 rounded-lg space-y-3">
            <h3 className="text-xl font-medium text-primary">Segment Principal</h3>
            <p className="text-sm text-gray-300">
              [Descriere detaliată a segmentului principal de consumatori - vârstă, ocupație, nevoi, comportamente]
            </p>
          </div>
          
          <div className="glass p-5 rounded-lg space-y-3">
            <h3 className="text-xl font-medium text-accent">Segment Secundar</h3>
            <p className="text-sm text-gray-300">
              [Descriere detaliată a segmentului secundar de consumatori - vârstă, ocupație, nevoi, comportamente]
            </p>
          </div>
        </div>
        
        <div className="glass-dark p-6 rounded-lg h-full flex items-center">
          <div className="space-y-4 w-full">
            <h3 className="text-xl font-medium">Harta Călătoriei Clientului</h3>
            
            <div className="w-full bg-black/30 h-60 rounded flex items-center justify-center">
              <span className="text-gray-400 text-sm">
                [Grafic CJM - Customer Journey Map]
              </span>
            </div>
            
            <p className="text-xs text-gray-400">
              Înțelegerea detaliată a pașilor pe care îi parcurge clientul nostru de la conștientizarea problemei până la achiziție și loialitate.
            </p>
          </div>
        </div>
      </Slide>
      
      {/* Slide 3: Problems */}
      <Slide id="problems" accentColor="orange">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <PieChart className="text-accent" size={28} />
            <h2 className="text-3xl font-bold">Probleme Identificate</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="glass p-5 rounded-lg space-y-3">
              <h3 className="text-lg font-medium text-primary">Problema #1</h3>
              <p className="text-sm text-gray-300">
                [Descriere detaliată a problemei #1 și impactul acesteia asupra utilizatorilor]
              </p>
            </div>
            
            <div className="glass p-5 rounded-lg space-y-3">
              <h3 className="text-lg font-medium text-primary">Problema #2</h3>
              <p className="text-sm text-gray-300">
                [Descriere detaliată a problemei #2 și impactul acesteia asupra utilizatorilor]
              </p>
            </div>
            
            <div className="glass p-5 rounded-lg space-y-3">
              <h3 className="text-lg font-medium text-primary">Problema #3</h3>
              <p className="text-sm text-gray-300">
                [Descriere detaliată a problemei #3 și impactul acesteia asupra utilizatorilor]
              </p>
            </div>
          </div>
          
          <div className="glass-dark p-6 rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-medium">Validare Probleme</h3>
              <span className="text-xs text-gray-400">Sondaj cu 100+ respondenți</span>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-black/30 p-3 rounded">
                <div className="text-accent text-xl font-bold">87%</div>
                <div className="text-xs text-gray-300">au confirmat problema #1</div>
              </div>
              
              <div className="bg-black/30 p-3 rounded">
                <div className="text-accent text-xl font-bold">72%</div>
                <div className="text-xs text-gray-300">au confirmat problema #2</div>
              </div>
              
              <div className="bg-black/30 p-3 rounded">
                <div className="text-accent text-xl font-bold">93%</div>
                <div className="text-xs text-gray-300">au confirmat problema #3</div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      
      {/* Slide 4: Value Proposition */}
      <Slide id="value" variant="split" accentColor="blue">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Target className="text-primary" size={28} />
            <h2 className="text-3xl font-bold">Propunere de Valoare</h2>
          </div>
          
          <div className="glass-dark p-6 rounded-lg space-y-4">
            <h3 className="text-xl font-medium text-gradient">De ce noi?</h3>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                <p className="text-sm text-gray-300">
                  [Avantaj competitiv #1 - explicație detaliată]
                </p>
              </li>
              
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                <p className="text-sm text-gray-300">
                  [Avantaj competitiv #2 - explicație detaliată]
                </p>
              </li>
              
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                <p className="text-sm text-gray-300">
                  [Avantaj competitiv #3 - explicație detaliată]
                </p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="relative h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-xl" />
          <div className="relative glass p-8 rounded-lg w-full h-full flex flex-col justify-center">
            <h3 className="text-2xl font-medium mb-4">Beneficii Pentru Client</h3>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <p className="text-sm">[Beneficiu principal #1]</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <p className="text-sm">[Beneficiu principal #2]</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                <p className="text-sm">[Beneficiu principal #3]</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <p className="text-sm">[Beneficiu principal #4]</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      
      {/* Slide 5: Solution */}
      <Slide id="solution" accentColor="green">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Rocket className="text-green-500" size={28} />
            <h2 className="text-3xl font-bold">Soluția Noastră</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-dark p-6 rounded-lg space-y-3">
              <h3 className="text-xl font-medium">Produsul Minim Viabil (MVP)</h3>
              
              <p className="text-sm text-gray-300">
                [Descriere detaliată a MVP-ului - caracteristici, funcționalități, valoare oferită]
              </p>
              
              <div className="w-full bg-black/30 h-40 rounded flex items-center justify-center mt-4">
                <span className="text-gray-400 text-sm">
                  [Imagine sau schiță a produsului]
                </span>
              </div>
            </div>
            
            <div className="glass p-6 rounded-lg h-full flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-xl font-medium">Validare MVP</h3>
                <p className="text-sm text-gray-300">
                  [Descriere a procesului de validare și a rezultatelor obținute]
                </p>
              </div>
              
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Feedback Utilizatori:</h4>
                
                <div className="space-y-2">
                  <div className="bg-black/30 p-3 rounded">
                    <p className="text-xs italic text-gray-300">
                      "[Citat client #1]"
                    </p>
                    <p className="text-right text-xs text-gray-400 mt-1">— Client #1</p>
                  </div>
                  
                  <div className="bg-black/30 p-3 rounded">
                    <p className="text-xs italic text-gray-300">
                      "[Citat client #2]"
                    </p>
                    <p className="text-right text-xs text-gray-400 mt-1">— Client #2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      
      {/* Slide 6: Channels */}
      <Slide id="channels" variant="split" accentColor="purple">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <ArrowRight className="text-purple-500" size={28} />
            <h2 className="text-3xl font-bold">Canale de Distribuție</h2>
          </div>
          
          <p className="text-sm text-gray-300">
            Strategia noastră pentru a ajunge la clienți potențiali și a construi o bază de utilizatori loiali.
          </p>
          
          <div className="space-y-4">
            <div className="glass p-4 rounded-lg flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">1</div>
              <div>
                <h3 className="text-lg font-medium">Social Media</h3>
                <p className="text-xs text-gray-300">[Detalii strategie social media]</p>
              </div>
            </div>
            
            <div className="glass p-4 rounded-lg flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">2</div>
              <div>
                <h3 className="text-lg font-medium">Email Marketing</h3>
                <p className="text-xs text-gray-300">[Detalii strategie email marketing]</p>
              </div>
            </div>
            
            <div className="glass p-4 rounded-lg flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">3</div>
              <div>
                <h3 className="text-lg font-medium">Parteneriate</h3>
                <p className="text-xs text-gray-300">[Detalii strategie parteneriate]</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass-dark p-6 rounded-lg h-full flex items-center">
          <div className="w-full space-y-6">
            <h3 className="text-xl font-medium">Strategie de Lansare</h3>
            
            <div className="space-y-3">
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-sm font-medium text-primary mb-1">Faza 1: Awareness</h4>
                <p className="text-xs text-gray-300">[Detalii faza 1]</p>
              </div>
              
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-sm font-medium text-primary mb-1">Faza 2: Achiziție</h4>
                <p className="text-xs text-gray-300">[Detalii faza 2]</p>
              </div>
              
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-sm font-medium text-primary mb-1">Faza 3: Retenție</h4>
                <p className="text-xs text-gray-300">[Detalii faza 3]</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      
      {/* Slide 7: Revenue Model */}
      <Slide id="revenue" accentColor="orange">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <DollarSign className="text-accent" size={28} />
            <h2 className="text-3xl font-bold">Model de Venituri</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Surse de Venit</h3>
              
              <div className="space-y-4">
                <div className="bg-black/30 p-4 rounded">
                  <h4 className="text-sm font-medium text-accent mb-1">Sursa #1</h4>
                  <p className="text-xs text-gray-300">[Detalii despre sursa de venit #1]</p>
                </div>
                
                <div className="bg-black/30 p-4 rounded">
                  <h4 className="text-sm font-medium text-accent mb-1">Sursa #2</h4>
                  <p className="text-xs text-gray-300">[Detalii despre sursa de venit #2]</p>
                </div>
                
                <div className="bg-black/30 p-4 rounded">
                  <h4 className="text-sm font-medium text-accent mb-1">Sursa #3</h4>
                  <p className="text-xs text-gray-300">[Detalii despre sursa de venit #3]</p>
                </div>
              </div>
            </div>
            
            <div className="glass-dark p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Proiecții Financiare</h3>
              
              <div className="w-full bg-black/30 h-40 rounded flex items-center justify-center">
                <span className="text-gray-400 text-sm">
                  [Grafic proiecții financiare]
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="bg-black/30 p-3 rounded text-center">
                  <div className="text-accent text-lg font-bold">€XXk</div>
                  <div className="text-xs text-gray-300">Anul 1</div>
                </div>
                
                <div className="bg-black/30 p-3 rounded text-center">
                  <div className="text-accent text-lg font-bold">€XXXk</div>
                  <div className="text-xs text-gray-300">Anul 2</div>
                </div>
                
                <div className="bg-black/30 p-3 rounded text-center">
                  <div className="text-accent text-lg font-bold">€XM</div>
                  <div className="text-xs text-gray-300">Anul 3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      
      {/* Slide 8: Costs */}
      <Slide id="costs" accentColor="blue">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <DollarSign className="text-primary" size={28} />
            <h2 className="text-3xl font-bold">Structura de Costuri</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Costuri Operaționale</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between bg-black/30 p-3 rounded">
                  <span className="text-sm">Forța de muncă</span>
                  <span className="text-sm text-primary">XX%</span>
                </div>
                
                <div className="flex justify-between bg-black/30 p-3 rounded">
                  <span className="text-sm">Dezvoltare tehnologică</span>
                  <span className="text-sm text-primary">XX%</span>
                </div>
                
                <div className="flex justify-between bg-black/30 p-3 rounded">
                  <span className="text-sm">Marketing</span>
                  <span className="text-sm text-primary">XX%</span>
                </div>
                
                <div className="flex justify-between bg-black/30 p-3 rounded">
                  <span className="text-sm">Infrastructură</span>
                  <span className="text-sm text-primary">XX%</span>
                </div>
              </div>
            </div>
            
            <div className="glass-dark p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Investiții Inițiale</h3>
              
              <div className="w-full bg-black/30 h-40 rounded flex items-center justify-center mb-4">
                <span className="text-gray-400 text-sm">
                  [Grafic distribuție investiții]
                </span>
              </div>
              
              <div className="glass p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Investiție totală necesară</span>
                  <span className="text-lg font-bold text-primary">€XXXXX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      
      {/* Slide 9: Key Metrics */}
      <Slide id="metrics" accentColor="purple">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <BarChart3 className="text-purple-500" size={28} />
            <h2 className="text-3xl font-bold">Indicatori Cheie de Performanță</h2>
          </div>
          
          <div className="glass-dark p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Obiective de Business</h3>
                
                <div className="space-y-3">
                  <div className="bg-black/30 p-3 rounded">
                    <h4 className="text-sm font-medium text-purple-400 mb-1">Utilizatori Activi</h4>
                    <p className="text-xs text-gray-300">[Detalii obiectiv și metrici]</p>
                  </div>
                  
                  <div className="bg-black/30 p-3 rounded">
                    <h4 className="text-sm font-medium text-purple-400 mb-1">Rata de Conversie</h4>
                    <p className="text-xs text-gray-300">[Detalii obiectiv și metrici]</p>
                  </div>
                  
                  <div className="bg-black/30 p-3 rounded">
                    <h4 className="text-sm font-medium text-purple-400 mb-1">Venituri</h4>
                    <p className="text-xs text-gray-300">[Detalii obiectiv și metrici]</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Obiective de Produs</h3>
                
                <div className="space-y-3">
                  <div className="bg-black/30 p-3 rounded">
                    <h4 className="text-sm font-medium text-purple-400 mb-1">Retenție</h4>
                    <p className="text-xs text-gray-300">[Detalii obiectiv și metrici]</p>
                  </div>
                  
                  <div className="bg-black/30 p-3 rounded">
                    <h4 className="text-sm font-medium text-purple-400 mb-1">Satisfacția Utilizatorilor</h4>
                    <p className="text-xs text-gray-300">[Detalii obiectiv și metrici]</p>
                  </div>
                  
                  <div className="bg-black/30 p-3 rounded">
                    <h4 className="text-sm font-medium text-purple-400 mb-1">Engagement</h4>
                    <p className="text-xs text-gray-300">[Detalii obiectiv și metrici]</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-black/30 rounded">
              <h3 className="text-sm font-medium mb-2">Timeframe pentru Obiective</h3>
              
              <div className="w-full bg-black/20 h-8 rounded-full overflow-hidden">
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
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Star className="text-green-500" size={28} />
            <h2 className="text-3xl font-bold">Diferențiere</h2>
          </div>
          
          <p className="text-sm text-gray-300">
            Ce ne face unici și cum ne diferențiem de competitorii existenți pe piață.
          </p>
          
          <div className="space-y-4">
            <div className="glass p-4 rounded-lg">
              <h3 className="text-lg font-medium text-green-400 mb-2">Avantaj Competitiv #1</h3>
              <p className="text-xs text-gray-300">[Descriere detaliată a avantajului]</p>
            </div>
            
            <div className="glass p-4 rounded-lg">
              <h3 className="text-lg font-medium text-green-400 mb-2">Avantaj Competitiv #2</h3>
              <p className="text-xs text-gray-300">[Descriere detaliată a avantajului]</p>
            </div>
            
            <div className="glass p-4 rounded-lg">
              <h3 className="text-lg font-medium text-green-400 mb-2">Avantaj Competitiv #3</h3>
              <p className="text-xs text-gray-300">[Descriere detaliată a avantajului]</p>
            </div>
          </div>
        </div>
        
        <div className="glass-dark p-6 rounded-lg h-full">
          <h3 className="text-xl font-medium mb-4">Analiza Competitivă</h3>
          
          <div className="w-full bg-black/30 h-60 rounded flex items-center justify-center">
            <span className="text-gray-400 text-sm">
              [Grafic comparativ competitori]
            </span>
          </div>
          
          <div className="mt-4 text-xs text-gray-400 italic">
            Analiză bazată pe studii de piață din [perioada] și interviuri cu [număr] potențiali clienți.
          </div>
        </div>
      </Slide>
      
      {/* Slide 11: Team */}
      <Slide id="team" accentColor="blue">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Users className="text-primary" size={28} />
            <h2 className="text-3xl font-bold">Echipa Noastră</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass p-4 rounded-lg text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-black/30 flex items-center justify-center text-gray-400">
                [Foto]
              </div>
              <h3 className="text-lg font-medium mt-3">Nume #1</h3>
              <p className="text-xs text-gray-400">Rol / Poziție</p>
              <p className="text-xs text-gray-300 mt-2">
                [Contribuție la proiect]
              </p>
            </div>
            
            <div className="glass p-4 rounded-lg text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-black/30 flex items-center justify-center text-gray-400">
                [Foto]
              </div>
              <h3 className="text-lg font-medium mt-3">Nume #2</h3>
              <p className="text-xs text-gray-400">Rol / Poziție</p>
              <p className="text-xs text-gray-300 mt-2">
                [Contribuție la proiect]
              </p>
            </div>
            
            <div className="glass p-4 rounded-lg text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-black/30 flex items-center justify-center text-gray-400">
                [Foto]
              </div>
              <h3 className="text-lg font-medium mt-3">Nume #3</h3>
              <p className="text-xs text-gray-400">Rol / Poziție</p>
              <p className="text-xs text-gray-300 mt-2">
                [Contribuție la proiect]
              </p>
            </div>
            
            <div className="glass p-4 rounded-lg text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-black/30 flex items-center justify-center text-gray-400">
                [Foto]
              </div>
              <h3 className="text-lg font-medium mt-3">Nume #4</h3>
              <p className="text-xs text-gray-400">Rol / Poziție</p>
              <p className="text-xs text-gray-300 mt-2">
                [Contribuție la proiect]
              </p>
            </div>
          </div>
          
          <div className="glass-dark p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-4">Experiența Noastră</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-sm font-medium text-primary mb-1">Realizări în cadrul Gate 3</h4>
                <p className="text-xs text-gray-300">
                  [Descriere realizări și lecții învățate]
                </p>
              </div>
              
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-sm font-medium text-primary mb-1">Feedback Antreprenoriat</h4>
                <p className="text-xs text-gray-300 italic">
                  "[Feedback despre cursul de Antreprenoriat]"
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      
      {/* Slide 12: Feedback */}
      <Slide id="feedback" variant="center" accentColor="orange">
        <div className="text-center space-y-8 max-w-3xl">
          <div className="flex items-center justify-center gap-3">
            <ThumbsUp className="text-accent" size={28} />
            <h2 className="text-3xl font-bold">Feedback</h2>
          </div>
          
          <div className="glass-dark p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-4">Ce părere aveți despre curricula cu gate-uri?</h3>
            
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-sm font-medium text-accent mb-2">Avantaje</h4>
                <ul className="text-xs text-gray-300 space-y-1 list-disc list-inside">
                  <li>[Avantaj curriculum #1]</li>
                  <li>[Avantaj curriculum #2]</li>
                  <li>[Avantaj curriculum #3]</li>
                </ul>
              </div>
              
              <div className="bg-black/30 p-4 rounded">
                <h4 className="text-sm font-medium text-accent mb-2">Dezavantaje</h4>
                <ul className="text-xs text-gray-300 space-y-1 list-disc list-inside">
                  <li>[Dezavantaj curriculum #1]</li>
                  <li>[Dezavantaj curriculum #2]</li>
                  <li>[Dezavantaj curriculum #3]</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 flex flex-col items-center">
              <h4 className="text-sm font-medium mb-2">Preferință metode de predare:</h4>
              
              <div className="flex gap-4">
                <div className="glass p-3 rounded text-center">
                  <div className="text-xs text-gray-300">Metoda cu gate-uri</div>
                  <div className="text-accent text-xl font-bold mt-1">?</div>
                </div>
                
                <div className="glass p-3 rounded text-center">
                  <div className="text-xs text-gray-300">Metoda originală</div>
                  <div className="text-accent text-xl font-bold mt-1">?</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-2">
            <span className="text-sm text-gray-400">Prezentare creată de</span>
            <LogoPlaceholder size="sm" />
          </div>
        </div>
      </Slide>
    </PresentationLayout>
  );
};

export default Index;
