import { motion } from "framer-motion";
import TreatmentImage from "../../assets/images/Nature.jpeg";

const solutions = [
  {
    step: "01",
    title: "AYURVEDA SUPPORT",
    desc: "Natural therapies designed to reduce inflammation and improve long-term joint comfort.",
    offsetClasses: "mt-0",
  },
  {
    step: "02",
    title: "CLINICAL NUTRITION",
    desc: "Targeted nutrition plans to support cartilage repair and overall joint health.",
    offsetClasses: "lg:mt-32",
  },
  {
    step: "03",
    title: "PHYSIOTHERAPY",
    desc: "Guided exercises to restore strength, mobility, and stability in your knee.",
    offsetClasses: "lg:-mt-8",
  },
  {
    step: "04",
    title: "EXPERT GUIDANCE",
    desc: "Doctor-led care to monitor progress and prevent the need for surgery.",
    offsetClasses: "lg:mt-20",
  },
];

const Solution = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32 lg:pb-56">

      {/* Background Image Setup mimicking the reference "Design Process" layout */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src={TreatmentImage}
          alt="Medical setting"
          className="w-full h-full object-cover object-top opacity-30 contrast-125 grayscale-[10%]"
        />
        {/* Soft gradient wash to make white cards pop perfectly */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-emerald-50/40 to-white/95"></div>
      </div>

      {/* Decorative Dashed Looping Line - Similar to reference image */}
      <div className="absolute inset-0 z-0 hidden lg:block opacity-50 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
            d="M -5 30 Q 20 -20 40 50 T 70 30 Q 90 100 105 40"
            fill="none"
            stroke="#10b981"
            strokeWidth="0.2"
            strokeDasharray="1 1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24"
        >
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-800 mb-3">
            Samhitha Solution Process
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.05] max-w-3xl">
            A Smarter System For <span className="text-emerald-700 block">Joint Preservation.</span>
          </h3>
        </motion.div>

        {/* Staggered White Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, type: "spring", bounce: 0.3 }}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.15)",
                transition: { duration: 0.3 }
              }}
              className={`bg-white/95 backdrop-blur-md rounded-[2rem] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-white/60 flex flex-col justify-between aspect-square min-h-[300px] hover:border-emerald-100 transition-colors ${item.offsetClasses} cursor-default relative group`}
            >
              {/* Top Left Number Label */}
              <span className="text-2xl md:text-3xl font-light text-gray-400 group-hover:text-emerald-600 transition-colors duration-300">
                {item.step}
              </span>

              {/* Bottom Content Area */}
              <div className="mt-auto">
                <h4 className="text-lg md:text-xl font-bold text-gray-900 tracking-tight mb-4 group-hover:text-emerald-800 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

              {/* Decorative hover gradient corner */}
              <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl rounded-full -z-10"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Solution;
