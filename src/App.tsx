import { useState, useEffect, type FC } from 'react';
import * as Lucide from 'lucide-react';

/**
 * NOSTOS_AI Pitch Deck - Version 6.9.6 (Edge-to-Edge & Zero Scroll)
 * - Layout: Removed max-w-7xl, implemented dynamic full-width (max 1800px).
 * - Vertical Rhythm: Aggressively reduced paddings, removed overflow-y-auto.
 * - Result: 100vh exact fit, no internal scrolling, maximum screen real estate.
 */

interface IconProps extends Lucide.LucideProps {
  name: string;
}

const NostosLogo: FC<{ className?: string }> = ({ className }) => (
  <img 
    src="/logo.png" 
    alt="NOSTOS_AI Logo" 
    className={`object-contain ${className}`}
    onError={(e) => {
      e.currentTarget.style.display = 'none';
    }}
  />
);

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const tailwind = document.createElement('script');
    tailwind.src = 'https://cdn.tailwindcss.com';
    document.head.appendChild(tailwind);

    const font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&family=Heebo:wght@300;400;700;800&family=JetBrains+Mono:wght@400;700&family=Michroma&display=swap';
    document.head.appendChild(font);

    const style = document.createElement('style');
    style.innerHTML = `
      body, html { margin: 0; padding: 0; overflow: hidden; width: 100%; height: 100%; box-sizing: border-box; background: #020408; color: #f1f5f9; }
      *, *:before, *:after { box-sizing: inherit; }
      .cyber-grid {
        background-image: 
          linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
        background-size: 40px 40px;
        mask-image: radial-gradient(circle at center, black, transparent 90%);
      }
      .glass-panel {
        background: rgba(15, 23, 42, 0.3);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.05);
      }
      .no-exceptions-glow {
        text-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
      }
      .font-nostos {
        font-family: 'Michroma', sans-serif;
      }
    `;
    document.head.appendChild(style);

    tailwind.onload = () => setIsReady(true);
  }, []);

  if (!isReady) return (
    <div className="h-screen w-full bg-[#020408] flex items-center justify-center">
      <div className="text-blue-500 font-mono animate-pulse tracking-[0.5em] text-xs uppercase">
        CALIBRATING_VIEWPORT_V6.9.6...
      </div>
    </div>
  );

  const Icon: FC<IconProps> = ({ name, ...props }) => {
    const LucideIcon = (Lucide as any)[name] as Lucide.LucideIcon;
    return LucideIcon ? <LucideIcon {...props} /> : <div className="w-6 h-6 bg-blue-500/20 rounded" />;
  };

  const slides = [
    {
      title: 'NOSTOS_AI',
      subtitle: 'Securing the Path Home.',
      content: (
        <div className="flex flex-col items-center justify-center space-y-4 lg:space-y-6 text-center h-full w-full max-w-5xl mx-auto px-2">
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-blue-600/30 blur-[100px] rounded-full animate-pulse" />
            <div className="relative p-2 rounded-[32px] glass-panel border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.2)] flex items-center justify-center flex-shrink-0">
              <NostosLogo className="w-24 h-24 md:w-32 md:h-32 rounded-[24px] drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]" />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2 tracking-tighter">
              <p className="text-blue-500 font-mono text-xs tracking-[0.4em] mb-2 uppercase underline underline-offset-8 decoration-blue-500/40">OUR MISSION IS:</p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Every worker returns home safely<br/>
                to their family.<br/>
                Every day.<br/>
                <span className="text-blue-500 no-exceptions-glow tracking-[0.05em] uppercase mt-1 block">NO EXCEPTIONS!</span>
              </h1>
            </div>
            
            <div className="pt-4 border-t border-white/5 font-heebo" dir="rtl">
              <p className="text-slate-400 font-bold text-lg md:text-2xl leading-relaxed">
                החזון שלנו: שכל פועל יחזור הביתה בשלום למשפחתו.<br/>
                בכל יום. <span className="text-blue-500">ללא פשרות.</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 font-mono text-[10px] md:text-xs tracking-widest uppercase pt-2 flex-shrink-0">
             <div className="px-4 py-2 bg-blue-500/5 border border-blue-500/20 rounded-xl text-blue-400 flex items-center gap-2">
                <Icon name="Cpu" size={14}/> NOSTOS_EDGE_V2.6
             </div>
             <div className="px-4 py-2 bg-emerald-500/5 border border-emerald-500/20 rounded-xl text-emerald-400 font-bold">
                DEADLINE: 21.03.2026
             </div>
          </div>
        </div>
      )
    },
    {
      title: 'Operational Integrity',
      subtitle: 'Eliminating Risks, Protecting People',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-stretch h-full w-full max-w-7xl mx-auto">
          <div className="flex flex-col justify-between space-y-3 lg:space-y-4">
             {[
               { icon: 'Heart', color: 'red', title: 'Human Safety', heb: 'ביטחון אנושי', desc: 'Zero fatalities as the only acceptable industry KPI.' },
               { icon: 'ShieldCheck', color: 'amber', title: 'Legal Protection', heb: 'הגנה משפטית', desc: 'Digital alibi for project managers and site owners.' },
               { icon: 'TrendingDown', color: 'blue', title: 'Operational Flow', heb: 'רציפות תפעולית', desc: 'Preventing work-stoppage orders costing ₪350k/day.' }
             ].map((item, idx) => (
               <div key={idx} className="p-4 lg:p-5 glass-panel rounded-2xl border-l-4 border-l-blue-500/40 hover:border-l-blue-500 transition-all duration-300 flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-center mb-1 lg:mb-2">
                     <h4 className="text-white font-bold text-xs md:text-sm uppercase tracking-widest flex items-center gap-3">
                        <Icon name={item.icon} size={18} className="text-blue-400" /> {item.title}
                     </h4>
                     <span className="text-slate-500 font-heebo font-bold text-xs md:text-sm" dir="rtl">{item.heb}</span>
                  </div>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
          <div className="glass-panel p-6 lg:p-8 rounded-[32px] flex flex-col justify-between h-full relative overflow-hidden">
             <div className="space-y-6 lg:space-y-8">
                <div className="space-y-2">
                   <div className="flex justify-between text-[10px] md:text-xs text-slate-500 font-mono tracking-widest italic uppercase"><span>MANUAL_AUDIT</span><span className="text-red-500 font-bold text-sm md:text-base">85% RISK</span></div>
                   <div className="w-full h-1.5 md:h-2 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-red-600/80 w-[85%]" /></div>
                </div>
                <div className="space-y-2">
                   <div className="flex justify-between text-[10px] md:text-xs text-blue-400 font-mono tracking-widest italic font-bold uppercase"><span>NOSTOS_AI_SOTA</span><span className="text-blue-400 font-bold text-sm md:text-base">12% RESIDUAL</span></div>
                   <div className="w-full h-3 md:h-4 bg-white/5 rounded-full overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.1)]"><div className="h-full bg-blue-500 w-[12%] animate-pulse" /></div>
                </div>
             </div>
             <div className="mt-6 border-t border-white/5 pt-6 relative z-10 text-center flex flex-col justify-end flex-1">
               <p className="text-base md:text-xl text-slate-200 italic font-medium font-heebo leading-relaxed" dir="rtl">
                 "בטיחות היא לא הוצאה, היא ההשקעה בנכס היקר ביותר שלכם – <span className="text-blue-400 font-bold">האנשים.</span>"
               </p>
               
               <div className="mt-6 flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
                     <Icon name="Database" size={14} className="text-blue-400" />
                     <span className="text-[9px] md:text-[10px] text-blue-300 font-mono font-bold tracking-widest uppercase">
                        Source: OSHA / NIOSH Research
                     </span>
                  </div>
                  <p className="text-[8px] md:text-[9px] text-slate-600 font-mono uppercase tracking-[0.2em] mt-1">Based on 200,000+ observation hours</p>
               </div>
             </div>
          </div>
        </div>
      )
    },
    {
      title: 'Technical Edge',
      subtitle: 'HAILO-8_NPU_ACCELERATION',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch h-full text-left w-full max-w-7xl mx-auto">
           <div className="bg-black/40 rounded-[32px] p-6 lg:p-8 border border-blue-500/10 flex flex-col justify-between relative overflow-hidden group min-h-[250px] lg:min-h-[300px]">
              <div className="absolute inset-0 opacity-10 cyber-grid" />
              <div className="flex justify-between items-center relative z-10">
                 <div className="px-3 py-1 bg-blue-500/20 rounded-full text-[10px] text-blue-400 font-mono tracking-widest flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" />
                    LIVE_FEED: 26.4 TOPS
                 </div>
                 <Icon name="Cpu" size={28} className="text-blue-500 animate-pulse" />
              </div>
              <div className="flex-1 flex items-center justify-center relative my-4 lg:my-6">
                 <div className="w-36 h-36 lg:w-44 lg:h-44 border border-blue-500/10 rounded-full flex items-center justify-center relative">
                    <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-ping opacity-10" />
                    <div className="w-20 h-20 lg:w-24 lg:h-24 border border-emerald-500/20 rounded-full flex items-center justify-center">
                       <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_15px_#10b981]" />
                    </div>
                    <div className="text-[9px] md:text-[10px] font-mono text-blue-400/40 uppercase absolute -bottom-6 tracking-widest">Homecoming_Core</div>
                 </div>
              </div>
              <div className="p-3 lg:p-4 glass-panel rounded-xl border border-white/5 font-mono text-[10px] md:text-xs leading-relaxed text-blue-300 relative z-10">
                 <p className="text-emerald-400 font-bold uppercase tracking-tighter">{`>> NOSTOS_YOLO26: ACTIVE`}</p>
                 <p className="text-red-500 font-bold animate-pulse uppercase tracking-tighter mt-1">{`>> WARNING: ZONE_BREACH [ID_42]`}</p>
                 <p className="text-blue-400 uppercase tracking-tighter mt-1">{`>> HAILO_LATENCY: 0.008s`}</p>
              </div>
           </div>
           <div className="flex flex-col justify-between space-y-3 lg:space-y-0 h-full relative z-10">
              {[
                { icon: 'Zap', color: 'blue', title: 'NMS-free Latency', heb: 'השהייה אפסית (NMS-free)', desc: 'Zero bottlenecks. Instant life-saving response.' },
                { icon: 'Lock', color: 'emerald', title: 'Data Sovereignty', heb: 'ריבונות מלאה על המידע', desc: '100% On-site. Full privacy and compliance.' },
                { icon: 'HeartPulse', color: 'purple', title: 'Life Preservation', heb: 'הצלת חיי אדם', desc: 'Predictive trajectory analytics for hazard prevention.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 lg:gap-5 items-start group p-3 lg:p-0 flex-1">
                   <div className={`p-3 lg:p-4 glass-panel rounded-xl border border-${item.color}-500/10 group-hover:bg-blue-500/10 transition-all shadow-lg flex-shrink-0`}>
                      <Icon name={item.icon} size={20} className={`text-${item.color}-400`} />
                   </div>
                   <div className="space-y-1 lg:space-y-2 w-full">
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <h5 className="text-white font-bold text-xs md:text-sm uppercase italic tracking-widest leading-none">{item.title}</h5>
                        <span className="text-blue-400 font-heebo text-[10px] md:text-xs font-bold mt-1 md:mt-0" dir="rtl">{item.heb}</span>
                      </div>
                      <p className="text-slate-400 text-xs md:text-sm leading-relaxed opacity-90">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      )
    },
    {
      title: 'Design Partnership',
      subtitle: 'REGULATORY_SANDBOX_2026',
      content: (
        <div className="flex flex-col items-center justify-center space-y-6 lg:space-y-8 h-full text-center w-full max-w-5xl mx-auto px-2 relative z-10">
          <div className="p-5 lg:p-6 glass-panel border-emerald-500/20 rounded-[28px] w-full flex flex-col md:flex-row items-center justify-between shadow-xl gap-4">
             <div className="text-center md:text-left">
                <p className="text-emerald-500 font-mono text-[10px] md:text-xs uppercase tracking-widest mb-1">Sandbox Submission</p>
                <p className="text-white font-bold text-3xl md:text-4xl tracking-tighter italic uppercase">March 21, 23:59</p>
             </div>
             <div className="text-center md:text-right font-heebo" dir="rtl">
                <p className="text-emerald-400 text-sm md:text-base font-bold leading-relaxed">המועד עודכן (מצב ביטחוני)</p>
                <p className="text-slate-400 text-[10px] md:text-xs mt-1">הזדמנות להצטרף כשותף Tier-1</p>
             </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 w-full">
             <div className="p-5 lg:p-6 glass-panel rounded-[28px] flex items-center gap-4 lg:gap-6">
                <div className="p-3 lg:p-4 bg-blue-600/10 rounded-2xl border border-blue-500/20 shadow-inner"><Icon name="Users" className="text-blue-400 w-8 h-8 lg:w-10 lg:h-10" /></div>
                <div className="text-left">
                   <p className="text-white font-bold text-xl md:text-2xl tracking-tighter uppercase italic leading-none">Arkady</p>
                   <p className="text-blue-500 font-mono text-[10px] md:text-xs tracking-widest uppercase mt-2 opacity-80">System Architect</p>
                </div>
             </div>
             <div className="p-5 lg:p-6 glass-panel rounded-[28px] flex flex-col justify-center text-right font-heebo" dir="rtl">
                <ul className="space-y-3 lg:space-y-4 text-slate-300 text-xs md:text-sm font-medium">
                   <li className="flex items-center gap-3 justify-end"><span>מימון מלא (מענק רשות החדשנות)</span><Icon name="CheckCircle2" size={16} className="text-emerald-500" /></li>
                   <li className="flex items-center gap-3 justify-end"><span>מעמד רשמי מול הרגולטור (Sandbox)</span><Icon name="CheckCircle2" size={16} className="text-emerald-400" /></li>
                </ul>
             </div>
          </div>
          <div className="flex flex-col items-center space-y-4 pt-4 lg:pt-6">
            <a 
              href="mailto:arkady.nostos@gmail.com?subject=Strategic%20Partnership%3A%20NOSTOS_AI%20Sandbox%202026&body=Hello%20Arkady%2C%0A%0AWe%20are%20interested%20in%20discussing%20the%20Design%20Partnership%20for%20the%20NOSTOS_AI%20platform.%0A%0APlease%20send%20us%20the%20LOI%20draft.%0A%0A%5BCompany%20Name%5D"
              className="bg-white hover:bg-blue-50 text-black px-10 py-4 lg:px-14 lg:py-5 rounded-full font-bold text-lg md:text-xl transition-all shadow-xl uppercase tracking-widest italic hover:scale-105 active:scale-95 group inline-block decoration-transparent"
            >
               <span className="flex items-center justify-center gap-3 lg:gap-4">
                  Become a Design Partner
                  <Icon name="ArrowRight" className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-2 transition-transform" />
               </span>
            </a>
            <p className="text-blue-500 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold animate-pulse mt-2">Contact: arkady.nostos@gmail.com</p>
          </div>
        </div>
      )
    }
  ];

  const next = () => currentSlide < slides.length - 1 && setCurrentSlide(currentSlide + 1);
  const prev = () => currentSlide > 0 && setCurrentSlide(currentSlide - 1);

  return (
    <div className="h-screen w-full bg-[#020408] text-slate-100 flex flex-col items-center overflow-hidden relative selection:bg-blue-500/30 p-2 md:p-4">
      <div className="absolute inset-0 cyber-grid opacity-60 pointer-events-none" />
      
      {/* 1. Header (Tightened) */}
      <header className="flex justify-between items-center mb-3 md:mb-4 relative z-20 flex-shrink-0 w-full max-w-[1800px] px-2 lg:px-6">
        <div className="flex items-center gap-3 lg:gap-4">
          <div className="p-1.5 bg-blue-600/10 border border-blue-500/30 rounded-[12px] lg:rounded-[16px] flex items-center justify-center shadow-lg flex-shrink-0">
            <NostosLogo className="w-10 h-10 lg:w-12 lg:h-12 rounded-[8px] lg:rounded-[10px]" />
          </div>
          <div>
            <span className="text-xl lg:text-2xl font-bold text-white uppercase tracking-tighter block leading-none font-nostos">NOSTOS_AI</span>
            <span className="text-[8px] lg:text-[9px] text-blue-500 font-mono tracking-[0.2em] uppercase block mt-1.5 font-bold">Industrial_Intelligence</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-[9px] lg:text-[10px] font-mono text-slate-500 tracking-[0.2em] uppercase">
          <div className="text-right">
            <p className="text-blue-400 font-bold italic">Founder: Arkady</p>
            <p className="font-heebo opacity-50" dir="rtl">26 שנות ניסיון</p>
          </div>
          <div className="h-8 lg:h-10 w-px bg-white/5" />
          <div className="text-right font-bold">
            <p className="text-emerald-500 tracking-widest leading-none underline decoration-emerald-500/20">Sota_2.6_Ready</p>
            <p className="font-heebo leading-none mt-1.5 opacity-50" dir="rtl">תאימות רגולטורית</p>
          </div>
        </div>
      </header>

      {/* 2. Main Stage (Expanded Max Width & Min Height 0) */}
      <main className="flex-1 flex flex-col justify-center items-center relative z-20 w-full max-w-[1800px] overflow-hidden px-1 lg:px-4">
        <div className="glass-panel rounded-[2rem] lg:rounded-[3rem] p-5 lg:p-8 shadow-[0_0_80px_rgba(0,0,0,0.5)] h-full w-full flex flex-col relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 border-t border-r border-blue-500/10 rounded-tr-[2rem] lg:rounded-tr-[3rem] pointer-events-none group-hover:border-blue-500/30 transition-all duration-1000" />
          
          <div className="mb-4 lg:mb-6 text-left flex-shrink-0 relative z-10">
            <h2 className={`text-3xl lg:text-5xl font-bold text-white mb-2 tracking-tighter leading-none italic uppercase ${slides[currentSlide].title === 'NOSTOS_AI' ? 'font-nostos' : ''}`}>
              {slides[currentSlide].title}
            </h2>
            <div className="flex items-center gap-3 lg:gap-4 mt-2">
              <div className="h-px w-8 lg:w-12 bg-blue-500" />
              <p className={`text-blue-400 text-[9px] lg:text-xs font-bold ${slides[currentSlide].subtitle === 'Securing the Path Home.' ? 'font-nostos uppercase tracking-[0.1em]' : 'font-mono uppercase tracking-[0.3em]'}`}>
                {slides[currentSlide].subtitle}
              </p>
            </div>
          </div>
          
          {/* FIX: Removed overflow-y-auto. min-h-0 forces flex children to shrink instead of overflowing */}
          <div className="flex-1 flex flex-col justify-center items-center w-full relative z-10 min-h-0">
            {slides[currentSlide].content}
          </div>
        </div>
      </main>

      {/* 3. Footer (Tightened) */}
      <footer className="mt-3 md:mt-4 flex justify-between items-center w-full max-w-[1800px] relative z-20 flex-shrink-0 px-4 lg:px-8">
        <div className="flex gap-3 lg:gap-4">
          {slides.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-[3px] lg:h-[4px] rounded-full transition-all duration-500 cursor-pointer ${idx === currentSlide ? 'w-12 lg:w-16 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]' : 'w-3 lg:w-4 bg-white/10 hover:bg-white/20'}`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
        <div className="flex gap-4 lg:gap-6">
          <button onClick={prev} className={`p-4 lg:p-5 rounded-[2rem] bg-white/5 border border-white/5 text-white transition-all hover:border-blue-500 active:scale-90 ${currentSlide === 0 ? 'opacity-10 cursor-not-allowed' : ''}`}>
            <Icon name="ChevronLeft" size={24} className="lg:w-8 lg:h-8" />
          </button>
          <button onClick={next} className={`p-4 lg:p-5 rounded-[2rem] bg-blue-600 text-white shadow-xl transition-all hover:bg-blue-500 active:scale-95 ${currentSlide === slides.length - 1 ? 'opacity-10 cursor-not-allowed' : ''}`}>
            <Icon name="ChevronRight" size={24} className="lg:w-8 lg:h-8" />
          </button>
        </div>
      </footer>

      <div className="fixed top-0 right-0 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-blue-600/[0.03] blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none animate-pulse" />
      <div className="fixed bottom-0 left-0 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-indigo-600/[0.03] blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    </div>
  );
}