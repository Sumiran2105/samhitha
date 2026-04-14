import { motion } from "framer-motion";
import { ArrowRight, Clock3, Mail, MapPin, PhoneCall } from "lucide-react";

const MotionDiv = motion.div;

const Contact = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/40 to-white px-4 py-16 sm:px-6 md:py-20">
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Left content - heading + contact info */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">
              Contact Samhitha
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
              Let’s talk about
              <span className="block text-emerald-700">your joint health journey</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              Whether you want to begin with an assessment, understand the right recovery path, or
              speak with our care team, we’re here to guide you with clarity.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="flex items-start gap-4 rounded-2xl border border-emerald-100 bg-white/80 px-4 py-4 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-700">Email support</p>
                  <p className="text-sm text-slate-500">care@samhitha.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-emerald-100 bg-white/80 px-4 py-4 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                  <PhoneCall className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-700">Call our team</p>
                  <p className="text-sm text-slate-500">+91 90000 00000</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-emerald-100 bg-white/75 px-4 py-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-emerald-700" />
                    <p className="text-sm font-medium text-slate-700">Hyderabad, India</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    A care ecosystem focused on joint preservation and guided recovery.
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-100 bg-white/75 px-4 py-4">
                  <div className="flex items-center gap-3">
                    <Clock3 className="h-5 w-5 text-emerald-700" />
                    <p className="text-sm font-medium text-slate-700">Mon - Sat, 9 AM - 7 PM</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Reach us for assessment questions, treatment guidance, or follow-up support.
                  </p>
                </div>
              </div>
            </div>
          </MotionDiv>

          {/* Right content - form card */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-[0_24px_60px_rgba(2,6,23,0.08)]">
              <div className="mb-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
                  Send an inquiry
                </p>
                <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900">
                  Start the conversation
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Share a few details and our team will help you with the right next step.
                </p>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-600">Full name</label>
                  <input className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-100" placeholder="Enter your full name" />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600">Phone number</label>
                  <input className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-100" placeholder="Enter your phone number" />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600">Email</label>
                  <input className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-100" placeholder="Enter your email address" />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600">Reason for contact</label>
                  <select className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-emerald-100">
                    <option>Select an option</option>
                    <option>Assessment support</option>
                    <option>Treatment guidance</option>
                    <option>Follow-up question</option>
                    <option>General inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600">Message</label>
                  <textarea rows={4} className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-100" placeholder="Type your message" />
                </div>

                <div className="flex items-center justify-between">
                  <button type="submit" className="inline-flex items-center gap-3 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </span>
                    Contact Samhitha
                  </button>
                </div>
              </form>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default Contact;
