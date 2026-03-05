import { useState, useEffect, type FC } from 'react';
import * as Lucide from 'lucide-react';

/**
 * AI Guardian Pitch Deck - Version 4.5 (Perfect Center Fix)
 * - Zero Horizontal/Vertical Scroll Guarantee
 * - Centralized Flex Architecture
 * - Full Viewport Adaptivity for Laptops (13-16")
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

    // Force zero margin and hidden overflow on body
    const style = document.createElement('style');
    style.innerHTML = `
      body, html { margin: 0; padding: 0; overflow: hidden; width: 100%; height: 100%; box-sizing: border-box; background: #04060b; }
      *, *:before, *:after { box-sizing: inherit; }
    `;
    document.head.appendChild(style);

    tailwind.onload = () => setIsReady(true);
  }, []);

  if (!isReady) return (
    <div className="h-screen w-full bg-slate-950 flex items-center justify-center overflow-hidden">
      <div className="text-blue-500 font-mono animate-pulse uppercase tracking-[0.3em] text-xs">
        SYSTEM_READY_FOR_DEPLOYMENT...
      </div>
    </div>
  );

  const Icon: FC<IconProps> = ({ name, ...props }) => {
    const LucideIcon = Lucide[name as keyof typeof Lucide] as Lucide.LucideIcon;
    return LucideIcon ? <LucideIcon {...props} /> : <div className="w-6 h-6 bg-blue-500/20 rounded" />;
  };

  const slides = [
    {
      title: 'AI Guardian',
      subtitle: 'Next-Gen Safety & InsurTech',
      content: (
        <div className="flex flex-col items-center justify-center space-y-6 text-center h-full w-full max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/20 blur-[60px] rounded-full" />
            <div className="relative p-6 rounded-3xl bg-slate-900 border border-blue-500/40 shadow-2xl">
              <Icon name="Shield" className="w-12 h-12 md:w-16 md:h-16 text-blue-400 animate-pulse" />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic leading-none">
              Zero-Harm <span className="text-blue-500">Infrastructure</span>
            </h1>
            <div className="space-y-2 px-4">
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Proprietary <b>NMS-free YOLO26 & Edge AI</b> platform solving the $12B safety crisis.
              </p>
              <p className="text-blue-400 font-bold text-lg md:text-xl font-heebo" dir="rtl">
                דור העתיד של בטיחות וביטוח בענף הבנייה
              </p>
            </div>
          </div>
          <div className="flex gap-3 font-mono text-[9px] md:text-[10px] tracking-widest uppercase">
             <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-300">Grant: ₪1.5M</div>
             <div className="px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 font-bold">Sandbox: 10.03.2026</div>
          </div>
        </div>
      )
    },
    {
      title: 'The Economic Crisis',
      subtitle: 'Cost of Error',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch h-full py-2 text-left w-full max-w-4xl mx-auto">
          <div className="flex flex-col justify-between space-y-2">
             <div className="p-3 bg-red-900/10 border-l-4 border-red-500 rounded-r-2xl">
                <div className="flex justify-between items-center mb-1">
                   <h4 className="text-red-400 font-bold text-[9px] uppercase tracking-tighter">Operational Stoppage</h4>
                   <span className="text-red-500 font-heebo font-bold text-[9px]" dir="rtl">הפסקת עבודה</span>
                </div>
                <p className="text-slate-200 text-sm"><b>צו הפסקת עבודה</b> costs <b>₪350k/day</b>.</p>
             </div>
             <div className="p-3 bg-amber-900/10 border-l-4 border-amber-500 rounded-r-2xl">
                <div className="flex justify-between items-center mb-1">
                   <h4 className="text-amber-400 font-bold text-[9px] uppercase tracking-tighter">Criminal Liability</h4>
                   <span className="text-amber-500 font-heebo font-bold text-[9px]" dir="rtl">אחריות פלילית</span>
                </div>
                <p className="text-slate-200 text-sm">Direct risk for Site Managers.</p>
             </div>
             <div className="p-3 bg-blue-900/10 border-l-4 border-blue-500 rounded-r-2xl">
                <div className="flex justify-between items-center mb-1">
                   <h4 className="text-blue-400 font-bold text-[9px] uppercase tracking-tighter">Insurance Burden</h4>
                   <span className="text-blue-500 font-heebo font-bold text-[9px]" dir="rtl">נטל הביטוח</span>
                </div>
                <p className="text-slate-200 text-sm">Premiums surging by <b>25-30% YoY</b>.</p>
             </div>
          </div>
          <div className="bg-slate-900/60 p-5 rounded-[24px] border border-slate-800 flex flex-col justify-between h-full">
             <div className="space-y-3">
                <div className="space-y-1">
                   <div className="flex justify-between text-[9px] text-slate-400 font-mono italic uppercase tracking-tighter"><span>MANUAL AUDIT</span><span className="text-red-500 font-bold">85% RISK</span></div>
                   <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-red-600 w-[85%]" /></div>
                </div>
                <div className="space-y-1">
                   <div className="flex justify-between text-[9px] text-emerald-400 font-mono italic uppercase tracking-tighter"><span>AI GUARDIAN</span><span className="font-bold">12% RESIDUAL</span></div>
                   <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-emerald-500 w-[12%] animate-pulse" /></div>
                </div>
             </div>
             <div className="mt-2 border-t border-slate-800 pt-4">
               <p className="text-sm text-slate-200 italic font-medium font-heebo leading-tight text-center" dir="rtl">
                 "הופכים את הבטיחות מ<b>הוצאה</b> לכלי <b>ליצירת רווח</b>."
               </p>
               <p className="text-[7px] text-slate-500 font-mono mt-3 uppercase tracking-widest text-center">
                 Source: Construction Safety Index 2025
               </p>
             </div>
          </div>
        </div>
      )
    },
    {
      title: 'The Edge Advantage',
      subtitle: 'Technical Supremacy',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center h-full text-left w-full max-w-4xl mx-auto">
           <div className="bg-black rounded-[24px] p-5 border border-blue-500/30 h-full max-h-[220px] md:max-h-full flex flex-col justify-between relative overflow-hidden group">
              <div className="flex justify-between items-center">
                 <div className="px-2 py-0.5 bg-blue-500/20 rounded-full text-[9px] text-blue-400 font-mono border border-blue-500/30 tracking-widest">26.4 TOPS</div>
                 <Icon name="Cpu" size={24} className="text-blue-400 animate-pulse" />
              </div>
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 font-mono text-[9px] leading-tight text-blue-300">
                 <p className="text-emerald-400 font-bold">{`>> YOLO26_PIPELINE_INIT`}</p>
                 <p>{`>> SCANNING SITE_SECTOR_7...`}</p>
                 <p className="text-red-500 font-bold">{`>> ALERT: BREACH_DETECTED_0.02s`}</p>
                 <p>{`>> HAILO_NPU_CORE: ACTIVE`}</p>
              </div>
           </div>
           <div className="flex flex-col justify-center space-y-3 h-full px-2">
              {[
                { icon: 'Zap', color: 'blue', title: 'NMS-free Latency', desc: 'Real-time hazard detection.' },
                { icon: 'Lock', color: 'emerald', title: 'Data Sovereignty', desc: '100% On-site processing.' },
                { icon: 'Eye', color: 'purple', title: 'Predictive AI', desc: 'Zero-Harm analytics.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-center">
                   <div className={`p-2 bg-${item.color}-500/10 rounded-lg`}><Icon name={item.icon} size={18} className={`text-${item.color}-400`} /></div>
                   <div>
                      <h5 className="text-white font-bold text-[11px] md:text-xs uppercase italic leading-none">{item.title}</h5>
                      <p className="text-slate-400 text-[10px] mt-1 italic leading-tight">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      )
    },
    {
      title: 'Design Partnership',
      subtitle: 'Regulatory Sandbox 2026',
      content: (
        <div className="flex flex-col items-center justify-center space-y-4 h-full text-center w-full max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
             <div className="p-4 bg-slate-900/50 rounded-[24px] border border-slate-800 flex items-center gap-3 shadow-inner">
                <div className="p-2 bg-blue-600/20 rounded-xl border border-blue-500/30">
                   <Icon name="Users" className="text-blue-400 w-6 h-6" />
                </div>
                <div className="text-left">
                   <p className="text-white font-black text-lg tracking-tighter uppercase italic leading-none">Arkady</p>
                   <p className="text-blue-400 font-bold text-[9px] tracking-widest uppercase mt-1">26Y System Expertise</p>
                </div>
             </div>
             <div className="p-4 bg-blue-600/10 rounded-[24px] border border-blue-500/30 flex flex-col justify-center text-right font-heebo" dir="rtl">
                <ul className="space-y-1 text-slate-200 text-[11px] md:text-xs font-medium">
                   <li>✅ <b>אפס הוצאות:</b> מימון מלא ע"י רשות החדשנות</li>
                   <li>✅ <b>Sandbox:</b> מעמד רשמי מול משרד העבודה</li>
                </ul>
             </div>
          </div>
          
          <div className="flex flex-col items-center space-y-2 pt-2">
            <button className="bg-white hover:bg-blue-50 text-slate-950 px-12 py-3 rounded-full font-black text-lg transition-all shadow-2xl uppercase tracking-tighter italic hover:scale-105 active:scale-95">
               Sign LOI Now
            </button>
            <p className="text-blue-500 font-mono text-[9px] uppercase tracking-widest font-bold">Window Closes: March 10, 2026</p>
          </div>
          
          <p className="text-[9px] text-slate-600 font-mono tracking-[0.2em] uppercase italic font-heebo" dir="rtl">
            פרויקט פורץ דרך בבטיחות ובביטוח - ישראל 2026
          </p>
        </div>
      )
    }
  ];

  const next = () => currentSlide < slides.length - 1 && setCurrentSlide(currentSlide + 1);
  const prev = () => currentSlide > 0 && setCurrentSlide(currentSlide - 1);

  return (
    <div className="h-screen w-full bg-[#04060b] text-slate-100 p-4 md:p-6 flex flex-col items-center overflow-hidden relative selection:bg-blue-500/30">
      
      {/* Header - Fixed constraints */}
      <header className="flex justify-between items-center mb-4 relative z-10 flex-shrink-0 w-full max-w-5xl px-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-blue-600 rounded-lg shadow-lg shadow-blue-500/50">
            <Icon name="Shield" className="text-white w-5 h-5" />
          </div>
          <div>
            <span className="text-lg font-black text-white uppercase italic tracking-tighter block leading-none">AI Guardian</span>
            <span className="text-[7px] text-blue-500 font-mono tracking-[0.1em] uppercase block mt-0.5">SOTA Edge Intelligence</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4 text-[8px] font-mono text-slate-500 tracking-widest text-right uppercase">
          <div className="space-y-0.5 text-left">
            <p className="text-blue-400">Founder: Arkady</p>
            <p className="font-heebo" dir="rtl">26 שנות ניסיון</p>
          </div>
          <div className="h-5 w-px bg-slate-800" />
          <div className="space-y-0.5 text-left font-bold">
            <p className="text-emerald-500 uppercase tracking-tighter leading-none">Sota_2.6_Ready</p>
            <p className="font-heebo leading-none" dir="rtl">תאימות רגולטורית</p>
          </div>
        </div>
      </header>

      {/* Main Container - Absolute Centering */}
      <main className="flex-1 flex flex-col justify-center items-center relative z-10 w-full max-w-5xl overflow-hidden px-2">
        <div className="bg-slate-900/40 backdrop-blur-[40px] border border-white/5 rounded-[2.5rem] p-6 md:p-8 shadow-[0_0_100px_rgba(0,0,0,0.8)] h-full max-h-[75vh] w-full flex flex-col relative overflow-hidden group">
          
          <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-blue-500/10 rounded-tr-[2.5rem] pointer-events-none group-hover:border-blue-500/30 transition-all duration-700" />
          
          <div className="mb-4 text-left flex-shrink-0">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-1 tracking-tighter leading-none uppercase">{slides[currentSlide].title}</h2>
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-blue-500" />
              <p className="text-blue-400 text-xs md:text-sm font-black italic tracking-tight uppercase leading-none">{slides[currentSlide].subtitle}</p>
            </div>
          </div>
          
          <div className="flex-1 overflow-hidden flex flex-col justify-center items-center w-full">
            {slides[currentSlide].content}
          </div>
        </div>
      </main>

      {/* Footer - Consistent constraints */}
      <footer className="mt-4 flex justify-between items-center w-full max-w-5xl relative z-10 flex-shrink-0 px-4">
        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-[2px] rounded-full transition-all duration-500 cursor-pointer ${idx === currentSlide ? 'w-10 bg-blue-500 shadow-blue-400/50' : 'w-3 bg-slate-800 hover:bg-slate-700'}`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button onClick={prev} className={`p-3 rounded-2xl bg-slate-900 border border-slate-800 text-white transition-all shadow-xl ${currentSlide === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:border-blue-500 active:scale-90 hover:bg-slate-800'}`}>
            <Icon name="ChevronLeft" size={20} />
          </button>
          <button onClick={next} className={`p-3 rounded-2xl bg-blue-600 text-white shadow-lg transition-all ${currentSlide === slides.length - 1 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-blue-500 active:scale-90 shadow-blue-500/40 shadow-xl'}`}>
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>
      </footer>

      {/* Background Decor - Visual Depth without overflow */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-blue-600/[0.02] blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/[0.02] blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    </div>
  );
}