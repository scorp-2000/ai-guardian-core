import { useState, useEffect, type FC } from 'react';
import * as Lucide from 'lucide-react';

/**
 * AI Guardian Pitch Deck - Version 4.3 (Laptop Optimized)
 * - Zero Scroll Architecture (100vh fixed)
 * - Responsive UI for Laptop Screens
 * - Full TypeScript Compliance
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

    tailwind.onload = () => setIsReady(true);
  }, []);

  if (!isReady) return (
    <div className="h-screen bg-slate-950 flex items-center justify-center overflow-hidden">
      <div className="text-blue-500 font-mono animate-pulse uppercase tracking-[0.3em]">
        INITIALIZING_CORE_SYSTEM...
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
        <div className="flex flex-col items-center justify-center space-y-6 text-center h-full">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/20 blur-[80px] rounded-full" />
            <div className="relative p-6 rounded-3xl bg-slate-900 border border-blue-500/40 shadow-2xl">
              <Icon name="Shield" className="w-16 h-16 text-blue-400 animate-pulse" />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-none">
              Zero-Harm <span className="text-blue-500">Infrastructure</span>
            </h1>
            <div className="max-w-2xl space-y-2">
              <p className="text-slate-400 text-lg leading-relaxed">
                Proprietary <b>NMS-free YOLO26 & Edge AI</b> platform solving the $12B safety crisis.
              </p>
              <p className="text-blue-400 font-bold text-xl font-heebo" dir="rtl">
                דור העתיד של בטיחות וביטוח בענף הבנייה
              </p>
            </div>
          </div>
          <div className="flex gap-4 font-mono text-xs tracking-widest uppercase">
             <div className="px-5 py-2 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-300">Grant: ₪1.5M</div>
             <div className="px-5 py-2 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 font-bold tracking-tighter">Sandbox: 10.03.2026</div>
          </div>
        </div>
      )
    },
    {
      title: 'The Economic Crisis',
      subtitle: 'Cost of Error',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch h-full py-2">
          <div className="flex flex-col justify-between space-y-3">
             <div className="p-4 bg-red-900/10 border-l-4 border-red-500 rounded-r-2xl">
                <div className="flex justify-between items-center mb-1">
                   <h4 className="text-red-400 font-bold text-[10px] uppercase">Operational Stoppage</h4>
                   <span className="text-red-500 font-heebo font-bold text-[10px]" dir="rtl">הפסקת עבודה</span>
                </div>
                <p className="text-slate-200 text-base"><b>צו הפסקת עבודה</b> costs <b>₪350k/day</b>.</p>
             </div>
             <div className="p-4 bg-amber-900/10 border-l-4 border-amber-500 rounded-r-2xl">
                <div className="flex justify-between items-center mb-1">
                   <h4 className="text-amber-400 font-bold text-[10px] uppercase">Criminal Liability</h4>
                   <span className="text-amber-500 font-heebo font-bold text-[10px]" dir="rtl">אחריות פלילית</span>
                </div>
                <p className="text-slate-200 text-base">Direct risk for Site Managers.</p>
             </div>
             <div className="p-4 bg-blue-900/10 border-l-4 border-blue-500 rounded-r-2xl">
                <div className="flex justify-between items-center mb-1">
                   <h4 className="text-blue-400 font-bold text-[10px] uppercase">Insurance Burden</h4>
                   <span className="text-blue-500 font-heebo font-bold text-[10px]" dir="rtl">נטל הביטוח</span>
                </div>
                <p className="text-slate-200 text-base">Premiums surging by <b>25-30% YoY</b>.</p>
             </div>
          </div>
          <div className="bg-slate-900/60 p-6 rounded-[30px] border border-slate-800 flex flex-col justify-between">
             <div className="space-y-4">
                <div className="space-y-1">
                   <div className="flex justify-between text-[10px] text-slate-400 font-mono italic"><span>MANUAL AUDIT</span><span className="text-red-500 font-bold">85% RISK</span></div>
                   <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-red-600 w-[85%]" /></div>
                </div>
                <div className="space-y-1">
                   <div className="flex justify-between text-[10px] text-emerald-400 font-mono italic"><span>AI GUARDIAN</span><span className="font-bold">12% RESIDUAL</span></div>
                   <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-emerald-500 w-[12%] animate-pulse" /></div>
                </div>
             </div>
             <div className="mt-4 border-t border-slate-800 pt-4">
               <p className="text-base text-slate-200 italic font-medium font-heebo leading-tight" dir="rtl">
                 "הופכים את הבטיחות מ<b>הוצאה</b> לכלי <b>ליצירת רווח</b>."
               </p>
               <p className="text-[8px] text-slate-500 font-mono mt-2 uppercase tracking-widest text-center">
                 Source: Construction Safety Performance Index 2025
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
           <div className="bg-black rounded-[30px] p-6 border border-blue-500/30 h-full flex flex-col justify-between relative overflow-hidden group">
              <div className="flex justify-between items-center">
                 <div className="px-3 py-1 bg-blue-500/20 rounded-full text-[10px] text-blue-400 font-mono border border-blue-500/30">26.4 TOPS</div>
                 <Icon name="Cpu" size={32} className="text-blue-400 animate-pulse" />
              </div>
              <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800 font-mono text-[10px] leading-tight text-blue-300">
                 <p className="text-emerald-400 font-bold">{`>> YOLO26_PIPELINE_INIT`}</p>
                 <p>{`>> SCANNING SITE_SECTOR_7...`}</p>
                 <p className="text-red-500 font-bold">{`>> ALERT: BREACH_DETECTED_0.02s`}</p>
                 <p>{`>> HAILO_NPU_CORE: ACTIVE`}</p>
              </div>
           </div>
           <div className="flex flex-col justify-center space-y-4 h-full">
              <div className="flex gap-4 items-center">
                 <div className="p-3 bg-blue-500/10 rounded-xl"><Icon name="Zap" size={24} className="text-blue-400" /></div>
                 <div>
                    <h5 className="text-white font-bold text-sm uppercase italic leading-none">NMS-free Latency</h5>
                    <p className="text-slate-400 text-xs mt-1">Zero-bottleneck detection for real-time life prevention.</p>
                 </div>
              </div>
              <div className="flex gap-4 items-center">
                 <div className="p-3 bg-emerald-500/10 rounded-xl"><Icon name="Lock" size={24} className="text-emerald-400" /></div>
                 <div>
                    <h5 className="text-white font-bold text-sm uppercase italic leading-none">Data Sovereignty</h5>
                    <p className="text-slate-400 text-xs mt-1">100% on-site processing. Privacy by design.</p>
                 </div>
              </div>
              <div className="flex gap-4 items-center">
                 <div className="p-3 bg-purple-500/10 rounded-xl"><Icon name="Eye" size={24} className="text-purple-400" /></div>
                 <div>
                    <h5 className="text-white font-bold text-sm uppercase italic leading-none">Predictive Safety</h5>
                    <p className="text-slate-400 text-xs mt-1">Predicting accidents before they happen via AI.</p>
                 </div>
              </div>
           </div>
        </div>
      )
    },
    {
      title: 'Design Partnership',
      subtitle: 'Regulatory Sandbox 2026',
      content: (
        <div className="flex flex-col items-center justify-center space-y-6 h-full text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
             <div className="p-6 bg-slate-900/50 rounded-[30px] border border-slate-800 flex items-center gap-4 shadow-inner">
                <div className="p-3 bg-blue-600/20 rounded-2xl border border-blue-500/30">
                   <Icon name="Users" className="text-blue-400 w-8 h-8" />
                </div>
                <div className="text-left">
                   <p className="text-white font-black text-xl tracking-tighter uppercase italic">Arkady</p>
                   <p className="text-blue-400 font-bold text-[10px] tracking-widest uppercase">26Y System Expertise</p>
                </div>
             </div>
             <div className="p-6 bg-blue-600/10 rounded-[30px] border border-blue-500/30 flex flex-col justify-center text-right font-heebo" dir="rtl">
                <ul className="space-y-1 text-slate-200 text-sm font-medium">
                   <li>✅ <b>אפס הוצאות:</b> מימון מלא ע"י רשות החדשנות</li>
                   <li>✅ <b>יתרון אסטרטגי:</b> השפעה על פיתוח ה-R&D</li>
                   <li>✅ <b>Sandbox:</b> מעמד רשמי מול משרד העבודה</li>
                </ul>
             </div>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <button className="bg-white hover:bg-blue-50 text-slate-950 px-16 py-4 rounded-full font-black text-xl transition-all shadow-2xl uppercase tracking-tighter italic hover:scale-105 active:scale-95">
               Sign LOI Now
            </button>
            <p className="text-blue-500 font-mono text-[10px] uppercase tracking-widest font-bold">Window Closes: March 10, 2026</p>
          </div>
          
          <p className="text-[10px] text-slate-600 font-mono tracking-[0.3em] uppercase italic font-heebo" dir="rtl">
            פרויקט פורץ דרך בבטיחות ובביטוח - ישראל 2026
          </p>
        </div>
      )
    }
  ];

  const next = () => currentSlide < slides.length - 1 && setCurrentSlide(currentSlide + 1);
  const prev = () => currentSlide > 0 && setCurrentSlide(currentSlide - 1);

  return (
    <div className="h-screen w-screen bg-[#04060b] text-slate-100 p-4 md:p-6 flex flex-col font-sans overflow-hidden relative">
      {/* Header - Reduced height */}
      <header className="flex justify-between items-center mb-4 relative z-10 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/50">
            <Icon name="Shield" className="text-white w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-black text-white uppercase italic tracking-tighter block leading-none">AI Guardian</span>
            <span className="text-[8px] text-blue-500 font-mono tracking-[0.2em] uppercase block mt-1">Edge Intelligence</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-[9px] font-mono text-slate-500 tracking-widest text-right uppercase">
          <div className="space-y-0.5">
            <p className="text-blue-400">Founder: Arkady</p>
            <p className="font-heebo" dir="rtl">26 שנות ניסיון</p>
          </div>
          <div className="h-6 w-px bg-slate-800" />
          <div className="space-y-0.5">
            <p className="text-emerald-500 font-bold">Sota_2.6_Ready</p>
            <p className="font-heebo" dir="rtl">תאימות רגולטורית</p>
          </div>
        </div>
      </header>

      {/* Main Container - Responsive Height */}
      <main className="flex-1 flex flex-col justify-center relative z-10 w-full max-w-6xl mx-auto overflow-hidden">
        <div className="bg-slate-900/40 backdrop-blur-[40px] border border-white/5 rounded-[3rem] p-8 md:p-12 shadow-[0_0_100px_rgba(0,0,0,0.8)] h-full max-h-[80vh] flex flex-col relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-blue-500/10 rounded-tr-[3rem] pointer-events-none group-hover:border-blue-500/30 transition-all duration-700" />
          
          <div className="mb-4 text-left flex-shrink-0">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tighter leading-none uppercase">{slides[currentSlide].title}</h2>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              <p className="text-blue-400 text-lg font-black italic tracking-tight uppercase leading-none">{slides[currentSlide].subtitle}</p>
            </div>
          </div>
          
          <div className="flex-1 overflow-hidden">
            {slides[currentSlide].content}
          </div>
        </div>
      </main>

      {/* Footer - Reduced height */}
      <footer className="mt-4 flex justify-between items-center w-full max-w-6xl mx-auto relative z-10 flex-shrink-0 px-2">
        <div className="flex gap-3">
          {slides.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-[2px] rounded-full transition-all duration-500 cursor-pointer ${idx === currentSlide ? 'w-16 bg-blue-500' : 'w-4 bg-slate-800'}`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
        <div className="flex gap-4">
          <button onClick={prev} className={`p-4 rounded-[25px] bg-slate-900 border border-slate-800 text-white transition-all shadow-xl ${currentSlide === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:border-blue-500 active:scale-90'}`}>
            <Icon name="ChevronLeft" size={24} />
          </button>
          <button onClick={next} className={`p-4 rounded-[25px] bg-blue-600 text-white shadow-lg transition-all ${currentSlide === slides.length - 1 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-blue-500 active:scale-90 shadow-blue-500/50'}`}>
            <Icon name="ChevronRight" size={24} />
          </button>
        </div>
      </footer>

      {/* Background Ambience */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-blue-600/[0.03] blur-[200px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/[0.03] blur-[200px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    </div>
  );
}