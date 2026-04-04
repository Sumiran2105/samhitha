import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroVideo from "../../assets/videos/Hero.mp4";
import img1 from "../../assets/images/Doctors.jpg";
import img2 from "../../assets/images/Nuteriation.jpeg";
import img3 from "../../assets/images/Herbal.jpeg";
import img4 from "../../assets/images/Ayurveda.jpeg";

const treatmentCards = [
  { title: "Doctors Approved", image: img1 },
  { title: "Nutrition", image: img2 },
  { title: "Herbal", image: img3 },
  { title: "Ayurveda", image: img4 },
];

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
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % treatmentCards.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

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

          <MotionDiv
            variants={fadeUp}
            className="mt-8 flex flex-wrap justify-center gap-4 sm:justify-start lg:gap-5"
          >
            {treatmentCards.map((card, idx) => {
              const isActive = activeCard === idx;
              return (
                <div
                  key={idx}
                  className={`relative flex w-[90px] flex-col items-center justify-center rounded-[20px] p-3 shadow-xl transition-all duration-500 sm:w-[110px] sm:p-4 ${
                    isActive ? "scale-105 border-2 border-emerald-400 bg-emerald-50" : "border-2 border-transparent bg-white"
                  }`}
                >
                  <div className={`mb-2 h-12 w-12 overflow-hidden rounded-full border-2 transition-colors duration-500 sm:h-14 sm:w-14 ${
                    isActive ? "border-emerald-400" : "border-emerald-50"
                  }`}>
                    <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
                  </div>
                  <span className={`text-center text-[11px] font-bold transition-colors duration-500 sm:text-xs ${
                    isActive ? "text-emerald-900" : "text-gray-800"
                  }`}>
                    {card.title}
                  </span>

                  <div className="absolute -bottom-3 flex h-6 w-6 items-center justify-center rounded-full border border-gray-100 bg-white shadow-md">
                    <div className={`h-2.5 w-2.5 rounded-full transition-colors duration-500 ${
                      isActive ? "bg-emerald-500 scale-110" : "bg-gray-200"
                    }`} />
                  </div>
                </div>
              );
            })}
          </MotionDiv>

          <MotionDiv variants={fadeUp} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <button className="rounded-xl bg-primary px-6 py-3 text-white font-medium shadow-md transition hover:bg-secondary sm:w-auto">
              Start Free Assessment
            </button>

            <button className="rounded-xl border border-gray-300 px-6 py-3 text-gray-700 transition hover:border-gray-400 sm:w-auto">
              Learn More
            </button>
          </MotionDiv>

          {/* Mobile-only Highlighted Checkmarks */}
          <MotionDiv variants={fadeUp} className="mt-8 flex flex-col gap-3.5 md:hidden">
            {[
              "No Surgery Required",
              "Holistic Care Plan",
              "Long-Term Relief"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 bg-emerald-50 border border-emerald-100 px-5 py-4 rounded-xl shadow-sm">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-sm font-bold tracking-wide text-emerald-950">{text}</span>
              </div>
            ))}
          </MotionDiv>
        </MotionDiv>

        {/* Hidden on mobile, shown on md and explicitly justified right */}
        <MotionDiv
          className="hidden md:flex justify-end"
          variants={fadeUp}
        >
          <div className="relative">
            {/* Vertical Checkmarks Floating Widget */}
            <MotionDiv 
              className="absolute right-[95%] lg:right-full mr-2 lg:mr-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3.5 z-10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {[
                "No Surgery Required",
                "Holistic Care Plan",
                "Long-Term Relief"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-white/50 whitespace-nowrap transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-inner">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-[13px] font-bold text-gray-800 tracking-wide">{text}</span>
                </div>
              ))}
            </MotionDiv>

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
          </div>
        </MotionDiv>
      </MotionDiv>

    </section>
  );
};

export default Hero;
