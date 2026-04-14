import { motion } from "framer-motion";
import TreatmentImage from "../../assets/images/Background.jpg";
import ayurImage from "../../assets/images/Ayur.jpeg";
import clinicalImage from "../../assets/images/Clinicalnn.jpeg";
import physioImage from "../../assets/images/Physio.jpeg";
import doctorImage from "../../assets/images/Doctor.jpeg";

const MotionDiv = motion.div;
const MotionPath = motion.path;

const solutions = [
  {
    step: "01",
    eyebrow: "Reduce Inflammation",
    title: "AYURVEDA SUPPORT",
    desc: "Natural therapies designed to reduce inflammation and improve long-term joint comfort.",
    image: ayurImage,
    alt: "Ayurveda support care",
    offsetClasses: "mt-0",
  },
  {
    step: "02",
    eyebrow: "Repair Support",
    title: "CLINICAL NUTRITION",
    desc: "Targeted nutrition plans to support cartilage repair and overall joint health.",
    image: clinicalImage,
    alt: "Clinical nutrition consultation",
    offsetClasses: "lg:mt-32",
  },

  {
    step: "03",
    eyebrow: "Monitor Progress",
    title: "EXPERT GUIDANCE",
    desc: "Doctor-led care to monitor progress and prevent the need for surgery.",
    image: doctorImage,
    alt: "Doctor guidance session",
    offsetClasses: "lg:mt-20",
  },
  {
    step: "04",
    eyebrow: "Restore Movement",
    title: "PHYSIOTHERAPY",
    desc: "Guided exercises to restore strength, mobility, and stability in your knee.",
    image: physioImage,
    alt: "Physiotherapy support session",
    offsetClasses: "lg:-mt-8",
  },
  
];

const Solution = () => {
  return (
    <section id="how" className="relative overflow-hidden bg-white py-20 md:py-28 lg:pb-44">

      {/* Background Image Setup mimicking the reference "Design Process" layout */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src={TreatmentImage}
          alt="Medical setting"
          className="h-full w-full object-cover object-top opacity-[0.14] contrast-110 grayscale-[8%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.045)_1px,transparent_1px)] bg-[size:30px_30px] opacity-70" />
        {/* Soft gradient wash to make white cards pop perfectly */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-emerald-50/45 to-white/94"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.72),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.68),transparent_34%)]" />
      </div>

      {/* Decorative Dashed Looping Line - Similar to reference image */}
      <div className="absolute inset-0 z-0 hidden lg:block opacity-50 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <MotionPath
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">

        {/* Section Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 lg:mb-20"
        >
          <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
            Samhitha Solution Process
          </h2>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.72fr)] lg:items-end">
            <h3 className="max-w-[13ch] text-4xl font-black leading-[0.98] tracking-tight text-gray-900 md:text-5xl lg:text-6xl xl:text-7xl">
              A Smarter System For <span className="block text-emerald-700">Joint Preservation.</span>
            </h3>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-sm leading-7 text-slate-600 md:text-base">
                Samhitha brings together natural healing, targeted nutrition, physiotherapy, and expert
                clinical guidance into one connected recovery path, so every step supports the next.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {["4 guided stages", "Joint-first recovery", "Early intervention focus"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-emerald-100 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800 shadow-sm backdrop-blur"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.08 }}
          className="mb-16 flex items-center justify-between gap-4 sm:mb-20"
        >
          <div className="hidden h-px flex-1 bg-gradient-to-r from-emerald-300/40 to-transparent lg:block" />
          <p className="rounded-full border border-emerald-100 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 shadow-sm backdrop-blur">
            Integrated care timeline
          </p>
          <div className="hidden h-px flex-1 bg-gradient-to-l from-emerald-300/40 to-transparent lg:block" />
        </MotionDiv>

        {/* Staggered White Card Grid */}
        <div className="mt-4 grid grid-cols-1 gap-6 sm:mt-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-8">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, type: "spring", bounce: 0.3 }}
              whileHover={{
                y: -12,
                boxShadow: "0 30px 60px -18px rgba(16, 185, 129, 0.22)",
                transition: { duration: 0.3 }
              }}
              className={`relative flex min-h-[320px] flex-col justify-between rounded-[2rem] border border-white/70 bg-white/88 p-7 shadow-[0_22px_48px_rgba(15,23,42,0.08)] backdrop-blur-md transition-colors hover:border-emerald-200 sm:min-h-[340px] sm:p-8 ${item.offsetClasses} cursor-default group`}
            >
              <div className="absolute inset-x-8 top-0 h-1 overflow-hidden rounded-b-full bg-emerald-50">
                <motion.div
                  className="h-full w-24 rounded-full bg-gradient-to-r from-emerald-300 via-emerald-600 to-emerald-300"
                  animate={{ x: ["-120%", "230%"] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: index * 0.2 }}
                />
              </div>

              {/* Top Left Number Label */}
              <span className="inline-flex w-fit rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-sm font-semibold tracking-[0.18em] text-emerald-700 transition-colors duration-300 group-hover:bg-emerald-100">
                {item.step}
              </span>

              <div className="mt-6 h-28 overflow-hidden rounded-[1.5rem] border border-emerald-50 bg-gradient-to-br from-emerald-50 to-white shadow-inner shadow-emerald-100/60 sm:h-32">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Bottom Content Area */}
              <div className="mt-6">
                <p className="mb-3 inline-block bg-emerald-100/70 px-2 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-800">
                  {item.eyebrow}
                </p>
                <h4 className="mb-4 text-lg font-bold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-emerald-800 md:text-xl">
                  {item.title}
                </h4>
                <p className="text-sm font-medium leading-7 text-slate-700">
                  {item.desc}
                </p>
              </div>

              {/* Decorative hover gradient corner */}
              <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl rounded-full -z-10"></div>
            </motion.div>
          ))}
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-14 text-center"
        >
          <p className="mx-auto max-w-3xl text-sm font-medium leading-relaxed text-gray-600 md:text-base">
            Each step works together to preserve the joint early, improve recovery quality,
            and reduce the chances of surgery becoming the default path.
          </p>
        </MotionDiv>

      </div>
    </section>
  );
};

export default Solution;
