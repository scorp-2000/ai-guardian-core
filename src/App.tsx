import { useState, useEffect, type FC } from 'react';
import * as Lucide from 'lucide-react';

/**
 * NOSTOS_AI Pitch Deck - Version 11.0 (Manual Zoom Override)
 * - Removed auto-scaling logic that crashed in Vercel iframe.
 * - Implemented direct user control via Mouse Wheel (onWheel).
 * - Added Zoom HUD in bottom-left corner.
 * - Slide 0 completely rebuilt to prevent flex-collapse overlaps.
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
  const [scale, setScale] = useState(0.85); // Default scale slightly zoomed out for safety

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

  // MANUAL ZOOM ENGINE (Mouse Wheel)
  const handleWheel = (e: React.WheelEvent) => {
    const zoomSensitivity = 0.05;
    const delta = e.deltaY > 0 ? -zoomSensitivity : zoomSensitivity;
    setScale((prev) => Math.min(Math.max(prev + delta, 0.3), 2.0));
  };

  if (!isReady) return (
    <div className="fixed inset-0 bg-[#020408] flex items-center justify-center">
      <div className="text-blue-500 font-mono animate-pulse tracking-[0.5em] text-xs uppercase">
        BOOTING_MANUAL_OVERRIDE_V11.0...
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
        // SLIDE 0 REBUILT: Strict column layout, no absolutes that can overlap
        <div className="flex flex-col items-center justify-center h-full w-full max-w-[1100px] mx-auto gap-8 pt-4">
          
          <div className="flex flex-col items-center gap-6">
            <div className="p-3 rounded-[24px] border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)] bg-slate-900/50 backdrop-blur-xl relative">
              <div className="absolute inset-0 bg-blue-600/20 blur-[40px] rounded-full animate-pulse -z-10" />
              <NostosLogo className="w-32 h-32 rounded-[16px]" />
            </div>
            <div className="text-center">
               <h2 className="text-6xl font-bold text-white tracking-tighter leading-none uppercase font-nostos">NOSTOS_AI</h2>
               <p className="text-blue-400 text-lg font-bold font-nostos uppercase tracking-[0.1em] mt-3">Securing the Path Home.</p>
            </div>
          </div>
          
          <div className="w-24 h-[2px] bg-blue-500/50" />

          <div className="flex flex-col items-center gap-6 w-full">
            <div className="text-center tracking-tighter w-full">
              <p className="text-blue-500 font-mono text-xs tracking-[0.4em] mb-4 uppercase underline underline-offset-8 decoration-blue-500/40">OUR MISSION IS:</p>
              <h1 className="text-5xl font-bold text-white leading-tight">
                Every worker returns home safely<br/>
                to their family. Every day.<br/>
              </h1>
              <span className="text-blue-500 text-5xl font-bold font-nostos no-exceptions-glow tracking-[0.05em] uppercase mt-4 block">NO EXCEPTIONS!</span>
            </div>
            
            <div className="pt-6 border-t border-white/5 font-heebo w-full max-w-[900px] text-center" dir="rtl">
              <p className="text-slate-400 font-bold text-3xl leading-relaxed">
                החזון שלנו: שכל פועל יחזור הביתה בשלום למשפחתו. בכל יום. <span className="text-blue-500">ללא פשרות.</span>
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
        <div className="grid grid-cols-2 gap-10 items-stretch h-full w-full pt-4 max-w-[1300px] mx-auto">
          <div className="flex flex-col justify-between gap-6">
             {[
               { icon: 'Heart', color: 'red', title: 'Human Safety', heb: 'ביטחון אנושי', desc: 'Zero fatalities as the only acceptable industry KPI.' },
               { icon: 'ShieldCheck', color: 'amber', title: 'Legal Protection', heb: 'הגנה משפטית', desc: 'Digital alibi for project managers and site owners.' },
               { icon: 'TrendingDown', color: 'blue', title: 'Operational Flow', heb: 'רציפות תפעולית', desc: 'Preventing work-stoppage orders costing ₪350k/day.' }
             ].map((item, idx) => (
               <div key={idx} className="p-8 bg-slate-900/40 backdrop-blur-md rounded-[24px] border border-white/5 border-l-4 border-l-blue-500/40 flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-center mb-3">
                     <h4 className="text-white font-bold text-base uppercase tracking-widest flex items-center gap-3">
                        <Icon name={item.icon} size={24} className="text-blue-400" /> {item.title}
                     </h4>
                     <span className="text-slate-500 font-heebo font-bold text-sm" dir="rtl">{item.heb}</span>
                  </div>
                  <p className="text-slate-400 text-base leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
          <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 p-10 rounded-[32px] flex flex-col justify-between h-full">
             <div className="space-y-10">
                <div className="space-y-4">
                   <div className="flex justify-between text-sm text-slate-500 font-mono tracking-widest italic uppercase"><span>MANUAL_AUDIT</span><span className="text-red-500 font-bold text-xl">85% RISK</span></div>
                   <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-red-600/80 w-[85%]" /></div>
                </div>
                <div className="space-y-4">
                   <div className="flex justify-between text-sm text-blue-400 font-mono tracking-widest italic font-bold uppercase"><span>NOSTOS_AI_SOTA</span><span className="text-blue-400 font-bold text-xl">12% RESIDUAL</span></div>
                   <div className="w-full h-5 bg-slate-800 rounded-full overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.1)]"><div className="h-full bg-blue-500 w-[12%] animate-pulse" /></div>
                </div>
             </div>
             <div className="mt-10 border-t border-white/5 pt-10 text-center flex flex-col justify-end flex-1">
               <p className="text-2xl text-slate-200 italic font-medium font-heebo leading-relaxed" dir="rtl">
                 "בטיחות היא לא הוצאה, היא ההשקעה בנכס היקר ביותר שלכם – <span className="text-blue-400 font-bold">האנשים.</span>"
               </p>
               
               <div className="mt-10 flex flex-col items-center gap-3">
                  <div className="flex items-center gap-3 px-8 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full">
                     <Icon name="Database" size={18} className="text-blue-400" />
                     <span className="text-sm text-blue-300 font-mono font-bold tracking-widest uppercase">
                        Source: OSHA / NIOSH Research
                     </span>
                  </div>
                  <p className="text-[11px] text-slate-600 font-mono uppercase tracking-[0.2em] mt-2">Based on 200,000+ observation hours</p>
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
        <div className="grid grid-cols-2 gap-10 items-stretch h-full w-full pt-4 max-w-[1300px] mx-auto">
           <div className="bg-black/60 backdrop-blur-md rounded-[32px] p-10 border border-blue-500/20 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute inset-0 opacity-20 cyber-grid" />
              <div className="flex justify-between items-center relative z-10">
                 <div className="px-4 py-2 bg-blue-500/20 rounded-full text-xs text-blue-400 font-mono tracking-widest flex items-center gap-3 border border-blue-500/30">
                    <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-ping" />
                    LIVE_FEED: 26.4 TOPS
                 </div>
                 <Icon name="Cpu" size={36} className="text-blue-500 animate-pulse" />
              </div>
              <div className="flex-1 flex items-center justify-center relative my-10">
                 <div className="w-56 h-56 border border-blue-500/20 rounded-full flex items-center justify-center relative">
                    <div className="absolute inset-0 border border-blue-500/30 rounded-full animate-ping opacity-20" />
                    <div className="w-32 h-32 border border-emerald-500/30 rounded-full flex items-center justify-center">
                       <div className="w-5 h-5 bg-emerald-500 rounded-full shadow-[0_0_20px_#10b981]" />
                    </div>
                    <div className="text-xs font-mono text-blue-400/60 uppercase absolute -bottom-10 tracking-widest">Homecoming_Core_Alpha</div>
                 </div>
              </div>
              <div className="p-5 bg-slate-900/80 rounded-[20px] border border-white/10 font-mono text-sm leading-relaxed text-blue-300 relative z-10 shadow-xl">
                 <p className="text-emerald-400 font-bold uppercase tracking-tighter">{`>> NOSTOS_YOLO26: ACTIVE`}</p>
                 <p className="text-red-500 font-bold animate-pulse uppercase tracking-tighter mt-1">{`>> WARNING: ZONE_BREACH [ID_42]`}</p>
                 <p className="text-blue-400 uppercase tracking-tighter mt-1">{`>> HAILO_LATENCY: 0.008s`}</p>
              </div>
           </div>
           <div className="flex flex-col justify-between gap-6 h-full relative z-10">
              {[
                { icon: 'Zap', color: 'blue', title: 'NMS-free Latency', heb: 'השהייה אפסית (NMS-free)', desc: 'Zero bottlenecks. Instant life-saving response.' },
                { icon: 'Lock', color: 'emerald', title: 'Data Sovereignty', heb: 'ריבונות מלאה על המידע', desc: '100% On-site. Full privacy and compliance.' },
                { icon: 'HeartPulse', color: 'purple', title: 'Life Preservation', heb: 'הצלת חיי אדם', desc: 'Predictive trajectory analytics for hazard prevention.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-center group flex-1 p-6 bg-slate-900/40 backdrop-blur-md rounded-[24px] border border-white/5">
                   <div className={`p-5 bg-slate-800 rounded-[20px] border border-${item.color}-500/20 group-hover:bg-${item.color}-500/10 transition-all flex-shrink-0`}>
                      <Icon name={item.icon} size={28} className={`text-${item.color}-400`} />
                   </div>
                   <div className="space-y-2 w-full">
                      <div className="flex items-center justify-between">
                        <h5 className="text-white font-bold text-lg uppercase italic tracking-widest leading-none">{item.title}</h5>
                        <span className="text-blue-400 font-heebo text-sm font-bold" dir="rtl">{item.heb}</span>
                      </div>
                      <p className="text-slate-400 text-base leading-relaxed">{item.desc}</p>
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
        <div className="flex flex-col items-center justify-center gap-12 h-full w-full pt-4 max-w-[1200px] mx-auto">
          <div className="p-10 bg-slate-900/60 backdrop-blur-md border border-emerald-500/30 rounded-[32px] w-full flex items-center justify-between shadow-2xl">
             <div className="text-left">
                <p className="text-emerald-500 font-mono text-base uppercase tracking-widest mb-3 font-bold">Sandbox Submission</p>
                <p className="text-white font-bold text-6xl tracking-tighter italic uppercase font-nostos">March 21</p>
             </div>
             <div className="text-right font-heebo" dir="rtl">
                <p className="text-emerald-400 text-3xl font-bold leading-none mb-3">המועד עודכן (מצב ביטחוני)</p>
                <p className="text-slate-400 text-lg">הזדמנות להצטרף כשותף Tier-1</p>
             </div>
          </div>
          <div className="grid grid-cols-2 gap-10 w-full">
             <div className="p-10 bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-[32px] flex items-center gap-8">
                <div className="p-6 bg-blue-600/20 rounded-2xl border border-blue-500/30"><Icon name="Users" className="text-blue-400 w-12 h-12" /></div>
                <div className="text-left">
                   <p className="text-white font-bold text-4xl tracking-tighter uppercase italic leading-none font-nostos">Arkady</p>
                   <p className="text-blue-500 font-mono text-sm tracking-widest uppercase mt-4 opacity-80 font-bold">System Architect</p>
                </div>
             </div>
             <div className="p-10 bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-[32px] flex flex-col justify-center text-right font-heebo" dir="rtl">
                <ul className="space-y-6 text-slate-300 text-xl font-medium">
                   <li className="flex items-center gap-5 justify-end"><span>מימון מלא (מענק רשות החדשנות)</span><Icon name="CheckCircle2" size={28} className="text-emerald-500" /></li>
                   <li className="flex items-center gap-5 justify-end"><span>מעמד רשמי מול הרגולטור (Sandbox)</span><Icon name="CheckCircle2" size={28} className="text-emerald-400" /></li>
                </ul>
             </div>
          </div>
          <div className="flex flex-col items-center gap-6 pt-6">
            <a 
              href="mailto:arkady.nostos@gmail.com?subject=Strategic%20Partnership%3A%20NOSTOS_AI%20Sandbox%202026&body=Hello%20Arkady%2C%0A%0AWe%20are%20interested%20in%20discussing%20the%20Design%20Partnership%20for%20the%20NOSTOS_AI%20platform.%0A%0APlease%20send%20us%20the%20LOI%20draft.%0A%0A%5BCompany%20Name%5D"
              className="bg-white hover:bg-blue-50 text-black px-20 py-8 rounded-full font-bold text-3xl transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] uppercase tracking-widest italic hover:scale-105 active:scale-95 flex items-center gap-5 font-nostos decoration-transparent"
            >
               Become a Design Partner
               <Icon name="ArrowRight" className="w-10 h-10" />
            </a>
            <p className="text-blue-500 font-mono text-sm uppercase tracking-[0.3em] font-bold animate-pulse">Contact: arkady.nostos@gmail.com</p>
          </div>
        </div>
      )
    }
  ];

  const next = () => currentSlide < slides.length - 1 && setCurrentSlide(currentSlide + 1);
  const prev = () => currentSlide > 0 && setCurrentSlide(currentSlide - 1);

  return (
    <div 
      className="fixed inset-0 bg-[#020408] overflow-hidden flex items-center justify-center selection:bg-blue-500/30"
      onWheel={handleWheel} // Перехват колесика мыши
    >
      
      {/* Global Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-40 pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-600/[0.05] blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none animate-pulse z-0" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-indigo-600/[0.05] blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none z-0" />

      {/* ZOOM HUD CONTROLLER */}
      <div className="absolute bottom-6 left-6 z-50 flex items-center gap-3 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 shadow-2xl group">
        <Icon name="ZoomIn" size={16} className="text-blue-500" />
        <button onClick={() => setScale(s => Math.max(0.3, s - 0.1))} className="text-slate-400 hover:text-white transition-colors p-1"><Icon name="Minus" size={16}/></button>
        <span className="font-mono text-sm font-bold text-blue-400 w-12 text-center">{Math.round(scale * 100)}%</span>
        <button onClick={() => setScale(s => Math.min(2.0, s + 0.1))} className="text-slate-400 hover:text-white transition-colors p-1"><Icon name="Plus" size={16}/></button>
        <div className="absolute -top-8 left-0 text-[9px] text-slate-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity w-[200px]">
          Use Mouse Wheel to Zoom
        </div>
      </div>

      {/* MANUAL SCALED CONTAINER */}
      <div 
        className="relative z-10 flex flex-col justify-between flex-shrink-0"
        style={{
          width: '1440px',
          height: '900px', // Увеличена базовая высота для запаса прочности
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          transition: 'transform 0.05s linear' // Плавный зум
        }}
      >
        {/* HEADER */}
        <header className="flex justify-between items-center w-full px-8 pt-6 shrink-0">
          <div className="flex items-center gap-6">
            <div className="p-3 bg-blue-600/10 border border-blue-500/30 rounded-[16px] flex items-center justify-center shadow-lg backdrop-blur-md">
              <NostosLogo className="w-14 h-14 rounded-[12px]" />
            </div>
            <div>
              <span className="text-3xl font-bold text-white uppercase tracking-tighter block leading-none font-nostos">NOSTOS_AI</span>
              <span className="text-[10px] text-blue-500 font-mono tracking-[0.3em] uppercase block mt-2 font-bold">Industrial_Intelligence</span>
            </div>
          </div>
          <div className="flex items-center gap-10 text-xs font-mono text-slate-500 tracking-[0.2em] uppercase">
            <div className="text-right">
              <p className="text-blue-400 font-bold italic font-nostos">Founder: Arkady</p>
              <p className="font-heebo opacity-50" dir="rtl">26 שנות ניסיון</p>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div className="text-right font-bold font-nostos">
              <p className="text-emerald-500 tracking-widest leading-none underline decoration-emerald-500/20">Sota_2.6_Ready</p>
              <p className="font-heebo leading-none mt-2 opacity-50" dir="rtl">תאימות רגולטורית</p>
            </div>
          </div>
        </header>

        {/* MAIN SLIDE CONTENT */}
        <main className="flex-1 w-full px-8 py-8 flex flex-col justify-center">
          <div className="bg-slate-900/20 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 h-full w-full flex flex-col relative overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 right-0 w-40 h-40 border-t border-r border-blue-500/20 rounded-tr-[3rem] pointer-events-none" />
            
            {/* Inner Top Bar (Only on non-hero slides) */}
            {slides[currentSlide].title !== 'HERO' && (
              <div className="mb-8 flex-shrink-0">
                <h2 className="text-5xl font-bold text-white mb-3 tracking-tighter leading-none italic uppercase">
                  {slides[currentSlide].title}
                </h2>
                <div className="flex items-center gap-5">
                  <div className="h-[3px] w-16 bg-blue-500" />
                  <p className="text-blue-400 text-xs font-bold font-mono uppercase tracking-[0.4em]">
                    {slides[currentSlide].subtitle}
                  </p>
                </div>
              </div>
            )}
            
            {/* Content Area */}
            <div className="flex-1 w-full h-full flex flex-col">
              {slides[currentSlide].content}
            </div>
          </div>
        </main>

        {/* FOOTER CONTROLS */}
        <footer className="flex justify-between items-center w-full px-12 pb-6 shrink-0">
          <div className="flex gap-4">
            {slides.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-[5px] rounded-full transition-all duration-500 cursor-pointer ${idx === currentSlide ? 'w-24 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]' : 'w-6 bg-white/10 hover:bg-white/20'}`}
                onClick={() => setCurrentSlide(idx)}
              />
            ))}
          </div>
          <div className="flex gap-6">
            <button onClick={prev} className={`p-6 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-blue-500 active:scale-90 ${currentSlide === 0 ? 'opacity-10 cursor-not-allowed' : 'shadow-xl'}`}>
              <Icon name="ChevronLeft" size={32} />
            </button>
            <button onClick={next} className={`p-6 rounded-full bg-blue-600 text-white transition-all hover:bg-blue-500 active:scale-95 ${currentSlide === slides.length - 1 ? 'opacity-10 cursor-not-allowed' : 'shadow-[0_0_30px_rgba(59,130,246,0.6)]'}`}>
              <Icon name="ChevronRight" size={32} />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}