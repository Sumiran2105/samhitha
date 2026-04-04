import { motion } from "framer-motion";
import jointImage from "../../assets/images/Joint.png";

const MotionDiv = motion.div;
const MotionImg = motion.img;

const grades = [
  {
    title: "Grade 1",
    subtitle: "Early Discomfort",
    desc: "Mild pain or stiffness. Fully reversible with early care.",
    color: "bg-green-500",
  },
  {
    title: "Grade 2",
    subtitle: "Mild Damage",
    desc: "Frequent pain with early mobility issues.",
    color: "bg-yellow-400",
  },
  {
    title: "Grade 3",
    subtitle: "Moderate Condition",
    desc: "Pain affects daily activities and movement.",
    color: "bg-orange-400",
  },
  {
    title: "Grade 4",
    subtitle: "Severe Stage",
    desc: "High pain and limited mobility. Surgery risk stage.",
    color: "bg-red-500",
  },
];

const highlightTransition = (index) => ({
  duration: 7.2,
  times: [0, 0.14, 0.26, 1],
  repeat: Infinity,
  repeatDelay: 0,
  delay: index * 0.62,
  ease: "easeInOut",
});

const Grading = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-emerald-50 py-24">
      <MotionImg
        src={jointImage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-8 hidden w-40 rotate-[10deg] opacity-80 md:block lg:w-52"
        initial={{ opacity: 0, x: 24, y: -12, rotate: 16 }}
        whileInView={{ opacity: 0.8, x: 0, y: 0, rotate: 10 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-4 inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm shadow-sm backdrop-blur">
            Your Knee Condition
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-[1.2]">
            Understand Your
            <span className="block text-emerald-700">
              Knee Health Stage
            </span>
          </h2>

          <p className="mt-4 text-gray-600">
            Your condition is categorized into stages — so you get the right care at the right time.
          </p>
        </div>

        {/* PROGRESSION BAR */}
        <div className="relative mt-20">

          {/* Line */}
          <div className="absolute left-0 top-6 h-1 w-full rounded-full bg-gray-200" />

          <div className="grid gap-8 md:grid-cols-4">

            {grades.map((grade, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center"
              >
                <motion.div
                  className="absolute left-1/2 top-6 z-0 hidden h-1 -translate-y-1/2 md:block"
                  style={{
                    width: index < grades.length - 1 ? "calc(100% - 1rem)" : 0,
                  }}
                  animate={{
                    background: [
                      "linear-gradient(90deg, rgba(229,231,235,1) 0%, rgba(229,231,235,1) 100%)",
                      "linear-gradient(90deg, rgba(16,185,129,0.45) 0%, rgba(52,211,153,0.9) 100%)",
                      "linear-gradient(90deg, rgba(229,231,235,1) 0%, rgba(229,231,235,1) 100%)",
                      "linear-gradient(90deg, rgba(229,231,235,1) 0%, rgba(229,231,235,1) 100%)",
                    ],
                  }}
                  transition={highlightTransition(index)}
                />

                {/* DOT */}
                <motion.div
                  className={`relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full ${grade.color} font-semibold text-white shadow-md`}
                  animate={{
                    scale: [1, 1.22, 1, 1],
                    boxShadow: [
                      "0 8px 18px rgba(0,0,0,0.12)",
                      "0 0 0 10px rgba(16,185,129,0.18), 0 14px 28px rgba(16,185,129,0.28)",
                      "0 8px 18px rgba(0,0,0,0.12)",
                      "0 8px 18px rgba(0,0,0,0.12)",
                    ],
                  }}
                  transition={highlightTransition(index)}
                >
                  {index + 1}
                </motion.div>

                {/* CONTENT */}
                <motion.div
                  className="mt-6 rounded-xl border border-emerald-100 bg-emerald-50 p-5"
                  animate={{
                    y: [0, -10, 0, 0],
                    scale: [1, 1.03, 1, 1],
                    borderColor: [
                      "rgba(209,250,229,1)",
                      "rgba(16,185,129,0.55)",
                      "rgba(209,250,229,1)",
                      "rgba(209,250,229,1)",
                    ],
                    backgroundColor: [
                      "rgba(236,253,245,1)",
                      "rgba(255,255,255,1)",
                      "rgba(236,253,245,1)",
                      "rgba(236,253,245,1)",
                    ],
                    boxShadow: [
                      "0 0 0 rgba(16,185,129,0)",
                      "0 20px 45px rgba(16,185,129,0.16)",
                      "0 0 0 rgba(16,185,129,0)",
                      "0 0 0 rgba(16,185,129,0)",
                    ],
                  }}
                  transition={highlightTransition(index)}
                >
                  <motion.h3
                    className="text-sm font-medium text-emerald-700"
                    animate={{
                      opacity: [0.85, 1, 0.85, 0.85],
                      letterSpacing: ["0em", "0.04em", "0em", "0em"],
                    }}
                    transition={highlightTransition(index)}
                  >
                    {grade.title}
                  </motion.h3>

                  <motion.h4
                    className="mt-2 text-lg font-semibold text-gray-900"
                    animate={{
                      color: ["#111827", "#065f46", "#111827", "#111827"],
                    }}
                    transition={highlightTransition(index)}
                  >
                    {grade.subtitle}
                  </motion.h4>

                  <motion.p
                    className="mt-2 text-sm text-gray-600"
                    animate={{
                      color: ["#4b5563", "#1f2937", "#4b5563", "#4b5563"],
                    }}
                    transition={highlightTransition(index)}
                  >
                    {grade.desc}
                  </motion.p>
                </motion.div>

              </MotionDiv>
            ))}
          </div>
        </div>

        {/* Bottom insight */}
        <p className="text-center mt-16 text-gray-700 font-medium">
          The earlier you act, the easier it is to recover.
        </p>

      </div>
    </section>
  );
};

export default Grading;
