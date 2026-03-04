"use client";

import HeroBG from "./HeroBg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 lg:px-12 pt-24 pb-20">
      {/* Three.js particle background */}
      <div className="absolute inset-0 pointer-events-none">
        <HeroBG />
      </div>

      {/* Background grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-[#1f1f1f] bg-[#111] text-xs text-zinc-400 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Digital Marketing Agency
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[1.0] tracking-tight max-w-4xl">
          We grow
          <br />
          <span className="text-accent">brands</span> that
          <br />
          demand attention.
        </h1>

        <p className="mt-8 max-w-xl text-lg text-zinc-400 leading-relaxed">
          Rio Media is a performance-driven digital marketing agency. We turn
          strategy, content, and data into results that move the needle.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex h-12 items-center px-8 rounded-full bg-accent text-white font-medium hover:bg-accent-muted transition-colors"
          >
            Start a project
          </a>
          <a
            href="#work"
            className="inline-flex h-12 items-center px-8 rounded-full border border-[#2a2a2a] text-zinc-300 font-medium hover:border-zinc-500 transition-colors"
          >
            See our work
          </a>
        </div>

        {/* Stats */}
        <div className="mt-24 flex flex-wrap gap-12">
          {[
            { value: "120+", label: "Clients served" },
            { value: "3.8×", label: "Avg. ROAS" },
            { value: "$40M+", label: "Revenue generated" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold text-foreground">{stat.value}</p>
              <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
