import { motion } from "framer-motion";

const MotionDiv = motion.div;

const reasons = [
  {
    number: "01",
    title: "Surgery is often reached too late",
    desc: "Many people are only shown major intervention after pain, stiffness, and degeneration have already progressed.",
  },
  {
    number: "02",
    title: "Early symptoms deserve a real plan",
    desc: "Temporary relief is not enough when the joint is already sending signals that movement quality is changing.",
  },
  {
    number: "03",
    title: "Recovery works better when care is connected",
    desc: "Assessment, physiotherapy, nutrition, and expert guidance create better outcomes when they support each other.",
  },
];

const WhySamhithaExists = () => {
  return (
    <section className="relative -mt-10 overflow-hidden bg-gradient-to-b from-white via-emerald-50/55 to-white px-4 pb-16 pt-24 sm:px-6 md:pb-24 md:pt-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white via-white/90 to-transparent md:h-32" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.07),transparent_22%)]" />

      <div className="relative mx-auto max-w-6xl">
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-xs font-black uppercase tracking-[0.24em] text-emerald-700">
            Why Samhitha Exists
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Knee care needs a better
            <span className="block text-emerald-700">moment to begin.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Samhitha exists to move care earlier, connect the right interventions, and give people a
            clearer path before surgery starts to feel like the only remaining option.
          </p>
        </MotionDiv>

        <div className="mt-12 grid gap-5 lg:grid-cols-2 lg:gap-8">
          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
            className="flex h-full flex-col rounded-[2rem] border border-emerald-100 bg-white/80 p-6 shadow-[0_20px_55px_rgba(15,23,42,0.05)] backdrop-blur sm:p-8"
          >
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden h-1 w-8 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 sm:block sm:w-16" />
              <p className="text-[10px] font-black uppercase tracking-[0.1em] text-emerald-700 sm:text-xs sm:tracking-[0.2em]">
                The problem we are solving
              </p>
              <div className="hidden h-1 w-8 rounded-full bg-gradient-to-l from-emerald-400 to-emerald-100 sm:block sm:w-16" />
            </div>

            <div className="mt-8 grid gap-4">
              {reasons.map((item, index) => (
                <MotionDiv
                  key={item.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: 0.12 + index * 0.08, ease: "easeOut" }}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 22px 45px rgba(16,185,129,0.10)",
                    transition: { duration: 0.25, ease: "easeOut" },
                  }}
                  className="rounded-[1.5rem] border border-slate-100 bg-gradient-to-r from-white to-emerald-50/65 p-5 transition-colors duration-300 hover:border-emerald-200"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-black text-emerald-700 shadow-sm">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-[15px]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.14, ease: "easeOut" }}
            className="flex h-full flex-col justify-between rounded-[2rem] border border-emerald-200/70 bg-gradient-to-br from-emerald-700 via-emerald-800 to-[#0f5d4e] p-6 text-white shadow-[0_28px_65px_rgba(16,94,78,0.22)] sm:p-8"
          >
            <div className="w-full">
              <div className="mx-auto flex max-w-[34rem] items-center justify-between gap-2 sm:gap-4">
                <div className="hidden h-1 flex-1 rounded-full bg-gradient-to-r from-emerald-200 to-emerald-50/20 sm:block" />
                <p className="shrink-0 text-center text-[10px] font-black uppercase tracking-[0.1em] text-emerald-100/85 sm:text-xs sm:tracking-[0.2em]">
                  What Samhitha changes
                </p>
                <div className="hidden h-1 flex-1 rounded-full bg-gradient-to-l from-emerald-200 to-emerald-50/20 sm:block" />
              </div>
              <div className="mx-auto mt-8 ">
                <h3 className=" text-[1.95rem] font-black leading-[1.02] tracking-tight text-white sm:text-[2.35rem]">
                From late reaction
                <span className="block text-emerald-200">to early preservation.</span>
                </h3>
                <p className="mt-6 text-sm leading-8 text-emerald-50/84 sm:text-[15px]">
                We combine assessment-led understanding with movement therapy, nutrition, natural
                support, and expert monitoring so care begins with clarity and builds with purpose.
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-4">
              {["Assess early", "Treat holistically", "Progress with guidance"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-5 py-4 backdrop-blur transition duration-300 hover:border-white/20 hover:bg-white/10"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-200" />
                  <p className="text-sm font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default WhySamhithaExists;
