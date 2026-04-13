import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DailyImpactImage from "../../assets/images/DailyImpact.jpeg";
import EarlyImage from "../../assets/images/Early.jpeg";
import TreatmentImage from "../../assets/images/Treatment.jpeg";
import LateImage from "../../assets/images/Late.jpeg";

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
  hidden: { opacity: 0, y: 28 },
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

const problems = [
  {
    image: EarlyImage,
    alt: "Patient receiving guided knee therapy",
    label: "Early Symptoms",
    title: "Pain Starts Quietly, So People Keep Postponing Care",
    desc: "What begins as mild stiffness while climbing stairs or getting up from a chair is often brushed aside as normal fatigue.",
  },
  {
    image: LateImage,
    alt: "Doctor explaining a knee condition to a patient",
    label: "Late Diagnosis",
    title: "By The Time Help Is Sought, Damage Has Often Progressed",
    desc: "Many patients wait until swelling, instability, or sharp pain starts interfering with daily movement and confidence.",
  },
  {
    image: DailyImpactImage,
    alt: "Close-up of rehabilitation support for a knee joint",
    label: "Daily Impact",
    title: "Simple Activities Slowly Become Difficult And Frustrating",
    desc: "Walking, squatting, sitting cross-legged, and managing long workdays can turn into a cycle of discomfort and reduced mobility.",
  },
  {
    image: TreatmentImage,
    alt: "Clinical discussion about long-term knee care options",
    label: "Cost Of Delay",
    title: "Delayed Care Can Lead To More Intensive And Expensive Treatment",
    desc: "When the root issue is ignored for too long, recovery usually takes longer and intervention becomes more demanding financially and physically.",
  },
];

const Problem = () => {
  return (
    <section
      id="problem"
      className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white pb-14 pt-12 md:pb-16 md:pt-14"
    >
      <MotionDiv
        className="absolute left-0 top-20 h-44 w-44 rounded-full bg-emerald-200/20 blur-3xl md:h-64 md:w-64"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <MotionDiv
        className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <MotionDiv
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.5 } } }}>
            <div className="mb-6 inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-bold tracking-widest uppercase text-emerald-700 shadow-sm backdrop-blur">
              The Problem
            </div>
          </motion.div>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">

            <motion.span
              variants={{ hidden: { opacity: 0, x: -40, filter: "blur(5px)" }, visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { type: "spring", damping: 12 } } }}
            >
              Don't Let A Small Ache
            </motion.span>
            <motion.span
              variants={{ hidden: { opacity: 0, scale: 0.6, rotate: -2 }, visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 100, damping: 10, delay: 0.1 } } }}
              className="mt-2 text-emerald-600 drop-shadow-sm"
            >
              Become A Major Surgery.
            </motion.span>
          </h2>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            className="mt-8 text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl font-medium max-w-3xl mx-auto"
          >
            Most people do not ignore their knees because they do not care. They
            delay action because the early signs seem manageable, temporary, or
            easy to live with. That delay is exactly what allows pain, stiffness,
            and cartilage stress to become a much bigger problem later.
          </motion.p>
        </MotionDiv>

        <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 xl:grid-cols-4">
          {problems.map((item, index) => (
            <MotionArticle
              key={item.title}
              custom={index}
              variants={cardReveal}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white transition duration-300 hover:-translate-y-1.5"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-100/0 to-emerald-200/40 opacity-0 transition pointer-events-none group-hover:opacity-100" />

              <div className="relative h-48 overflow-hidden sm:h-52">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
              </div>

              <div className="relative p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                  {item.label}
                </p>

                <h3 className="mt-3 text-base font-semibold leading-snug text-gray-900 sm:text-lg">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.desc}
                </p>
              </div>
            </MotionArticle>
          ))}
        </div>

        <MotionDiv
          className="mt-12 flex justify-center"
          variants={sectionFade}
        >
          <Link
            to="/assessment"
            className="w-full rounded-xl bg-primary px-6 py-3 text-center text-base font-medium text-white shadow-md transition hover:bg-secondary sm:w-auto"
          >
            Start Free Assessment
          </Link>
        </MotionDiv>
      </MotionDiv>

    </section>
  );
};

export default Problem;
