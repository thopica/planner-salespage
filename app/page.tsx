import {
  Target,
  ListChecks,
  Lightning,
  Heart,
  Flame,
  Columns,
  Timer,
  ChartBar,
  Brain,
  Database,
  Crown,
  Gift,
  Check,
  ArrowDown,
  Lock,
} from "@phosphor-icons/react/dist/ssr";

const STRIPE_URL = "https://buy.stripe.com/placeholder";

function BuyButton({
  label = "Buy Now — $47",
  large = false,
  fullWidth = false,
}: {
  label?: string;
  large?: boolean;
  fullWidth?: boolean;
}) {
  return (
    <a
      href={STRIPE_URL}
      className={[
        "inline-flex items-center justify-center font-semibold rounded-xl bg-[#C4623A] text-white",
        "transition-all duration-200 hover:bg-[#A8512F]",
        "active:scale-[0.98] active:-translate-y-px",
        "shadow-[0_4px_14px_-4px_rgba(196,98,58,0.45)]",
        large ? "px-8 py-4 text-[1.05rem]" : "px-5 py-2.5 text-sm",
        fullWidth ? "w-full" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {label}
    </a>
  );
}

function AppPreview() {
  return (
    <div className="bg-[#FDFAF6] rounded-2xl shadow-[0_30px_80px_-20px_rgba(44,36,22,0.22)] border border-[#DDD5C8] overflow-hidden">
      <div className="bg-[#F0EBE1] border-b border-[#DDD5C8] px-4 py-2.5 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#C4623A]/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#DDD5C8]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#DDD5C8]" />
        </div>
        <div className="ml-3 flex-1 bg-white/80 rounded h-5 text-[9px] flex items-center px-2 text-[#9A8876] font-mono tracking-tight">
          clara — friday, may 22
        </div>
      </div>
      <div className="flex">
        <div className="w-10 bg-[#F0EBE1] border-r border-[#DDD5C8] py-4 flex flex-col items-center gap-3 shrink-0">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`w-5 h-5 rounded-md ${i === 0 ? "bg-[#C4623A]" : "bg-[#DDD5C8]/60"}`}
            />
          ))}
        </div>
        <div className="flex-1 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-[9px] uppercase tracking-widest text-[#9A8876] font-semibold">
              Main Focus
            </p>
            <span className="bg-[#C4623A]/10 text-[#C4623A] text-[8px] px-2 py-0.5 rounded-full font-semibold">
              ADHD-Friendly
            </span>
          </div>
          <div className="bg-[#FFF0E8] border border-[#F0D0C0] rounded-lg p-2.5">
            <p className="text-[11px] font-semibold text-[#2C2416]">
              Finish the quarterly report
            </p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-widest text-[#9A8876] font-semibold mb-1.5">
              Today
            </p>
            <div className="space-y-1.5">
              {[
                { t: "Review client proposal", done: true },
                { t: "Gym — 45 min", done: true },
                { t: "Call with Delphine at 3pm", done: false },
                { t: "Block tomorrow morning", done: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 text-[10px]">
                  <div
                    className={`w-3 h-3 rounded border shrink-0 ${
                      item.done
                        ? "bg-[#C4623A] border-[#C4623A]"
                        : "border-[#DDD5C8]"
                    }`}
                  />
                  <span className={item.done ? "line-through text-[#9A8876]" : ""}>
                    {item.t}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-widest text-[#9A8876] font-semibold mb-1.5">
              Habits
            </p>
            <div className="grid grid-cols-5 gap-1">
              {["Meditate", "Water", "Journal", "Walk", "Read"].map((h, i) => (
                <div
                  key={i}
                  className={`rounded py-1 text-[7px] text-center font-semibold ${
                    i < 3
                      ? "bg-[#C4623A] text-white"
                      : "bg-[#F0EBE1] text-[#9A8876]"
                  }`}
                >
                  {h}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#F0EBE1]/60 rounded-lg p-2.5">
            <p className="text-[9px] uppercase tracking-widest text-[#9A8876] font-semibold mb-1.5">
              Gratitude
            </p>
            <div className="space-y-1">
              {[
                "The quiet morning before everyone was up",
                "Coffee that was actually still hot",
              ].map((g, i) => (
                <p
                  key={i}
                  className="text-[9px] text-[#7A6552] pl-2 border-l-2 border-[#C4623A]/30"
                >
                  {g}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    Icon: Target,
    title: "Know exactly what matters most",
    desc: "Set one Main Focus each day. Not ten priorities — one. That single decision changes everything about how you show up.",
    wide: true,
  },
  {
    Icon: Lightning,
    title: "Clear the noise. Make space.",
    desc: "Brain Dump captures the mental swirl so your task list stays clean and your head stays clearer.",
    wide: false,
  },
  {
    Icon: ListChecks,
    title: "Stop juggling it all in your head",
    desc: "Missed tasks move to another day with one click — no guilt, no re-writing the list.",
    wide: false,
  },
  {
    Icon: Flame,
    title: "Build routines you're actually proud of",
    desc: "Daily habit tracker with streaks. Not overwhelming — just the habits that matter most.",
    wide: true,
  },
  {
    Icon: Heart,
    title: "End every day with something good",
    desc: "Gratitude prompts take thirty seconds and shift your whole evening.",
    wide: false,
  },
  {
    Icon: Columns,
    title: "Design your day before it designs you",
    desc: "Time Block Schedule in a side panel. Toggle it with the S key. Plan with intention.",
    wide: false,
  },
  {
    Icon: Timer,
    title: "Work in focused bursts. Rest without guilt.",
    desc: "Built-in Pomodoro. Structured focus, structured rest. Your brain will thank you.",
    wide: false,
  },
  {
    Icon: ChartBar,
    title: "Finally understand your own patterns",
    desc: "Task finish rate, clear-the-board days, habit streaks — over 7, 30, or 90 days. Automated.",
    wide: true,
  },
];

const whyDifferent = [
  {
    Icon: Lock,
    title: "No account needed — open it and start",
    desc: "Zero friction. No email, no password. Just open and go.",
  },
  {
    Icon: Database,
    title: "Your data never leaves your device",
    desc: "Everything stays local. No server stores your plans, habits, or gratitude notes.",
  },
  {
    Icon: Crown,
    title: "Pay once, use forever",
    desc: "No monthly subscription. No annual renewal. You buy it once and it is yours.",
  },
  {
    Icon: Brain,
    title: "ADHD-friendly by design",
    desc: "Clear structure, reduced overwhelm, gentle guidance — not another noisy system.",
  },
  {
    Icon: Gift,
    title: "Missing a feature? I'll build it for you.",
    desc: "First 100 buyers: if something you need is missing, I'll build it free. You have my word.",
  },
];

const included = [
  "Daily + Weekly + Monthly planner",
  "Habits tracker with streaks",
  "Time blocking + Pomodoro timer",
  "Brain dump + Gratitude journal",
  "Insights & accountability report",
  "5 themes including dark mode",
  "ADHD-friendly design",
  "Your data stays on your device",
  "Pay once, own it forever",
];

const screenshots = [
  {
    label: "Daily Planner",
    desc: "Main Focus · Tasks · Gratitude · Brain Dump · Habits",
    tall: false,
  },
  {
    label: "Accountability Report",
    desc: "Task momentum, habit streaks, clear-the-board days",
    tall: true,
  },
  {
    label: "Weekly Planning View",
    desc: "The whole week at a glance with time blocks per day",
    tall: true,
  },
  {
    label: "Smart Reminders",
    desc: "Weekly ribbon: open vs. done at a glance",
    tall: false,
  },
  {
    label: "All-in-One Overview",
    desc: "Day / Week / Month · Habits · Pomodoro · 5 Themes",
    tall: false,
  },
];

function ScreenshotSlot({ label, desc }: { label: string; desc: string }) {
  return (
    <div className="w-full h-full min-h-[220px] bg-[#F0EBE1] rounded-2xl border border-[#DDD5C8] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-6 h-6 rounded-full bg-[#C4623A]/20 mb-3 flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-[#C4623A]/60" />
      </div>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9A8876] mb-1">
        {label}
      </p>
      <p className="text-xs text-[#7A6552] max-w-[180px] leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-[#F8F4ED] text-[#2C2416]">
      {/* ── Nav ── */}
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <span className="font-playfair text-xl font-bold tracking-tight">Clara Planner</span>
        <BuyButton />
      </nav>

      {/* ── Hero (split, left-aligned) ── */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FFF0E8] text-[#C4623A] border border-[#F0D0C0] rounded-full px-3.5 py-1.5 text-xs font-semibold mb-8 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4623A]" />
              ADHD-Friendly · Buy Once · No Account Needed
            </div>

            <h1 className="font-playfair text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tighter leading-[1.05] text-[#2C2416] mb-6">
              Clear your head.<br />
              Design your day.
            </h1>

            <p className="text-lg md:text-xl text-[#7A6552] max-w-[52ch] mb-10 leading-relaxed">
              Clara Planner gives you one calm, beautiful place for your focus,
              tasks, habits, and gratitude — so you can stop carrying everything
              in your head.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-8">
              <BuyButton large />
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-1.5 text-[#7A6552] hover:text-[#2C2416] font-medium text-sm transition-colors duration-200"
              >
                See how it works
                <ArrowDown size={14} weight="bold" />
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm text-[#9A8876]">
              <span>
                <s className="text-[#BFB3A3]">$99</s>{" "}
                <strong className="text-[#2C2416]">$47</strong> launch price
              </span>
              <span className="w-px h-4 bg-[#DDD5C8]" />
              <span>Pay once · Yours forever</span>
            </div>
          </div>

          {/* Right — app preview */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#C4623A]/5 to-transparent rounded-3xl" />
            <AppPreview />
          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="bg-[#EDE8DF] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold tracking-tighter mb-16">
            Does this sound familiar?
          </h2>

          <div className="space-y-10">
            {[
              {
                q: "Your to-do list has 30 items. You finished 4. And somehow you still feel like you did nothing.",
                by: "The overwhelm loop",
              },
              {
                q: "You're keeping everything in your head. Your coffee goes cold while you're mid-thought about something you forgot to do.",
                by: "The mental load tax",
              },
              {
                q: "You start the day with good intentions, then get pulled in every direction — and by evening, you can't even remember what you were trying to do.",
                by: "The intention gap",
              },
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-8 items-start">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#C4623A] md:w-36 md:pt-2 shrink-0">
                  {item.by}
                </div>
                <blockquote className="text-xl md:text-2xl text-[#2C2416] leading-relaxed font-playfair italic border-l-2 border-[#C4623A]/30 pl-6">
                  "{item.q}"
                </blockquote>
              </div>
            ))}
          </div>

          <p className="text-xl md:text-2xl text-[#7A6552] font-playfair italic mt-16 max-w-[48ch]">
            You don't need more productivity advice.<br />
            You need a place for your brain to land.
          </p>
        </div>
      </section>

      {/* ── Features as Outcomes ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
              Everything you need.<br />Nothing you don't.
            </h2>
            <p className="text-[#7A6552] text-lg leading-relaxed md:pb-1">
              Every feature in Clara is designed to reduce mental load — not
              add to it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map(({ Icon, title, desc, wide }, i) => (
              <div
                key={i}
                className={[
                  "bg-white/50 rounded-2xl p-7 border border-[#DDD5C8]",
                  "hover:border-[#C4623A]/30 hover:bg-white/80",
                  "transition-all duration-200",
                  wide ? "md:col-span-2" : "",
                ].join(" ")}
              >
                <div className="w-9 h-9 rounded-lg bg-[#FFF0E8] flex items-center justify-center mb-4">
                  <Icon size={18} weight="bold" className="text-[#C4623A]" />
                </div>
                <h3 className="font-semibold text-[1.05rem] text-[#2C2416] mb-2 leading-snug">
                  {title}
                </h3>
                <p className="text-[#7A6552] leading-relaxed text-[0.9rem]">{desc}</p>
              </div>
            ))}

            {/* ADHD card — full width */}
            <div className="md:col-span-3 bg-[#FFF0E8] rounded-2xl p-7 border border-[#F0D0C0]">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="w-9 h-9 rounded-lg bg-[#C4623A]/15 flex items-center justify-center shrink-0">
                  <Brain size={18} weight="bold" className="text-[#C4623A]" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="font-semibold text-[1.05rem] text-[#2C2416]">
                      Built for the way your brain actually works
                    </h3>
                    <span className="bg-[#C4623A] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-wide">
                      ADHD-Friendly
                    </span>
                  </div>
                  <p className="text-[#7A6552] text-[0.9rem] leading-relaxed max-w-[72ch]">
                    Clara is designed with ADHD in mind — clear structure, no clutter, gentle reminders,
                    and a weekly view that makes the whole picture visible at a glance. Because your brain
                    deserves a system that works with it, not against it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="bg-[#EDE8DF] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold tracking-tighter mb-3">
              Up and running in minutes.
            </h2>
            <p className="text-lg text-[#7A6552]">No sign-up. No setup. Just open and start.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {[
              {
                n: "01",
                title: "Download once",
                desc: "Pay once, download Clara, open it in your browser. Nothing to install. No account to create. No email required.",
              },
              {
                n: "02",
                title: "Plan your day",
                desc: "Set your main focus. Add tasks. Dump your brain. Log gratitude. Check habits. Design time blocks.",
              },
              {
                n: "03",
                title: "Feel the difference",
                desc: "See your patterns in the Insights view. Notice the weeks you're steady. Build on what works — in your own rhythm.",
              },
            ].map((s) => (
              <div key={s.n}>
                <p className="font-playfair text-5xl font-bold text-[#C4623A]/20 mb-4 tracking-tighter">
                  {s.n}
                </p>
                <h3 className="font-semibold text-xl text-[#2C2416] mb-3">{s.title}</h3>
                <p className="text-[#7A6552] leading-relaxed text-[0.95rem]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Screenshots ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
              See it for yourself.
            </h2>
            <p className="text-[#7A6552] text-lg md:pb-1">
              Clean. Calm. Designed to help you think clearly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[220px]">
            <div className="md:col-span-2 md:row-span-2">
              <ScreenshotSlot label={screenshots[0].label} desc={screenshots[0].desc} />
            </div>
            <div>
              <ScreenshotSlot label={screenshots[1].label} desc={screenshots[1].desc} />
            </div>
            <div>
              <ScreenshotSlot label={screenshots[2].label} desc={screenshots[2].desc} />
            </div>
            <div>
              <ScreenshotSlot label={screenshots[3].label} desc={screenshots[3].desc} />
            </div>
            <div>
              <ScreenshotSlot label={screenshots[4].label} desc={screenshots[4].desc} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why It's Different ── */}
      <section className="bg-[#EDE8DF] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
              Why Clara is different.
            </h2>
            <p className="text-[#7A6552] text-lg md:pb-1">
              No subscriptions. No accounts. No servers that can disappear.
              A tool that belongs to you.
            </p>
          </div>

          <div className="divide-y divide-[#DDD5C8]">
            {whyDifferent.map(({ Icon, title, desc }, i) => (
              <div
                key={i}
                className="flex items-start gap-5 py-7 group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/60 border border-[#DDD5C8] flex items-center justify-center shrink-0 group-hover:border-[#C4623A]/30 transition-colors duration-200">
                  <Icon size={16} weight="bold" className="text-[#C4623A]" />
                </div>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-1 md:gap-8">
                  <h3 className="font-semibold text-[1.05rem] text-[#2C2416] leading-snug">
                    {title}
                  </h3>
                  <p className="text-[#7A6552] text-[0.95rem] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Offer ── */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold tracking-tighter mb-3">
              Start planning with intention.
            </h2>
            <p className="text-[#7A6552] text-lg">
              Launch price — and a direct line to the person building this.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#DDD5C8] shadow-[0_20px_50px_-15px_rgba(44,36,22,0.12)] p-8 md:p-10">
            <div className="text-center mb-8 pb-8 border-b border-[#EDE8DF]">
              <p className="text-sm text-[#9A8876] line-through mb-1">Usually $99</p>
              <p className="font-playfair text-6xl font-bold text-[#2C2416] tracking-tighter">
                $47
              </p>
              <p className="text-[#7A6552] mt-1.5 text-sm">One-time payment · No subscription</p>
            </div>

            <ul className="space-y-3 mb-8">
              {included.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[0.95rem] text-[#2C2416]">
                  <Check
                    size={16}
                    weight="bold"
                    className="text-[#C4623A] shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-[#FFF0E8] rounded-2xl p-5 border border-[#F0D0C0] mb-7">
              <div className="flex items-start gap-3">
                <Gift size={18} weight="bold" className="text-[#C4623A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#2C2416] text-sm mb-1">
                    First 100 buyers only
                  </p>
                  <p className="text-[#7A6552] text-sm leading-relaxed">
                    If there's a feature you need that's missing, tell me and I'll build it for
                    you — free. You have a direct line to the person making this.
                  </p>
                </div>
              </div>
            </div>

            <BuyButton label="Buy Now — $47" large fullWidth />
            <p className="text-xs text-[#9A8876] mt-4 text-center">
              Secure checkout via Stripe · Instant download
            </p>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-[#EDE8DF] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold tracking-tighter mb-16">
            What people are saying.
          </h2>

          {/* Featured quote */}
          <div className="mb-8 bg-white/50 rounded-2xl border border-[#DDD5C8] p-8 md:p-12">
            <blockquote className="font-playfair text-2xl md:text-3xl italic text-[#2C2416] leading-relaxed mb-6 max-w-[60ch]">
              "For the first time in years, I end each day knowing exactly what I did and what
              tomorrow holds. The clarity is genuinely addictive."
            </blockquote>
            <div>
              <p className="font-semibold text-[#2C2416]">Margot Richter</p>
              <p className="text-sm text-[#9A8876]">Brand consultant + mom of 2</p>
            </div>
          </div>

          {/* 2-col below */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                q: "As someone with ADHD, most planners overwhelm me within a week. Clara is the first one that actually sticks.",
                name: "Delphine Krauss",
                role: "Senior marketing manager",
              },
              {
                q: "The brain dump alone is worth it. I open Clara when my head is spinning and somehow walk away feeling calm.",
                name: "Anya Vasquez",
                role: "Freelance illustrator",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white/40 rounded-2xl p-7 border border-[#DDD5C8] flex flex-col gap-5"
              >
                <blockquote className="font-playfair text-lg italic text-[#2C2416] leading-relaxed flex-1">
                  "{t.q}"
                </blockquote>
                <div>
                  <p className="font-semibold text-[#2C2416] text-sm">{t.name}</p>
                  <p className="text-xs text-[#9A8876]">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#9A8876] mt-6">
            Testimonials are illustrative. Real reviews coming soon.
          </p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-20 items-center">
          <div>
            <h2 className="font-playfair text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05] mb-6">
              You deserve a day<br />
              that feels intentional.
            </h2>
            <p className="text-xl text-[#7A6552] leading-relaxed max-w-[46ch]">
              Not just busier. Intentional — where you finish knowing you focused
              on what actually mattered.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-start md:items-center shrink-0">
            <BuyButton large />
            <p className="text-xs text-[#9A8876]">
              $47 · Launch price · First 100 shape the roadmap
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[#DDD5C8] py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-playfair font-bold text-[#2C2416]">Clara Planner</span>
          <p className="text-sm text-[#9A8876]">
            © {new Date().getFullYear()} Clara Planner. All rights reserved.
          </p>
          <a
            href={STRIPE_URL}
            className="text-sm text-[#C4623A] hover:underline font-medium transition-colors duration-200"
          >
            Buy Now — $47
          </a>
        </div>
      </footer>
    </main>
  );
}
