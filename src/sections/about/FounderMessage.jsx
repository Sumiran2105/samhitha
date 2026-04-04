import { motion } from "framer-motion";
import { Leaf, Activity, Droplet } from "lucide-react";

const FounderMessage = () => {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden border-t border-gray-100">
      
      {/* Background Floating Icons mapping to (Ayurveda, Physio, Herbal) */}
      <motion.div
        className="absolute top-[10%] left-[2%] md:left-[5%] text-emerald-100/50 pointer-events-none"
        animate={{ y: [0, 40, 0], rotate: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <Leaf size={140} strokeWidth={1} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-[10%] right-[3%] md:right-[5%] text-emerald-50/80 pointer-events-none"
        animate={{ y: [0, -50, 0], rotate: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Activity size={180} strokeWidth={1} />
      </motion.div>
      
      <motion.div
        className="absolute top-[30%] right-[40%] text-emerald-50/60 pointer-events-none hidden md:block"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Droplet size={100} strokeWidth={1} />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-emerald-50/40 backdrop-blur-xl px-8 py-16 md:p-24 rounded-[2.5rem] md:rounded-[4rem] border border-emerald-100/60 shadow-sm overflow-hidden"
        >
          {/* Subtle Watermark Quote Mark */}
          <div className="absolute top-6 left-6 md:top-12 md:left-12 text-8xl md:text-[20rem] text-emerald-900/[0.03] leading-none pointer-events-none select-none font-serif">
            "
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            
            {/* Minimalist Top Tag */}
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3, duration: 0.6 }}
               className="flex items-center gap-4 mb-10 md:mb-14"
            >
              <div className="w-12 h-[3px] bg-emerald-500 rounded-full"></div>
              <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-black text-emerald-700">
                A Letter from the Founder
              </span>
            </motion.div>

            {/* The Message - Standardized to Sans-Serif */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl sm:text-2xl md:text-[32px] text-gray-800 leading-relaxed md:leading-[1.65] font-medium tracking-tight"
            >
              "As an experienced Orthopaedic Surgeon, I have witnessed countless patients undergo joint replacements that could have been avoided. I founded Samhitha to prevent knee surgeries by detecting degradation at an early stage and actively curing it through an integrative approach. By combining advanced Physiotherapy, authentic Ayurveda, and targeted Herbal remedies, we empower your body to heal its own foundation."
            </motion.p>

            {/* Elegant Signature Block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-14 md:mt-20 pt-8 md:pt-10 border-t border-emerald-200/50 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
                <h4 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
                  Dr. Rajesh Sunkara
                </h4>
                <div className="hidden sm:block w-2 h-2 rounded-full bg-emerald-500"></div>
                <p className="text-gray-500 font-bold uppercase tracking-wider text-[11px] md:text-sm">
                  Chief Orthopaedic Surgeon
                </p>
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-emerald-700 font-bold uppercase tracking-widest text-[10px] md:text-xs bg-emerald-100/50 px-4 py-2 rounded-full border border-emerald-200/60 shadow-sm cursor-default inline-block self-start sm:self-auto"
              >
                Samhitha Joint Preservation
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderMessage;
