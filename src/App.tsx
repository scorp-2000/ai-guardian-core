import { useState, useEffect, useRef, type FC } from 'react';
import * as Lucide from 'lucide-react';

/**
 * NOSTOS_AI Pitch Deck - Version 9.0 (Absolute Matrix Engine)
 * - Architecture: Fixed 1280x720 logical resolution (Figma-style).
 * - Scaling: Mathematical transform: scale() to fit any viewport perfectly.
 * - Fluidity: 0% layout shifts. No media queries. Absolute overlap prevention.
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
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

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
      body, html { margin: 0; padding: 0; overflow: hidden; width: 100%; height: 100%; background: #020408; color: #f1f5f9; }
      *, *:before, *:after { box-sizing: border-box; }
      .cyber-grid {
        background-image: 
          linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
        background-size: 40px 40px;
        mask-image: radial-gradient(circle at center, black, transparent 90%);
      }
      .no-exceptions-glow {
        text-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
      }
      .font-nostos { font-family: 'Michroma', sans-serif; }
    `;
    document.head.appendChild(style);

    tailwind.onload = () => setIsReady(true);
  }, []);

  // Absolute Scaling Engine
  useEffect(() => {
    const calculateScale = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      // Base Resolution 1280x720
      const scaleX = windowWidth / 1280;
      const scaleY = windowHeight / 720;
      // Use 0.96 to leave a 2% margin on all sides
      setScale(Math.min(scaleX, scaleY) * 0.96);
    };

    calculateScale();
    window.addEventListener('resize', calculateScale);
    return () => window.removeEventListener('resize', calculateScale);
  }, []);

  if (!isReady) return (
    <div className="h-screen w-full bg-[#020408] flex items-center justify-center">
      <div className="text-blue-500 font-mono animate-pulse tracking-[0.5em] text-xs uppercase">
        BOOTING_ABSOLUTE_MATRIX_V9.0...
      </div>
    </div>
  );

  const Icon: FC<IconProps> = ({ name, ...props }) => {
    const LucideIcon = (Lucide as any)[name] as Lucide.LucideIcon;
    return LucideIcon ? <LucideIcon {...props} /> : <div className="w-6 h-6 bg-blue-500/20 rounded" />;
  };

  const slides = [
    {
      title: 'HERO',
      content: (
        <div className="flex flex-col items-center justify-center h-full w-full max-w-[1000px] mx-auto gap-8 pt-4">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/30 blur-[60px] rounded-full animate-pulse" />
              <div className="relative p-2 rounded-[24px] border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)] bg-slate-900/50 backdrop-blur-xl">
                <NostosLogo className="w-24 h-24 rounded-[16px]" />
              </div>
            </div>
            <div className="text-center">
               <h2 className="text-5xl font-bold text-white tracking-tighter leading-none uppercase font-nostos">NOSTOS_AI</h2>
               <p className="text-blue-400 text-sm font-bold font-nostos uppercase tracking-[0.1em] mt-2">Securing the Path Home.</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-6 w-full mt-4">
            <div className="text-center tracking-tighter w-full">
              <p className="text-blue-500 font-mono text-xs tracking-[0.4em] mb-4 uppercase underline underline-offset-8 decoration-blue-500/40">OUR MISSION IS:</p>
              <h1 className="text-[44px] font-bold text-white leading-tight">
                Every worker returns home safely<br/>
                to their family. Every day.<br/>
                <span className="text-blue-500 no-exceptions-glow tracking-[0.05em] uppercase mt-2 block">NO EXCEPTIONS!</span>
              </h1>
            </div>
            
            <div className="pt-6 border-t border-white/5 font-heebo w-full max-w-[800px] text-center" dir="rtl">
              <p className="text-slate-400 font-bold text-2xl leading-relaxed">
                החזון שלנו: שכל פועל יחזור הביתה בשלום למשפחתו.<br/>
                בכל יום. <span className="text-blue-500">ללא פשרות.</span>
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Operational Integrity',
      subtitle: 'Eliminating Risks, Protecting People',
      content: (
        <div className="grid grid-cols-2 gap-10 items-stretch h-full w-full pt-4">
          <div className="flex flex-col justify-between gap-4">
             {[
               { icon: 'Heart', color: 'red', title: 'Human Safety', heb: 'ביטחון אנושי', desc: 'Zero fatalities as the only acceptable industry KPI.' },
               { icon: 'ShieldCheck', color: 'amber', title: 'Legal Protection', heb: 'הגנה משפטית', desc: 'Digital alibi for project managers and site owners.' },
               { icon: 'TrendingDown', color: 'blue', title: 'Operational Flow', heb: 'רציפות תפעולית', desc: 'Preventing work-stoppage orders costing ₪350k/day.' }
             ].map((item, idx) => (
               <div key={idx} className="p-6 bg-slate-900/40 backdrop-blur-md rounded-[20px] border border-white/5 border-l-4 border-l-blue-500/40 flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-center mb-2">
                     <h4 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-3">
                        <Icon name={item.icon} size={18} className="text-blue-400" /> {item.title}
                     </h4>
                     <span className="text-slate-500 font-heebo font-bold text-xs" dir="rtl">{item.heb}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
          <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 p-8 rounded-[24px] flex flex-col justify-between h-full">
             <div className="space-y-8">
                <div className="space-y-3">
                   <div className="flex justify-between text-xs text-slate-500 font-mono tracking-widest italic uppercase"><span>MANUAL_AUDIT</span><span className="text-red-500 font-bold text-base">85% RISK</span></div>
                   <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-red-600/80 w-[85%]" /></div>
                </div>
                <div className="space-y-3">
                   <div className="flex justify-between text-xs text-blue-400 font-mono tracking-widest italic font-bold uppercase"><span>NOSTOS_AI_SOTA</span><span className="text-blue-400 font-bold text-base">12% RESIDUAL</span></div>
                   <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.1)]"><div className="h-full bg-blue-500 w-[12%] animate-pulse" /></div>
                </div>
             </div>
             <div className="mt-8 border-t border-white/5 pt-8 text-center flex flex-col justify-end flex-1">
               <p className="text-xl text-slate-200 italic font-medium font-heebo leading-relaxed" dir="rtl">
                 "בטיחות היא לא הוצאה, היא ההשקעה בנכס היקר ביותר שלכם – <span className="text-blue-400 font-bold">האנשים.</span>"
               </p>
               
               <div className="mt-8 flex flex-col items-center gap-2">
                  <div className="flex items-center gap-3 px-6 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                     <Icon name="Database" size={14} className="text-blue-400" />
                     <span className="text-xs text-blue-300 font-mono font-bold tracking-widest uppercase">
                        Source: OSHA / NIOSH Research
                     </span>
                  </div>
                  <p className="text-[10px] text-slate-600 font-mono uppercase tracking-[0.2em] mt-2">Based on 200,000+ observation hours</p>
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
        <div className="grid grid-cols-2 gap-10 items-stretch h-full w-full pt-4">
           <div className="bg-black/60 backdrop-blur-md rounded-[24px] p-8 border border-blue-500/20 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute inset-0 opacity-20 cyber-grid" />
              <div className="flex justify-between items-center relative z-10">
                 <div className="px-3 py-1.5 bg-blue-500/20 rounded-full text-[10px] text-blue-400 font-mono tracking-widest flex items-center gap-2 border border-blue-500/30">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" />
                    LIVE_FEED: 26.4 TOPS
                 </div>
                 <Icon name="Cpu" size={28} className="text-blue-500 animate-pulse" />
              </div>
              <div className="flex-1 flex items-center justify-center relative my-8">
                 <div className="w-48 h-48 border border-blue-500/20 rounded-full flex items-center justify-center relative">
                    <div className="absolute inset-0 border border-blue-500/30 rounded-full animate-ping opacity-20" />
                    <div className="w-28 h-28 border border-emerald-500/30 rounded-full flex items-center justify-center">
                       <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_20px_#10b981]" />
                    </div>
                    <div className="text-[10px] font-mono text-blue-400/60 uppercase absolute -bottom-8 tracking-widest">Homecoming_Core_Alpha</div>
                 </div>
              </div>
              <div className="p-4 bg-slate-900/80 rounded-[16px] border border-white/10 font-mono text-xs leading-relaxed text-blue-300 relative z-10 shadow-xl">
                 <p className="text-emerald-400 font-bold uppercase tracking-tighter">{`>> NOSTOS_YOLO26: ACTIVE`}</p>
                 <p className="text-red-500 font-bold animate-pulse uppercase tracking-tighter mt-1">{`>> WARNING: ZONE_BREACH [ID_42]`}</p>
                 <p className="text-blue-400 uppercase tracking-tighter mt-1">{`>> HAILO_LATENCY: 0.008s`}</p>
              </div>
           </div>
           <div className="flex flex-col justify-between gap-4 h-full relative z-10">
              {[
                { icon: 'Zap', color: 'blue', title: 'NMS-free Latency', heb: 'השהייה אפסית (NMS-free)', desc: 'Zero bottlenecks. Instant life-saving response.' },
                { icon: 'Lock', color: 'emerald', title: 'Data Sovereignty', heb: 'ריבונות מלאה על המידע', desc: '100% On-site. Full privacy and compliance.' },
                { icon: 'HeartPulse', color: 'purple', title: 'Life Preservation', heb: 'הצלת חיי אדם', desc: 'Predictive trajectory analytics for hazard prevention.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5 items-start group flex-1 p-5 bg-slate-900/40 backdrop-blur-md rounded-[20px] border border-white/5">
                   <div className={`p-4 bg-slate-800 rounded-[16px] border border-${item.color}-500/20 group-hover:bg-${item.color}-500/10 transition-all flex-shrink-0`}>
                      <Icon name={item.icon} size={24} className={`text-${item.color}-400`} />
                   </div>
                   <div className="space-y-2 w-full pt-1">
                      <div className="flex items-center justify-between">
                        <h5 className="text-white font-bold text-sm uppercase italic tracking-widest leading-none">{item.title}</h5>
                        <span className="text-blue-400 font-heebo text-xs font-bold" dir="rtl">{item.heb}</span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
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
        <div className="flex flex-col items-center justify-center gap-10 h-full w-full pt-4">
          <div className="p-8 bg-slate-900/60 backdrop-blur-md border border-emerald-500/30 rounded-[32px] w-full flex items-center justify-between shadow-2xl">
             <div className="text-left">
                <p className="text-emerald-500 font-mono text-sm uppercase tracking-widest mb-2 font-bold">Sandbox Submission</p>
                <p className="text-white font-bold text-5xl tracking-tighter italic uppercase font-nostos">March 21</p>
             </div>
             <div className="text-right font-heebo" dir="rtl">
                <p className="text-emerald-400 text-2xl font-bold leading-none mb-2">המועד עודכן (מצב ביטחוני)</p>
                <p className="text-slate-400 text-sm">הזדמנות להצטרף כשותף Tier-1</p>
             </div>
          </div>
          <div className="grid grid-cols-2 gap-8 w-full">
             <div className="p-8 bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-[24px] flex items-center gap-6">
                <div className="p-5 bg-blue-600/20 rounded-2xl border border-blue-500/30"><Icon name="Users" className="text-blue-400 w-10 h-10" /></div>
                <div className="text-left">
                   <p className="text-white font-bold text-3xl tracking-tighter uppercase italic leading-none font-nostos">Arkady</p>
                   <p className="text-blue-500 font-mono text-xs tracking-widest uppercase mt-3 opacity-80 font-bold">System Architect</p>
                </div>
             </div>
             <div className="p-8 bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-[24px] flex flex-col justify-center text-right font-heebo" dir="rtl">
                <ul className="space-y-4 text-slate-300 text-lg font-medium">
                   <li className="flex items-center gap-4 justify-end"><span>מימון מלא (מענק רשות החדשנות)</span><Icon name="CheckCircle2" size={24} className="text-emerald-500" /></li>
                   <li className="flex items-center gap-4 justify-end"><span>מעמד רשמי מול הרגולטור (Sandbox)</span><Icon name="CheckCircle2" size={24} className="text-emerald-400" /></li>
                </ul>
             </div>
          </div>
          <div className="flex flex-col items-center gap-4 pt-4">
            <a 
              href="mailto:arkady.nostos@gmail.com?subject=Strategic%20Partnership%3A%20NOSTOS_AI%20Sandbox%202026&body=Hello%20Arkady%2C%0A%0AWe%20are%20interested%20in%20discussing%20the%20Design%20Partnership%20for%20the%20NOSTOS_AI%20platform.%0A%0APlease%20send%20us%20the%20LOI%20draft.%0A%0A%5BCompany%20Name%5D"
              className="bg-white hover:bg-blue-50 text-black px-16 py-6 rounded-full font-bold text-2xl transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] uppercase tracking-widest italic hover:scale-105 active:scale-95 flex items-center gap-4 font-nostos decoration-transparent"
            >
               Become a Design Partner
               <Icon name="ArrowRight" className="w-8 h-8" />
            </a>
            <p className="text-blue-500 font-mono text-xs uppercase tracking-[0.3em] font-bold animate-pulse">Contact: arkady.nostos@gmail.com</p>
          </div>
        </div>
      )
    }
  ];

  const next = () => currentSlide < slides.length - 1 && setCurrentSlide(currentSlide + 1);
  const prev = () => currentSlide > 0 && setCurrentSlide(currentSlide - 1);

  return (
    <div className="w-full h-screen bg-[#020408] overflow-hidden flex items-center justify-center relative selection:bg-blue-500/30">
      
      {/* Global Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-40 pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/[0.05] blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none animate-pulse z-0" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/[0.05] blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none z-0" />

      {/* ABSOLUTE MATRIX ENGINE: Fixed 1280x720 logical canvas */}
      <div 
        ref={containerRef}
        className="relative z-10 flex flex-col justify-between shrink-0"
        style={{
          width: '1280px',
          height: '720px',
          transform: `scale(${scale})`,
          transformOrigin: 'center center'
        }}
      >
        {/* HEADER */}
        <header className="flex justify-between items-center w-full px-4 pt-4 shrink-0">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-600/10 border border-blue-500/30 rounded-[12px] flex items-center justify-center shadow-lg backdrop-blur-md">
              <NostosLogo className="w-10 h-10 rounded-[8px]" />
            </div>
            <div>
              <span className="text-xl font-bold text-white uppercase tracking-tighter block leading-none font-nostos">NOSTOS_AI</span>
              <span className="text-[8px] text-blue-500 font-mono tracking-[0.3em] uppercase block mt-1.5 font-bold">Industrial_Intelligence</span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-[10px] font-mono text-slate-500 tracking-[0.2em] uppercase">
            <div className="text-right">
              <p className="text-blue-400 font-bold italic font-nostos">Founder: Arkady</p>
              <p className="font-heebo opacity-50" dir="rtl">26 שנות ניסיון</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="text-right font-bold font-nostos">
              <p className="text-emerald-500 tracking-widest leading-none underline decoration-emerald-500/20">Sota_2.6_Ready</p>
              <p className="font-heebo leading-none mt-1.5 opacity-50" dir="rtl">תאימות רגולטורית</p>
            </div>
          </div>
        </header>

        {/* MAIN SLIDE CONTENT */}
        <main className="flex-1 w-full px-4 py-6 flex flex-col justify-center">
          <div className="bg-slate-900/20 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 h-full w-full flex flex-col relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-blue-500/20 rounded-tr-[2.5rem] pointer-events-none" />
            
            {/* Inner Top Bar (Only on non-hero slides) */}
            {slides[currentSlide].title !== 'HERO' && (
              <div className="mb-6 flex-shrink-0">
                <h2 className="text-4xl font-bold text-white mb-2 tracking-tighter leading-none italic uppercase">
                  {slides[currentSlide].title}
                </h2>
                <div className="flex items-center gap-4">
                  <div className="h-[2px] w-12 bg-blue-500" />
                  <p className="text-blue-400 text-[10px] font-bold font-mono uppercase tracking-[0.4em]">
                    {slides[currentSlide].subtitle}
                  </p>
                </div>
              </div>
            )}
            
            {/* The actual content component */}
            <div className="flex-1 w-full h-full flex flex-col">
              {slides[currentSlide].content}
            </div>
          </div>
        </main>

        {/* FOOTER CONTROLS */}
        <footer className="flex justify-between items-center w-full px-8 pb-4 shrink-0">
          <div className="flex gap-3">
            {slides.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-[4px] rounded-full transition-all duration-500 cursor-pointer ${idx === currentSlide ? 'w-16 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]' : 'w-4 bg-white/10 hover:bg-white/20'}`}
                onClick={() => setCurrentSlide(idx)}
              />
            ))}
          </div>
          <div className="flex gap-4">
            <button onClick={prev} className={`p-4 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-blue-500 active:scale-90 ${currentSlide === 0 ? 'opacity-10 cursor-not-allowed' : 'shadow-lg'}`}>
              <Icon name="ChevronLeft" size={24} />
            </button>
            <button onClick={next} className={`p-4 rounded-full bg-blue-600 text-white transition-all hover:bg-blue-500 active:scale-95 ${currentSlide === slides.length - 1 ? 'opacity-10 cursor-not-allowed' : 'shadow-[0_0_20px_rgba(59,130,246,0.5)]'}`}>
              <Icon name="ChevronRight" size={24} />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}