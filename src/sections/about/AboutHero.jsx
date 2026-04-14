import { motion } from "framer-motion";

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const AboutHero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 px-4 py-18 sm:px-6 sm:py-24 md:py-32 lg:py-40">
      {/* Abstract Background Elements */}
      <MotionDiv
        className="absolute left-[-18%] top-[-12%] h-[260px] w-[260px] rounded-full bg-emerald-500/20 blur-[70px] sm:left-[-10%] sm:top-[-20%] sm:h-[500px] sm:w-[500px] sm:blur-[100px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <MotionDiv
        className="absolute bottom-[-12%] right-[-16%] h-[220px] w-[220px] rounded-full bg-teal-400/20 blur-[75px] sm:right-[-10%] sm:bottom-[-20%] sm:h-[400px] sm:w-[400px] sm:blur-[120px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px] sm:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]"></div>

      <div className="relative z-10 max-w-4xl text-center">
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <MotionDiv variants={fadeUp} className="mb-5 flex justify-center sm:mb-6">
            <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-semibold tracking-widest text-emerald-300 uppercase backdrop-blur-md">
              The Samhitha Story
            </span>
          </MotionDiv>

          <MotionH1
            variants={fadeUp}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            We believe movement <span className="block text-emerald-400">is life.</span>
          </MotionH1>

          <MotionP
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-emerald-50 sm:mt-8 sm:text-lg md:text-xl"
          >
            Samhitha is India’s premier joint preservation program. We combine advanced physiotherapy, clinical nutrition, and natural healing to save your foundation without surgery.
          </MotionP>
        </MotionDiv>
      </div>

      {/* Aesthetic divider wave to seamlessly connect to the 'emerald-50' of Problem section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block h-[34px] w-full sm:h-[50px] md:h-[80px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,115.3,188.71,98.67,235.15,85.25,278.43,71.4,321.39,56.44Z"
            className="fill-emerald-50"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default AboutHero;
