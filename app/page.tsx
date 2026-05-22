import { CheckFat } from "@phosphor-icons/react/dist/ssr";

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
        "inline-flex items-center justify-center font-semibold rounded-lg",
        "bg-[#C4623A] text-white transition-colors duration-150",
        "hover:bg-[#A8512F] active:scale-[0.98]",
        large ? "px-8 py-4 text-lg" : "px-6 py-3 text-[0.95rem]",
        fullWidth ? "w-full" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {label}
    </a>
  );
}

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-[0_20px_60px_-10px_rgba(26,26,26,0.12)] border border-[#E5DDD5]">
      <div className="bg-[#F2EDE4] border-b border-[#E5DDD5] px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#D9D1C7]" />
          <div className="w-3 h-3 rounded-full bg-[#D9D1C7]" />
          <div className="w-3 h-3 rounded-full bg-[#D9D1C7]" />
        </div>
        <div className="flex-1 bg-white/70 rounded text-[11px] text-[#9A8876] px-3 py-1 font-[var(--font-geist-mono)] tracking-tight">
          clara-planner.app
        </div>
      </div>
      {children}
    </div>
  );
}

function ScreenshotPlaceholder({ label, desc }: { label: string; desc: string }) {
  return (
    <BrowserFrame>
      <div className="bg-[#F8F4ED] aspect-[16/9] flex flex-col items-center justify-center p-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#9A8876] mb-2">
          {label}
        </p>
        <p className="text-sm text-[#7A6552] max-w-xs leading-relaxed">{desc}</p>
      </div>
    </BrowserFrame>
  );
}

function AppMockup() {
  return (
    <BrowserFrame>
      <div className="bg-[#FDFAF6] flex">
        <div className="w-10 bg-[#F0EBE1] border-r border-[#E5DDD5] py-4 flex flex-col items-center gap-3 shrink-0">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`w-5 h-5 rounded ${i === 0 ? "bg-[#C4623A]" : "bg-[#D9D1C7]"}`}
            />
          ))}
        </div>
        <div className="flex-1 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-[9px] uppercase tracking-widest font-semibold text-[#9A8876]">
              Main Focus
            </p>
            <span className="text-[8px] font-semibold bg-[#C4623A]/10 text-[#C4623A] px-2 py-0.5 rounded-full">
              ADHD-Friendly
            </span>
          </div>
          <div className="bg-[#FFF0E8] border border-[#F0D0C0] rounded-lg p-3">
            <p className="text-[11px] font-semibold text-[#2C2416]">Finish the quarterly report</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-widest font-semibold text-[#9A8876] mb-2">
              Today
            </p>
            <div className="space-y-2">
              {[
                { t: "Review client proposal", done: true },
                { t: "Gym — 45 min", done: true },
                { t: "Call with Margot at 3pm", done: false },
                { t: "Block tomorrow morning", done: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[10px]">
                  <div
                    className={`w-3.5 h-3.5 rounded border shrink-0 ${
                      item.done ? "bg-[#C4623A] border-[#C4623A]" : "border-[#D9D1C7]"
                    }`}
                  />
                  <span className={item.done ? "line-through text-[#9A8876]" : "text-[#2C2416]"}>
                    {item.t}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-widest font-semibold text-[#9A8876] mb-2">
              Habits today
            </p>
            <div className="flex gap-1.5">
              {["Meditate", "Water", "Journal", "Walk", "Read"].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded py-1.5 text-center text-[7px] font-semibold ${
                    i < 3 ? "bg-[#C4623A] text-white" : "bg-[#F0EBE1] text-[#9A8876]"
                  }`}
                >
                  {h}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-[#F0EBE1]/60 p-3">
            <p className="text-[9px] uppercase tracking-widest font-semibold text-[#9A8876] mb-1.5">
              Gratitude
            </p>
            {["The quiet morning before everyone woke up", "Coffee still hot at 8am"].map(
              (g, i) => (
                <p key={i} className="text-[9px] text-[#7A6552] pl-2 border-l-2 border-[#C4623A]/30 mb-1">
                  {g}
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

const allFeatures = [
  "One main focus per day — so you always know what matters most",
  "Task list with missed-task recovery (one click to reschedule)",
  "Brain dump to capture loose thoughts without cluttering your list",
  "Gratitude journal — three prompts, thirty seconds",
  "Daily habit tracker with streaks",
  "Time block schedule — toggle with the S key",
  "Weekly view — focus, tasks, and time blocks per day",
  "Month view at a glance",
  "Pomodoro timer built right in",
  "Insights report: task finish rate, clear-the-board days, habit momentum",
  "Adjustable over 7, 30, or 90 days",
  "5 themes including dark mode",
  "ADHD-friendly by design — calm, clear, structured",
  "Everything runs locally — no server, no cloud",
  "No account required — ever",
  "One purchase, no subscription",
];

export default function Home() {
  return (
    <main className="bg-[#FDFAF5] text-[#1A1A1A]">

      {/* ── Nav ── */}
      <nav className="border-b border-[#E5DDD5]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight text-[#1A1A1A]">Clara Planner</span>
          <BuyButton />
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-[#1A1A1A] mb-7 max-w-3xl mx-auto">
          Carrying it all in your head? It doesn't have to be this hard.
        </h1>

        <p className="text-xl text-[#5A4F42] leading-relaxed max-w-2xl mx-auto mb-10">
          Clara Planner is one calm, beautiful app for your daily focus, tasks,
          habits, and gratitude. Stop juggling everything in your mind. Put it
          somewhere it belongs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
          <BuyButton large label="Get Clara — $47" />
          <a
            href="#features"
            className="text-[#7A6552] hover:text-[#1A1A1A] font-medium text-[0.95rem] transition-colors"
          >
            See how it works ↓
          </a>
        </div>
        <p className="text-sm text-[#9A8876]">
          One-time purchase · No subscription · No account needed
        </p>

        <div className="mt-16">
          <AppMockup />
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="bg-[#F2EDE4] border-y border-[#E5DDD5] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            You're not bad at planning. You just don't have the right place for it.
          </h2>

          <div className="space-y-5 text-lg text-[#5A4F42] leading-relaxed">
            <p>
              Your to-do list has 30 items. You finished 4. And somehow you still feel
              like you did nothing. Not because you're unproductive — because you had no
              single clear thing anchoring your day.
            </p>
            <p>
              You're keeping everything in your head. Your coffee goes cold while you're
              mid-thought about something you forgot to do. The mental load is constant,
              low-grade, exhausting.
            </p>
            <p>
              Every evening you mean to plan tomorrow. By morning, the same chaos starts
              again. You're not failing — you just don't have a system that works the
              way your brain does.
            </p>
            <p className="font-semibold text-[#1A1A1A]">
              Clara gives you that system. It's calm, it's clear, and it's yours.
            </p>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <div id="features">

        {/* Feature 1: Main Focus + Tasks */}
        <section className="py-20 border-b border-[#E5DDD5]">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C4623A] mb-4">
                Start every day right
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5 leading-tight">
                One thing. The most important thing.
              </h2>
              <p className="text-lg text-[#5A4F42] leading-relaxed mb-5">
                Before anything else, Clara asks you: what's your main focus today?
                Not five things. Not a ranked list. One outcome. That single decision
                changes how the entire day feels.
              </p>
              <p className="text-lg text-[#5A4F42] leading-relaxed">
                Below that, your task list — with one click to reschedule anything you
                missed yesterday. No guilt. No re-writing. Just move it forward and
                keep going.
              </p>
            </div>
            <ScreenshotPlaceholder
              label="Daily Planner — Focus Mode"
              desc="Main Focus · Tasks · Gratitude · Brain Dump · Habits — all in one calm view"
            />
          </div>
        </section>

        {/* Feature 2: Brain dump + Habits */}
        <section className="bg-[#F2EDE4] py-20 border-b border-[#E5DDD5]">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <ScreenshotPlaceholder
              label="Weekly View"
              desc="The whole week at a glance — focus, tasks, and time blocks per day"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C4623A] mb-4">
                Weekly + daily planning
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5 leading-tight">
                Design your day before the day designs you.
              </h2>
              <p className="text-lg text-[#5A4F42] leading-relaxed mb-5">
                The Brain Dump captures everything swirling around in your head — the
                errands, the half-formed ideas, the things you'll forget in five minutes.
                Get them out. Your task list stays clean. Your head stays clearer.
              </p>
              <p className="text-lg text-[#5A4F42] leading-relaxed">
                The Time Block Schedule lives in a side panel, toggled with the S key.
                Plan your hours with intention. The Weekly View shows you the whole
                picture — focus, tasks, and blocks for every day.
              </p>
            </div>
          </div>
        </section>

        {/* Feature 3: Insights */}
        <section className="py-20 border-b border-[#E5DDD5]">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C4623A] mb-4">
                Insights & accountability
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5 leading-tight">
                Finally understand your own patterns.
              </h2>
              <p className="text-lg text-[#5A4F42] leading-relaxed mb-5">
                The Insights report is fully automated. It tracks your task finish rate,
                clear-the-board days, planning rhythm, and habit streaks — with a visual
                chart of your week-by-week momentum. No input required from you.
              </p>
              <p className="text-lg text-[#5A4F42] leading-relaxed">
                Run it over 7, 30, or 90 days. See the weeks you were steady. Understand
                where things slipped. Not to judge yourself — to know yourself.
              </p>
            </div>
            <ScreenshotPlaceholder
              label="Accountability Report"
              desc="Task momentum, habit streaks, full-habit days, planning rhythm — all automated"
            />
          </div>
        </section>

        {/* Feature 4: ADHD */}
        <section className="bg-[#F2EDE4] py-20 border-b border-[#E5DDD5]">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <ScreenshotPlaceholder
              label="ADHD-Friendly Design"
              desc="Clear structure, visual cues, calm layout — built for the way your brain actually works"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C4623A] mb-4">
                Built for your brain
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5 leading-tight">
                Designed for the way you actually think.
              </h2>
              <p className="text-lg text-[#5A4F42] leading-relaxed mb-5">
                ADHD in women is massively underdiagnosed. The overwhelm, the mental load,
                the good intentions that evaporate before noon — this isn't a character
                flaw. It's a mismatch between your brain and most productivity tools.
              </p>
              <p className="text-lg text-[#5A4F42] leading-relaxed">
                Clara is different. Clear structure. No clutter. One focus at a time.
                Gentle visual reminders. Everything in one place. It doesn't fight you —
                it works with you.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ── "The answer is YES" — full feature list ── */}
      <section className="py-20 border-b border-[#E5DDD5]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Does Clara do [thing you need]?
            </h2>
            <p className="text-lg text-[#5A4F42] leading-relaxed">
              The answer is almost certainly yes.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
            {allFeatures.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-[0.95rem] text-[#1A1A1A]">
                <CheckFat
                  size={16}
                  weight="fill"
                  className="text-[#C4623A] shrink-0 mt-[3px]"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Why it's different ── */}
      <section className="bg-[#F2EDE4] py-20 border-b border-[#E5DDD5]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
            No account. No subscription. No servers. Just yours.
          </h2>

          <div className="space-y-8 text-lg text-[#5A4F42] leading-relaxed">
            <p>
              <strong className="text-[#1A1A1A]">No account needed.</strong> Open Clara
              and start planning. No email, no password, no setup. Most tools make you
              prove you exist before they'll let you do anything. Clara doesn't.
            </p>
            <p>
              <strong className="text-[#1A1A1A]">Your data stays on your device.</strong>{" "}
              There is no server. Nothing leaves your machine. Your plans, habits, and
              gratitude notes are yours and only yours.
            </p>
            <p>
              <strong className="text-[#1A1A1A]">Pay once. Own it forever.</strong> No
              monthly fee. No annual renewal. No worry that the price is going up or the
              service is going away. You buy it once, it's yours for good.
            </p>
            <p>
              <strong className="text-[#1A1A1A]">You're one of the first 100.</strong>{" "}
              If there's a feature you need that's missing, tell me and I'll build it for
              you — free. You have a direct line to the person making this. That offer
              goes away after the first 100 buyers.
            </p>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-20 border-b border-[#E5DDD5]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Simple, honest pricing.
            </h2>
            <p className="text-lg text-[#5A4F42] leading-relaxed">
              One price. Everything included. No tiers. No upsells.
            </p>
          </div>

          <div className="border border-[#E5DDD5] rounded-2xl bg-white p-8 md:p-12 max-w-lg shadow-[0_4px_24px_-4px_rgba(26,26,26,0.07)]">
            <div className="mb-8">
              <p className="text-[#9A8876] line-through mb-1 text-sm">Usually $99</p>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-bold tracking-tight">$47</span>
                <span className="text-[#5A4F42]">one-time</span>
              </div>
              <p className="text-sm text-[#9A8876] mt-1">Launch price — no subscription, ever</p>
            </div>

            <ul className="space-y-2.5 mb-8">
              {[
                "Daily + Weekly + Monthly planner",
                "Habits tracker with streaks",
                "Brain dump + Gratitude journal",
                "Time blocking + Pomodoro timer",
                "Insights & accountability report",
                "5 themes including dark mode",
                "ADHD-friendly design",
                "Your data stays on your device",
                "Pay once, own it forever",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[0.9rem] text-[#1A1A1A]">
                  <CheckFat size={14} weight="fill" className="text-[#C4623A] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-[#FFF0E8] rounded-xl p-4 border border-[#F0D0C0] mb-7 text-sm text-[#5A4F42] leading-relaxed">
              <strong className="text-[#1A1A1A]">First 100 buyers:</strong> if a feature
              you need is missing, I'll build it for you free. No forms, no tickets — just
              tell me directly.
            </div>

            <BuyButton label="Get Clara — $47" large fullWidth />
            <p className="text-xs text-[#9A8876] mt-3 text-center">
              Secure checkout via Stripe · Instant access
            </p>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-[#F2EDE4] py-20 border-b border-[#E5DDD5]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            What people say.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                q: "For the first time in years, I end each day knowing exactly what I did and what tomorrow holds. The clarity is addictive.",
                name: "Margot Richter",
                role: "Brand consultant, mom of 2",
              },
              {
                q: "As someone with ADHD, most planners overwhelm me within a week. Clara is the first one that actually sticks.",
                name: "Delphine Krauss",
                role: "Senior marketing manager",
              },
              {
                q: "The brain dump alone is worth it. I open Clara when my head is spinning and walk away feeling calm.",
                name: "Anya Vasquez",
                role: "Freelance illustrator",
              },
            ].map((t, i) => (
              <div key={i} className="border-t-2 border-[#C4623A] pt-6">
                <blockquote className="text-[#1A1A1A] leading-relaxed mb-5">
                  "{t.q}"
                </blockquote>
                <p className="text-sm font-semibold text-[#1A1A1A]">{t.name}</p>
                <p className="text-sm text-[#9A8876]">{t.role}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#9A8876] mt-10">
            Testimonials are illustrative. Real reviews coming soon.
          </p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            You've been carrying too much for too long.
          </h2>
          <p className="text-xl text-[#5A4F42] leading-relaxed mb-10 max-w-xl mx-auto">
            Clara gives you somewhere to put it all — so your days can start with
            intention and end with a sense of what you actually did.
          </p>
          <BuyButton large label="Get Clara — $47" />
          <p className="text-sm text-[#9A8876] mt-4">
            $47 · Launch price · First 100 shape the roadmap
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[#E5DDD5] py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-bold text-[#1A1A1A]">Clara Planner</span>
          <p className="text-sm text-[#9A8876]">
            © {new Date().getFullYear()} Clara Planner. All rights reserved.
          </p>
          <a
            href={STRIPE_URL}
            className="text-sm text-[#C4623A] hover:underline font-medium"
          >
            Buy Now — $47
          </a>
        </div>
      </footer>

    </main>
  );
}
