import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Video, Package, UserCheck } from "lucide-react";

const MotionDiv = motion.div;
const MotionImg = motion.img;

import imgPhysio from "../../assets/images/Physio.jpeg"; // Placeholder for physio.jpeg
import imgKit from "../../assets/images/Kit.jpeg";   // Placeholder for kit.jpeg
import imgSupport from "../../assets/images/Support.jpeg";    // Placeholder for support.jpeg

const features = [
  {
    icon: <Video size={20} />,
    title: "Guided Physiotherapy",
    desc: "Step-by-step sessions designed to restore strength and mobility.",
    image: imgPhysio,
  },
  {
    icon: <Package size={20} />,
    title: "Recovery Kit",
    desc: "Essential tools delivered to support your daily exercises.",
    image: imgKit,
  },
  {
    icon: <UserCheck size={20} />,
    title: "Doctor Support",
    desc: "Continuous guidance to track and improve your progress.",
    image: imgSupport,
  },
];

const WhatYouGet = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE (VISUAL BLOCK) */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden border border-emerald-200 shadow-sm relative w-full h-[420px] bg-emerald-50">
            <AnimatePresence mode="wait">
              <MotionImg
                key={activeIndex}
                src={features[activeIndex].image}
                alt={features[activeIndex].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* subtle floating label */}
          <div className="absolute -bottom-6 left-6 bg-white border border-emerald-200 rounded-xl px-5 py-3 shadow-sm text-sm text-gray-700">
            Personalized Recovery System
          </div>
        </MotionDiv>

        {/* RIGHT SIDE (CONTENT) */}
        <div>

          {/* Header */}
          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm shadow-sm backdrop-blur">
              What You Get
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-[1.2]">
              A Complete System
              <span className="block text-emerald-700">
                Designed for Recovery
              </span>
            </h2>

            <p className="mt-4 text-gray-600 max-w-md">
              Everything is structured to help you recover safely, effectively,
              and without surgery.
            </p>
          </div>

          {/* FEATURES LIST */}
          <div className="mt-10 flex flex-col gap-4">
            {features.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  className={`flex gap-4 items-center p-5 rounded-2xl transition-all duration-500 border ${isActive
                    ? "bg-emerald-50 border-emerald-200 shadow-lg scale-[1.02]"
                    : "bg-white border-gray-100 shadow-sm scale-100"
                    }`}
                >
                  {/* ICON */}
                  <div className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full transition-colors duration-500 ${isActive ? "bg-emerald-500 text-white shadow-md" : "bg-emerald-50 text-emerald-700"
                    }`}>
                    {item.icon}
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className={`text-lg font-semibold transition-colors duration-500 ${isActive ? "text-emerald-950" : "text-gray-900"}`}>
                      {item.title}
                    </h3>
                    <p className={`mt-1 text-sm transition-colors duration-500 max-w-xs ${isActive ? "text-emerald-800" : "text-gray-600"}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom statement */}
          <p className="mt-12 text-gray-700 font-medium">
            Everything you need — guided, structured, and personalized.
          </p>

        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
