import { motion } from "framer-motion";
import { Leaf, Activity, Droplet } from "lucide-react";

const MotionDiv = motion.div;
const MotionP = motion.p;

const FounderMessage = () => {
  return (
    <section className="relative overflow-hidden border-t border-gray-100 bg-white py-14 sm:py-16 md:py-24 lg:py-32">
      
      {/* Background Floating Icons mapping to (Ayurveda, Physio, Herbal) */}
      <MotionDiv
        className="pointer-events-none absolute left-[-2.5rem] top-[8%] text-emerald-100/35 md:left-[4%] md:text-emerald-100/50"
        animate={{ y: [0, 40, 0], rotate: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <Leaf size={84} strokeWidth={1} className="sm:h-[110px] sm:w-[110px] md:h-[140px] md:w-[140px]" />
      </MotionDiv>
      
      <MotionDiv
        className="pointer-events-none absolute bottom-[6%] right-[-2.5rem] text-emerald-50/55 md:right-[5%] md:text-emerald-50/80"
        animate={{ y: [0, -50, 0], rotate: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Activity size={110} strokeWidth={1} className="sm:h-[140px] sm:w-[140px] md:h-[180px] md:w-[180px]" />
      </MotionDiv>
      
      <MotionDiv
        className="pointer-events-none absolute right-[34%] top-[30%] hidden text-emerald-50/60 md:block"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Droplet size={100} strokeWidth={1} />
      </MotionDiv>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <MotionDiv 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem] border border-emerald-100/60 bg-emerald-50/40 px-5 py-8 shadow-sm backdrop-blur-xl sm:px-7 sm:py-10 md:rounded-[3rem] md:px-12 md:py-14 lg:rounded-[4rem] lg:px-20 lg:py-20"
        >
          {/* Subtle Watermark Quote Mark */}
          <div className="pointer-events-none absolute left-4 top-3 select-none font-serif text-6xl leading-none text-emerald-900/[0.03] sm:left-6 sm:top-5 sm:text-7xl md:left-10 md:top-8 md:text-[12rem] lg:left-12 lg:top-10 lg:text-[20rem]">
            "
          </div>

          <div className="relative z-10 mx-auto max-w-4xl">
            
            {/* Minimalist Top Tag */}
            <MotionDiv 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3, duration: 0.6 }}
               className="mb-8 flex items-center gap-3 sm:gap-4 md:mb-12"
            >
              <div className="h-[3px] w-8 rounded-full bg-emerald-500 sm:w-10 md:w-12"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.24em] text-emerald-700 sm:text-[11px] md:text-xs md:tracking-[0.3em]">
                A Letter from the Founder
              </span>
            </MotionDiv>

            {/* The Message - Standardized to Sans-Serif */}
            <MotionP 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg font-medium leading-8 tracking-tight text-gray-800 sm:text-[22px] sm:leading-9 md:text-[28px] md:leading-[1.6] lg:text-[32px] lg:leading-[1.65]"
            >
              "As an experienced Orthopaedic Surgeon, I have witnessed countless patients undergo joint replacements that could have been avoided. I founded Samhitha to prevent knee surgeries by detecting degradation at an early stage and actively curing it through an integrative approach. By combining advanced Physiotherapy, authentic Ayurveda, and targeted Herbal remedies, we empower your body to heal its own foundation."
            </MotionP>

            {/* Elegant Signature Block */}
            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex flex-col gap-5 border-t border-emerald-200/50 pt-6 sm:mt-12 sm:gap-6 sm:pt-8 md:mt-16 md:flex-row md:items-center md:justify-between md:pt-10"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
                <h4 className="text-xl font-black tracking-tight text-gray-900 md:text-2xl">
                  Dr. Rajesh Sunkara
                </h4>
                <div className="hidden h-2 w-2 rounded-full bg-emerald-500 sm:block"></div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500 md:text-sm">
                  Chief Orthopaedic Surgeon
                </p>
              </div>
              
              <MotionDiv 
                whileHover={{ scale: 1.05 }}
                className="inline-block self-start rounded-full border border-emerald-200/60 bg-emerald-100/50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-emerald-700 shadow-sm cursor-default sm:self-auto md:text-xs"
              >
                Samhitha Joint Preservation
              </MotionDiv>
            </MotionDiv>

          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default FounderMessage;
