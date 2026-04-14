import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Briefcase,
  CalendarDays,
  Check,
  ChevronDown,
  Phone,
  UserRound,
  VenusAndMars,
} from "lucide-react";

const MotionDiv = motion.div;
const MotionButton = motion.button;

const TAB_LABELS = ["About", "Knee Health", "Body Health"];

const ABOUT_STEPS = [
  { key: "name", label: "Full name", type: "text", placeholder: "Enter your full name", icon: UserRound },
  { key: "phoneNumber", label: "Mobile number", type: "tel", placeholder: "Enter your mobile number", icon: Phone },
  { key: "age", label: "Age", type: "number", placeholder: "Enter your age", icon: CalendarDays },
  {
    key: "gender",
    label: "What is your gender?",
    type: "choice",
    options: ["Male", "Female", "Other"],
    icon: VenusAndMars,
  },
  { key: "occupation", label: "What is your occupation?", type: "text", placeholder: "Enter your occupation", icon: Briefcase },
];

const PAIN_SCALE_OPTIONS = [
  {
    value: 1,
    title: "Not significant",
    desc: "Very mild pain that does not affect daily movement much.",
    short: "No pain",
    emoji: "🙂",
    bg: "from-emerald-50 to-green-50",
    border: "border-emerald-300",
    text: "text-emerald-700",
  },
  {
    value: 2,
    title: "Intermittent",
    desc: "On and off pain that comes and goes during the day.",
    short: "Mild",
    emoji: "😌",
    bg: "from-yellow-50 to-amber-50",
    border: "border-yellow-300",
    text: "text-amber-700",
  },
  {
    value: 3,
    title: "Continuous but bearable",
    desc: "Pain is present most of the time, but you can still manage it.",
    short: "Moderate",
    emoji: "😕",
    bg: "from-orange-50 to-amber-50",
    border: "border-orange-300",
    text: "text-orange-700",
  },
  {
    value: 4,
    title: "Continuous unbearable pain",
    desc: "Pain is severe, constant, and difficult to tolerate.",
    short: "Severe",
    emoji: "😭",
    bg: "from-rose-50 to-red-50",
    border: "border-red-300",
    text: "text-red-700",
  },
];

const KNEE_STEPS = [
  {
    key: "kneePain",
    label: "Which knee is hurting?",
    type: "multi",
    options: ["Right Knee", "Left Knee"],
    helper: "You can choose both if the pain affects both knees.",
    icon: Activity,
  },
  {
    key: "painDuration",
    label: "How long have you had the pain?",
    type: "select",
    options: ["< 1 month", "1 month to 1 year", "> 1 year"],
    icon: CalendarDays,
  },
  {
    key: "painScale",
    label: "How intense is your pain right now?",
    type: "pain-scale",
    helper: "Move the slider and choose the option that best matches what you feel most often.",
    icon: BarChart3,
  },
  {
    key: "painStartsIn",
    label: "In how many minutes will it start to pain after you begin walking?",
    type: "select",
    options: ["< 15 min", "30 min - 1 hr", "> 1 hr"],
    icon: CalendarDays,
  },
  {
    key: "stairsPainStarts",
    label: "After climbing, after how many stairs does the pain start?",
    type: "select",
    options: ["< 10 steps / stair", "< 5 stairs", "> 5 stairs"],
    icon: Activity,
  },
  {
    key: "physicalActivityDifficulty",
    label: "Difficulty in physical activity",
    type: "multi",
    options: [
      "Sitting on ground",
      "Squatting / Indian toilet",
      "Sleeping due to pain",
      "Unable to go to washroom",
    ],
    helper: "Choose all that apply to you.",
    icon: Activity,
  },
  {
    key: "jointSound",
    label: "Do you hear any sound while moving the joint?",
    type: "choice",
    options: ["Yes", "No"],
    icon: BarChart3,
  },
];

const BODY_STEPS = [
  {
    key: "bodyMetrics",
    label: "Tell us your height and weight",
    type: "metrics",
    icon: UserRound,
  },
  {
    key: "diabetes",
    label: "Do you have diabetes?",
    type: "choice",
    options: ["Yes", "No"],
    icon: Activity,
  },
  {
    key: "hypertension",
    label: "Do you have hypertension (BP)?",
    type: "choice",
    options: ["Yes", "No"],
    icon: Activity,
  },
  {
    key: "heartProblem",
    label: "Do you have any heart problem?",
    type: "choice",
    options: ["Yes", "No"],
    icon: Activity,
  },
];

const INITIAL_FORM = {
  name: "",
  phoneNumber: "",
  age: "",
  gender: "",
  occupation: "",
  kneePain: [],
  painDuration: "",
  painScale: "",
  painStartsIn: "",
  stairsPainStarts: "",
  physicalActivityDifficulty: [],
  jointSound: "",
  height: "",
  weight: "",
  diabetes: "",
  hypertension: "",
  heartProblem: "",
};

const Assessment = () => {
  const [aboutIndex, setAboutIndex] = useState(0);
  const [kneeIndex, setKneeIndex] = useState(0);
  const [bodyIndex, setBodyIndex] = useState(0);
  const [form, setForm] = useState(INITIAL_FORM);
  const [isComplete, setIsComplete] = useState(false);

  const currentTabIndex = aboutIndex < ABOUT_STEPS.length ? 0 : kneeIndex < KNEE_STEPS.length ? 1 : 2;
  const currentAboutStep = ABOUT_STEPS[aboutIndex];
  const currentKneeStep = KNEE_STEPS[kneeIndex];
  const currentBodyStep = BODY_STEPS[bodyIndex];
  const totalSteps = ABOUT_STEPS.length + KNEE_STEPS.length + BODY_STEPS.length;
  const currentQuestion =
    currentTabIndex === 0 ? currentAboutStep : currentTabIndex === 1 ? currentKneeStep : currentBodyStep;
  const CurrentIcon = currentQuestion?.icon ?? Activity;

  const progressLabel = useMemo(() => {
    if (currentTabIndex === 0) {
      return `Question ${aboutIndex + 1} of ${ABOUT_STEPS.length}`;
    }
    if (currentTabIndex === 1) {
      return `Question ${kneeIndex + 1} of ${KNEE_STEPS.length}`;
    }
    return `Question ${bodyIndex + 1} of ${BODY_STEPS.length}`;
  }, [aboutIndex, bodyIndex, currentTabIndex, kneeIndex]);

  const progressPercent = useMemo(() => {
    if (currentTabIndex === 0) {
      return ((aboutIndex + 1) / totalSteps) * 100;
    }
    if (currentTabIndex === 1) {
      return ((ABOUT_STEPS.length + kneeIndex + 1) / totalSteps) * 100;
    }
    return ((ABOUT_STEPS.length + KNEE_STEPS.length + bodyIndex + 1) / totalSteps) * 100;
  }, [aboutIndex, bodyIndex, currentTabIndex, kneeIndex, totalSteps]);

  const activePainScale = PAIN_SCALE_OPTIONS.find((option) => option.value === Number(form.painScale));

  const updateField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleMulti = (key, value) => {
    setForm((prev) => {
      const current = prev[key];
      const next = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [key]: next };
    });
  };

  const handleNext = () => {
    if (currentTabIndex === 0) {
      if (aboutIndex < ABOUT_STEPS.length - 1) {
        setAboutIndex((prev) => prev + 1);
      } else {
        setAboutIndex(ABOUT_STEPS.length);
      }
      return;
    }

    if (kneeIndex < KNEE_STEPS.length - 1) {
      setKneeIndex((prev) => prev + 1);
      return;
    }

    if (currentTabIndex === 1) {
      setKneeIndex(KNEE_STEPS.length);
      return;
    }

    if (bodyIndex < BODY_STEPS.length - 1) {
      setBodyIndex((prev) => prev + 1);
      return;
    }

    setIsComplete(true);
  };

  const handleBack = () => {
    if (isComplete) {
      setIsComplete(false);
      setBodyIndex(BODY_STEPS.length - 1);
      return;
    }

    if (currentTabIndex === 2) {
      if (bodyIndex > 0) {
        setBodyIndex((prev) => prev - 1);
      } else {
        setKneeIndex(KNEE_STEPS.length - 1);
      }
      return;
    }

    if (currentTabIndex === 1) {
      if (kneeIndex > 0) {
        setKneeIndex((prev) => prev - 1);
      } else {
        setAboutIndex(ABOUT_STEPS.length - 1);
      }
      return;
    }

    if (aboutIndex > 0) {
      setAboutIndex((prev) => prev - 1);
    }
  };

  const isNextDisabled = useMemo(() => {
    if (currentTabIndex === 0) {
      const value = form[currentAboutStep.key];
      return Array.isArray(value) ? value.length === 0 : !String(value).trim();
    }

    if (currentTabIndex === 1) {
      const value = form[currentKneeStep.key];
      return Array.isArray(value) ? value.length === 0 : !String(value).trim();
    }

    if (currentBodyStep.type === "metrics") {
      return !String(form.height).trim() || !String(form.weight).trim();
    }

    const value = form[currentBodyStep.key];
    return Array.isArray(value) ? value.length === 0 : !String(value).trim();
  }, [currentAboutStep, currentBodyStep, currentKneeStep, currentTabIndex, form]);

  const renderAboutStep = () => {
    const step = currentAboutStep;
    const value = form[step.key];

    if (step.type === "choice") {
      return (
        <div className="grid gap-3 sm:grid-cols-3">
          {step.options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => updateField(step.key, option)}
              className={`rounded-2xl border px-4 py-4 text-left text-sm font-semibold transition ${
                value === option
                  ? "border-emerald-500 bg-emerald-50 text-emerald-900 shadow-[0_12px_30px_rgba(16,185,129,0.10)]"
                  : "border-slate-200 bg-white text-slate-700 hover:border-emerald-300 hover:bg-emerald-50/40"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span>{option}</span>
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                    value === option
                      ? "border-emerald-500 bg-emerald-500 text-white"
                      : "border-slate-300 bg-white text-transparent"
                  }`}
                >
                  <Check className="h-3.5 w-3.5" />
                </span>
              </div>
            </button>
          ))}
        </div>
      );
    }

    return (
      <div className="relative">
        <CurrentIcon className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <input
          type={step.type}
          inputMode={step.type === "number" ? "numeric" : undefined}
          value={value}
          onChange={(event) => updateField(step.key, event.target.value)}
          placeholder={step.placeholder}
          className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-14 pr-5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
        />
      </div>
    );
  };

  const renderPainScaleStep = () => (
    <div>
      <div className={`rounded-[1.5rem] border p-4 sm:rounded-[2rem] sm:p-6 transition-all duration-300 ${activePainScale ? `${activePainScale.border} bg-gradient-to-br ${activePainScale.bg}` : "border-emerald-100 bg-gradient-to-br from-emerald-50 to-white"}`}>
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 sm:text-sm">
            Slide to choose
          </p>
          <div className={`w-fit rounded-full border bg-white px-3 py-1 text-sm font-semibold ${activePainScale ? `${activePainScale.border} ${activePainScale.text}` : "border-emerald-100 text-emerald-700"}`}>
            {form.painScale || "-"} / 4
          </div>
        </div>

        <div className="mb-6 flex flex-col gap-4 rounded-[1.5rem] bg-white/80 px-4 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Current pain level
            </p>
            <p className={`mt-2 text-lg font-bold ${activePainScale ? activePainScale.text : "text-slate-900"}`}>
              {activePainScale ? activePainScale.title : "Choose a pain level"}
            </p>
            <p className="mt-1 text-sm text-slate-500">
              {activePainScale ? activePainScale.short : "Move the slider to begin"}
            </p>
          </div>
          <motion.div
            key={activePainScale?.value ?? "empty"}
            initial={{ scale: 0.8, rotate: -8, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="self-end text-5xl sm:self-auto"
          >
            {activePainScale ? activePainScale.emoji : "🙂"}
          </motion.div>
        </div>

        <div className="relative px-1">
          <div className="mb-4 hidden grid-cols-4 gap-2 text-center sm:grid">
            {PAIN_SCALE_OPTIONS.map((option) => (
              <div key={option.value} className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">
                {option.short}
              </div>
            ))}
          </div>
          <input
            type="range"
            min="1"
            max="4"
            step="1"
            value={form.painScale || 1}
            onChange={(event) => updateField("painScale", Number(event.target.value))}
            className="assessment-range h-3 w-full cursor-pointer appearance-none rounded-full bg-transparent"
          />
          <div className="pointer-events-none mt-4 flex snap-x snap-mandatory gap-2.5 overflow-x-auto pb-2 text-center sm:grid sm:grid-cols-4 sm:overflow-visible sm:pb-0">
            {PAIN_SCALE_OPTIONS.map((option) => {
              const active = Number(form.painScale) === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => updateField("painScale", option.value)}
                  className={`pointer-events-auto min-h-[132px] min-w-[170px] snap-start rounded-[1.25rem] border px-3.5 py-3.5 text-left transition sm:min-h-[132px] sm:min-w-0 sm:rounded-2xl sm:px-3 sm:py-3 ${
                    active
                      ? `${option.border} bg-white shadow-[0_14px_30px_rgba(16,185,129,0.12)]`
                      : "border-transparent bg-transparent hover:border-emerald-200 hover:bg-white/70"
                  }`}
                >
                  <p className={`text-sm font-bold sm:text-sm ${active ? option.text : "text-slate-500"}`}>
                    {option.value}
                  </p>
                  <p className="mt-1.5 text-[1.65rem] leading-none sm:mt-1 sm:text-2xl">{option.emoji}</p>
                  <p className={`mt-2 text-[13px] font-semibold leading-5 sm:mt-2 sm:text-[13px] sm:leading-5 ${active ? "text-slate-900" : "text-slate-500"}`}>
                    {option.title}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activePainScale ? (
          <MotionDiv
            key={activePainScale.value}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`mt-6 rounded-2xl border bg-white px-5 py-5 shadow-[0_16px_35px_rgba(16,24,40,0.05)] ${activePainScale.border}`}
          >
            <p className={`text-xs font-bold uppercase tracking-[0.2em] ${activePainScale.text}`}>
              Selected Level
            </p>
            <h3 className="mt-2 text-xl font-bold text-slate-900">
              {activePainScale.value}. {activePainScale.title} {activePainScale.emoji}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{activePainScale.desc}</p>
          </MotionDiv>
        ) : null}
      </AnimatePresence>
    </div>
  );

  const renderKneeStep = () => {
    const step = currentKneeStep;
    const value = form[step.key];

    if (step.type === "pain-scale") {
      return renderPainScaleStep();
    }

    if (step.type === "choice") {
      return (
        <div className="grid gap-3 sm:grid-cols-2">
          {step.options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => updateField(step.key, option)}
              className={`rounded-2xl border px-4 py-4 text-left text-sm font-semibold transition ${
                value === option
                  ? "border-emerald-500 bg-emerald-50 text-emerald-900 shadow-[0_12px_30px_rgba(16,185,129,0.10)]"
                  : "border-slate-200 bg-white text-slate-700 hover:border-emerald-300 hover:bg-emerald-50/40"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span>{option}</span>
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                    value === option
                      ? "border-emerald-500 bg-emerald-500 text-white"
                      : "border-slate-300 bg-white text-transparent"
                  }`}
                >
                  <Check className="h-3.5 w-3.5" />
                </span>
              </div>
            </button>
          ))}
        </div>
      );
    }

    if (step.type === "select") {
      return (
        <div className="relative">
          <CalendarDays className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <select
            value={value}
            onChange={(event) => updateField(step.key, event.target.value)}
            className="w-full appearance-none rounded-2xl border border-slate-200 bg-white py-4 pl-14 pr-14 text-base text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
          >
            <option value="">Select option</option>
            {step.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        </div>
      );
    }

    return (
      <div className="grid gap-3 sm:grid-cols-2">
        {step.options.map((option) => {
          const active = value.includes(option);

          return (
            <button
              key={option}
              type="button"
              onClick={() => toggleMulti(step.key, option)}
              className={`rounded-2xl border px-5 py-4 text-left transition ${
                active
                  ? "border-emerald-500 bg-emerald-50 shadow-[0_12px_30px_rgba(16,185,129,0.10)]"
                  : "border-slate-200 bg-white hover:border-emerald-300 hover:bg-emerald-50/40"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className={`text-sm font-semibold ${active ? "text-emerald-900" : "text-slate-700"}`}>
                  {option}
                </span>
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-md border transition ${
                    active ? "border-emerald-500 bg-emerald-500 text-white" : "border-slate-300 bg-white text-transparent"
                  }`}
                >
                  <Check className="h-3.5 w-3.5" />
                </span>
              </div>
            </button>
          );
        })}
      </div>
    );
  };

  const renderBodyStep = () => {
    const step = currentBodyStep;
    const value = form[step.key];

    if (step.type === "metrics") {
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative">
            <UserRound className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="number"
              inputMode="numeric"
              value={form.height}
              onChange={(event) => updateField("height", event.target.value)}
              placeholder="Height (cm)"
              className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-14 pr-5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            />
          </div>
          <div className="relative">
            <Briefcase className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="number"
              inputMode="numeric"
              value={form.weight}
              onChange={(event) => updateField("weight", event.target.value)}
              placeholder="Weight (kg)"
              className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-14 pr-5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            />
          </div>
        </div>
      );
    }

    return (
      <div className="grid gap-3 sm:grid-cols-2">
        {step.options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => updateField(step.key, option)}
            className={`rounded-2xl border px-4 py-4 text-left text-sm font-semibold transition ${
              value === option
                ? "border-emerald-500 bg-emerald-50 text-emerald-900 shadow-[0_12px_30px_rgba(16,185,129,0.10)]"
                : "border-slate-200 bg-white text-slate-700 hover:border-emerald-300 hover:bg-emerald-50/40"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <span>{option}</span>
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                  value === option
                    ? "border-emerald-500 bg-emerald-500 text-white"
                    : "border-slate-300 bg-white text-transparent"
                }`}
              >
                <Check className="h-3.5 w-3.5" />
              </span>
            </div>
          </button>
        ))}
      </div>
    );
  };

  return (
    <section className="min-h-[calc(100vh-72px)] overflow-x-hidden bg-gradient-to-b from-white via-emerald-50/70 to-white px-0 py-0 sm:px-6 sm:py-10 md:py-14">
      <div className="mx-auto max-w-5xl">
        <div className="border-b border-emerald-100 bg-gradient-to-b from-emerald-50 via-white to-white px-5 py-5 sm:hidden">
          <p className="text-3xl font-black tracking-tight text-white">
            <span className="text-slate-900">Sam</span>
            <span className="text-emerald-600">hitha</span>
            <span className="text-slate-900">.</span>
          </p>
          <p className="mt-2 text-sm text-slate-600">
            This assessment is built to understand your joint health step by step.
          </p>
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-0 hidden px-4 pt-8 text-center sm:mb-8 sm:block sm:px-0 sm:pt-0"
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">
            Start Assessment
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            A guided knee check in under 2 minutes
          </h1>
          <p className="mx-auto mt-4 max-w-2xl px-1 text-sm leading-6 text-slate-600 md:text-base">
            We’ll walk through a few simple questions about you and your knee health,
            then prepare the next step based on your answers.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-none border-y border-emerald-100 bg-white px-4 py-4 shadow-none backdrop-blur sm:rounded-[2rem] sm:border sm:bg-white/85 sm:p-5 sm:shadow-[0_20px_50px_rgba(16,24,40,0.05)]"
        >
          <div className="mx-auto grid max-w-5xl grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            {TAB_LABELS.map((tab, index) => {
              const isActive = index === currentTabIndex;
              const isUnlocked = index <= currentTabIndex;
              const isCompleted = index < currentTabIndex;

              return (
                <div
                  key={tab}
                  className={`relative min-h-[58px] min-w-0 rounded-[0.9rem] px-3 py-3 transition sm:min-h-[86px] sm:rounded-[1.35rem] sm:px-5 sm:py-5 ${
                    isActive
                      ? "bg-[#a6bf78] text-white shadow-[0_16px_30px_rgba(166,191,120,0.28)]"
                      : isUnlocked
                        ? "bg-slate-100 text-slate-900"
                        : "bg-slate-100 text-slate-500"
                  }`}
                >
                  <div className="flex h-full items-start justify-between gap-3">
                    <div className="flex min-w-0 flex-1 items-center">
                      <p className={`text-[13px] font-semibold leading-tight sm:text-lg lg:text-[1.35rem] ${isActive ? "text-white" : isUnlocked ? "text-slate-900" : "text-slate-500"}`}>
                        {tab}
                      </p>
                    </div>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold sm:h-9 sm:w-9 sm:text-sm ${
                        isActive
                          ? "bg-white/20 text-white"
                          : isCompleted
                            ? "bg-emerald-600 text-white"
                            : isUnlocked
                              ? "bg-white text-slate-700"
                              : "bg-white/70 text-slate-500"
                      }`}
                    >
                      {isCompleted ? <Check className="h-4 w-4" /> : index + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-slate-700">{progressLabel}</p>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                {Math.round(progressPercent)}%
              </p>
            </div>
            <div className="mx-auto h-2 w-full max-w-3xl overflow-hidden rounded-full bg-slate-200">
              <MotionDiv
                className="h-full rounded-full bg-gradient-to-r from-[#a6bf78] to-emerald-600"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              />
            </div>
          </div>
        </MotionDiv>

        <div className="mt-0 px-4 py-5 sm:mt-8 sm:px-0 sm:py-0">
          {isComplete ? (
            <MotionDiv
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="rounded-[1.75rem] border border-emerald-100 bg-white/95 p-6 text-center shadow-[0_24px_60px_rgba(16,24,40,0.07)] backdrop-blur sm:rounded-[2rem] sm:p-8"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                <Check className="h-6 w-6" />
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Assessment Complete
              </p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Your responses have been captured
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
                The first stage of your knee assessment is complete. We now have your basic details,
                knee health inputs, and pain severity level.
              </p>
            </MotionDiv>
          ) : (
            <AnimatePresence mode="wait">
              {currentTabIndex === 0 ? (
                <MotionDiv
                  key={`about-${aboutIndex}`}
                  initial={{ opacity: 0, y: 28, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -18, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="rounded-[1.25rem] border-0 bg-white p-0 shadow-none backdrop-blur sm:rounded-[2rem] sm:border sm:border-emerald-100 sm:bg-white/95 sm:p-6 sm:shadow-[0_24px_60px_rgba(16,24,40,0.07)] md:p-8"
                >
                  <div className="flex min-h-[112px] flex-col gap-3 sm:min-h-0 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 sm:text-sm">
                        {`About • ${progressLabel}`}
                      </p>
                      <h2 className="mt-3 max-w-[10ch] text-[1.85rem] font-bold leading-tight text-slate-900 sm:max-w-none sm:text-2xl md:text-3xl">
                        {currentAboutStep.label}
                      </h2>
                    </div>
                    <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 sm:flex sm:h-12 sm:w-12">
                      <CurrentIcon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="mt-7 sm:mt-6">{renderAboutStep()}</div>
                </MotionDiv>
              ) : currentTabIndex === 1 ? (
                <MotionDiv
                  key={`knee-${kneeIndex}`}
                  initial={{ opacity: 0, y: 28, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -18, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="rounded-[1.25rem] border-0 bg-white p-0 shadow-none backdrop-blur sm:rounded-[2rem] sm:border sm:border-emerald-100 sm:bg-white/95 sm:p-6 sm:shadow-[0_24px_60px_rgba(16,24,40,0.07)] md:p-8"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 sm:text-sm">
                        {`Knee Health • ${progressLabel}`}
                      </p>
                      <h2 className="mt-3 text-[1.7rem] font-bold leading-tight text-slate-900 sm:text-2xl md:text-3xl">
                        {currentKneeStep.label}
                      </h2>
                      {currentKneeStep.helper ? (
                        <p className="mt-3 text-sm text-slate-500">{currentKneeStep.helper}</p>
                      ) : null}
                    </div>
                    <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 sm:flex sm:h-12 sm:w-12">
                      <CurrentIcon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="mt-8 sm:mt-6">{renderKneeStep()}</div>
                </MotionDiv>
              ) : (
                <MotionDiv
                  key={`body-${bodyIndex}`}
                  initial={{ opacity: 0, y: 28, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -18, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="rounded-[1.25rem] border-0 bg-white p-0 shadow-none backdrop-blur sm:rounded-[2rem] sm:border sm:border-emerald-100 sm:bg-white/95 sm:p-6 sm:shadow-[0_24px_60px_rgba(16,24,40,0.07)] md:p-8"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 sm:text-sm">
                        {`Body Health • ${progressLabel}`}
                      </p>
                      <h2 className="mt-3 text-[1.7rem] font-bold leading-tight text-slate-900 sm:text-2xl md:text-3xl">
                        {currentBodyStep.label}
                      </h2>
                    </div>
                    <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 sm:flex sm:h-12 sm:w-12">
                      <CurrentIcon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="mt-8 sm:mt-6">{renderBodyStep()}</div>
                </MotionDiv>
              )}
            </AnimatePresence>
          )}

          <div className="sticky bottom-0 z-10 mt-6 border-t border-emerald-100 bg-white/96 px-0 py-4 backdrop-blur sm:static sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-0">
            <div className="flex items-center gap-3 sm:justify-between">
              <MotionButton
                type="button"
                onClick={handleBack}
                disabled={currentTabIndex === 0 && aboutIndex === 0 && !isComplete}
                whileTap={{ scale: 0.98 }}
              className="w-1/2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 disabled:cursor-not-allowed disabled:opacity-45 sm:w-auto sm:min-w-[120px] sm:rounded-2xl"
              >
                Back
              </MotionButton>

            <MotionButton
                type="button"
                onClick={handleNext}
                disabled={isNextDisabled || isComplete}
                whileTap={{ scale: 0.98 }}
              className="w-1/2 rounded-xl bg-[#7c7778] px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-none transition hover:bg-[#6f6a6b] disabled:cursor-not-allowed disabled:opacity-45 sm:w-auto sm:min-w-[160px] sm:rounded-2xl sm:bg-primary sm:normal-case sm:tracking-normal sm:shadow-lg sm:shadow-emerald-200 sm:hover:bg-secondary"
              >
                {currentTabIndex === 2 && bodyIndex === BODY_STEPS.length - 1 ? "Complete Assessment" : "Next"}
              </MotionButton>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .assessment-range {
          -webkit-appearance: none;
          appearance: none;
        }

        .assessment-range::-webkit-slider-runnable-track {
          height: 12px;
          border-radius: 999px;
          background: linear-gradient(90deg, #22c55e 0%, #facc15 33%, #fb923c 66%, #ef4444 100%);
        }

        .assessment-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          margin-top: -8px;
          height: 28px;
          width: 28px;
          border-radius: 999px;
          border: 4px solid #ffffff;
          background: #059669;
          box-shadow: 0 10px 20px rgba(5, 150, 105, 0.28);
        }

        .assessment-range::-moz-range-track {
          height: 12px;
          border-radius: 999px;
          background: linear-gradient(90deg, #22c55e 0%, #facc15 33%, #fb923c 66%, #ef4444 100%);
        }

        .assessment-range::-moz-range-thumb {
          height: 28px;
          width: 28px;
          border: 4px solid #ffffff;
          border-radius: 999px;
          background: #059669;
          box-shadow: 0 10px 20px rgba(5, 150, 105, 0.28);
        }
      `}</style>
    </section>
  );
};

export default Assessment;
