import { motion } from "framer-motion";

const MotionDiv = motion.div;

const differentiators = [
  {
    title: "Assessment-led care",
    desc: "We begin with structured symptom understanding instead of generic advice.",
  },
  {
    title: "Integrated recovery model",
    desc: "Physiotherapy, nutrition, natural support, and expert care are connected, not isolated.",
  },
  {
    title: "Joint preservation focus",
    desc: "The goal is to reduce degeneration early and extend healthy movement for longer.",
  },
  {
    title: "Guided progression",
    desc: "Every stage is designed to show what comes next, why it matters, and how recovery moves forward.",
  },
];

const WhatMakesUsDifferent = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-black uppercase tracking-[0.24em] text-emerald-700">
            What Makes Us Different
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            A more thoughtful way
            <span className="block text-emerald-700">to approach knee recovery.</span>
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Samhitha is designed to feel less like fragmented treatment and more like one guided system
            that responds to the real condition of the joint.
          </p>
        </MotionDiv>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {differentiators.map((item, index) => (
            <MotionDiv
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              className="group rounded-[1.75rem] border border-slate-100 bg-gradient-to-b from-white to-emerald-50/60 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-[0_24px_55px_rgba(16,185,129,0.10)]"
            >
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600" />
              <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.desc}
              </p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
