import HowItWorks from "../sections/home/HowItWorks";
import Problem from "../sections/home/Problem";
import Solution from "../sections/home/Solution";
import { Link } from "react-router-dom";

const HowItWorksPage = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/70 to-white px-4 py-16 sm:px-6 md:py-20">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.08),transparent_26%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.75fr)] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">
                How Samhitha Works
              </p>
              <h1 className="mt-4 text-4xl font-black leading-[0.98] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                A clear recovery path
                <span className="block text-emerald-700">built around your joint health.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                This page brings the full Samhitha journey together, from understanding your condition
                to choosing the right combination of therapies, guided care, and recovery steps.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Assessment-led", "4-part solution plan", "Step-by-step recovery"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-emerald-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/assessment"
                  className="rounded-xl bg-primary px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-secondary"
                >
                  Start Assessment
                </Link>
                <a
                  href="#journey-flow"
                  className="rounded-xl border border-emerald-200 bg-white px-6 py-3 text-center text-sm font-semibold text-emerald-800 transition hover:border-emerald-300 hover:bg-emerald-50"
                >
                  View Recovery Flow
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                ["01", "Understand symptoms", "Start with a quick guided assessment."],
                ["02", "Map the right support", "See how each therapy fits your condition."],
                ["03", "Move into recovery", "Follow a clearer plan with expert guidance."],
              ].map(([step, title, desc]) => (
                <div
                  key={step}
                  className="rounded-[1.75rem] border border-emerald-100 bg-white/85 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold tracking-[0.18em] text-emerald-700">
                      {step}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-emerald-200 to-transparent" />
                  </div>
                  <h2 className="mt-4 text-lg font-bold text-slate-900">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Problem />
      <Solution />
      <div id="journey-flow">
        
        <HowItWorks />
      </div>
    </>
  );
};

export default HowItWorksPage;
