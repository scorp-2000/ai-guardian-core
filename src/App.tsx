import { useState, useEffect, type FC } from 'react';
import * as Lucide from 'lucide-react';

/**
 * AI Guardian Pitch Deck - Version 5.2 (Native Mailto Fix)
 * - Replaced JS onClick with Native HTML Anchor for OS-level mailto routing
 * - Integrated Mailto Trigger for 'Become a Design Partner'
 * - De-personalized for global Tier-1 distribution
 * - Perfect Center & No-Scroll Architecture
 */

interface IconProps extends Lucide.LucideProps {
  name: string;
}

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const tailwind = document.createElement('script');
    tailwind.src = 'https://cdn.tailwindcss.com';
    document.head.appendChild(tailwind);

    const font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Heebo:wght@400;700;900&display=swap';
    document.head.appendChild(font);

    const style = document.createElement('style');
    style.innerHTML = `
      body, html { margin: 0; padding: 0; overflow: hidden; width: 100%; height: 100%; box-sizing: border-box; background: #04060b; color: #f1f5f9; }
      *, *:before, *:after { box-sizing: inherit; }
      .cyber-grid {
        background-image: 
          linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
        background-size: 40px 40px;
      }
      .scanline {
        width: 100%;
        height: 100px;
        z-index: 50;
        background: linear-gradient(0deg, transparent 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%);
        opacity: 0.2;
        position: absolute;
        bottom: 100%;
        animation: scan 6s linear infinite;
        pointer-events: none;
      }
      @keyframes scan {
        0% { bottom: 100%; }
        100% { bottom: -100px; }
      }
    `;
    document.head.appendChild(style);

    tailwind.onload = () => setIsReady(true);
  }, []);

  if (!isReady) return (
    <div className="h-screen w-full bg-[#04060b] flex items-center justify-center overflow-hidden">
      <div className="text-blue-500 font-mono animate-pulse uppercase tracking-[0.3em] text-xs">
        BOOTING_GUARDIAN_SYSTEM_V5.2...
      </div>
    </div>
  );

  const Icon: FC<IconProps> = ({ name, ...props }) => {
    const LucideIcon = (Lucide as any)[name] as Lucide.LucideIcon;
    return LucideIcon ? <LucideIcon {...props} /> : <div className="w-6 h-6 bg-blue-500/20 rounded" />;
  };

  const slides = [
    {
      title: 'AI Guardian',
      subtitle: 'Next-Gen Safety & InsurTech',
      content: (
        <div className="flex flex-col items-center justify-center space-y-6 text-center h-full w-full max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/30 blur-[80px] rounded-full animate-pulse" />
            <div className="relative p-8 rounded-[40px] bg-slate-900 border border-blue-500/40 shadow-[0_0_50px_rgba(59,130,246,0.15)]">
              <Icon name="Shield" className="w-16 h-16 text-blue-400" />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-none">
              Zero-Harm <span className="text-blue-500">Infrastructure</span>
            </h1>
            <div className="space-y-2 px-4">
              <p className="text-slate-400 text-lg leading-relaxed">
                Proprietary <b>NMS-free YOLO26 & Edge AI</b> platform solving the $12B safety crisis.
              </p>
              <p className="text-blue-400 font-bold text-2xl font-heebo" dir="rtl">
                דור העתיד של בטיחות וביטוח בענף הבנייה
              </p>
            </div>
          </div>
          <div className="flex gap-4 font-mono text-[10px] tracking-widest uppercase">
             <div className="px-5 py-2 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-300">Grant: ₪1.5M</div>
             <div className="px-5 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 font-bold">Updated Deadline: 21.03.2026</div>
          </div>
        </div>
      )
    },
    {
      title: 'Economic Impact',
      subtitle: 'Cost of Error Mitigation',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch h-full py-2 text-left w-full max-w-4xl mx-auto">
          <div className="flex flex-col justify-between space-y-2">
             {[
               { icon: 'AlertTriangle', color: 'red', title: 'Operational Stoppage', heb: 'הפסקת עבודה', desc: '₪350k/day site freeze risk.' },
               { icon: 'Lock', color: 'amber', title: 'Criminal Liability', heb: 'אחריות פלילית', desc: 'Personal risk for Site Managers.' },
               { icon: 'TrendingDown', color: 'blue', title: 'Insurance Burden', heb: 'נטל הביטוח', desc: '25-30% premium surge annually.' }
             ].map((item, idx) => (
               <div key={idx} className={`p-4 bg-${item.color}-900/10 border-l-4 border-${item.color}-500 rounded-r-2xl transition-all hover:bg-${item.color}-900/20`}>
                  <div className="flex justify-between items-center mb-1">
                     <h4 className={`text-${item.color}-400 font-bold text-[10px] uppercase tracking-widest flex items-center gap-2`}>
                        <Icon name={item.icon} size={14} /> {item.title}
                     </h4>
                     <span className={`text-${item.color}-500 font-heebo font-bold text-[11px]`} dir="rtl">{item.heb}</span>
                  </div>
                  <p className="text-slate-200 text-[13px] font-medium leading-tight">{item.desc}</p>
               </div>
             ))}
          </div>
          <div className="bg-slate-900/60 p-6 rounded-[32px] border border-slate-800 flex flex-col justify-between h-full shadow-inner relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
             <div className="space-y-4">
                <div className="space-y-1">
                   <div className="flex justify-between text-[10px] text-slate-400 font-mono italic uppercase tracking-tighter"><span>MANUAL AUDIT</span><span className="text-red-500 font-bold">85% RISK</span></div>
                   <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-red-600 w-[85%]" /></div>
                </div>
                <div className="space-y-1">
                   <div className="flex justify-between text-[10px] text-emerald-400 font-mono italic uppercase tracking-tighter"><span>AI GUARDIAN</span><span className="font-bold">12% RESIDUAL</span></div>
                   <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-emerald-500 w-[12%] animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.3)]" /></div>
                </div>
             </div>
             <div className="mt-4 border-t border-slate-800 pt-4 relative z-10">
               <p className="text-base text-slate-200 italic font-medium font-heebo leading-tight text-center" dir="rtl">
                 "הופכים את הבטיחות מ<b>הוצאה</b> לכלי <b>ליצירת רווח</b>."
               </p>
               <p className="text-[8px] text-slate-500 font-mono mt-4 uppercase tracking-[0.2em] text-center">
                 Source: Construction Safety Index 2025
               </p>
             </div>
          </div>
        </div>
      )
    },
    {
      title: 'Technical Edge',
      subtitle: 'Hailo-8 / YOLO26 Architecture',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full text-left w-full max-w-4xl mx-auto">
           <div className="bg-black/90 rounded-[32px] p-6 border border-blue-500/30 h-full min-h-[300px] flex flex-col justify-between relative overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                 <svg width="100%" height="100%">
                    <pattern id="grid-inner" width="15" height="15" patternUnits="userSpaceOnUse">
                       <path d="M 15 0 L 0 0 0 15" fill="none" stroke="#3b82f6" strokeWidth="0.2"/>
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid-inner)" />
                 </svg>
              </div>
              
              <div className="flex justify-between items-center relative z-10">
                 <div className="px-2 py-0.5 bg-blue-500/20 rounded-full text-[9px] text-blue-400 font-mono border border-blue-500/30 tracking-widest flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" />
                    LIVE_FEED: 26.4 TOPS
                 </div>
                 <Icon name="Cpu" size={28} className="text-blue-400 animate-pulse" />
              </div>

              <div className="flex-1 flex items-center justify-center relative z-10">
                 <div className="w-40 h-40 border border-blue-500/20 rounded-full flex items-center justify-center relative">
                    <div className="absolute inset-0 border border-blue-500/40 rounded-full animate-ping opacity-10" />
                    <div className="w-24 h-24 border border-emerald-500/30 rounded-full flex items-center justify-center">
                       <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
                    </div>
                    <div className="absolute top-4 left-10 w-2 h-2 bg-red-500 rounded shadow-[0_0_12px_red] animate-bounce" />
                    <div className="text-[7px] font-mono text-blue-400/50 uppercase absolute -bottom-6 tracking-widest">NPU_Visual_Core_Alpha</div>
                 </div>
              </div>

              <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 font-mono text-[10px] leading-tight text-blue-300 relative z-10 backdrop-blur-md">
                 <p className="text-emerald-400 font-bold">{`>> YOLO26_PIPELINE: ACTIVE`}</p>
                 <p className="opacity-60">{`>> ANALYZING TRAJECTORIES...`}</p>
                 <p className="text-red-500 font-bold animate-pulse">{`>> WARNING: ZONE_BREACH [ID_42]`}</p>
                 <p className="text-blue-400">{`>> HAILO_LATENCY: 0.008s`}</p>
              </div>
           </div>

           <div className="flex flex-col justify-center space-y-5 h-full px-2 relative z-10">
              {[
                { icon: 'Zap', color: 'blue', title: 'NMS-free Latency', heb: 'השהייה אפסית (NMS-free)', desc: 'Zero bottlenecks. Life prevention.' },
                { icon: 'Lock', color: 'emerald', title: 'Data Sovereignty', heb: 'ריבונות מלאה על המידע', desc: '100% On-site. Privacy by design.' },
                { icon: 'Eye', color: 'purple', title: 'Predictive AI', heb: 'בינה מלאכותית חוזת עתיד', desc: 'Pre-accident trajectory analytics.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5 items-start group">
                   <div className={`p-3 bg-${item.color}-500/10 rounded-2xl border border-${item.color}-500/20 group-hover:bg-${item.color}-500/20 transition-all`}>
                      <Icon name={item.icon} size={20} className={`text-${item.color}-400`} />
                   </div>
                   <div className="space-y-1">
                      <div className="flex flex-col">
                        <h5 className="text-white font-black text-xs md:text-sm uppercase italic leading-none tracking-wider">{item.title}</h5>
                        <span className="text-emerald-400 font-heebo text-[11px] font-bold mt-1" dir="rtl">{item.heb}</span>
                      </div>
                      <p className="text-slate-400 text-[11px] leading-tight opacity-80 italic">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      )
    },
    {
      title: 'Strategic Roadmap',
      subtitle: 'Pilot & Partnership Opportunity',
      content: (
        <div className="flex flex-col items-center justify-center space-y-6 h-full text-center w-full max-w-4xl mx-auto px-4 relative z-10">
          <div className="p-5 bg-emerald-500/10 border border-emerald-500/30 rounded-[32px] w-full flex items-center justify-between shadow-lg">
             <div className="text-left">
                <p className="text-emerald-400 font-mono text-[10px] uppercase tracking-widest mb-1">New Submission Window</p>
                <p className="text-white font-black text-3xl tracking-tighter italic">MARCH 21, 23:59</p>
             </div>
             <div className="text-right font-heebo" dir="rtl">
                <p className="text-emerald-400 text-sm font-bold leading-none">המועד עודכן (מצב ביטחוני)</p>
                <p className="text-slate-400 text-[11px] mt-2">הזדמנות להצטרף כשותף Tier-1</p>
             </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
             <div className="p-5 bg-slate-900/50 rounded-[32px] border border-slate-800 flex items-center gap-4">
                <div className="p-3 bg-blue-600/20 rounded-2xl border border-blue-500/30 shadow-xl"><Icon name="Users" className="text-blue-400 w-8 h-8" /></div>
                <div className="text-left">
                   <p className="text-white font-black text-xl tracking-tighter uppercase italic leading-none">Arkady</p>
                   <p className="text-blue-400 font-bold text-[10px] tracking-[0.2em] uppercase mt-2 opacity-80">26Y Systems Expertise</p>
                </div>
             </div>
             <div className="p-5 bg-blue-600/10 rounded-[32px] border border-blue-500/30 flex flex-col justify-center text-right font-heebo shadow-inner" dir="rtl">
                <ul className="space-y-2 text-slate-200 text-sm font-medium">
                   <li className="flex items-center gap-2 justify-end"><span>מימון מלא (מענק רשות החדשנות)</span><Icon name="CheckCircle" size={14} className="text-emerald-400" /></li>
                   <li className="flex items-center gap-2 justify-end"><span>מעמד רשמי מול הרגולטור (Sandbox)</span><Icon name="CheckCircle" size={14} className="text-emerald-400" /></li>
                </ul>
             </div>
          </div>
          <div className="flex flex-col items-center space-y-3 pt-4">
            {/* Native HTML Anchor for guaranteed OS-level routing */}
            <a 
              href="mailto:arkadyand@gmail.com?subject=Strategic%20Partnership%3A%20AI%20Guardian%20Sandbox%202026&body=Hello%20Arkady%2C%0A%0AWe%20are%20interested%20in%20discussing%20the%20Design%20Partnership%20for%20the%20AI%20Guardian%20platform%20within%20the%20Ministry%20of%20Labor%20Sandbox.%0A%0APlease%20send%20us%20the%20LOI%20draft.%0A%0A%5BCompany%20Name%5D"
              className="bg-white hover:bg-blue-50 text-[#04060b] px-16 py-5 rounded-full font-black text-xl transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] uppercase tracking-widest italic hover:scale-105 active:scale-95 group inline-block decoration-transparent"
            >
               <span className="flex items-center justify-center gap-3">
                  Become a Design Partner
                  <Icon name="ArrowRight" className="group-hover:translate-x-1 transition-transform" />
               </span>
            </a>
            <p className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em] font-bold animate-pulse">Contact: arkadyand@gmail.com</p>
          </div>
        </div>
      )
    }
  ];

  const next = () => currentSlide < slides.length - 1 && setCurrentSlide(currentSlide + 1);
  const prev = () => currentSlide > 0 && setCurrentSlide(currentSlide - 1);

  return (
    <div className="h-screen w-full bg-[#04060b] text-slate-100 p-4 md:p-6 flex flex-col items-center overflow-hidden relative selection:bg-blue-500/30">
      
      {/* Background Layers - Intensified */}
      <div className="absolute inset-0 cyber-grid opacity-50 pointer-events-none" />
      <div className="scanline" />
      
      <header className="flex justify-between items-center mb-6 relative z-10 flex-shrink-0 w-full max-w-5xl px-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-transform hover:scale-110 cursor-pointer">
            <Icon name="Shield" className="text-white w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-black text-white uppercase italic tracking-tighter block leading-none">AI Guardian</span>
            <span className="text-[8px] text-blue-500 font-mono tracking-[0.2em] uppercase block mt-1.5 font-bold">Industrial Intelligence</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-[9px] font-mono text-slate-500 tracking-widest text-right uppercase">
          <div className="space-y-0.5 text-left">
            <p className="text-blue-400 italic">Founder: Arkady</p>
            <p className="font-heebo" dir="rtl">26 שנות ניסיון</p>
          </div>
          <div className="h-6 w-px bg-slate-800" />
          <div className="space-y-0.5 text-left font-bold">
            <p className="text-emerald-500 uppercase tracking-tighter leading-none">Sota_2.6_Ready</p>
            <p className="font-heebo leading-none" dir="rtl">תאימות רגולטורית</p>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col justify-center items-center relative z-10 w-full max-w-5xl overflow-hidden px-4">
        <div className="bg-slate-900/30 backdrop-blur-[60px] border border-white/5 rounded-[3rem] p-8 md:p-10 shadow-[0_0_100px_rgba(0,0,0,0.8)] h-full max-h-[76vh] w-full flex flex-col relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 border-t border-r border-blue-500/20 rounded-tr-[3rem] pointer-events-none group-hover:border-blue-500/50 transition-all duration-1000" />
          
          <div className="mb-6 text-left flex-shrink-0 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tighter leading-none uppercase">{slides[currentSlide].title}</h2>
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              <p className="text-blue-400 text-sm md:text-base font-black italic tracking-widest uppercase leading-none">{slides[currentSlide].subtitle}</p>
            </div>
          </div>
          
          <div className="flex-1 overflow-hidden flex flex-col justify-center items-center w-full relative z-10">
            {slides[currentSlide].content}
          </div>
        </div>
      </main>

      <footer className="mt-6 flex justify-between items-center w-full max-w-5xl relative z-10 flex-shrink-0 px-6">
        <div className="flex gap-3">
          {slides.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-[3px] rounded-full transition-all duration-700 cursor-pointer ${idx === currentSlide ? 'w-16 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]' : 'w-4 bg-slate-800 hover:bg-slate-700'}`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
        <div className="flex gap-4">
          <button onClick={prev} className={`p-4 rounded-3xl bg-slate-900/50 backdrop-blur border border-slate-800 text-white transition-all shadow-xl ${currentSlide === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:border-blue-500 active:scale-90 hover:bg-slate-800'}`}>
            <Icon name="ChevronLeft" size={24} />
          </button>
          <button onClick={next} className={`p-4 rounded-3xl bg-blue-600 text-white shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all ${currentSlide === slides.length - 1 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-blue-500 active:scale-90 shadow-blue-500/60 shadow-2xl'}`}>
            <Icon name="ChevronRight" size={24} />
          </button>
        </div>
      </footer>

      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-blue-600/[0.04] blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none animate-pulse" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/[0.04] blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    </div>
  );
}