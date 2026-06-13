"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";
import { cn } from "../../lib/cn";
import { HeroSystemGraphic } from "../visuals/HeroSystemGraphic";
import { fadeUp, heroCopy } from "../motion-presets";

const pageShellClass = "mx-auto w-[min(1480px,calc(100%_-_56px))] max-[980px]:w-[min(100%_-_28px,920px)]";

export function HeroSection({ profile }) {
  return (
    <section
      className={cn(
        "relative isolate grid min-h-[100svh] items-end overflow-hidden pt-28",
        "before:pointer-events-none before:absolute before:inset-0 before:-z-[1] before:bg-[radial-gradient(ellipse_at_18%_80%,rgba(5,7,19,0.72)_0%,rgba(5,7,19,0.46)_27%,transparent_49%),linear-gradient(90deg,rgba(5,7,19,0.42)_0%,rgba(5,7,19,0.18)_34%,transparent_68%),linear-gradient(180deg,rgba(5,7,19,0.2)_0%,transparent_42%,rgba(5,7,19,0.34)_100%)] before:content-['']",
        "after:pointer-events-none after:absolute after:bottom-0 after:left-[-12%] after:right-[-12%] after:-z-[1] after:h-[16%] after:bg-[linear-gradient(180deg,transparent,rgba(7,8,22,0.46)_92%)] after:content-['']",
        "[html[data-theme=light]_&]:before:bg-[linear-gradient(90deg,rgba(238,243,239,0.56)_0%,rgba(238,243,239,0.36)_28%,rgba(238,243,239,0.1)_48%,transparent_68%),linear-gradient(180deg,rgba(238,243,239,0.03)_0%,transparent_58%,rgba(226,235,232,0.2)_100%)] [html[data-theme=light]_&]:after:bg-[linear-gradient(180deg,transparent,rgba(232,239,236,0.28)_92%)]",
        "min-[681px]:max-[980px]:items-start min-[681px]:max-[980px]:pt-[var(--tablet-hero-content-start)] min-[681px]:max-[980px]:[--tablet-hero-art-height:min(58vw,470px)] min-[681px]:max-[980px]:[--tablet-hero-content-start:calc(var(--tablet-hero-header-space)+var(--tablet-hero-art-height)+76px)] min-[681px]:max-[980px]:[--tablet-hero-header-space:104px]",
        "max-[680px]:min-h-[100svh] max-[680px]:pt-[var(--mobile-hero-content-start)] max-[680px]:[--mobile-hero-art-height:min(66vw,286px)] max-[680px]:[--mobile-hero-content-start:calc(var(--mobile-hero-header-space)+var(--mobile-hero-art-height)+48px)] max-[680px]:[--mobile-hero-header-space:66px]",
        "max-[680px]:before:bg-[linear-gradient(180deg,rgba(5,7,19,0.18)_0%,rgba(5,7,19,0.36)_34%,rgba(5,7,19,0.68)_76%,rgba(5,7,19,0.82)_100%),radial-gradient(ellipse_at_50%_57%,rgba(5,7,19,0.1),rgba(5,7,19,0.48)_72%)]",
        "max-[680px]:[html[data-theme=light]_&]:before:bg-[linear-gradient(180deg,rgba(238,243,239,0.14)_0%,rgba(238,243,239,0.26)_36%,rgba(238,243,239,0.42)_76%,rgba(226,235,232,0.54)_100%),radial-gradient(ellipse_at_50%_57%,rgba(238,243,239,0.06),rgba(226,235,232,0.22)_72%)]"
      )}
      id="top"
    >
      <HeroSystemGraphic />
      <div className="pointer-events-none absolute inset-0 -z-[1] bg-[linear-gradient(120deg,transparent_0%,rgba(125,211,252,0.08)_48%,transparent_60%),linear-gradient(0deg,rgba(34,211,238,0.12),transparent_44%)] bg-[length:160%_160%,100%_140%] opacity-10 [animation:heroNoiseDrift_16s_ease-in-out_infinite_alternate] [html[data-theme=light]_&]:bg-[linear-gradient(120deg,transparent_0%,rgba(42,111,128,0.045)_48%,transparent_60%),linear-gradient(0deg,rgba(47,138,99,0.045),transparent_44%)] [html[data-theme=light]_&]:opacity-[0.055]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-[-12%] top-[9%] -z-[1] h-[68%] skew-y-[-8deg] bg-[linear-gradient(105deg,transparent_8%,rgba(34,211,238,0.12)_27%,transparent_48%),linear-gradient(76deg,transparent_30%,rgba(168,85,247,0.16)_54%,transparent_78%)] opacity-50 blur-[22px] [animation:heroAuroraShift_18s_ease-in-out_infinite_alternate] [html[data-theme=light]_&]:opacity-[0.11]" aria-hidden="true" />
      <motion.div
        className="absolute top-28 left-[max(28px,calc((100vw_-_1480px)/2))] z-[3] inline-flex min-h-[42px] items-center gap-2.5 overflow-hidden rounded-full border border-white/25 bg-[rgba(6,8,20,0.58)] px-3.5 text-[0.92rem] font-[850] text-slate-50 shadow-[0_18px_55px_rgba(0,0,0,0.22)] backdrop-blur-[18px] [html[data-theme=light]_&]:border-[#2d46591f] [html[data-theme=light]_&]:bg-[rgba(250,252,248,0.72)] [html[data-theme=light]_&]:text-[#172033] [html[data-theme=light]_&]:shadow-[0_18px_48px_rgba(31,42,54,0.08)] min-[681px]:max-[980px]:top-[calc(var(--tablet-hero-header-space)+var(--tablet-hero-art-height)-10px)] min-[681px]:max-[980px]:left-1/2 min-[681px]:max-[980px]:-translate-x-1/2 max-[680px]:top-[calc(var(--mobile-hero-header-space)+var(--mobile-hero-art-height)-8px)] max-[680px]:left-5 max-[680px]:right-5 max-[680px]:mx-auto max-[680px]:min-h-9 max-[680px]:w-fit max-[680px]:max-w-[calc(100%-40px)] max-[680px]:whitespace-nowrap max-[680px]:px-[13px] max-[680px]:text-[0.78rem]"
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.5 }}
      >
        <span className="size-2.5 shrink-0 rounded-full bg-green-400 shadow-[0_0_18px_rgba(74,222,128,0.86)]" aria-hidden="true" />
        Building production backend systems
      </motion.div>
      <motion.a
        className="absolute right-[max(28px,calc((100vw_-_1480px)/2))] bottom-[34px] z-[4] grid size-11 place-items-center rounded-full border border-white/20 bg-[rgba(6,8,20,0.48)] text-slate-50 shadow-[0_18px_48px_rgba(0,0,0,0.24)] backdrop-blur-[18px] [animation:scrollCue_2.6s_ease-in-out_infinite] hover:border-rose-400/50 hover:text-white focus-visible:border-rose-400/50 focus-visible:text-white focus-visible:outline-none [html[data-theme=light]_&]:border-[#2d46591f] [html[data-theme=light]_&]:bg-[rgba(250,252,248,0.72)] [html[data-theme=light]_&]:text-[#172033] [html[data-theme=light]_&]:shadow-[0_18px_48px_rgba(31,42,54,0.08)] [html[data-theme=light]_&]:hover:border-[#b84f6a38] [html[data-theme=light]_&]:focus-visible:border-[#b84f6a38] max-[680px]:hidden"
        href="#timeline"
        aria-label="Scroll to timeline"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.95 }}
      >
        <ArrowDown size={18} aria-hidden="true" />
      </motion.a>
      <div className={cn(pageShellClass, "grid min-h-[calc(100svh-112px)] grid-cols-[minmax(0,390px)_minmax(220px,360px)] items-end justify-between gap-[clamp(28px,8vw,120px)] max-[980px]:grid-cols-1 max-[980px]:w-[min(100%_-_28px,760px)] min-[681px]:max-[980px]:min-h-[calc(100svh-var(--tablet-hero-content-start))] min-[681px]:max-[980px]:items-start max-[680px]:min-h-[calc(100svh-var(--mobile-hero-content-start))] max-[680px]:items-start")}>
        <motion.div
          className="relative z-[2] w-[min(370px,100%)] pb-[clamp(28px,4.8vh,58px)] min-[681px]:max-[980px]:w-[min(560px,100%)] min-[681px]:max-[980px]:pt-[22px] min-[681px]:max-[980px]:pb-[54px] max-[680px]:w-[min(100%,420px)] max-[680px]:pt-[18px] max-[680px]:pb-10"
          variants={heroCopy}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="mt-0 max-w-[360px] bg-[linear-gradient(100deg,#ffffff_5%,#dbeafe_38%,#7dd3fc_66%,#c4b5fd_92%)] bg-clip-text text-[clamp(4.2rem,5.5vw,4.95rem)] font-[950] leading-[0.94] tracking-normal text-transparent [text-shadow:0_16px_70px_rgba(56,189,248,0.16)] [-webkit-text-fill-color:transparent] [html[data-theme=light]_&]:bg-[linear-gradient(100deg,#172033_4%,#2f5f91_44%,#287f92_72%,#6f5a85_100%)] [html[data-theme=light]_&]:[text-shadow:0_12px_34px_rgba(77,90,110,0.12)] max-[980px]:text-[4.3rem] max-[680px]:text-[3.2rem] max-[380px]:text-[2.85rem]"
            variants={fadeUp}
          >
            Smit
            <span className="block">Joshi</span>
          </motion.h1>
          <motion.p
            className="mt-[18px] max-w-[360px] text-[1.02rem] text-blue-100 [text-shadow:0_12px_34px_rgba(0,0,0,0.7)] [html[data-theme=light]_&]:font-[680] [html[data-theme=light]_&]:text-slate-700 [html[data-theme=light]_&]:[text-shadow:0_1px_14px_rgba(245,248,242,0.62)] min-[681px]:max-[980px]:max-w-[34rem] max-[680px]:max-w-80 max-[680px]:text-base"
            variants={fadeUp}
          >
            {profile.role} focused on building backends, automating financial workflows,
            creating and integrating APIs, and exploring agentic AI.
          </motion.p>
          <motion.div className="mt-[18px] flex flex-wrap items-center gap-3 font-bold text-slate-300 [html[data-theme=light]_&]:text-[#4c5968] max-[680px]:flex-col max-[680px]:items-start" aria-label="Profile links" variants={fadeUp}>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={16} aria-hidden="true" />
              {profile.location}
            </span>
          </motion.div>
        </motion.div>
        <motion.div
          className="mb-[clamp(34px,7vh,86px)] flex w-[min(360px,100%)] items-start gap-3 self-end overflow-hidden rounded-lg border border-white/20 bg-[rgba(6,8,20,0.42)] p-4 text-sky-100 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-[20px] [html[data-theme=light]_&]:border-[#2d46591f] [html[data-theme=light]_&]:bg-[rgba(250,252,248,0.76)] [html[data-theme=light]_&]:text-[#172033] [html[data-theme=light]_&]:shadow-[0_24px_70px_rgba(31,42,54,0.08)] max-[980px]:hidden"
          initial={{ opacity: 0, x: 24, y: 18 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
        >
          <Sparkles className="relative z-[1] shrink-0 text-[var(--fluid-gold)]" size={18} aria-hidden="true" />
          <div className="relative z-[1] grid gap-1">
            <strong className="leading-[1.15] text-white [html[data-theme=light]_&]:text-[#172033]">Full-stack flow, backend-first craft.</strong>
            <span className="text-[0.88rem] text-slate-300 [html[data-theme=light]_&]:text-[#5b6874]">APIs, automation, data, and compliance workflows that hold up in production.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
