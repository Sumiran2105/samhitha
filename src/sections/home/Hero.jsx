import { motion } from "framer-motion";
import heroVideo from "../../assets/videos/Hero.mp4";

const MotionDiv = motion.div;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50 to-emerald-50 pb-12 pt-14 md:pb-14 md:pt-20">
      <MotionDiv
        className="absolute right-0 top-0 h-48 w-48 rounded-full bg-green-200 blur-3xl md:h-[300px] md:w-[300px]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.3, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <MotionDiv
        className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <MotionDiv className="max-w-xl text-center md:text-left" variants={staggerContainer}>
          <MotionDiv
            variants={fadeUp}
            className="mb-5 inline-flex items-center rounded-full border border-emerald-200 bg-white px-4 py-2 text-[11px] font-medium text-emerald-700 shadow-sm sm:text-xs md:text-sm"
          >
            India’s #1 Knee Cartilage Revival Program
          </MotionDiv>

          <MotionDiv variants={fadeUp}>
            <h1 className="text-3xl font-semibold leading-[1.1] text-gray-900 sm:text-4xl md:text-6xl">
            Revive Your Knee Cartilage,
            <span className="block text-primary mt-2 relative inline-block">
              Move Without Pain
              <span className="absolute left-0 bottom-1 w-full h-2 bg-emerald-100 -z-10 rounded"></span>
            </span>
          </h1>
          </MotionDiv>

          <MotionDiv
            variants={fadeUp}
            className="mt-4 text-xs font-medium tracking-[0.18em] text-emerald-700 sm:text-sm md:text-base"
          >
            SAMHITHA — SAVE THE JOINT
          </MotionDiv>

          <MotionDiv
            variants={fadeUp}
            className="mt-6 text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg"
          >
            A scientifically designed joint preservation program combining physiotherapy,
            nutrition, and holistic care to help you reduce pain, restore mobility,
            and avoid surgery.
          </MotionDiv>

          <MotionDiv variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <button className="rounded-xl bg-primary px-6 py-3 text-white font-medium shadow-md transition hover:bg-secondary sm:w-auto">
              Start Free Assessment
            </button>

            <button className="rounded-xl border border-gray-300 px-6 py-3 text-gray-700 transition hover:border-gray-400 sm:w-auto">
              Learn More
            </button>
          </MotionDiv>
        </MotionDiv>

        <MotionDiv
          className="flex justify-center md:justify-end"
          variants={fadeUp}
        >
          <MotionDiv
            className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl"
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="h-[420px] w-full max-w-md object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
          </MotionDiv>
        </MotionDiv>
      </MotionDiv>

    </section>
  );
};

export default Hero;
