import { motion } from "framer-motion";
import { Activity, RefreshCcw, ShieldCheck, ArrowRight } from "lucide-react";
import HowItWorks from "../sections/home/HowItWorks";
import Problem from "../sections/home/Problem";
import Solution from "../sections/home/Solution";
import { Link } from "react-router-dom";

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const HowItWorksPage = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-[#fafcfa] px-4 py-12 sm:px-6 md:py-20 lg:py-24">
        {/* Background Accents */}
        <div className="pointer-events-none absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-emerald-200/20 blur-[100px]" />
        <div className="pointer-events-none absolute right-[-5%] top-[20%] h-[400px] w-[400px] rounded-full bg-teal-200/20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:items-center">
            
            {/* LEFT CONTENT */}
            <MotionDiv 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl"
            >
              <MotionDiv variants={itemVariants} className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-200/60 bg-white px-4 py-1.5 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-800">
                  How Samhitha Works
                </span>
              </MotionDiv>

              <MotionH1 
                variants={itemVariants} 
                className="text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]"
              >
                A clear recovery path
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                  built around your joint.
                </span>
              </MotionH1>

              <MotionP 
                variants={itemVariants} 
                className="mt-6 text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8"
              >
                The Samhitha journey goes beyond generic advice. We assess your exact condition, 
                diagnose the root cause, and curate an interconnected plan of physiotherapy, 
                nutrition, and Ayurvedic support.
              </MotionP>

              <MotionDiv variants={itemVariants} className="mt-8 flex flex-wrap gap-2">
                {[
                  { text: "Assessment-led", icon: Activity },
                  { text: "Integrated Plan", icon: RefreshCcw },
                  { text: "Guided Care", icon: ShieldCheck }
                ].map((item) => (
                  <span
                    key={item.text}
                    className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-700 shadow-sm transition-colors hover:border-emerald-300 hover:bg-emerald-50"
                  >
                    <item.icon className="h-3.5 w-3.5 text-emerald-500" />
                    {item.text}
                  </span>
                ))}
              </MotionDiv>

              <MotionDiv variants={itemVariants} className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/assessment"
                  className="group flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(16,185,129,0.25)] transition-all hover:bg-emerald-700 hover:shadow-[0_15px_30px_rgba(16,185,129,0.30)] hover:-translate-y-0.5"
                >
                  Start Assessment
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#journey-flow"
                  className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-800"
                >
                  View Recovery Flow
                </a>
              </MotionDiv>
            </MotionDiv>

            {/* RIGHT CONTENT - CONNECTED TIMELINE */}
            <MotionDiv 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative pl-10 sm:pl-12 lg:pl-14"
            >
              {/* Glowing vertical line track */}
              <div className="absolute bottom-6 left-[18px] top-6 w-[2px] rounded-full bg-emerald-100 sm:left-[22px] lg:left-[26px] overflow-hidden">
                <motion.div 
                  animate={{ y: ["-100%", "300%"] }} 
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 top-0 h-[30%] w-full bg-gradient-to-b from-transparent via-emerald-500 to-transparent shadow-[0_0_10px_rgba(16,185,129,0.8)]" 
                />
              </div>

              <div className="flex flex-col gap-8">
                {[
                  ["01", "Understand symptoms", "Start with a fast, guided clinical assessment to map your pain points.", Activity],
                  ["02", "Map the right support", "Find how customized natural therapies directly target your condition.", RefreshCcw],
                  ["03", "Move into recovery", "Follow a clear recovery plan with continuous expert oversight.", ShieldCheck],
                ].map(([step, title, desc, Icon], index) => (
                  <MotionDiv
                    variants={itemVariants}
                    key={step}
                    className="group relative"
                  >
                    {/* The Timeline Node */}
                    <div className="absolute -left-10 top-3 flex h-8 w-8 items-center justify-center rounded-full border-4 border-[#fafcfa] bg-emerald-100 text-[11px] font-black text-emerald-700 shadow-sm transition-all duration-300 group-hover:scale-125 group-hover:bg-emerald-500 group-hover:text-white sm:-left-12 sm:h-10 sm:w-10 sm:text-xs lg:-left-14 lg:h-12 lg:w-12 lg:text-sm">
                      {step}
                    </div>

                    {/* The Compact Card */}
                    <div className="relative rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-emerald-200 group-hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)] sm:p-6">
                      <div className="absolute right-0 top-0 -mr-6 -mt-6 h-24 w-24 rounded-full bg-emerald-400/10 blur-[24px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      
                      <div className="relative z-10 flex items-start gap-4 sm:gap-5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500 transition-colors group-hover:bg-emerald-100 group-hover:text-emerald-600 sm:h-12 sm:w-12">
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-slate-900 sm:text-lg lg:text-xl">{title}</h3>
                          <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">{desc}</p>
                        </div>
                      </div>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>

          </div>
        </div>
      </section>
      <Problem />
      <Solution />
      <div id="journey-flow">
        
        {/* <HowItWorks /> */}
      </div>
    </>
  );
};

export default HowItWorksPage;
