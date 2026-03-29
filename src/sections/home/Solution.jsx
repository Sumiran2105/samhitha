import { motion } from "framer-motion";
import { Activity, Apple, Leaf, Stethoscope } from "lucide-react";

const MotionDiv = motion.div;
const MotionArticle = motion.article;

const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 26 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: index * 0.12,
      ease: "easeOut",
    },
  }),
};

const solutions = [
  {
    icon: <Leaf size={20} />,
    label: "Natural Healing",
    title: "Ayurveda Support",
    desc: "Natural therapies designed to reduce inflammation and improve long-term joint comfort.",
  },
  {
    icon: <Apple size={20} />,
    label: "Recovery Fuel",
    title: "Nutrition",
    desc: "Targeted nutrition plans to support cartilage repair and overall joint health.",
  },
  {
    icon: <Activity size={20} />,
    label: "Movement Therapy",
    title: "Physiotherapy",
    desc: "Guided exercises to restore strength, mobility, and stability in your knee.",
  },
  {
    icon: <Stethoscope size={20} />,
    label: "Clinical Guidance",
    title: "Expert Orthopaedic Care",
    desc: "Doctor-led guidance to monitor progress and prevent the need for surgery.",
  },
];

const Solution = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-emerald-50 pb-14 pt-14 md:pb-16 md:pt-16">
      <MotionDiv
        className="absolute right-0 top-24 h-44 w-44 rounded-full bg-emerald-100/50 blur-3xl md:h-64 md:w-64"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <MotionDiv
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <MotionDiv className="mx-auto max-w-3xl text-center" variants={sectionFade}>
          <div className="mb-4 inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm backdrop-blur">
            The Solution
          </div>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            A Smarter Recovery System.
            <span className="mt-2 block text-emerald-700">
              Built To Reduce Pain Early And Protect The Joint Long Term.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
            Samhitha combines guided assessment, movement therapy, nutrition,
            and expert supervision into one connected program. Instead of
            chasing symptoms one by one, each step supports the next so
            recovery feels structured, measurable, and easier to sustain.
          </p>
        </MotionDiv>

        <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {solutions.map((item, index) => (
            <MotionArticle
              key={item.title}
              custom={index}
              variants={cardReveal}
              className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-white p-5 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-100/70 sm:p-7"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-100/0 to-emerald-200/40 opacity-0 transition pointer-events-none group-hover:opacity-100" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-sm font-semibold text-emerald-700">
                  {item.icon}
                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                  {item.label}
                </p>

                <h3 className="mt-3 text-lg font-semibold leading-snug text-gray-900 sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {item.desc}
                </p>
              </div>
            </MotionArticle>
          ))}
        </div>

        <MotionDiv
          className="mx-auto mt-12 max-w-4xl rounded-3xl border border-emerald-100 bg-emerald-50/60 px-5 py-7 text-center sm:mt-14 sm:px-6 sm:py-8"
          variants={sectionFade}
        >
          <p className="text-base font-semibold text-gray-900 sm:text-lg md:text-xl">
            The goal is simple: help you act early, recover with confidence,
            and stay farther away from avoidable surgery.
          </p>
        </MotionDiv>
      </MotionDiv>

    </section>
  );
};

export default Solution;
