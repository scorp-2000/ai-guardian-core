import React, { useState, useEffect } from 'react';
import * as Lucide from 'lucide-react';

/**
 * AI Guardian Pitch Deck - Version 4.2 (Full Dual-Language EN/HE)
 * High-density business logic with local Hebrew context.
 */
export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const tailwind = document.createElement('script');
    tailwind.src = 'https://cdn.tailwindcss.com';
    document.head.appendChild(tailwind);

    const font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href =
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Heebo:wght@400;700;900&display=swap';
    document.head.appendChild(font);

    tailwind.onload = () => setIsReady(true);
  }, []);

  if (!isReady)
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-blue-500 font-mono animate-pulse uppercase tracking-widest">
          INITIALIZING_AI_GUARDIAN_CORE...
        </div>
      </div>
    );

  const Icon = ({ name, ...props }) => {
    const LucideIcon = Lucide[name];
    return LucideIcon ? (
      <LucideIcon {...props} />
    ) : (
      <div className="w-6 h-6 bg-blue-500/20 rounded" />
    );
  };

  const slides = [
    {
      title: 'AI Guardian',
      subtitle: 'Next-Gen Construction Safety & InsurTech Platform',
      content: (
        <div className="flex flex-col items-center space-y-12 text-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600/20 blur-[120px] rounded-full" />
            <div className="relative p-10 rounded-[40px] bg-slate-900 border border-blue-500/40 shadow-2xl">
              <Icon
                name="Shield"
                className="w-24 h-24 text-blue-400 animate-pulse"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase italic">
              Zero-Harm <span className="text-blue-500">Infrastructure</span>
            </h1>
            <div className="max-w-3xl space-y-4">
              <p className="text-slate-400 mx-auto text-xl leading-relaxed">
                Leveraging <b>26 years of industrial leadership</b> to solve the
                $12B safety crisis through proprietary{' '}
                <b>NMS-free YOLO26 & Edge AI</b>.
              </p>
              <p
                className="text-blue-400 font-bold text-2xl font-heebo"
                dir="rtl"
              >
                דור העתיד של בטיחות וביטוח בענף הבנייה - פלטפורמת AI מבוססת קצה
                (Edge)
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 pt-6 font-mono text-sm tracking-widest uppercase">
            <div className="px-8 py-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-blue-300">
              Grant IIA: ₪1.5M
            </div>
            <div className="px-8 py-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 font-bold">
              Sandbox Deadline: 10.03.2026
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'The Economic Crisis',
      subtitle: 'Cost of Error & Regulatory Pressure',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
          <div className="space-y-6">
            <div className="p-6 bg-red-900/10 border-l-4 border-red-500 rounded-r-3xl">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-red-400 font-bold flex items-center gap-2 text-xs uppercase tracking-widest">
                  <Icon name="AlertTriangle" size={16} /> Operational Stoppage
                </h4>
                <span
                  className="text-red-500 font-heebo font-bold text-xs"
                  dir="rtl"
                >
                  הפסקת עבודה תפעולית
                </span>
              </div>
              <p className="text-slate-200 text-lg leading-tight">
                <b>צו הפסקת עבודה</b> costs avg. <b>₪350,000 per day</b>.
              </p>
              <p
                className="text-slate-400 text-xs mt-2 italic font-heebo"
                dir="rtl"
              >
                טעות אחת במיגון אישי מקפיאה פרויקטים של מיליונים באופן מיידי.
              </p>
            </div>
            <div className="p-6 bg-amber-900/10 border-l-4 border-amber-500 rounded-r-3xl">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-amber-400 font-bold flex items-center gap-2 text-xs uppercase tracking-widest">
                  <Icon name="Lock" size={16} /> Personal Liability
                </h4>
                <span
                  className="text-amber-500 font-heebo font-bold text-xs"
                  dir="rtl"
                >
                  אחריות פלילית אישית
                </span>
              </div>
              <p className="text-slate-200 text-lg leading-tight">
                Direct <b>Criminal Liability</b> for Site Managers.
              </p>
              <p
                className="text-slate-400 text-xs mt-2 italic font-heebo"
                dir="rtl"
              >
                ללא "אליבי דיגיטלי" לא קיימת הגנה משפטית מול חקירות משרד העבודה.
              </p>
            </div>
            <div className="p-6 bg-blue-900/10 border-l-4 border-blue-500 rounded-r-3xl">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-blue-400 font-bold flex items-center gap-2 text-xs uppercase tracking-widest">
                  <Icon name="TrendingDown" size={16} /> Insurance Burden
                </h4>
                <span
                  className="text-blue-500 font-heebo font-bold text-xs"
                  dir="rtl"
                >
                  נטל הביטוח
                </span>
              </div>
              <p className="text-slate-200 text-lg leading-tight">
                Premiums surging by <b>25-30% YoY</b>.
              </p>
              <p
                className="text-slate-400 text-xs mt-2 italic font-heebo"
                dir="rtl"
              >
                חוסר במידע אובייקטיבי עבור חברות הביטוח מונע הנחות בפרמיה.
              </p>
            </div>
          </div>
          <div className="bg-slate-900/60 p-10 rounded-[40px] border border-slate-800 shadow-inner">
            <div className="flex justify-between items-center mb-8">
              <p className="text-xs text-slate-500 uppercase font-mono tracking-widest">
                InsurTech Opportunity
              </p>
              <Icon name="BarChart3" className="text-blue-500" />
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-400 font-mono tracking-tighter">
                  <span>MANUAL AUDIT</span>
                  <span className="text-red-500 font-bold">85% RISK</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-600 w-[85%]" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-emerald-400 font-mono tracking-tighter">
                  <span>AI GUARDIAN</span>
                  <span className="font-bold">12% RESIDUAL RISK</span>
                </div>
                <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[12%] shadow-[0_0_15px_rgba(16,185,129,0.4)] animate-pulse" />
                </div>
              </div>
            </div>
            <div className="mt-10 border-t border-slate-800 pt-6">
              <p
                className="text-lg text-slate-200 italic font-medium leading-relaxed font-heebo"
                dir="rtl"
              >
                "אנחנו הופכים את הבטיחות מ<b>הוצאה</b> לכלי <b>ליצירת רווח</b>{' '}
                באמצעות הפחתת פרמיות ומניעת השבתות."
              </p>
              <p className="text-[9px] text-slate-500 font-mono mt-4 uppercase tracking-widest">
                Source: Construction Safety Performance Index 2025 / Internal
                R&D Analysis
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'The Edge Advantage',
      subtitle: 'NMS-free YOLO26 + Hailo-8 Integration',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
          <div className="bg-black rounded-[40px] p-10 border border-blue-500/30 h-[400px] relative overflow-hidden group">
            <div className="absolute top-6 right-8 flex gap-3">
              <div className="px-3 py-1 bg-blue-500/20 rounded-full text-[10px] text-blue-400 font-mono border border-blue-500/30">
                26.4 TOPS
              </div>
              <div className="px-3 py-1 bg-emerald-500/20 rounded-full text-[10px] text-emerald-400 font-mono border border-emerald-500/30 uppercase tracking-tighter">
                Edge_NPU: Active
              </div>
            </div>
            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4 text-blue-400">
                <Icon name="Cpu" size={48} className="animate-pulse" />
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                    Processing Node
                  </p>
                  <p className="text-2xl font-black text-white italic tracking-tighter">
                    HAILO-8 DRIVEN
                  </p>
                </div>
              </div>
              <div className="p-5 bg-slate-900/80 rounded-2xl border border-slate-800 font-mono text-[11px] leading-relaxed text-blue-300">
                <p className="text-emerald-400">{`>> INITIALIZING NMS-FREE PIPELINE...`}</p>
                <p>{`>> SCANNING SITE_SECTOR_7 [CRANE_OPS]...`}</p>
                <p className="text-red-500 font-bold">{`>> ALERT: ZONE_BREACH_DETECTED_0.02s`}</p>
                <p>{`>> LOCAL_ALERT_DISPATCHED_HAILO_NPU`}</p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="p-4 bg-blue-500/10 rounded-2xl h-fit border border-blue-500/20">
                <Icon name="Zap" className="text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h5 className="text-white font-bold text-lg uppercase italic">
                    NMS-free Latency
                  </h5>
                  <span
                    className="text-blue-400 font-heebo text-xs font-bold"
                    dir="rtl"
                  >
                    השהייה אפסית
                  </span>
                </div>
                <p className="text-slate-400 text-sm">
                  Zero-bottleneck detection. Eliminating redundant proposals for
                  real-time life prevention.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="p-4 bg-emerald-500/10 rounded-2xl h-fit border border-emerald-500/20">
                <Icon name="Lock" className="text-emerald-400" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h5 className="text-white font-bold text-lg uppercase italic">
                    Data Sovereignty
                  </h5>
                  <span
                    className="text-emerald-400 font-heebo text-xs font-bold"
                    dir="rtl"
                  >
                    ריבונות על מידע
                  </span>
                </div>
                <p className="text-slate-400 text-sm">
                  Video never leaves the site. No cloud dependency. 100% privacy
                  compliance (On-site processing).
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="p-4 bg-purple-500/10 rounded-2xl h-fit border border-purple-500/20">
                <Icon name="Eye" className="text-purple-400" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h5 className="text-white font-bold text-lg uppercase italic">
                    Predictive Safety
                  </h5>
                  <span
                    className="text-purple-400 font-heebo text-xs font-bold"
                    dir="rtl"
                  >
                    בטיחות חוזת פני עתיד
                  </span>
                </div>
                <p className="text-slate-400 text-sm">
                  Anticipating falls and collisions before they happen via
                  trajectory AI analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Design Partnership',
      subtitle: 'Regulatory Sandbox Deployment - Ministry of Labor',
      content: (
        <div className="flex flex-col items-center space-y-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            <div className="p-10 bg-slate-900/50 rounded-[50px] border border-slate-800 flex items-center gap-8 shadow-inner hover:border-blue-500/20 transition-all">
              <div className="p-5 bg-blue-600/20 rounded-3xl border border-blue-500/30 shadow-2xl">
                <Icon name="Users" className="text-blue-400 w-12 h-12" />
              </div>
              <div className="text-left">
                <p className="text-white font-black text-3xl tracking-tighter uppercase italic">
                  Arkady
                </p>
                <p className="text-blue-400 font-bold text-sm tracking-widest">
                  Founder | 26Y System Expertise
                </p>
                <p className="text-slate-500 text-xs mt-1 font-heebo" dir="rtl">
                  ניסיון של 26 שנה בניהול מערכות טכנולוגיות מורכבות
                </p>
              </div>
            </div>
            <div className="p-10 bg-blue-600/10 rounded-[50px] border border-blue-500/30 flex flex-col justify-center text-left relative overflow-hidden">
              <Icon
                name="Rocket"
                className="absolute -right-8 -bottom-8 w-32 h-32 text-blue-500/5 rotate-12"
              />
              <h5 className="text-blue-300 font-bold mb-4 uppercase text-xs tracking-widest flex items-center gap-2 font-mono">
                Partner Value Proposition
              </h5>
              <ul
                className="space-y-4 text-slate-200 font-medium font-heebo"
                dir="rtl"
              >
                <li className="flex gap-3">
                  <span>✅</span> <b>אפס הוצאות:</b> מימון מלא על ידי מענק רשות
                  החדשנות.
                </li>
                <li className="flex gap-3">
                  <span>✅</span> <b>יתרון אסטרטגי:</b> השפעה ישירה על פיתוח
                  ה-R&D.
                </li>
                <li className="flex gap-3">
                  <span>✅</span> <b>Sandbox:</b> מעמד רשמי מול הרגולטור (משרד
                  העבודה).
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <button className="bg-white hover:bg-blue-50 text-slate-950 px-24 py-6 rounded-full font-black text-3xl transition-all shadow-2xl shadow-blue-500/20 uppercase tracking-tighter italic hover:scale-105 active:scale-95">
              Sign LOI Now
            </button>
            <p className="text-blue-500 font-mono text-xs uppercase tracking-widest font-bold animate-pulse">
              Window Closes: March 10, 2026
            </p>
          </div>

          <p
            className="text-[11px] text-slate-600 font-mono tracking-[0.4em] uppercase italic font-heebo"
            dir="rtl"
          >
            פרויקט פורץ דרך בבטיחות ובביטוח - ישראל 2026
          </p>
        </div>
      ),
    },
  ];

  const next = () =>
    currentSlide < slides.length - 1 && setCurrentSlide(currentSlide + 1);
  const prev = () => currentSlide > 0 && setCurrentSlide(currentSlide - 1);

  return (
    <div className="min-h-screen bg-[#04060b] text-slate-100 p-8 md:p-12 flex flex-col font-sans selection:bg-blue-500/30">
      <header className="flex justify-between items-center mb-16 relative z-10">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-600 rounded-2xl shadow-2xl shadow-blue-500/50 hover:scale-110 transition-transform cursor-pointer">
            <Icon name="Shield" className="text-white w-10 h-10" />
          </div>
          <div>
            <span className="text-3xl font-black text-white uppercase italic tracking-tighter leading-none block">
              AI Guardian
            </span>
            <span className="text-[10px] text-blue-500 font-mono tracking-[0.3em] uppercase block mt-1">
              Industrial Edge Intelligence
            </span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-10 text-[11px] font-mono text-slate-500 tracking-widest text-right">
          <div className="space-y-1">
            <p className="text-blue-400">FOUNDER: ARKADY_SYSTEMS</p>
            <p className="font-heebo" dir="rtl">
              26 שנות ניסיון ניהולי
            </p>
          </div>
          <div className="h-10 w-px bg-slate-800" />
          <div className="space-y-1">
            <p className="text-emerald-500 font-bold uppercase">
              Sota_2.6_Ready
            </p>
            <p className="font-heebo" dir="rtl">
              תאימות רגולטורית מלאה
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full relative z-10">
        <div className="bg-slate-900/40 backdrop-blur-[60px] border border-white/5 rounded-[5rem] p-16 md:p-24 shadow-[0_0_150px_rgba(0,0,0,0.8)] min-h-[650px] flex flex-col relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 border-t-2 border-r-2 border-blue-500/10 rounded-tr-[5rem] pointer-events-none group-hover:border-blue-500/30 transition-all duration-700" />
          <div className="absolute bottom-0 left-0 w-48 h-48 border-b-2 border-l-2 border-blue-500/10 rounded-bl-[5rem] pointer-events-none group-hover:border-blue-500/30 transition-all duration-700" />

          <div className="mb-20 text-left">
            <h2 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-none uppercase">
              {slides[currentSlide].title}
            </h2>
            <div className="flex items-center gap-6">
              <div className="h-[2px] w-24 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
              <p className="text-blue-400 text-2xl font-black italic tracking-tight">
                {slides[currentSlide].subtitle}
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            {slides[currentSlide].content}
          </div>
        </div>
      </main>

      <footer className="mt-16 flex justify-between items-center max-w-7xl mx-auto w-full relative z-10">
        <div className="flex gap-5">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`h-[3px] rounded-full transition-all duration-700 cursor-pointer ${
                idx === currentSlide
                  ? 'w-32 bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.6)]'
                  : 'w-6 bg-slate-800 hover:bg-slate-700'
              }`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
        <div className="flex gap-6">
          <button
            onClick={prev}
            className={`p-8 rounded-[35px] bg-slate-900 border border-slate-800 text-white transition-all shadow-xl ${
              currentSlide === 0
                ? 'opacity-20 cursor-not-allowed'
                : 'hover:border-blue-500 hover:bg-slate-800 active:scale-90'
            }`}
          >
            <Icon name="ChevronLeft" size={40} />
          </button>
          <button
            onClick={next}
            className={`p-8 rounded-[35px] bg-blue-600 text-white shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all ${
              currentSlide === slides.length - 1
                ? 'opacity-20 cursor-not-allowed'
                : 'hover:bg-blue-500 hover:scale-110 active:scale-95 shadow-blue-500/50 shadow-2xl'
            }`}
          >
            <Icon name="ChevronRight" size={40} />
          </button>
        </div>
      </footer>

      <div className="fixed top-0 right-0 w-[1200px] h-[1200px] bg-blue-600/[0.04] blur-[300px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[1200px] h-[1200px] bg-indigo-600/[0.04] blur-[300px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    </div>
  );
}
