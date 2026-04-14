import { motion } from "framer-motion";
import { Stethoscope, HeartPulse, Activity } from "lucide-react";
import doctorImage from "../../assets/images/Doctors.jpg";

const MotionDiv = motion.div;
const MotionH2 = motion.h2;
const MotionImg = motion.img;
const MotionH3 = motion.h3;
const MotionP = motion.p;

const Founder = () => {
  return (
    <section className="relative overflow-hidden bg-[#fafcfa] py-16 sm:py-20 lg:py-28">
      
      {/* Floating Medical Icons Background Effects */}
      <MotionDiv
        className="pointer-events-none absolute right-[-1.5rem] top-[4%] text-emerald-200/25 sm:right-[5%] sm:text-emerald-200/30"
        animate={{ y: [0, -40, 0], rotate: [0, 15, -5, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Stethoscope size={96} strokeWidth={1} className="sm:h-[130px] sm:w-[130px] lg:h-[160px] lg:w-[160px]" />
      </MotionDiv>

      <MotionDiv
        className="pointer-events-none absolute bottom-[8%] left-[-1.5rem] text-emerald-300/20 sm:left-[2%] sm:text-emerald-300/30"
        animate={{ y: [0, 50, 0], rotate: [0, -20, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <HeartPulse size={110} strokeWidth={1} className="sm:h-[145px] sm:w-[145px] lg:h-[180px] lg:w-[180px]" />
      </MotionDiv>

      <MotionDiv
        className="pointer-events-none absolute left-[40%] top-[45%] hidden text-emerald-100/60 md:block"
        animate={{ x: [0, 30, -10, 0], y: [0, -30, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Activity size={100} strokeWidth={1} />
      </MotionDiv>

      {/* Massive Background Watermark Typography */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <MotionH2 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="pointer-events-none absolute left-4 top-0 select-none whitespace-nowrap text-[14vw] font-black leading-none tracking-tighter text-emerald-900/[0.04] sm:-top-6 sm:text-[12vw] lg:-top-24 lg:left-6"
        >
          THE FOUNDER.
        </MotionH2>

        <div className="relative z-10 flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          
          {/* Left: Asymmetrical Image & Badge */}
          <MotionDiv 
            initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full lg:w-5/12"
          >
            {/* The Petal Shape Frame */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-tr-[4rem] rounded-bl-[4rem] border-[6px] border-white shadow-2xl group sm:rounded-tr-[6rem] sm:rounded-bl-[6rem] lg:rounded-tr-[10rem] lg:rounded-bl-[10rem] lg:border-8">
              <MotionImg 
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.8 }}
                src={doctorImage} 
                alt="Dr. Rajesh Sunkara" 
                className="w-full h-full object-cover object-center grayscale-[15%]" 
              />
              <div className="pointer-events-none absolute inset-0 rounded-tr-[4rem] rounded-bl-[4rem] border border-black/5 sm:rounded-tr-[6rem] sm:rounded-bl-[6rem] lg:rounded-tr-[10rem] lg:rounded-bl-[10rem]"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent pointer-events-none"></div>
            </div>

            {/* Overlapping Floating Quote */}
            <MotionDiv 
              initial={{ opacity: 0, scale: 0.8, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
              className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-emerald-50 bg-white/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] backdrop-blur-md sm:left-auto sm:right-0 sm:max-w-[280px] sm:p-6 lg:-bottom-8 lg:-right-12"
            >
              <MotionDiv 
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-4xl font-serif text-emerald-300 leading-none absolute -top-4 -left-2"
              >"</MotionDiv>
              <p className="text-sm font-semibold text-gray-700 relative z-10 leading-relaxed">
                My core focus is on accurate diagnosis and offering precise interventions to improve your long-term function.
              </p>
            </MotionDiv>
          </MotionDiv>

          {/* Right: Content & Timeline */}
            <div className="mt-4 w-full lg:mt-0 lg:w-7/12 lg:pt-16">
            {/* Intro */}
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <MotionDiv 
                whileHover={{ scale: 1.05 }}
                className="text-emerald-600 font-black tracking-[0.2em] uppercase text-[11px] mb-4 bg-emerald-100/50 inline-block px-4 py-1.5 rounded-full border border-emerald-200/50 cursor-default"
              >
                Lead Surgeon & Visionary
              </MotionDiv>
              <MotionH3 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl font-black leading-[1.05] tracking-tight text-gray-900 sm:text-5xl lg:text-7xl"
              >
                Dr. Rajesh <span className="text-emerald-700 block">Sunkara</span>
              </MotionH3>
              <MotionP 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 text-lg font-light leading-relaxed text-gray-500 sm:mt-8 sm:text-xl lg:text-2xl"
              >
                Pioneering joint preservation in Hyderabad with an unwavering commitment to restoring mobility through absolute precision and compassion.
              </MotionP>
            </MotionDiv>

            {/* Massive Stats Row */}
            <div className="mt-10 flex flex-wrap gap-8 border-t border-emerald-100 pt-10 sm:mt-12 sm:gap-12 lg:gap-20 lg:pt-12">
              <motion.div
                 initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
                 whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                 viewport={{ once: true }}
                 transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
                 className="group cursor-default"
              >
                <div className="text-4xl font-black tracking-tighter text-emerald-950 transition-colors duration-500 group-hover:text-emerald-500 sm:text-5xl lg:text-6xl">1,000+</div>
                <div className="mt-3 text-xs font-bold uppercase tracking-widest text-emerald-600 sm:text-sm">Successful Surgeries</div>
              </motion.div>
              <motion.div
                 initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
                 whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                 viewport={{ once: true }}
                 transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
                 className="group cursor-default"
              >
                <div className="text-4xl font-black tracking-tighter text-emerald-950 transition-colors duration-500 group-hover:text-emerald-500 sm:text-5xl lg:text-6xl">500+</div>
                <div className="mt-3 text-xs font-bold uppercase tracking-widest text-emerald-600 sm:text-sm">Knee & Joint Specs</div>
              </motion.div>
            </div>

            {/* Clinical Pedigree Timeline */}
            <div className="mt-10 border-t border-emerald-100 pt-10 sm:mt-12 sm:pt-12">
              <motion.h4 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-8 text-lg font-bold tracking-tight text-gray-900 lg:text-xl"
              >
                Clinical Pedigree
              </motion.h4>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
                className="relative space-y-8 before:absolute before:inset-y-0 before:left-[11px] before:w-0.5 before:bg-gradient-to-b before:from-emerald-300 before:to-emerald-50"
              >
                
                {/* Node 1: Apollo */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
                  }}
                  className="group relative pl-10"
                >
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-[5px] border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] group-hover:scale-125 transition-transform duration-300"></div>
                  <h5 className="text-lg font-black text-gray-900 transition-colors group-hover:text-emerald-700 sm:text-xl">Apollo Hospitals</h5>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-gray-500 lg:text-base">
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
                  <h5 className="text-lg font-black text-gray-900 transition-colors group-hover:text-emerald-700 sm:text-xl">Yashoda Hospitals</h5>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-gray-500 lg:text-base">
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
                  <h5 className="text-lg font-black text-gray-900 transition-colors group-hover:text-emerald-700 sm:text-xl">Rigorous Academics</h5>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-gray-500 lg:text-base">
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
