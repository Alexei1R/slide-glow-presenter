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
  "customer-journey",
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

      {/* Slide 1: PLASTICOIN Introduction */}
      <Slide id="intro" variant="center" accentColor="green">
        {/* Background image with increased blur */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/slide1.png"
            alt="PlastiCoin Background"
            className="w-full h-full object-cover blur-sm z-0"
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>

        {/* Main centered content */}
        <div className="relative z-30 flex flex-col items-center justify-between w-full h-full py-10">
          {/* Centered main title - larger text */}
          <div className="flex-grow flex items-center justify-center">
            <h1 className="text-9xl md:text-[15rem] font-black text-center text-green-400 animate-fade-in leading-none tracking-wider px-6 font-montserrat"
              style={{
                textShadow: "0 0 30px rgba(74, 222, 128, 0.5), 0 0 60px rgba(74, 222, 128, 0.3)",
                WebkitTextStroke: "1px rgba(255,255,255,0.2)",
                transform: "scale(1.05)",
                letterSpacing: "0.02em",
                fontWeight: 900,
                fontFamily: "'Montserrat', sans-serif",
                textTransform: "uppercase"
              }}>
              PLASTICOIN
            </h1>
          </div>

          {/* Bottom cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl w-full animate-fade-in mt-auto" style={{ animationDelay: "0.3s" }}>
            <div className="glass p-4 rounded-lg text-center transition-all duration-300 hover:bg-white/10 hover:scale-105">
              <h3 className="text-lg font-extrabold text-green-300 mb-2">Scop</h3>
              <p className="text-xs md:text-sm text-gray-300 font-medium">
                Promovarea reciclării responsabile prin tehnologie și recompense
              </p>
            </div>

            <div className="glass p-4 rounded-lg text-center transition-all duration-300 hover:bg-white/10 hover:scale-105">
              <h3 className="text-lg font-extrabold text-green-300 mb-2">Viziune</h3>
              <p className="text-xs md:text-sm text-gray-300 font-medium">
                Un viitor în care reciclarea devine un obicei natural și recompensat
              </p>
            </div>

            <div className="glass p-4 rounded-lg text-center transition-all duration-300 hover:bg-white/10 hover:scale-105">
              <h3 className="text-lg font-extrabold text-green-300 mb-2">Misiune</h3>
              <p className="text-xs md:text-sm text-gray-300 font-medium">
                Implementarea unei rețele de aparate automatizate pentru reciclare
              </p>
            </div>

            <div className="glass p-4 rounded-lg text-center transition-all duration-300 hover:bg-white/10 hover:scale-105">
              <h3 className="text-lg font-extrabold text-green-300 mb-2">Valori</h3>
              <p className="text-xs md:text-sm text-gray-300 font-medium">
                Sustenabilitate · Inovație · Comunitate · Transparență
              </p>
            </div>
          </div>
        </div>
      </Slide>

      





          


{/* Slide 2: Customer Journey Map */}
<Slide id="customer-journey" variant="center" accentColor="green">
  {/* Abstract background decoration instead of image */}
  <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
    <div className="absolute bg-black/90 inset-0 z-10"></div>
    
    {/* Abstract geometric shapes */}
    <div className="absolute top-[-5%] right-[-10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-green-700/20 to-green-500/10 blur-3xl"></div>
    <div className="absolute bottom-[-15%] left-[-5%] w-[35%] h-[35%] rounded-full bg-gradient-to-tr from-green-600/20 to-emerald-400/5 blur-3xl"></div>
    <div className="absolute top-[20%] left-[10%] w-[25%] h-[25%] rounded-full bg-gradient-to-r from-green-500/10 to-transparent blur-2xl"></div>
    
    {/* Decorative grid pattern */}
    <div className="absolute inset-0 opacity-10" 
         style={{ 
           backgroundImage: 'radial-gradient(circle, rgba(74, 222, 128, 0.2) 1px, transparent 1px)', 
           backgroundSize: '30px 30px' 
         }}>
    </div>
    
    {/* Random small dots */}
    {Array.from({ length: 30 }).map((_, i) => (
      <div 
        key={i}
        className="absolute w-1 h-1 rounded-full bg-green-400/40"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.5 + 0.2,
        }}
      ></div>
    ))}
  </div>

  {/* Main content */}
  <div className="relative z-30 flex flex-col items-center w-full h-full py-8">
    {/* Title */}
    <h2 className="text-4xl md:text-5xl font-black text-green-400 mb-8"
      style={{ textShadow: "0 0 20px rgba(74, 222, 128, 0.4)" }}>
      HARTA CĂLĂTORIEI CLIENTULUI
    </h2>
    
    {/* Customer Journey Map Table */}
    <div className="overflow-x-auto max-w-6xl w-full bg-black/50 rounded-xl border border-green-500/20 shadow-lg">
      {/* Journey Stages Headers */}
      <div className="flex">
        <div className="w-28 p-3 border-b border-r border-green-500/20 bg-green-900/30">
          <h3 className="text-sm font-bold text-green-300">Etapă</h3>
        </div>
        <div className="flex-1 min-w-[120px] p-3 border-b border-r border-green-500/20 bg-green-900/30">
          <h3 className="text-sm font-bold text-green-300">Acțiuni</h3>
        </div>
        <div className="flex-1 min-w-[150px] p-3 border-b border-r border-green-500/20 bg-green-900/30">
          <h3 className="text-sm font-bold text-green-300">Gânduri/Emoții</h3>
        </div>
        <div className="flex-1 min-w-[150px] p-3 border-b border-r border-green-500/20 bg-green-900/30">
          <h3 className="text-sm font-bold text-green-300">Puncte de contact</h3>
        </div>
        <div className="flex-1 min-w-[150px] p-3 border-b border-green-500/20 bg-green-900/30">
          <h3 className="text-sm font-bold text-green-300">Probleme/Opritori</h3>
        </div>
      </div>

      {/* Row 1: Descoperire */}
      <div className="flex hover:bg-green-900/10 transition-colors">
        <div className="w-28 p-3 border-b border-r border-green-500/20 bg-green-900/20">
          <p className="text-sm font-bold text-white">Descoperire</p>
        </div>
        <div className="flex-1 min-w-[120px] p-3 border-b border-r border-green-500/20">
          <p className="text-xs text-gray-300">Vede o postare pe social media despre aplicație</p>
        </div>
        <div className="flex-1 min-w-[150px] p-3 border-b border-r border-green-500/20">
          <p className="text-xs text-gray-300">„Interesant, primesc bani pentru reciclare?"</p>
        </div>
        <div className="flex-1 min-w-[150px] p-3 border-b border-r border-green-500/20">
          <p className="text-xs text-gray-300">Instagram, TikTok, recomandare prieten</p>
        </div>
        <div className="flex-1 min-w-[150px] p-3 border-b border-green-500/20">
          <p className="text-xs text-gray-300">Neîncredere, pare „prea frumos"</p>
        </div>
      </div>

      {/* Row 2: Informare */}
      <div className="flex hover:bg-green-900/10 transition-colors">
        <div className="w-28 p-3 border-b border-r border-green-500/20 bg-green-900/20">
          <p className="text-sm font-bold text-white">Informare</p>
        </div>
        <div className="flex-1 min-w-[120px] p-3 border-b border-r border-green-500/20">
          <p className="text-xs text-gray-300">Intră pe site/aplicație, citește cum funcționează</p>
        </div>
        <div className="flex-1 min-w-[150px] p-3 border-b border-r border-green-500/20">
          <p className="text-xs text-gray-300">„E simplu? Unde duc plasticul?"</p>
        </div>
        <div className="flex-1 min-w-[150px] p-3 border-b border-r border-green-500/20">
          <p className="text-xs text-gray-300">Website, App Store/Google Play</p>
        </div>
        <div className="flex-1 min-w-[150px] p-3 border-b border-green-500/20">
          <p className="text-xs text-gray-300">Informație vagă sau prea tehnică</p>
        </div>
      </div>

      {/* Row 3: Înscriere */}
      <div className="flex hover:bg-green-900/10 transition-colors">
        <div className="w-28 p-3 border-b border-r border-green-500/20 bg-green-900/20">
          <p className="text-sm font-bold text-white">Înscriere</p>
        </div>
        <div className="flex-1 min-w-[120px] p-3 border-b border-r border-green-500/20">
          <p className="text-xs text-gray-300">Își face cont în aplicație</p>
        </div>
        <div className="flex-1 min-w-[150px] p-3 border-b border-r border-green-500/20">
          <p className="text-xs text-gray-300">„Hai să încerc, dacă tot e gratis"</p>
        </div>
        <div className="flex-1 min-w-[150px] p-3 border-b border-r border-green-500/20">
          <p className="text-xs text-gray-300">Aplicație mobilă</p>
        </div>
        <div className="flex-1 min-w-[150px] p-3 border-b border-green-500/20">
          <p className="text-xs text-gray-300">Proces de înregistrare greoi</p>
        </div>
      </div>

      {/* Row 4: Sortare */}
      <div className="flex hover:bg-green-900/10 transition-colors">
        <div className="w-28 p-3 border-b border-r border-green-500/20 bg-green-900/20">
          <p className="text-sm font-bold text-white">Sortare</p>
        </div>
        <div className="flex-1 min-w-[120px] p-3 border-b border-r border-green-500/20">
          <p className="text-xs text-gray-300">Adună plastic, îl sortează, îl scanează în aplicație</p>
        </div>
        <div className="flex-1 min-w-[150px] p-3 border-b border-r border-green-500/20">
          <p className="text-xs text-gray-300">„E ok, dar îmi ia timp"</p>
        </div>
        <div className="flex-1 min-w-[150px] p-3 border-b border-r border-green-500/20">
          <p className="text-xs text-gray-300">Aplicație (scanner, ghid de sortare)</p>
        </div>
        <div className="flex-1 min-w-[150px] p-3 border-b border-green-500/20">
          <p className="text-xs text-gray-300">Lipsă de ghid clar, lipsă coduri pe ambalaj</p>
        </div>
      </div>

      {/* Row 5: Predare */}
      <div className="flex hover:bg-green-900/10 transition-colors">
        <div className="w-28 p-3 border-b border-r border-green-500/20 bg-green-900/20">
          <p className="text-sm font-bold text-white">Predare</p>
        </div>
        <div className="flex-1 min-w-[120px] p-3 border-b border-r border-green-500/20">
          <p className="text-xs text-gray-300">Duce deșeurile la un punct de colectare partener</p>
        </div>
        <div className="flex-1 min-w-[150px] p-3 border-b border-r border-green-500/20">
          <p className="text-xs text-gray-300">„E fain că primesc puncte"</p>
        </div>
        <div className="flex-1 min-w-[150px] p-3 border-b border-r border-green-500/20">
          <p className="text-xs text-gray-300">Locație fizică, QR scan la predare</p>
        </div>
        <div className="flex-1 min-w-[150px] p-3 border-b border-green-500/20">
          <p className="text-xs text-gray-300">Distanță prea mare, program limitat</p>
        </div>
      </div>

      {/* Row 6: Recompensă */}
      <div className="flex hover:bg-green-900/10 transition-colors">
        <div className="w-28 p-3 border-b border-r border-green-500/20 bg-green-900/20">
          <p className="text-sm font-bold text-white">Recompensă</p>
        </div>
        <div className="flex-1 min-w-[120px] p-3 border-b border-r border-green-500/20">
          <p className="text-xs text-gray-300">Primește bani/puncte în aplicație</p>
        </div>
        <div className="flex-1 min-w-[150px] p-3 border-b border-r border-green-500/20">
          <p className="text-xs text-gray-300">„Merită! Fac și data viitoare"</p>
        </div>
        <div className="flex-1 min-w-[150px] p-3 border-b border-r border-green-500/20">
          <p className="text-xs text-gray-300">Wallet în aplicație, transfer bancar</p>
        </div>
        <div className="flex-1 min-w-[150px] p-3 border-b border-green-500/20">
          <p className="text-xs text-gray-300">Sume mici, recompensă întârziată</p>
        </div>
      </div>

      {/* Row 7: Fidelizare */}
      <div className="flex hover:bg-green-900/10 transition-colors">
        <div className="w-28 p-3 border-r border-green-500/20 bg-green-900/20">
          <p className="text-sm font-bold text-white">Fidelizare</p>
        </div>
        <div className="flex-1 min-w-[120px] p-3 border-r border-green-500/20">
          <p className="text-xs text-gray-300">Primește badge-uri, provocări, vede impactul pozitiv</p>
        </div>
        <div className="flex-1 min-w-[150px] p-3 border-r border-green-500/20">
          <p className="text-xs text-gray-300">„Simt că fac un bine + bani în plus"</p>
        </div>
        <div className="flex-1 min-w-[150px] p-3 border-r border-green-500/20">
          <p className="text-xs text-gray-300">Notificări push, gamification în aplicație</p>
        </div>
        <div className="flex-1 min-w-[150px] p-3">
          <p className="text-xs text-gray-300">Lipsă noutăți, lipsă engagement continuu</p>
        </div>
      </div>
    </div>
    
    {/* Journey diagram visualization */}
    <div className="max-w-5xl w-full mt-6">
      <div className="relative h-16">
        {/* Journey line */}
        <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-green-400 to-green-600"></div>
        
        {/* Journey points */}
        {["Descoperire", "Informare", "Înscriere", "Sortare", "Predare", "Recompensă", "Fidelizare"].map((step, index) => {
          const position = `${index * (100 / 6)}%`;
          return (
            <div key={index} className="absolute top-6" style={{ left: position }}>
              <div className="w-5 h-5 rounded-full bg-green-500 border-2 border-white"></div>
              <p className="text-xs text-green-300 mt-2 w-20 text-center" style={{ marginLeft: '-7.5px' }}>{step}</p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</Slide>










{/* Slide 3: Detalierea Soluției with gradient blur effect */}
<Slide id="solution-details" variant="center" accentColor="green">
  {/* Background image with gradient blur from right to left */}
  <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
    {/* Main image - visible on left side, blurred on right side */}
    <div className="absolute inset-0 w-full h-full">
      <img
        src="/gui.png"
        alt="PlastiCoin GUI"
        className="w-full h-full object-cover"
      />
      {/* Gradient overlay that increases blur from left to right */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800/50 to-gray-800/95"></div>
      <div className="absolute inset-0 backdrop-blur-[1px] mask-image-left"></div>
      <div className="absolute inset-0 backdrop-blur-[4px] mask-image-middle"></div>
      <div className="absolute inset-0 backdrop-blur-[8px] mask-image-right"></div>
    </div>
    
    {/* Additional dark overlay on text side for better readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/40 to-gray-900/80"></div>
  </div>

  {/* Main content */}
  <div className="relative z-30 grid grid-cols-1 md:grid-cols-2 w-full h-full">
    {/* Left side - intentionally empty to show image */}
    <div className="hidden md:block"></div>
    
    {/* Right side - content */}
    <div className="flex flex-col justify-center p-8">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-black text-green-400 mb-6"
        style={{ textShadow: "0 0 20px rgba(74, 222, 128, 0.4)" }}>
        DETALIEREA SOLUȚIEI
      </h2>
      
      {/* Solutions */}
      <div className="space-y-4 mb-8">
        <div className="glass p-4 rounded-lg space-y-2 border-l-4 border-white/60">
          <h4 className="text-base font-bold text-white">Sistem de recompense PLASTICOIN</h4>
          <p className="text-sm text-gray-200">
            Token digital care recompensează direct utilizatorii pentru fiecare deșeu reciclabil predat, convertibil în beneficii reale.
          </p>
        </div>
        
        <div className="glass p-4 rounded-lg space-y-2 border-l-4 border-white/60">
          <h4 className="text-base font-bold text-white">Rețea inteligentă de colectare</h4>
          <p className="text-sm text-gray-200">
            Aparate automatizate pentru colectarea și sortarea deșeurilor, care identifică materialul și creditează instantaneu contul utilizatorului.
          </p>
        </div>
        
        <div className="glass p-4 rounded-lg space-y-2 border-l-4 border-white/60">
          <h4 className="text-base font-bold text-white">Platformă educațională gamificată</h4>
          <p className="text-sm text-gray-200">
            Aplicație mobilă cu elemente de gamificare care educă utilizatorii, oferă provocări și afișează impactul asupra mediului.
          </p>
        </div>
      </div>
      
      {/* Results Section */}
      <div className="grid grid-cols-3 gap-3">
        <div className="glass p-3 rounded-lg text-center bg-gray-700/30 border border-white/20">
          <div className="text-2xl font-bold text-green-300/80">+350%</div>
          <p className="text-xs text-gray-200">Creștere în rata de reciclare</p>
        </div>
        
        <div className="glass p-3 rounded-lg text-center bg-gray-700/30 border border-white/20">
          <div className="text-2xl font-bold text-red-300/80">-40%</div>
          <p className="text-xs text-gray-200">Reducere în poluare</p>
        </div>
        
        <div className="glass p-3 rounded-lg text-center bg-gray-700/30 border border-white/20">
          <div className="text-2xl font-bold text-green-300/80">+25k</div>
          <p className="text-xs text-gray-200">Utilizatori activi</p>
        </div>
      </div>
    </div>
  </div>
</Slide>









{/* Slide 4: Scopuri & Lansare */}
<Slide id="goals-launch" variant="center" accentColor="green">
  {/* Background image with consistent blur (same as Slide 1) */}
  <div className="absolute inset-0 w-full h-full z-0">
    <img
      src="/slide1.png"
      alt="PlastiCoin Background"
      className="w-full h-full object-cover blur-sm z-0"
    />
    <div className="absolute inset-0 bg-black/50 z-10"></div>
  </div>

  {/* Main content */}
  <div className="relative z-30 flex flex-col w-full h-full py-8 px-6">
    {/* Title */}
    <h2 className="text-4xl md:text-5xl font-black text-green-400 mb-6 text-center"
      style={{ textShadow: "0 0 20px rgba(74, 222, 128, 0.4)" }}>
      SCOPURI & LANSARE
    </h2>
    
    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto w-full">
      {/* Left column */}
      <div className="space-y-5">
        {/* Target Users */}
        <div className="bg-black/40 backdrop-blur-sm p-5 rounded-xl border border-green-500/20">
          <h4 className="text-xl font-bold text-white flex items-center gap-2 mb-3">
            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
            </svg>
            Utilizatorii Noștri
          </h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-black/30 p-3 rounded-lg">
              <p className="text-sm text-green-300 font-medium">Tineri 18-35 ani</p>
              <p className="text-xs text-gray-300">Preocupați de mediu, nativi digital, familiari cu aplicațiile mobile</p>
            </div>
            <div className="bg-black/30 p-3 rounded-lg">
              <p className="text-sm text-green-300 font-medium">Familii urbane</p>
              <p className="text-xs text-gray-300">Cu venituri medii, căutând beneficii financiare pentru obiceiuri sustenabile</p>
            </div>
          </div>
        </div>
        
        {/* Goals */}
        <div className="bg-black/40 backdrop-blur-sm p-5 rounded-xl border border-green-500/20">
          <h4 className="text-xl font-bold text-white flex items-center gap-2 mb-3">
            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"></path>
            </svg>
            Scopuri Principale
          </h4>
          <ul className="space-y-2 pl-2">
            <li className="text-sm text-gray-200 flex items-start gap-2">
              <span className="text-green-400 font-bold mt-0.5">•</span>
              <span>Reducerea cu 40% a deșeurilor de plastic în zonele urbane până în 2027</span>
            </li>
            <li className="text-sm text-gray-200 flex items-start gap-2">
              <span className="text-green-400 font-bold mt-0.5">•</span>
              <span>Crearea unei rețele de 500+ aparate de reciclare în 5 orașe principale</span>
            </li>
            <li className="text-sm text-gray-200 flex items-start gap-2">
              <span className="text-green-400 font-bold mt-0.5">•</span>
              <span>Atragerea a peste 100,000 utilizatori activi în primii 2 ani</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Right column */}
      <div className="space-y-5">
        {/* Launch Strategy */}
        <div className="bg-black/40 backdrop-blur-sm p-5 rounded-xl border border-green-500/20">
          <h4 className="text-xl font-bold text-white flex items-center gap-2 mb-3">
            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
            </svg>
            Strategia de Lansare
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
            <div className="bg-black/30 p-3 rounded-lg text-center">
              <p className="text-sm font-medium text-green-300">FAZA 1</p>
              <p className="text-xs text-gray-300">Pilot în Cluj-Napoca cu 50 aparate</p>
            </div>
            <div className="bg-black/30 p-3 rounded-lg text-center">
              <p className="text-sm font-medium text-green-300">FAZA 2</p>
              <p className="text-xs text-gray-300">Extindere București, Iași, Timișoara</p>
            </div>
            <div className="bg-black/30 p-3 rounded-lg text-center">
              <p className="text-sm font-medium text-green-300">FAZA 3</p>
              <p className="text-xs text-gray-300">Expansiune națională și franchising</p>
            </div>
          </div>
          <p className="text-sm text-gray-200 mt-2">
            Finanțare inițială prin parteneriate corporate, granturi de mediu și o rundă de investiții seed de 750,000€
          </p>
        </div>
        
        {/* Differentiation */}
        <div className="bg-black/40 backdrop-blur-sm p-5 rounded-xl border border-green-500/20">
          <h4 className="text-xl font-bold text-white flex items-center gap-2 mb-3">
            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path>
            </svg>
            Diferențiere Competitivă
          </h4>
          <ul className="space-y-2 pl-2">
            <li className="text-sm text-gray-200 flex items-start gap-2">
              <span className="text-green-400 font-bold mt-0.5">•</span>
              <span>Tokenizare blockchain pentru transparență și tokenomics sustenabilă</span>
            </li>
            <li className="text-sm text-gray-200 flex items-start gap-2">
              <span className="text-green-400 font-bold mt-0.5">•</span>
              <span>Sistem dual de recompense: beneficii instant și economii pe termen lung</span>
            </li>
            <li className="text-sm text-gray-200 flex items-start gap-2">
              <span className="text-green-400 font-bold mt-0.5">•</span>
              <span>Integrare cu retaileri și branduri pentru un ecosistem complet de reciclare</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    {/* Key Metrics */}
    <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto mt-6">
      <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg text-center border border-green-500/20">
        <div className="text-2xl font-bold text-green-300">6 luni</div>
        <p className="text-xs text-gray-200">Până la lansarea MVP</p>
      </div>
      
      <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg text-center border border-green-500/20">
        <div className="text-2xl font-bold text-green-300">50+</div>
        <p className="text-xs text-gray-200">Parteneri de retail</p>
      </div>
      
      <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg text-center border border-green-500/20">
        <div className="text-2xl font-bold text-green-300">4.5M€</div>
        <p className="text-xs text-gray-200">ROI estimat în 3 ani</p>
      </div>
    </div>
  </div>
</Slide>
















{/* Slide 5: Solution - App Showcase with larger text and images */}
<Slide id="solution" accentColor="green">
  <div className="space-y-5">
    <div className="flex items-center gap-3">
      <Rocket className="text-green-500" size={30} />
      <h2 className="text-3xl font-bold">Soluția Noastră</h2>
    </div>

    <div className="glass p-5 rounded-lg space-y-4">
      <h3 className="text-lg font-medium text-center mb-3">Aplicația PlastiCoin - Produsul Minim Viabil (MVP)</h3>
      
      <div className="grid md:grid-cols-3 gap-5">
        {/* Screen 1: Main Screen - Larger */}
        <div className="flex flex-col items-center">
          <div className="w-[90%] max-w-[200px] rounded-lg border border-green-500/20 shadow-md mb-3">
            <img 
              src="/mvp1.png" 
              alt="Dashboard Principal PlastiCoin" 
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
          <h4 className="text-base font-medium text-green-400 mb-1">Dashboard Principal</h4>
          <p className="text-sm text-gray-300 text-center max-w-[200px]">
            Afișează soldul PlastiCoin, istoricul contribuțiilor și statistici despre impact.
          </p>
        </div>

        {/* Screen 2: Scanning - Larger */}
        <div className="flex flex-col items-center">
          <div className="w-[90%] max-w-[200px] rounded-lg border border-green-500/20 shadow-md mb-3">
            <img 
              src="/mvp2.png" 
              alt="Scanner Deșeuri PlastiCoin" 
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
          <h4 className="text-base font-medium text-green-400 mb-1">Scanner Deșeuri</h4>
          <p className="text-sm text-gray-300 text-center max-w-[200px]">
            Identifică tipul de plastic și calculează recompensa în tokens.
          </p>
        </div>

        {/* Screen 3: Map - Larger */}
        <div className="flex flex-col items-center">
          <div className="w-[90%] max-w-[200px] rounded-lg border border-green-500/20 shadow-md mb-3">
            <img 
              src="/mvp3.png" 
              alt="Hartă Interactivă PlastiCoin" 
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
          <h4 className="text-base font-medium text-green-400 mb-1">Hartă Interactivă</h4>
          <p className="text-sm text-gray-300 text-center max-w-[200px]">
            Localizează punctele de colectare apropiate și tipurile de deșeuri acceptate.
          </p>
        </div>
      </div>
      
      {/* Key features at the bottom - Larger */}
      <div className="grid grid-cols-3 gap-3 mt-5">
        <div className="bg-black/30 p-3 rounded-lg text-center flex flex-col items-center justify-center">
          <svg className="w-5 h-5 text-green-400 mb-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V4z" clipRule="evenodd"/>
          </svg>
          <p className="text-sm text-gray-300">Procesare în timp real</p>
        </div>
        <div className="bg-black/30 p-3 rounded-lg text-center flex flex-col items-center justify-center">
          <svg className="w-5 h-5 text-green-400 mb-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
          </svg>
          <p className="text-sm text-gray-300">Transfer de tokens</p>
        </div>
        <div className="bg-black/30 p-3 rounded-lg text-center flex flex-col items-center justify-center">
          <svg className="w-5 h-5 text-green-400 mb-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd"/>
            <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"/>
          </svg>
          <p className="text-sm text-gray-300">Recompense personalizate</p>
        </div>
      </div>
    </div>
  </div>
</Slide>























{/* Slide 6: User Reviews with improved sizing and alignment */}
<Slide id="user-reviews" variant="center" accentColor="green">
  {/* Background image with blur effect */}
  <div className="absolute inset-0 w-full h-full z-0">
    <img
      src="/review.png"
      alt="PlastiCoin User Reviews"
      className="w-full h-full object-cover blur-sm z-0"
    />
    <div className="absolute inset-0 bg-black/50 z-10"></div>
  </div>

  {/* Main content */}
  <div className="relative z-30 flex flex-col w-full h-full py-10 px-8">
    {/* Title */}
    <h2 className="text-4xl md:text-5xl font-black text-green-400 mb-8 text-center"
      style={{ textShadow: "0 0 20px rgba(74, 222, 128, 0.4)" }}>
      FEEDBACK UTILIZATORI
    </h2>
    
    {/* Overall rating */}
    <div className="max-w-xl mx-auto bg-black/40 backdrop-blur-sm rounded-xl p-5 mb-8 border border-green-500/20">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-white">Scor mediu satisfacție</h3>
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-bold text-green-400">4.7</span>
          <span className="text-xl text-white">/5</span>
        </div>
      </div>
      <div className="mt-4 h-4 w-full bg-gray-700 rounded-full overflow-hidden">
        <div className="bg-gradient-to-r from-green-500 to-green-300 h-full rounded-full" style={{ width: '94%' }}></div>
      </div>
      <div className="text-right mt-2 text-sm text-gray-400">Bazat pe 10 participanți la testarea MVP</div>
    </div>
    
    {/* Feedback sections */}
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
      {/* User quotes */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-3 mb-2">
          <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          Comentarii Utilizatori
        </h3>
        
        <div className="bg-black/30 p-4 rounded-lg border-l-4 border-green-500/60">
          <p className="text-base italic text-gray-200">
            "Este uimitor cât de simplu e să scanezi deșeurile și să primești tokeni instant. Interfața este foarte intuitivă!"
          </p>
          <p className="text-right text-sm text-gray-400 mt-2">— Andrei M., 28 ani</p>
        </div>
        
        <div className="bg-black/30 p-4 rounded-lg border-l-4 border-green-500/60">
          <p className="text-base italic text-gray-200">
            "Harta punctelor de colectare m-a ajutat enorm să găsesc locații în apropierea casei mele. Folosesc aplicația aproape zilnic."
          </p>
          <p className="text-right text-sm text-gray-400 mt-2">— Diana L., 32 ani</p>
        </div>
        
        <div className="bg-black/30 p-4 rounded-lg border-l-4 border-green-500/60">
          <p className="text-base italic text-gray-200">
            "Îmi place ideea de a fi recompensat pentru reciclare. Copiii mei sunt foarte entuziasmați de partea de gamification."
          </p>
          <p className="text-right text-sm text-gray-400 mt-2">— Mihai R., 41 ani</p>
        </div>
      </div>
      
      {/* Feedback metrics */}
      <div className="space-y-5">
        <h3 className="text-xl font-bold text-white flex items-center gap-3 mb-2">
          <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
          </svg>
          Metrici Cheie
        </h3>
        
        <div className="bg-black/40 p-5 rounded-lg space-y-5">
          <div>
            <div className="flex justify-between text-base mb-2">
              <span className="text-gray-300">Ușurință în utilizare</span>
              <span className="text-green-400 font-bold">92%</span>
            </div>
            <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
              <div className="bg-green-400 h-full rounded-full" style={{ width: '92%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-base mb-2">
              <span className="text-gray-300">Utilitate percepută</span>
              <span className="text-green-400 font-bold">89%</span>
            </div>
            <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
              <div className="bg-green-400 h-full rounded-full" style={{ width: '89%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-base mb-2">
              <span className="text-gray-300">Intenție de utilizare continuă</span>
              <span className="text-green-400 font-bold">95%</span>
            </div>
            <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
              <div className="bg-green-400 h-full rounded-full" style={{ width: '95%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-base mb-2">
              <span className="text-gray-300">Recomandare către prieteni</span>
              <span className="text-green-400 font-bold">96%</span>
            </div>
            <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
              <div className="bg-green-400 h-full rounded-full" style={{ width: '96%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="bg-black/30 p-4 rounded-lg">
          <h4 className="text-base font-medium text-white mb-3">Sugestii pentru îmbunătățire:</h4>
          <ul className="space-y-2 pl-3">
            <li className="text-sm text-gray-300 flex items-start gap-2">
              <span className="text-yellow-400 font-bold mt-0.5">•</span>
              <span>Adăugarea notificărilor push pentru promoții noi</span>
            </li>
            <li className="text-sm text-gray-300 flex items-start gap-2">
              <span className="text-yellow-400 font-bold mt-0.5">•</span>
              <span>Extinderea listei de comercianți parteneri</span>
            </li>
            <li className="text-sm text-gray-300 flex items-start gap-2">
              <span className="text-yellow-400 font-bold mt-0.5">•</span>
              <span>Implementarea unui sistem de challenges săptămânale</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</Slide>








{/* Slide 7: Revenue Model & Financial Overview - Fixed Metrics Display */}
<Slide id="revenue" variant="center" accentColor="green">
  <div className="space-y-5 max-w-6xl mx-auto w-full">
    <div className="flex items-center gap-3">
      <DollarSign className="text-green-500" size={32} />
      <h2 className="text-3xl font-bold">Model de Venituri & Finanțe</h2>
    </div>

    {/* Main content area with larger plot */}
    <div className="grid md:grid-cols-3 gap-5">
      {/* Revenue chart - now spans 2 columns with full height */}
      <div className="md:col-span-2 bg-black/40 backdrop-blur-sm p-5 rounded-xl border border-green-500/20 flex flex-col">
      <RevenueChart />
        
      </div>

      {/* Revenue sources in right column */}
      <div className="space-y-4">
        <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-green-500/20 h-[65%]">
          <h3 className="text-lg font-medium mb-3 text-white">Surse de Venit</h3>

          <div className="space-y-3">
            <div className="bg-black/30 p-3 rounded-lg transition-all duration-300 hover:bg-black/40 hover:translate-y-[-2px]">
              <h4 className="text-base font-medium text-green-400">Comision PlastiCoin</h4>
              <p className="text-sm text-gray-300">5% comision din fiecare tranzacție TokenCoin</p>
            </div>

            <div className="bg-black/30 p-3 rounded-lg transition-all duration-300 hover:bg-black/40 hover:translate-y-[-2px]">
              <h4 className="text-base font-medium text-green-400">Parteneriate Corporate</h4>
              <p className="text-sm text-gray-300">Abonamente lunare pentru companii</p>
            </div>

            <div className="bg-black/30 p-3 rounded-lg transition-all duration-300 hover:bg-black/40 hover:translate-y-[-2px]">
              <h4 className="text-base font-medium text-green-400">White Label Solutions</h4>
              <p className="text-sm text-gray-300">Licențierea tehnologiei către municipalități</p>
            </div>
          </div>
        </div>

        {/* Condensed cost structure */}
        <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-green-500/20 h-[30%]">
          <h3 className="text-lg font-medium mb-3 text-white">Structura de Costuri</h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex justify-between bg-black/30 p-2 rounded-lg items-center">
              <span className="text-sm">Personal</span>
              <span className="text-sm text-green-400 font-bold">45%</span>
            </div>
            <div className="flex justify-between bg-black/30 p-2 rounded-lg items-center">
              <span className="text-sm">Dezvoltare</span>
              <span className="text-sm text-green-400 font-bold">25%</span>
            </div>
            <div className="flex justify-between bg-black/30 p-2 rounded-lg items-center">
              <span className="text-sm">Marketing</span>
              <span className="text-sm text-green-400 font-bold">20%</span>
            </div>
            <div className="flex justify-between bg-black/30 p-2 rounded-lg items-center">
              <span className="text-sm">Infrastructură</span>
              <span className="text-sm text-green-400 font-bold">10%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Bottom section - Financial milestones only */}
    <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-green-500/20">
      <h3 className="text-lg font-medium mb-3 text-white text-center">Obiective Financiare & Milestones</h3>
      
      <div className="w-full bg-black/20 h-12 rounded-lg overflow-hidden">
        <div className="grid grid-cols-4 h-full text-xs">
          <div className="bg-green-900/60 flex items-center justify-center border-r border-black/30">
            <span className="text-white font-medium">MVP Launch<br/>€0</span>
          </div>
          <div className="bg-green-800/60 flex items-center justify-center border-r border-black/30">
            <span className="text-white font-medium">Break-even<br/>€250K</span>
          </div>
          <div className="bg-green-700/60 flex items-center justify-center border-r border-black/30">
            <span className="text-white font-medium">Expansiune<br/>€500K</span>
          </div>
          <div className="bg-green-600/60 flex items-center justify-center">
            <span className="text-white font-medium">Series A<br/>€1.2M</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-xs text-gray-400 mt-2 px-2">
        <span>Q2 2025</span>
        <span>Q4 2025</span>
        <span>Q2 2026</span>
        <span>Q4 2026</span>
      </div>
    </div>
  </div>
</Slide>




      {/* Slide 8: Feedback */}
      <Slide id="feedback" variant="center" accentColor="orange">
        <div className="text-center space-y-6 max-w-3xl">
          <div className="flex items-center justify-center gap-2">
            <ThumbsUp className="text-accent" size={24} />
            <h2 className="text-2xl font-bold">Feedback</h2>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <span className="text-xs text-gray-400">Prezentare creată de PLASTICOIN</span>
            <LogoPlaceholder size="sm" />
          </div>
        </div>
      </Slide>
    </PresentationLayout>
  );
};

export default Index;
