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
        "inline-flex items-center justify-center font-semibold rounded-xl bg-[#C4623A] text-white transition-all hover:bg-[#A8512F] active:scale-[0.98] shadow-sm",
        large ? "px-9 py-4 text-lg" : "px-6 py-3 text-base",
        fullWidth ? "w-full" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {label}
    </a>
  );
}

function AppMockup({ label, description }: { label: string; description: string }) {
  return (
    <div className="w-full aspect-[16/10] bg-[#F0EBE1] rounded-2xl border border-[#DDD5C8] flex flex-col items-center justify-center p-8 text-center shadow-md">
      <div className="w-8 h-8 rounded-full bg-[#C4623A]/20 flex items-center justify-center mb-4">
        <div className="w-3 h-3 rounded-full bg-[#C4623A]" />
      </div>
      <p className="text-xs font-semibold uppercase tracking-widest text-[#9A8876] mb-2">{label}</p>
      <p className="text-sm text-[#7A6552] max-w-xs">{description}</p>
    </div>
  );
}

const features = [
  {
    icon: "🎯",
    title: "Know exactly what matters most",
    desc: "Set one Main Focus each day. Not ten priorities — one. That clarity alone changes everything.",
  },
  {
    icon: "📋",
    title: "Stop juggling it all in your head",
    desc: "Your task list lives in Clara, not in your skull. Missed tasks move to another day with one click — no guilt, no re-writing.",
  },
  {
    icon: "🌿",
    title: "Clear the noise. Make space.",
    desc: "Brain Dump captures the swirl of loose thoughts so your task list stays clean and your head stays clearer.",
  },
  {
    icon: "✨",
    title: "End every day with something good",
    desc: "Gratitude prompts take thirty seconds and shift everything. A small ritual that adds up over time.",
  },
  {
    icon: "🔄",
    title: "Build routines you're actually proud of",
    desc: "Daily habit tracker with streaks. Not overwhelming — just the habits that matter most to you.",
  },
  {
    icon: "🗓️",
    title: "Design your day before the day designs you",
    desc: "Time Block Schedule shows your day in chunks. Toggle it with a keypress, plan with intention.",
  },
  {
    icon: "⏱️",
    title: "Work in focused bursts. Rest without guilt.",
    desc: "Built-in Pomodoro timer. Structured focus, structured rest. Your brain will thank you.",
  },
  {
    icon: "📊",
    title: "Finally understand your own patterns",
    desc: "Insights report shows task finish rate, habit streaks, clear-the-board days — over 7, 30, or 90 days.",
  },
];

const whyDifferent = [
  {
    icon: "🔒",
    title: "No account needed — open it and start",
    desc: "Zero friction. No email, no password, no setup. Just open and go.",
  },
  {
    icon: "🏠",
    title: "Your data never leaves your device",
    desc: "Everything stays local. There is no server storing your plans, habits, or gratitude notes. Just you.",
  },
  {
    icon: "∞",
    title: "Pay once, use forever",
    desc: "No monthly subscription. No annual renewal. You buy it once and it is yours.",
  },
  {
    icon: "🧠",
    title: "ADHD-friendly by design",
    desc: "Designed with clarity, reduced overwhelm, and gentle structure — not another noisy productivity system.",
  },
  {
    icon: "🎁",
    title: "Missing a feature? I'll build it for you.",
    desc: "If you are one of the first 100 buyers and there is a feature you need that is missing, I will build it for free. You have my word.",
  },
];

const steps = [
  {
    n: "1",
    title: "Download once",
    desc: "Pay once, download Clara, open it in your browser. Nothing to install. No account to create.",
  },
  {
    n: "2",
    title: "Plan your day",
    desc: "Set your main focus. Add tasks. Dump your brain. Log gratitude. Check off habits. Design your time blocks.",
  },
  {
    n: "3",
    title: "Feel the difference",
    desc: "See your patterns in the Insights view. Notice the weeks you are steady. Build on what works.",
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
  "Your data, on your device — always",
  "Buy once, own it forever",
];

const screenshots = [
  {
    label: "Daily Planner",
    description: "Main Focus, Tasks, Gratitude, Brain Dump, and Habits — all in one calm view",
  },
  {
    label: "Accountability Report",
    description: "Full habit days, task momentum chart, habit streaks — automated insights",
  },
  {
    label: "Weekly Planning View",
    description: "The whole week at a glance with time blocks and focus per day",
  },
  {
    label: "Smart Reminders",
    description: "Weekly ribbon showing open vs. done tasks at a glance",
  },
  {
    label: "All-in-One Overview",
    description: "Day / Week / Month, Habits, Pomodoro, 5 Themes — your planning command center",
  },
];

const testimonials = [
  {
    quote:
      "For the first time in years, I end each day knowing exactly what I did and what tomorrow holds. The clarity is addictive.",
    name: "Sarah M.",
    role: "Mom of 3 + freelancer",
  },
  {
    quote:
      "As someone with ADHD, most planners overwhelm me within a week. Clara is the first one that actually sticks.",
    name: "Jess T.",
    role: "Marketing manager",
  },
  {
    quote:
      "The brain dump alone is worth it. I open Clara when my head is spinning and somehow walk away feeling calm.",
    name: "Rachel L.",
    role: "Entrepreneur",
  },
];

export default function Home() {
  return (
    <main className="bg-[#F8F4ED] text-[#2C2416]">
      {/* ── Nav ── */}
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <span className="font-playfair text-xl font-bold tracking-tight">Clara Planner</span>
        <BuyButton />
      </nav>

      {/* ── Hero ── */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-28 text-center">
        <div className="inline-flex items-center gap-2 bg-[#FFF0E8] text-[#C4623A] border border-[#F0D0C0] rounded-full px-4 py-1.5 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-[#C4623A] inline-block" />
          ADHD-Friendly · Buy Once · No Account Needed
        </div>

        <h1 className="font-playfair text-5xl md:text-7xl font-bold leading-[1.1] text-[#2C2416] mb-6">
          Clear your head.<br />Design your day.
        </h1>

        <p className="text-xl md:text-2xl text-[#7A6552] max-w-2xl mx-auto mb-10 leading-relaxed">
          Clara Planner gives you one calm, beautiful place for your focus, tasks, habits, and gratitude —
          so you can stop carrying everything in your head.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
          <BuyButton large />
          <a
            href="#how-it-works"
            className="text-[#7A6552] hover:text-[#2C2416] font-medium text-base transition-colors"
          >
            See how it works ↓
          </a>
        </div>
        <p className="text-sm text-[#9A8876]">
          Launch price $47 · Normally $99 · Pay once, yours forever
        </p>

        <div className="mt-16 max-w-4xl mx-auto">
          <AppMockup
            label="Daily Planner — Focus Mode"
            description="Main Focus · Tasks · Gratitude · Brain Dump · Habits — all in one view"
          />
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="bg-[#EDE8DF] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-14 text-center">
            Does this sound familiar?
          </h2>
          <div className="space-y-5">
            {[
              "Your to-do list has 30 items. You finished 4. And somehow you still feel like you did nothing.",
              "You're keeping everything in your head. Your coffee goes cold while you're mid-thought about something you forgot to do.",
              "You start the day with good intentions, then get pulled in every direction — and by evening, you can't even remember what you were trying to do.",
            ].map((q, i) => (
              <div
                key={i}
                className="bg-white/70 rounded-2xl p-7 border border-[#DDD5C8]"
              >
                <p className="text-xl text-[#2C2416] leading-relaxed">"{q}"</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xl text-[#7A6552] mt-14 font-medium leading-relaxed">
            You don't need more productivity advice.<br />
            You need a place for your brain to land.
          </p>
        </div>
      </section>

      {/* ── Features as Outcomes ── */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Everything you need.<br />Nothing you don't.
            </h2>
            <p className="text-lg text-[#7A6552] max-w-xl mx-auto">
              Every feature in Clara is designed to reduce mental load — not add to it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white/50 rounded-2xl p-7 border border-[#DDD5C8] hover:border-[#C4623A]/40 hover:bg-white/80 transition-all"
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-[1.1rem] text-[#2C2416] mb-2">{f.title}</h3>
                <p className="text-[#7A6552] leading-relaxed text-[0.95rem]">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 bg-[#FFF0E8] rounded-2xl p-7 border border-[#F0D0C0]">
            <div className="flex items-start gap-4">
              <span className="text-3xl mt-0.5">🧠</span>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-semibold text-[1.1rem] text-[#2C2416]">
                    Built for the way your brain actually works
                  </h3>
                  <span className="bg-[#C4623A] text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    ADHD-Friendly
                  </span>
                </div>
                <p className="text-[#7A6552] leading-relaxed text-[0.95rem]">
                  Clara is designed with ADHD in mind — clear structure, no clutter, gentle reminders, and a weekly
                  view that makes the whole picture visible at a glance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="bg-[#EDE8DF] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Up and running in minutes.
            </h2>
            <p className="text-lg text-[#7A6552]">No sign-up. No setup. Just open and start.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((s) => (
              <div key={s.n} className="text-center">
                <div className="w-14 h-14 bg-[#C4623A] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-5 shadow-sm">
                  {s.n}
                </div>
                <h3 className="font-semibold text-lg text-[#2C2416] mb-3">{s.title}</h3>
                <p className="text-[#7A6552] leading-relaxed text-[0.95rem]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Screenshots ── */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              See it for yourself.
            </h2>
            <p className="text-lg text-[#7A6552]">Clean. Calm. Designed to help you think clearly.</p>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <AppMockup label={screenshots[0].label} description={screenshots[0].description} />
              <AppMockup label={screenshots[1].label} description={screenshots[1].description} />
            </div>
            <AppMockup label={screenshots[2].label} description={screenshots[2].description} />
            <div className="grid md:grid-cols-2 gap-6">
              <AppMockup label={screenshots[3].label} description={screenshots[3].description} />
              <AppMockup label={screenshots[4].label} description={screenshots[4].description} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why It's Different ── */}
      <section className="bg-[#EDE8DF] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Why Clara is different.
            </h2>
            <p className="text-lg text-[#7A6552] max-w-xl mx-auto">
              No subscriptions. No accounts. No servers that disappear. Just a tool that belongs to you.
            </p>
          </div>

          <div className="space-y-4">
            {whyDifferent.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-5 bg-white/60 rounded-2xl p-6 border border-[#DDD5C8]"
              >
                <span className="text-2xl mt-0.5 shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-[1.05rem] text-[#2C2416] mb-1">{item.title}</h3>
                  <p className="text-[#7A6552] text-[0.95rem] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Offer ── */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Start planning with intention.
          </h2>
          <p className="text-lg text-[#7A6552] mb-12">
            Get Clara at our launch price — and be one of the first 100.
          </p>

          <div className="bg-white rounded-3xl border border-[#DDD5C8] p-10 shadow-sm text-left">
            <div className="text-center mb-8">
              <span className="text-sm font-medium text-[#9A8876] line-through block mb-1">
                Usually $99
              </span>
              <span className="text-6xl font-bold text-[#2C2416]">$47</span>
              <p className="text-[#7A6552] mt-1">One-time payment. No subscription.</p>
            </div>

            <ul className="space-y-3 mb-8">
              {included.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#2C2416]">
                  <span className="text-[#C4623A] font-bold shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-[#FFF0E8] rounded-2xl p-5 border border-[#F0D0C0] mb-8">
              <p className="font-semibold text-[#2C2416] mb-1">🎁 First 100 buyers only</p>
              <p className="text-[#7A6552] text-sm leading-relaxed">
                If there's a feature you need that's missing, tell me and I'll build it for you — free.
                You have a direct line to the person making this.
              </p>
            </div>

            <BuyButton label="Buy Now — $47" large fullWidth />
            <p className="text-sm text-[#9A8876] mt-4 text-center">
              Secure checkout via Stripe · Instant download
            </p>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-[#EDE8DF] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              What people are saying.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white/60 rounded-2xl p-7 border border-[#DDD5C8] flex flex-col gap-5"
              >
                <p className="text-[#2C2416] leading-relaxed italic flex-1">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-[#2C2416]">{t.name}</p>
                  <p className="text-sm text-[#9A8876]">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-[#9A8876] mt-8">
            Testimonials are illustrative. Real reviews coming soon.
          </p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-28 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 leading-tight">
            You deserve a day<br />that feels intentional.
          </h2>
          <p className="text-xl text-[#7A6552] mb-10 leading-relaxed max-w-xl mx-auto">
            Not just busier. Not just more productive. Intentional — where you finish the day knowing
            you focused on what actually mattered.
          </p>
          <BuyButton large />
          <p className="text-sm text-[#9A8876] mt-5">
            $47 one-time · Launch price · First 100 get direct input on the roadmap
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[#DDD5C8] py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <span className="font-playfair font-bold text-[#2C2416]">Clara Planner</span>
          <p className="text-[#9A8876]">
            © {new Date().getFullYear()} Clara Planner. All rights reserved.
          </p>
          <a href={STRIPE_URL} className="text-[#C4623A] hover:underline font-medium">
            Buy Now — $47
          </a>
        </div>
      </footer>
    </main>
  );
}
