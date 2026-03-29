import { motion } from "framer-motion";
import { Activity, ClipboardList, FileBarChart2, PlayCircle } from "lucide-react";

const MotionDiv = motion.div;

const steps = [
  {
    number: "01",
    icon: <PlayCircle size={18} />,
    title: "Sign Up",
    desc: "Create your account and begin your guided knee recovery journey.",
  },
  {
    number: "02",
    icon: <ClipboardList size={18} />,
    title: "Take Assessment",
    desc: "Answer simple questions so we can understand your symptoms and movement challenges.",
  },
  {
    number: "03",
    icon: <FileBarChart2 size={18} />,
    title: "Get Your Grade",
    desc: "See where your condition stands clearly, from early discomfort to more advanced stages.",
  },
  {
    number: "04",
    icon: <Activity size={18} />,
    title: "Start Recovery",
    desc: "Follow your personalized plan with the right support, therapies, and progression.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how"
      className="relative overflow-hidden bg-gradient-to-b from-white to-emerald-50 pb-20 pt-14 md:pb-24 md:pt-16"
    >
      <MotionDiv
        className="absolute left-0 top-20 h-48 w-48 rounded-full bg-emerald-200/18 blur-3xl md:h-72 md:w-72"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <MotionDiv
        className="absolute bottom-10 right-0 h-56 w-56 rounded-full bg-emerald-100/28 blur-3xl md:h-80 md:w-80"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <MotionDiv
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm backdrop-blur">
            How It Works
          </div>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            A Simple Process.
            <span className="mt-2 block text-emerald-700">
              Guided Step By Step.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
            From first assessment to active recovery, every stage is clearly mapped
            so you always know what comes next and how progress is moving forward.
          </p>
        </MotionDiv>

        <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-2 md:gap-6 xl:grid-cols-4 xl:gap-8">
          {steps.map((step, index) => (
            <MotionDiv
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
              className="group relative overflow-visible rounded-2xl border border-emerald-100/80 bg-white/90 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-100/70 sm:p-7"
            >
              <motion.div
                className="absolute inset-0 rounded-2xl border border-emerald-100/80 pointer-events-none"
                animate={{
                  borderColor: [
                    "rgba(209, 250, 229, 0.8)",
                    "rgba(16, 185, 129, 0.45)",
                    "rgba(209, 250, 229, 0.8)",
                    "rgba(209, 250, 229, 0.8)",
                  ],
                  boxShadow: [
                    "0 0 0 rgba(16, 185, 129, 0)",
                    "0 18px 40px rgba(16, 185, 129, 0.18)",
                    "0 0 0 rgba(16, 185, 129, 0)",
                    "0 0 0 rgba(16, 185, 129, 0)",
                  ],
                }}
                transition={{
                  duration: 6.4,
                  times: [0, 0.14, 0.24, 1],
                  repeat: Infinity,
                  repeatDelay: 0,
                  delay: index * 0.55,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-100/0 to-emerald-200/40 pointer-events-none"
                animate={{ opacity: [0, 0.95, 0.18, 0] }}
                transition={{
                  duration: 6.4,
                  times: [0, 0.14, 0.24, 1],
                  repeat: Infinity,
                  repeatDelay: 0,
                  delay: index * 0.55,
                  ease: "easeInOut",
                }}
              />

              <div className="absolute inset-x-6 top-0 h-1 overflow-hidden rounded-b-full bg-emerald-100">
                <motion.div
                  className="h-full w-20 rounded-full bg-gradient-to-r from-emerald-300 via-emerald-600 to-emerald-300"
                  animate={{ x: ["-120%", "220%"] }}
                  transition={{
                    duration: 2.1,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.28,
                  }}
                />
              </div>

              {index < steps.length - 1 ? (
                <div className="absolute left-[calc(100%-0.5rem)] top-1/2 hidden h-px w-8 -translate-y-1/2 md:block xl:w-12">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 to-emerald-300/70" />
                </div>
              ) : null}

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700"
                    animate={{
                      scale: [1, 1.12, 1, 1],
                      backgroundColor: ["#ecfdf5", "#d1fae5", "#ecfdf5", "#ecfdf5"],
                    }}
                    transition={{
                      duration: 6.4,
                      times: [0, 0.14, 0.24, 1],
                      repeat: Infinity,
                      repeatDelay: 0,
                      delay: index * 0.55,
                      ease: "easeInOut",
                    }}
                  >
                    {step.icon}
                  </motion.div>

                  <motion.div
                    className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-emerald-700"
                    animate={{
                      backgroundColor: ["#ecfdf5", "#d1fae5", "#ecfdf5", "#ecfdf5"],
                      color: ["#047857", "#065f46", "#047857", "#047857"],
                    }}
                    transition={{
                      duration: 6.4,
                      times: [0, 0.14, 0.24, 1],
                      repeat: Infinity,
                      repeatDelay: 0,
                      delay: index * 0.55,
                      ease: "easeInOut",
                    }}
                  >
                    {step.number}
                  </motion.div>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-gray-900 sm:mt-6 sm:text-xl">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {step.desc}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv
          className="mx-auto mt-12 max-w-4xl rounded-3xl border border-emerald-100 bg-white/60 px-5 py-7 text-center backdrop-blur-sm sm:mt-14 sm:px-6 sm:py-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="text-base font-semibold text-gray-900 sm:text-lg md:text-xl">
            Clear steps. No confusion. Just a guided path from assessment to recovery.
          </p>
        </MotionDiv>
      </div>
    </section>
  );
};

export default HowItWorks;
