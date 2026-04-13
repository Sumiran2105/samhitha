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

const TAB_LABELS = ["About", "Knee Health"];

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
    label: "In how many minutes does it start to pain?",
    type: "select",
    options: ["< 15 min", "30 min - 1 hr", "> 1 hr"],
    icon: CalendarDays,
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
};

const tabDescription = {
  About: "Tell us about yourself first.",
  "Knee Health": "Help us understand your knee condition.",
};

const Assessment = () => {
  const [aboutIndex, setAboutIndex] = useState(0);
  const [kneeIndex, setKneeIndex] = useState(0);
  const [form, setForm] = useState(INITIAL_FORM);
  const [isComplete, setIsComplete] = useState(false);

  const currentTabIndex = aboutIndex < ABOUT_STEPS.length ? 0 : 1;
  const currentAboutStep = ABOUT_STEPS[aboutIndex];
  const currentKneeStep = KNEE_STEPS[kneeIndex];
  const totalSteps = ABOUT_STEPS.length + KNEE_STEPS.length;
  const currentQuestion = currentTabIndex === 0 ? currentAboutStep : currentKneeStep;
  const CurrentIcon = currentQuestion?.icon ?? Activity;

  const progressLabel = useMemo(() => {
    if (currentTabIndex === 0) {
      return `Question ${aboutIndex + 1} of ${ABOUT_STEPS.length}`;
    }
    return `Question ${kneeIndex + 1} of ${KNEE_STEPS.length}`;
  }, [aboutIndex, currentTabIndex, kneeIndex]);

  const progressPercent = useMemo(() => {
    if (currentTabIndex === 0) {
      return ((aboutIndex + 1) / totalSteps) * 100;
    }
    return ((ABOUT_STEPS.length + kneeIndex + 1) / totalSteps) * 100;
  }, [aboutIndex, currentTabIndex, kneeIndex, totalSteps]);

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

    setIsComplete(true);
  };

  const handleBack = () => {
    if (isComplete) {
      setIsComplete(false);
      setKneeIndex(KNEE_STEPS.length - 1);
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

    const value = form[currentKneeStep.key];
    return Array.isArray(value) ? value.length === 0 : !String(value).trim();
  }, [currentAboutStep, currentKneeStep, currentTabIndex, form]);

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
      <div className={`rounded-[2rem] border p-5 sm:p-6 transition-all duration-300 ${activePainScale ? `${activePainScale.border} bg-gradient-to-br ${activePainScale.bg}` : "border-emerald-100 bg-gradient-to-br from-emerald-50 to-white"}`}>
        <div className="mb-5 flex items-center justify-between gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Slide to choose
          </p>
          <div className={`rounded-full border bg-white px-3 py-1 text-sm font-semibold ${activePainScale ? `${activePainScale.border} ${activePainScale.text}` : "border-emerald-100 text-emerald-700"}`}>
            {form.painScale || "-"} / 4
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between gap-4 rounded-[1.5rem] bg-white/80 px-5 py-4 shadow-sm">
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
            className="text-5xl"
          >
            {activePainScale ? activePainScale.emoji : "🙂"}
          </motion.div>
        </div>

        <div className="relative px-1">
          <div className="mb-4 grid grid-cols-4 gap-2 text-center">
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
          <div className="pointer-events-none mt-4 grid grid-cols-4 gap-2 text-center">
            {PAIN_SCALE_OPTIONS.map((option) => {
              const active = Number(form.painScale) === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => updateField("painScale", option.value)}
                  className={`pointer-events-auto rounded-2xl border px-3 py-3 text-left transition ${
                    active
                      ? `${option.border} bg-white shadow-[0_14px_30px_rgba(16,185,129,0.12)]`
                      : "border-transparent bg-transparent hover:border-emerald-200 hover:bg-white/70"
                  }`}
                >
                  <p className={`text-sm font-bold ${active ? option.text : "text-slate-500"}`}>
                    {option.value}
                  </p>
                  <p className="mt-1 text-2xl leading-none">{option.emoji}</p>
                  <p className={`mt-2 text-xs font-semibold leading-5 ${active ? "text-slate-900" : "text-slate-500"}`}>
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

  return (
    <section className="min-h-[calc(100vh-72px)] bg-gradient-to-b from-white via-emerald-50/70 to-white px-4 py-10 sm:px-6 md:py-14">
      <div className="mx-auto max-w-5xl">
        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">
            Start Assessment
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            A guided knee check in under 2 minutes
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
            We’ll walk through a few simple questions about you and your knee health,
            then prepare the next step based on your answers.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-[2rem] border border-emerald-100 bg-white/85 p-4 shadow-[0_20px_50px_rgba(16,24,40,0.05)] backdrop-blur sm:p-5"
        >
          <div className="relative grid gap-3 md:grid-cols-2">
            <div className="pointer-events-none absolute left-0 right-0 top-[2.55rem] hidden h-px bg-slate-200 md:block" />
            {TAB_LABELS.map((tab, index) => {
              const isActive = index === currentTabIndex;
              const isUnlocked = index <= currentTabIndex;
              const isCompleted = index < currentTabIndex;

              return (
                <div
                  key={tab}
                  className={`relative rounded-2xl border px-4 py-4 transition ${
                    isActive
                      ? "border-emerald-500 bg-emerald-50 shadow-[0_12px_30px_rgba(16,185,129,0.08)]"
                      : isUnlocked
                        ? "border-emerald-100 bg-white"
                        : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-[0.2em] ${isActive ? "text-emerald-700" : "text-slate-400"}`}>
                        Tab {index + 1}
                      </p>
                      <p className={`mt-2 text-lg font-semibold ${isActive ? "text-slate-900" : "text-slate-500"}`}>
                        {tab}
                      </p>
                    </div>
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                        isActive
                          ? "bg-emerald-600 text-white"
                          : isCompleted
                            ? "bg-emerald-600 text-white"
                            : isUnlocked
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-slate-200 text-slate-500"
                      }`}
                    >
                      {isCompleted ? <Check className="h-4 w-4" /> : index + 1}
                    </span>
                  </div>
                  <p className={`mt-3 text-sm ${isActive ? "text-slate-600" : "text-slate-400"}`}>
                    {tabDescription[tab]}
                  </p>
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
            <div className="h-2 overflow-hidden rounded-full bg-emerald-100">
              <MotionDiv
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              />
            </div>
          </div>
        </MotionDiv>

        <div className="mt-8">
          {isComplete ? (
            <MotionDiv
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="rounded-[2rem] border border-emerald-100 bg-white/95 p-8 text-center shadow-[0_24px_60px_rgba(16,24,40,0.07)] backdrop-blur"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                <Check className="h-6 w-6" />
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Assessment Complete
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">
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
                  className="rounded-[2rem] border border-emerald-100 bg-white/95 p-6 shadow-[0_24px_60px_rgba(16,24,40,0.07)] backdrop-blur md:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                        {`About • ${progressLabel}`}
                      </p>
                      <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
                        {currentAboutStep.label}
                      </h2>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                      <CurrentIcon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="mt-6">{renderAboutStep()}</div>
                </MotionDiv>
              ) : (
                <MotionDiv
                  key={`knee-${kneeIndex}`}
                  initial={{ opacity: 0, y: 28, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -18, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="rounded-[2rem] border border-emerald-100 bg-white/95 p-6 shadow-[0_24px_60px_rgba(16,24,40,0.07)] backdrop-blur md:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                        {`Knee Health • ${progressLabel}`}
                      </p>
                      <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
                        {currentKneeStep.label}
                      </h2>
                      {currentKneeStep.helper ? (
                        <p className="mt-3 text-sm text-slate-500">{currentKneeStep.helper}</p>
                      ) : null}
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                      <CurrentIcon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="mt-6">{renderKneeStep()}</div>
                </MotionDiv>
              )}
            </AnimatePresence>
          )}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <MotionButton
              type="button"
              onClick={handleBack}
              disabled={currentTabIndex === 0 && aboutIndex === 0 && !isComplete}
              whileTap={{ scale: 0.98 }}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 disabled:cursor-not-allowed disabled:opacity-45"
            >
              Back
            </MotionButton>

            <MotionButton
              type="button"
              onClick={handleNext}
              disabled={isNextDisabled || isComplete}
              whileTap={{ scale: 0.98 }}
              className="rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-45"
            >
              {currentTabIndex === 1 && kneeIndex === KNEE_STEPS.length - 1 ? "Complete Assessment" : "Next"}
            </MotionButton>
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
