import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity, BarChart3, CheckCircle, Eye, Heart, Lock,
  LogOut, Phone, Search, Shield, Users, X, User, AlertCircle, Menu
} from "lucide-react";

// ─── Mock Data ───────────────────────────────────────────────────────────────
const MOCK = [
  { id:"m1", submittedAt: new Date(Date.now()-86400000*5).toISOString(), name:"Lakshmi Venkataraman", phoneNumber:"9845612378", age:"62", gender:"Female", occupation:"Retired Teacher", kneePain:["Right Knee","Left Knee"], painDuration:"More than 1 year", painScale:4, painStartsIn:"0-15 min", stairsPainStarts:"less than 10 steps", physicalActivityDifficulty:["Squatting / Indian toilet","Sleeping due to pain","Unable to go to washroom"], jointSound:"Yes", height:"152", weight:"78", diabetes:"Yes", hypertension:"Yes", heartProblem:"No" },
  { id:"m2", submittedAt: new Date(Date.now()-86400000*4).toISOString(), name:"Ramesh Kumar", phoneNumber:"9123456789", age:"55", gender:"Male", occupation:"Software Engineer", kneePain:["Left Knee"], painDuration:"1 month to 1 year", painScale:2, painStartsIn:"15-30 min", stairsPainStarts:"1-2 stairs", physicalActivityDifficulty:["Sitting on ground"], jointSound:"No", height:"175", weight:"85", diabetes:"No", hypertension:"No", heartProblem:"No" },
  { id:"m3", submittedAt: new Date(Date.now()-86400000*3).toISOString(), name:"Anita Patel", phoneNumber:"9967845123", age:"48", gender:"Female", occupation:"Homemaker", kneePain:["Right Knee"], painDuration:"1 month to 1 year", painScale:3, painStartsIn:"15-30 min", stairsPainStarts:"1-2 stairs", physicalActivityDifficulty:["Squatting / Indian toilet","Sitting on ground"], jointSound:"Yes", height:"160", weight:"68", diabetes:"No", hypertension:"Yes", heartProblem:"No" },
  { id:"m4", submittedAt: new Date(Date.now()-86400000*2).toISOString(), name:"Suresh Nair", phoneNumber:"9812345670", age:"67", gender:"Male", occupation:"Retired", kneePain:["Right Knee","Left Knee"], painDuration:"More than 1 year", painScale:4, painStartsIn:"0-15 min", stairsPainStarts:"less than 10 steps", physicalActivityDifficulty:["Squatting / Indian toilet","Sleeping due to pain","Sitting on ground","Unable to go to washroom"], jointSound:"Yes", height:"168", weight:"92", diabetes:"Yes", hypertension:"Yes", heartProblem:"Yes" },
  { id:"m5", submittedAt: new Date(Date.now()-86400000*1).toISOString(), name:"Meera Krishnamurthy", phoneNumber:"9745612340", age:"52", gender:"Female", occupation:"Doctor", kneePain:["Left Knee"], painDuration:"Less than 1 month", painScale:1, painStartsIn:"30-60 min", stairsPainStarts:"more than 2 stairs", physicalActivityDifficulty:[], jointSound:"No", height:"163", weight:"60", diabetes:"No", hypertension:"No", heartProblem:"No" },
  { id:"m6", submittedAt: new Date(Date.now()-3600000*6).toISOString(), name:"Vijay Reddy", phoneNumber:"9876012345", age:"45", gender:"Male", occupation:"Business Owner", kneePain:["Right Knee"], painDuration:"1 month to 1 year", painScale:2, painStartsIn:"30-60 min", stairsPainStarts:"more than 2 stairs", physicalActivityDifficulty:["Sitting on ground"], jointSound:"No", height:"172", weight:"88", diabetes:"No", hypertension:"No", heartProblem:"No" },
  { id:"m7", submittedAt: new Date(Date.now()-3600000*3).toISOString(), name:"Savitha Iyer", phoneNumber:"9654321087", age:"59", gender:"Female", occupation:"Teacher", kneePain:["Left Knee"], painDuration:"More than 1 year", painScale:3, painStartsIn:"0-15 min", stairsPainStarts:"less than 10 steps", physicalActivityDifficulty:["Squatting / Indian toilet","Sleeping due to pain"], jointSound:"Yes", height:"158", weight:"70", diabetes:"No", hypertension:"Yes", heartProblem:"No" },
  { id:"m8", submittedAt: new Date(Date.now()-1800000).toISOString(), name:"Gopinath Pillai", phoneNumber:"9321456780", age:"71", gender:"Male", occupation:"Retired", kneePain:["Right Knee","Left Knee"], painDuration:"More than 1 year", painScale:4, painStartsIn:"0-15 min", stairsPainStarts:"less than 10 steps", physicalActivityDifficulty:["Squatting / Indian toilet","Sleeping due to pain","Unable to go to washroom","Sitting on ground"], jointSound:"Yes", height:"165", weight:"95", diabetes:"Yes", hypertension:"Yes", heartProblem:"Yes" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
const PAIN = {
  1: { label:"Not Significant", cls:"text-emerald-700 bg-emerald-50 border-emerald-200", dot:"bg-emerald-500" },
  2: { label:"Intermittent",     cls:"text-yellow-700 bg-yellow-50 border-yellow-200",   dot:"bg-yellow-500" },
  3: { label:"Continuous",       cls:"text-orange-700 bg-orange-50 border-orange-200",   dot:"bg-orange-500" },
  4: { label:"Unbearable",       cls:"text-red-700 bg-red-50 border-red-200",             dot:"bg-red-500"    },
};

function bmi(h, w) {
  const hm = Number(h) / 100, wk = Number(w);
  if (!hm || !wk) return null;
  return (wk / (hm * hm)).toFixed(1);
}
function bmiLabel(b) {
  if (!b) return null;
  const n = Number(b);
  if (n < 18.5) return { label:"Underweight", cls:"text-blue-700 bg-blue-50 border-blue-200" };
  if (n < 25)   return { label:"Normal",      cls:"text-emerald-700 bg-emerald-50 border-emerald-200" };
  if (n < 30)   return { label:"Overweight",  cls:"text-yellow-700 bg-yellow-50 border-yellow-200" };
  return           { label:"Obese",       cls:"text-red-700 bg-red-50 border-red-200" };
}
function fmt(iso) {
  return new Date(iso).toLocaleString("en-IN", { day:"2-digit", month:"short", year:"numeric", hour:"2-digit", minute:"2-digit" });
}
function initials(name) {
  return name.split(" ").slice(0,2).map(n=>n[0]).join("").toUpperCase();
}

// ─── Login ────────────────────────────────────────────────────────────────────
function AdminLogin({ onLogin }) {
  const [pw, setPw] = useState("");
  const [err, setErr] = useState(false);

  function submit(e) {
    e.preventDefault();
    if (pw === "samhitha2025") { onLogin(); }
    else { setErr(true); setTimeout(() => setErr(false), 2000); }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 px-4">
      <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:0.4}}
        className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
        <div className="mb-8 flex flex-col items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20 border border-emerald-500/30">
            <Shield className="h-7 w-7 text-emerald-400" />
          </div>
          <div className="text-center">
            <p className="text-2xl font-black text-white">
              Sam<span className="text-emerald-400">hitha</span> Admin
            </p>
            <p className="mt-1 text-sm text-slate-400">Secure access · Patient dashboard</p>
          </div>
        </div>
        <form onSubmit={submit} className="flex flex-col gap-4">
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="password"
              value={pw}
              onChange={e => setPw(e.target.value)}
              placeholder="Enter admin password"
              className="w-full rounded-xl border border-white/10 bg-white/10 py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-slate-500 outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 transition"
            />
          </div>
          <AnimatePresence>
            {err && (
              <motion.p initial={{opacity:0,y:-6}} animate={{opacity:1,y:0}} exit={{opacity:0}}
                className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle className="h-4 w-4" /> Incorrect password. Try again.
              </motion.p>
            )}
          </AnimatePresence>
          <button type="submit"
            className="w-full rounded-xl bg-emerald-500 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-400 active:scale-[0.98]">
            Sign In
          </button>
        </form>
        <p className="mt-6 text-center text-xs text-slate-600">Hint: samhitha2025</p>
      </motion.div>
    </div>
  );
}

// ─── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({ label, value, sub, icon: Icon, accent }) {
  return (
    <div className={`rounded-2xl border bg-white p-5 shadow-sm flex items-start justify-between gap-4 ${accent.border}`}>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{label}</p>
        <p className={`mt-2 text-3xl font-black ${accent.text}`}>{value}</p>
        {sub && <p className="mt-1 text-xs text-slate-400">{sub}</p>}
      </div>
      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${accent.bg}`}>
        <Icon className={`h-5 w-5 ${accent.text}`} />
      </div>
    </div>
  );
}

// ─── Patient Detail Drawer ────────────────────────────────────────────────────
function PatientDrawer({ patient: p, onClose }) {
  const b = bmi(p.height, p.weight);
  const bl = bmiLabel(b);
  const pain = PAIN[p.painScale] || {};

  function Row({ label, value }) {
    return (
      <div className="flex items-start justify-between gap-4 py-2.5 border-b border-slate-100 last:border-0">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 shrink-0">{label}</span>
        <span className="text-sm font-semibold text-slate-800 text-right">{value || "—"}</span>
      </div>
    );
  }
  function Badge({ text, cls }) {
    return <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold ${cls}`}>{text}</span>;
  }
  function Section({ title, children }) {
    return (
      <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
        <p className="mb-3 text-[11px] font-black uppercase tracking-widest text-slate-400">{title}</p>
        {children}
      </div>
    );
  }

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      onClick={onClose}>
      <motion.div
        initial={{opacity:0, scale:0.92, y:24}}
        animate={{opacity:1, scale:1, y:0}}
        exit={{opacity:0, scale:0.92, y:24}}
        transition={{type:"spring",damping:28,stiffness:280}}
        onClick={e=>e.stopPropagation()}
        className="relative flex w-full max-w-lg max-h-[88vh] flex-col overflow-y-auto bg-white rounded-3xl shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 text-sm font-black">
              {initials(p.name)}
            </div>
            <div>
              <p className="font-bold text-slate-900">{p.name}</p>
              <p className="text-xs text-slate-400">{fmt(p.submittedAt)}</p>
            </div>
          </div>
          <button onClick={onClose} className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 transition">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col gap-4 p-6">
          {/* About */}
          <Section title="About Patient">
            <Row label="Phone" value={p.phoneNumber} />
            <Row label="Age" value={`${p.age} years`} />
            <Row label="Gender" value={p.gender} />
            <Row label="Occupation" value={p.occupation} />
          </Section>

          {/* Knee Health */}
          <Section title="Knee Health">
            <Row label="Affected Knee" value={Array.isArray(p.kneePain) ? p.kneePain.join(", ") : p.kneePain} />
            <Row label="Duration" value={p.painDuration} />
            <div className="flex items-start justify-between gap-4 py-2.5 border-b border-slate-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Pain Level</span>
              {pain.label && <Badge text={`${p.painScale}/4 — ${pain.label}`} cls={pain.cls} />}
            </div>
            <Row label="Pain starts after" value={p.painStartsIn} />
            <Row label="Stairs before pain" value={p.stairsPainStarts} />
            <Row label="Joint sound" value={p.jointSound} />
            <div className="py-2.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Activity difficulties</p>
              {p.physicalActivityDifficulty?.length > 0
                ? <div className="flex flex-wrap gap-2">{p.physicalActivityDifficulty.map(d=><Badge key={d} text={d} cls="text-slate-700 bg-slate-100 border-slate-200"/>)}</div>
                : <p className="text-sm text-slate-400">None reported</p>}
            </div>
          </Section>

          {/* Body Health */}
          <Section title="Body Health">
            <Row label="Height" value={`${p.height} cm`} />
            <Row label="Weight" value={`${p.weight} kg`} />
            <div className="flex items-start justify-between gap-4 py-2.5 border-b border-slate-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">BMI</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-slate-800">{b}</span>
                {bl && <Badge text={bl.label} cls={bl.cls} />}
              </div>
            </div>
            <Row label="Diabetes" value={p.diabetes} />
            <Row label="Hypertension" value={p.hypertension} />
            <Row label="Heart Problem" value={p.heartProblem} />
          </Section>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");
  const [painFilter, setPainFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("samhitha_assessments") || "[]");
    if (stored.length === 0) {
      localStorage.setItem("samhitha_assessments", JSON.stringify(MOCK));
      setPatients(MOCK);
    } else {
      setPatients(stored);
    }
  }, []);

  const today = useMemo(() =>
    patients.filter(p => new Date(p.submittedAt).toDateString() === new Date().toDateString()).length,
  [patients]);

  const highPain = useMemo(() => patients.filter(p => Number(p.painScale) >= 3).length, [patients]);

  const avgBMI = useMemo(() => {
    const vals = patients.map(p => Number(bmi(p.height, p.weight))).filter(Boolean);
    return vals.length ? (vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(1) : "—";
  }, [patients]);

  const filtered = useMemo(() => {
    let list = [...patients];
    if (search) list = list.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.phoneNumber.includes(search)
    );
    if (painFilter !== "all") list = list.filter(p => String(p.painScale) === painFilter);
    return list;
  }, [patients, search, painFilter]);

  if (!loggedIn) return <AdminLogin onLogin={() => setLoggedIn(true)} />;

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 font-sans">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 flex w-60 shrink-0 flex-col bg-slate-900 text-white transition-transform duration-300 lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
          <div>
            <p className="text-xl font-black">Sam<span className="text-emerald-400">hitha</span></p>
            <p className="mt-0.5 text-xs text-slate-400">Admin Dashboard</p>
          </div>
          <button className="text-slate-400 hover:text-white lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {[
            { icon: BarChart3, label:"Overview" },
            { icon: Users, label:"Patients", badge: patients.length },
          ].map(({ icon: Icon, label, badge }) => (
            <div key={label} className="flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 bg-white/10 text-white">
              <div className="flex items-center gap-3">
                <Icon className="h-4 w-4 text-emerald-400" />
                <span className="text-sm font-semibold">{label}</span>
              </div>
              {badge !== undefined && (
                <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-black text-white">{badge}</span>
              )}
            </div>
          ))}
        </nav>
        <div className="border-t border-white/10 p-4">
          <button onClick={() => setLoggedIn(false)}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-slate-400 hover:bg-white/10 hover:text-white transition text-sm font-semibold">
            <LogOut className="h-4 w-4" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex flex-1 min-w-0 flex-col h-full overflow-hidden">
        {/* Topbar */}
        <header className="shrink-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <button className="text-slate-500 hover:text-slate-900 lg:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-base font-black text-slate-900 sm:text-lg">Patient Assessments</h1>
          </div>
          <div className="hidden sm:flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-500">
            <Shield className="h-3.5 w-3.5 text-emerald-600" />
            Admin · Samhitha
          </div>
        </header>

        <main className="flex-1 flex flex-col overflow-hidden p-4 sm:p-8 gap-4 sm:gap-8 bg-slate-50">
          {/* Stats */}
          <div className="shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4">
            <StatCard label="Total Patients" value={patients.length} icon={Users}
              accent={{ text:"text-emerald-700", bg:"bg-emerald-50", border:"border-emerald-100" }} />
            <StatCard label="High Pain (≥3)" value={highPain} sub="Needs urgent attention" icon={Activity}
              accent={{ text:"text-red-600", bg:"bg-red-50", border:"border-red-100" }} />
            <StatCard label="Today's Submissions" value={today} icon={CheckCircle}
              accent={{ text:"text-blue-600", bg:"bg-blue-50", border:"border-blue-100" }} />
            <StatCard label="Avg BMI" value={avgBMI} sub="Across all patients" icon={Heart}
              accent={{ text:"text-purple-600", bg:"bg-purple-50", border:"border-purple-100" }} />
          </div>

          {/* Filters */}
          <div className="shrink-0 flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[220px]">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input value={search} onChange={e=>setSearch(e.target.value)}
                placeholder="Search by name or phone..."
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-11 pr-4 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition" />
            </div>
            <select value={painFilter} onChange={e=>setPainFilter(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 outline-none focus:border-emerald-500 transition">
              <option value="all">All Pain Levels</option>
              <option value="1">1 – Not Significant</option>
              <option value="2">2 – Intermittent</option>
              <option value="3">3 – Continuous</option>
              <option value="4">4 – Unbearable</option>
            </select>
            <span className="text-xs font-semibold text-slate-400">{filtered.length} result{filtered.length!==1?"s":""}</span>
          </div>

          {/* Table */}
          <div className="flex-1 min-h-0 flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex-1 overflow-auto">
              <table className="w-full text-sm min-w-[600px]">
                <thead className="sticky top-0 z-10 bg-slate-50 shadow-[0_1px_0_0_#e2e8f0]">
                  <tr>
                    {["Patient","Phone","Age / Gender","Date",""].map(h=>(
                      <th key={h} className="px-4 sm:px-5 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 && (
                    <tr><td colSpan={5} className="px-5 py-12 text-center text-slate-400">No patients found</td></tr>
                  )}
                  {filtered.map(p => {
                    return (
                      <tr key={p.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/70 transition">
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 text-xs font-black">
                              {initials(p.name)}
                            </div>
                            <span className="font-semibold text-slate-900">{p.name}</span>
                          </div>
                        </td>
                        <td className="px-5 py-4 text-slate-600">{p.phoneNumber}</td>
                        <td className="px-5 py-4 text-slate-600">{p.age}y · {p.gender}</td>
                        <td className="px-5 py-4 text-xs text-slate-400 whitespace-nowrap">{fmt(p.submittedAt)}</td>
                        <td className="px-5 py-4">
                          <button onClick={()=>setSelected(p)}
                            className="flex items-center gap-1.5 rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 hover:bg-emerald-100 transition">
                            <Eye className="h-3.5 w-3.5" /> View
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* Detail Drawer */}
      <AnimatePresence>
        {selected && <PatientDrawer patient={selected} onClose={()=>setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
}
