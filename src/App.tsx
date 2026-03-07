import { useState, useEffect, useRef, type FC } from 'react';
import * as Lucide from 'lucide-react';

/**
 * NOSTOS_AI Pitch Deck - Version 7.5 (Mathematical Scaling Engine)
 * - Architecture: Rigid 1440x810 (16:9) canvas.
 * - Engine: ResizeObserver dynamic transform: scale().
 * - Result: 0% layout shifts. Absolute pixel-perfect scaling on any device or iframe.
 * - Cleaned: Removed all media queries (md, lg) as the canvas is now absolute.
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

  // Initial CSS and Fonts injection
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

  // Mathematical Scaling Engine
  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      // Base Resolution: 1440x810 (16:9 SOTA)
      const scaleX = width / 1440;
      const scaleY = height / 810;
      // 0.98 multiplier provides a 2% aesthetic safe-margin to prevent edge-touching
      setScale(Math.min(scaleX, scaleY) * 0.98);
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  if (!isReady) return (
    <div className="h-screen w-full bg-[#020408] flex items-center justify-center">
      <div className="text-blue-500 font-mono animate-pulse tracking-[0.5em] text-xs uppercase">
        CALIBRATING_MATHEMATICAL_CANVAS_V7.5...
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
        <div className="flex flex-col items-center justify-center space-y-6 text-center h-full w-full max-w-5xl mx-auto px-4">
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-blue-600/30 blur-[100px] rounded-full animate-pulse" />
            <div className="relative p-2 rounded-[32px] glass-panel border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.2)] flex items-center justify-center flex-shrink-0">
              <NostosLogo className="w-32 h-32 rounded-[24px] drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]" />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2 tracking-tighter">
              <p className="text-blue-500 font-mono text-xs tracking-[0.4em] mb-2 uppercase underline underline-offset-8 decoration-blue-500/40">OUR MISSION IS:</p>
              <h1 className="text-6xl font-bold text-white leading-tight">
                Every worker returns home safely<br/>
                to their family.<br/>
                Every day.<br/>
                <span className="text-blue-500 no-exceptions-glow tracking-[0.05em] uppercase mt-2 block">NO EXCEPTIONS!</span>
              </h1>
            </div>
            
            <div className="pt-6 border-t border-white/5 font-heebo" dir="rtl">
              <p className="text-slate-400 font-bold text-2xl leading-relaxed">
                החזון שלנו: שכל פועל יחזור הביתה בשלום למשפחתו.<br/>
                בכל יום. <span className="text-blue-500">ללא פשרות.</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 font-mono text-xs tracking-widest uppercase pt-4 flex-shrink-0">
             <div className="px-5 py-3 bg-blue-500/5 border border-blue-500/20 rounded-xl text-blue-400 flex items-center gap-2">
                <Icon name="Cpu" size={16}/> NOSTOS_EDGE_V2.6
             </div>
             <div className="px-5 py-3 bg-emerald-500/5 border border-emerald-500/20 rounded-xl text-emerald-400 font-bold">
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
        <div className="grid grid-cols-2 gap-8 items-stretch h-full w-full max-w-[1300px] mx-auto">
          <div className="flex flex-col justify-between space-y-4">
             {[
               { icon: 'Heart', color: 'red', title: 'Human Safety', heb: 'ביטחון אנושי', desc: 'Zero fatalities as the only acceptable industry KPI.' },
               { icon: 'ShieldCheck', color: 'amber', title: 'Legal Protection', heb: 'הגנה משפטית', desc: 'Digital alibi for project managers and site owners.' },
               { icon: 'TrendingDown', color: 'blue', title: 'Operational Flow', heb: 'רציפות תפעולית', desc: 'Preventing work-stoppage orders costing ₪350k/day.' }
             ].map((item, idx) => (
               <div key={idx} className="p-6 glass-panel rounded-[24px] border-l-4 border-l-blue-500/40 hover:border-l-blue-500 transition-all duration-300 flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-center mb-2">
                     <h4 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-3">
                        <Icon name={item.icon} size={20} className="text-blue-400" /> {item.title}
                     </h4>
                     <span className="text-slate-500 font-heebo font-bold text-sm" dir="rtl">{item.heb}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
          <div className="glass-panel p-8 rounded-[32px] flex flex-col justify-between h-full relative overflow-hidden">
             <div className="space-y-8">
                <div className="space-y-3">
                   <div className="flex justify-between text-xs text-slate-500 font-mono tracking-widest italic uppercase"><span>MANUAL_AUDIT</span><span className="text-red-500 font-bold text-lg">85% RISK</span></div>
                   <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-red-600/80 w-[85%]" /></div>
                </div>
                <div className="space-y-3">
                   <div className="flex justify-between text-xs text-blue-400 font-mono tracking-widest italic font-bold uppercase"><span>NOSTOS_AI_SOTA</span><span className="text-blue-400 font-bold text-lg">12% RESIDUAL</span></div>
                   <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.1)]"><div className="h-full bg-blue-500 w-[12%] animate-pulse" /></div>
                </div>
             </div>
             <div className="mt-8 border-t border-white/5 pt-8 relative z-10 text-center flex flex-col justify-end flex-1">
               <p className="text-2xl text-slate-200 italic font-medium font-heebo leading-relaxed" dir="rtl">
                 "בטיחות היא לא הוצאה, היא ההשקעה בנכס היקר ביותר שלכם – <span className="text-blue-400 font-bold">האנשים.</span>"
               </p>
               
               <div className="mt-8 flex flex-col items-center gap-3">
                  <div className="flex items-center gap-3 px-6 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                     <Icon name="Database" size={16} className="text-blue-400" />
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
        <div className="grid grid-cols-2 gap-10 items-stretch h-full text-left w-full max-w-[1300px] mx-auto">
           <div className="bg-black/40 rounded-[32px] p-8 border border-blue-500/10 flex flex-col justify-between relative overflow-hidden group min-h-[350px]">
              <div className="absolute inset-0 opacity-10 cyber-grid" />
              <div className="flex justify-between items-center relative z-10">
                 <div className="px-4 py-1.5 bg-blue-500/20 rounded-full text-[10px] text-blue-400 font-mono tracking-widest flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" />
                    LIVE_FEED: 26.4 TOPS
                 </div>
                 <Icon name="Cpu" size={32} className="text-blue-500 animate-pulse" />
              </div>
              <div className="flex-1 flex items-center justify-center relative my-8">
                 <div className="w-48 h-48 border border-blue-500/10 rounded-full flex items-center justify-center relative">
                    <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-ping opacity-10" />
                    <div className="w-28 h-28 border border-emerald-500/20 rounded-full flex items-center justify-center">
                       <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_15px_#10b981]" />
                    </div>
                    <div className="text-xs font-mono text-blue-400/40 uppercase absolute -bottom-8 tracking-widest">Homecoming_Core</div>
                 </div>
              </div>
              <div className="p-5 glass-panel rounded-[16px] border border-white/5 font-mono text-xs leading-relaxed text-blue-300 relative z-10">
                 <p className="text-emerald-400 font-bold uppercase tracking-tighter">{`>> NOSTOS_YOLO26: ACTIVE`}</p>
                 <p className="text-red-500 font-bold animate-pulse uppercase tracking-tighter mt-1">{`>> WARNING: ZONE_BREACH [ID_42]`}</p>
                 <p className="text-blue-400 uppercase tracking-tighter mt-1">{`>> HAILO_LATENCY: 0.008s`}</p>
              </div>
           </div>
           <div className="flex flex-col justify-between space-y-4 h-full relative z-10">
              {[
                { icon: 'Zap', color: 'blue', title: 'NMS-free Latency', heb: 'השהייה אפסית (NMS-free)', desc: 'Zero bottlenecks. Instant life-saving response.' },
                { icon: 'Lock', color: 'emerald', title: 'Data Sovereignty', heb: 'ריבונות מלאה על המידע', desc: '100% On-site. Full privacy and compliance.' },
                { icon: 'HeartPulse', color: 'purple', title: 'Life Preservation', heb: 'הצלת חיי אדם', desc: 'Predictive trajectory analytics for hazard prevention.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start group flex-1">
                   <div className={`p-5 glass-panel rounded-[20px] border border-${item.color}-500/10 group-hover:bg-blue-500/10 transition-all shadow-lg flex-shrink-0`}>
                      <Icon name={item.icon} size={24} className={`text-${item.color}-400`} />
                   </div>
                   <div className="space-y-2 w-full pt-1">
                      <div className="flex items-center justify-between">
                        <h5 className="text-white font-bold text-base uppercase italic tracking-widest leading-none">{item.title}</h5>
                        <span className="text-blue-400 font-heebo text-sm font-bold" dir="rtl">{item.heb}</span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed opacity-90">{item.desc}</p>
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
        <div className="flex flex-col items-center justify-center space-y-10 h-full text-center w-full max-w-[1100px] mx-auto px-4 relative z-10">
          <div className="p-8 glass-panel border-emerald-500/20 rounded-[32px] w-full flex items-center justify-between shadow-xl gap-6">
             <div className="text-left">
                <p className="text-emerald-500 font-mono text-sm uppercase tracking-widest mb-2 font-bold">Sandbox Submission</p>
                <p className="text-white font-bold text-5xl tracking-tighter italic uppercase font-nostos">March 21</p>
             </div>
             <div className="text-right font-heebo" dir="rtl">
                <p className="text-emerald-400 text-xl font-bold leading-relaxed">המועד עודכן (מצב ביטחוני)</p>
                <p className="text-slate-400 text-sm mt-2">הזדמנות להצטרף כשותף Tier-1</p>
             </div>
          </div>
          <div className="grid grid-cols-2 gap-8 w-full">
             <div className="p-8 glass-panel rounded-[32px] flex items-center gap-6">
                <div className="p-5 bg-blue-600/10 rounded-2xl border border-blue-500/20 shadow-inner"><Icon name="Users" className="text-blue-400 w-10 h-10" /></div>
                <div className="text-left">
                   <p className="text-white font-bold text-3xl tracking-tighter uppercase italic leading-none font-nostos">Arkady</p>
                   <p className="text-blue-500 font-mono text-xs tracking-widest uppercase mt-3 opacity-80 font-bold">System Architect</p>
                </div>
             </div>
             <div className="p-8 glass-panel rounded-[32px] flex flex-col justify-center text-right font-heebo" dir="rtl">
                <ul className="space-y-4 text-slate-300 text-base font-medium">
                   <li className="flex items-center gap-4 justify-end"><span>מימון מלא (מענק רשות החדשנות)</span><Icon name="CheckCircle2" size={20} className="text-emerald-500" /></li>
                   <li className="flex items-center gap-4 justify-end"><span>מעמד רשמי מול הרגולטור (Sandbox)</span><Icon name="CheckCircle2" size={20} className="text-emerald-400" /></li>
                </ul>
             </div>
          </div>
          <div className="flex flex-col items-center space-y-5 pt-6">
            <a 
              href="mailto:arkady.nostos@gmail.com?subject=Strategic%20Partnership%3A%20NOSTOS_AI%20Sandbox%202026&body=Hello%20Arkady%2C%0A%0AWe%20are%20interested%20in%20discussing%20the%20Design%20Partnership%20for%20the%20NOSTOS_AI%20platform.%0A%0APlease%20send%20us%20the%20LOI%20draft.%0A%0A%5BCompany%20Name%5D"
              className="bg-white hover:bg-blue-50 text-black px-16 py-6 rounded-full font-bold text-2xl transition-all shadow-xl uppercase tracking-widest italic hover:scale-105 active:scale-95 group inline-block decoration-transparent font-nostos"
            >
               <span className="flex items-center justify-center gap-4">
                  Become a Design Partner
                  <Icon name="ArrowRight" className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
               </span>
            </a>
            <p className="text-blue-500 font-mono text-xs uppercase tracking-[0.3em] font-bold animate-pulse mt-2">Contact: arkady.nostos@gmail.com</p>
          </div>
        </div>
      )
    }
  ];

  const next = () => currentSlide < slides.length - 1 && setCurrentSlide(currentSlide + 1);
  const prev = () => currentSlide > 0 && setCurrentSlide(currentSlide - 1);

  return (
    <div ref={containerRef} className="w-full h-screen bg-[#020408] overflow-hidden flex items-center justify-center selection:bg-blue-500/30">
      <div 
        style={{
          width: '1440px',
          height: '810px',
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          transition: 'transform 0.1s ease-out'
        }}
        className="relative flex flex-col bg-[#020408] text-slate-100 p-8 shadow-[0_0_100px_rgba(0,0,0,1)]"
      >
        <div className="absolute inset-0 cyber-grid opacity-60 pointer-events-none" />
        
        {/* 1. Header */}
        <header className="flex justify-between items-center mb-6 relative z-20 flex-shrink-0 w-full px-4">
          <div className="flex items-center gap-5">
            <div className="p-2 bg-blue-600/10 border border-blue-500/30 rounded-[16px] flex items-center justify-center shadow-lg flex-shrink-0">
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

        {/* 2. Main Stage */}
        <main className="flex-1 flex flex-col justify-center items-center relative z-20 w-full overflow-hidden min-h-0">
          <div className="glass-panel rounded-[3rem] p-10 shadow-[0_0_80px_rgba(0,0,0,0.5)] h-full w-full flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-blue-500/10 rounded-tr-[3rem] pointer-events-none group-hover:border-blue-500/30 transition-all duration-1000" />
            
            <div className="mb-8 text-left flex-shrink-0 relative z-10">
              <h2 className={`text-6xl font-bold text-white mb-3 tracking-tighter leading-none italic uppercase ${slides[currentSlide].title === 'NOSTOS_AI' ? 'font-nostos' : ''}`}>
                {slides[currentSlide].title}
              </h2>
              <div className="flex items-center gap-5 mt-4">
                <div className="h-[2px] w-16 bg-blue-500" />
                <p className={`text-blue-400 text-sm font-bold ${slides[currentSlide].subtitle === 'Securing the Path Home.' ? 'font-nostos uppercase tracking-[0.1em]' : 'font-mono uppercase tracking-[0.4em]'}`}>
                  {slides[currentSlide].subtitle}
                </p>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col justify-center items-center w-full relative z-10 min-h-0">
              {slides[currentSlide].content}
            </div>
          </div>
        </main>

        {/* 3. Footer */}
        <footer className="mt-6 flex justify-between items-center w-full relative z-20 flex-shrink-0 px-8">
          <div className="flex gap-4">
            {slides.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-[4px] rounded-full transition-all duration-500 cursor-pointer ${idx === currentSlide ? 'w-20 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]' : 'w-6 bg-white/10 hover:bg-white/20'}`}
                onClick={() => setCurrentSlide(idx)}
              />
            ))}
          </div>
          <div className="flex gap-6">
            <button onClick={prev} className={`p-6 rounded-[2rem] bg-white/5 border border-white/5 text-white transition-all hover:border-blue-500 active:scale-90 ${currentSlide === 0 ? 'opacity-10 cursor-not-allowed' : ''}`}>
              <Icon name="ChevronLeft" size={28} />
            </button>
            <button onClick={next} className={`p-6 rounded-[2rem] bg-blue-600 text-white shadow-xl transition-all hover:bg-blue-500 active:scale-95 ${currentSlide === slides.length - 1 ? 'opacity-10 cursor-not-allowed' : ''}`}>
              <Icon name="ChevronRight" size={28} />
            </button>
          </div>
        </footer>

        <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-blue-600/[0.03] blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none animate-pulse" />
        <div className="fixed bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/[0.03] blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      </div>
    </div>
  );
}