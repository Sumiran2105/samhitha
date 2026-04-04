import { motion, useScroll, useTransform } from "framer-motion";
import { Stethoscope, HeartPulse, Activity } from "lucide-react";
import doctorImage from "../../assets/images/Doctors.jpg";

const Founder = () => {
  return (
    <section className="bg-[#fafcfa] py-24 lg:py-36 relative overflow-hidden">
      
      {/* Floating Medical Icons Background Effects */}
      <motion.div
        className="absolute top-[5%] right-[5%] text-emerald-200/30 pointer-events-none"
        animate={{ y: [0, -40, 0], rotate: [0, 15, -5, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Stethoscope size={160} strokeWidth={1} />
      </motion.div>

      <motion.div
        className="absolute bottom-[10%] left-[2%] text-emerald-300/30 pointer-events-none"
        animate={{ y: [0, 50, 0], rotate: [0, -20, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <HeartPulse size={180} strokeWidth={1} />
      </motion.div>

      <motion.div
        className="absolute top-[45%] left-[40%] text-emerald-100/60 pointer-events-none"
        animate={{ x: [0, 30, -10, 0], y: [0, -30, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Activity size={100} strokeWidth={1} />
      </motion.div>

      {/* Massive Background Watermark Typography */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <motion.h2 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-10 lg:-top-24 left-4 lg:left-6 text-[12vw] leading-none font-black text-emerald-900/[0.04] tracking-tighter whitespace-nowrap select-none pointer-events-none"
        >
          THE FOUNDER.
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10 items-center">
          
          {/* Left: Asymmetrical Image & Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-5/12 relative"
          >
            {/* The Petal Shape Frame */}
            <div className="aspect-[3/4] rounded-tr-[6rem] rounded-bl-[6rem] lg:rounded-tr-[10rem] lg:rounded-bl-[10rem] overflow-hidden shadow-2xl relative border-8 border-white group">
              <motion.img 
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.8 }}
                src={doctorImage} 
                alt="Dr. Rajesh Sunkara" 
                className="w-full h-full object-cover object-center grayscale-[15%]" 
              />
              <div className="absolute inset-0 border border-black/5 rounded-tr-[6rem] rounded-bl-[6rem] lg:rounded-tr-[10rem] lg:rounded-bl-[10rem] pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent pointer-events-none"></div>
            </div>

            {/* Overlapping Floating Quote */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
              className="absolute -bottom-8 -right-4 lg:-right-12 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-emerald-50 max-w-[280px]"
            >
              <motion.div 
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-4xl font-serif text-emerald-300 leading-none absolute -top-4 -left-2"
              >"</motion.div>
              <p className="text-sm font-semibold text-gray-700 relative z-10 leading-relaxed">
                My core focus is on accurate diagnosis and offering precise interventions to improve your long-term function.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Content & Timeline */}
          <div className="w-full lg:w-7/12 mt-12 lg:mt-0 lg:pt-16">
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-emerald-600 font-black tracking-[0.2em] uppercase text-[11px] mb-4 bg-emerald-100/50 inline-block px-4 py-1.5 rounded-full border border-emerald-200/50 cursor-default"
              >
                Lead Surgeon & Visionary
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.05]"
              >
                Dr. Rajesh <span className="text-emerald-700 block">Sunkara</span>
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8 text-xl lg:text-2xl text-gray-500 leading-relaxed font-light"
              >
                Pioneering joint preservation in Hyderabad with an unwavering commitment to restoring mobility through absolute precision and compassion.
              </motion.p>
            </motion.div>

            {/* Massive Stats Row */}
            <div className="flex flex-wrap gap-12 lg:gap-20 pt-12 mt-12 border-t border-emerald-100">
              <motion.div
                 initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
                 whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                 viewport={{ once: true }}
                 transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
                 className="group cursor-default"
              >
                <div className="text-5xl lg:text-6xl font-black text-emerald-950 tracking-tighter group-hover:text-emerald-500 transition-colors duration-500">1,000+</div>
                <div className="text-sm font-bold text-emerald-600 uppercase tracking-widest mt-3">Successful Surgeries</div>
              </motion.div>
              <motion.div
                 initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
                 whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                 viewport={{ once: true }}
                 transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
                 className="group cursor-default"
              >
                <div className="text-5xl lg:text-6xl font-black text-emerald-950 tracking-tighter group-hover:text-emerald-500 transition-colors duration-500">500+</div>
                <div className="text-sm font-bold text-emerald-600 uppercase tracking-widest mt-3">Knee & Joint Specs</div>
              </motion.div>
            </div>

            {/* Clinical Pedigree Timeline */}
            <div className="pt-12 mt-12 border-t border-emerald-100">
              <motion.h4 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-lg lg:text-xl font-bold text-gray-900 mb-8 tracking-tight"
              >
                Clinical Pedigree
              </motion.h4>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
                className="space-y-8 relative before:absolute before:inset-y-0 before:left-[11px] before:w-0.5 before:bg-gradient-to-b before:from-emerald-300 before:to-emerald-50"
              >
                
                {/* Node 1: Apollo */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
                  }}
                  className="relative pl-10 group"
                >
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-[5px] border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] group-hover:scale-125 transition-transform duration-300"></div>
                  <h5 className="text-xl font-black text-gray-900 group-hover:text-emerald-700 transition-colors">Apollo Hospitals</h5>
                  <p className="text-gray-500 text-sm lg:text-base mt-2 leading-relaxed max-w-lg">
                    Served as a core Orthopedic Surgeon managing major trauma, arthroscopy, and complex joint replacements.
                  </p>
                </motion.div>
                
                {/* Node 2: Yashoda */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
                  }}
                  className="relative pl-10 group"
                >
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-[5px] border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] group-hover:scale-125 transition-transform duration-300"></div>
                  <h5 className="text-xl font-black text-gray-900 group-hover:text-emerald-700 transition-colors">Yashoda Hospitals</h5>
                  <p className="text-gray-500 text-sm lg:text-base mt-2 leading-relaxed max-w-lg">
                    Advanced clinical expertise in sports injuries, ACL surgeries, and complex multi-ligament tear reconstructions.
                  </p>
                </motion.div>

                {/* Node 3: Education */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
                  }}
                  className="relative pl-10 group"
                >
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-[5px] border-emerald-300 shadow-sm group-hover:scale-125 transition-transform duration-300"></div>
                  <h5 className="text-xl font-black text-gray-900 group-hover:text-emerald-700 transition-colors">Rigorous Academics</h5>
                  <p className="text-gray-500 text-sm lg:text-base mt-2 leading-relaxed max-w-lg">
                    <span className="font-bold text-gray-700">MS Orthopedics</span> from Dr. YSR University & <span className="font-bold text-gray-700">MBBS</span> from Dr. NTR University of Health Sciences.
                  </p>
                </motion.div>

              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
