"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "../../lib/cn";

export function HeroSystemGraphic() {
  return (
    <motion.figure
      className={cn(
        "pointer-events-none absolute inset-0 -z-[2] isolate m-0 h-full min-h-0 w-full max-w-none justify-self-center overflow-hidden border-0 bg-[radial-gradient(circle_at_52%_48%,rgba(34,211,238,0.16),transparent_38%),linear-gradient(145deg,rgba(8,13,31,0.96),rgba(12,17,38,0.72))]",
        "[html[data-theme=light]_&]:bg-[linear-gradient(145deg,rgba(238,243,239,0.9),rgba(226,235,232,0.72))]",
        "min-[681px]:max-[980px]:top-[var(--tablet-hero-header-space)] min-[681px]:max-[980px]:bottom-auto min-[681px]:max-[980px]:h-[var(--tablet-hero-art-height)] min-[681px]:max-[980px]:bg-transparent",
        "max-[680px]:top-[var(--mobile-hero-header-space)] max-[680px]:bottom-auto max-[680px]:h-[var(--mobile-hero-art-height)] max-[680px]:bg-transparent"
      )}
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      aria-hidden="true"
    >
      <motion.div
        className="relative z-[2] h-full w-full saturate-[1.34] brightness-[1.28] contrast-[1.08] [html[data-theme=light]_&]:saturate-[1.02] [html[data-theme=light]_&]:brightness-[0.96] [html[data-theme=light]_&]:contrast-[0.95]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          className="pointer-events-none block select-none object-cover object-center opacity-100 transition-[opacity,filter] duration-200 [html[data-theme=light]_&]:opacity-0 min-[681px]:max-[980px]:object-contain min-[681px]:max-[980px]:object-top max-[680px]:object-contain max-[680px]:object-top"
          src="/illustrations/fullstack-developer-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          draggable="false"
        />
        <Image
          className="pointer-events-none block select-none object-cover object-center opacity-0 transition-[opacity,filter] duration-200 [html[data-theme=light]_&]:opacity-100 min-[681px]:max-[980px]:object-contain min-[681px]:max-[980px]:object-top max-[680px]:object-contain max-[680px]:object-top"
          src="/illustrations/fullstack-developer-hero-light.png"
          alt=""
          fill
          priority
          sizes="100vw"
          draggable="false"
        />
      </motion.div>
      <motion.span
        className="pointer-events-none absolute left-[14%] top-[20%] z-[1] h-[34%] w-[34%] rounded-full bg-cyan-300/40 blur-[28px] [html[data-theme=light]_&]:bg-[#2a6f8021]"
        animate={{ opacity: [0.26, 0.54, 0.26], scale: [0.9, 1.08, 0.9] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="pointer-events-none absolute right-[12%] bottom-[14%] z-[1] h-[34%] w-[34%] rounded-full bg-purple-500/45 blur-[28px] [html[data-theme=light]_&]:bg-[#7660b81c]"
        animate={{ opacity: [0.2, 0.44, 0.2], scale: [1.06, 0.92, 1.06] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.45 }}
      />
      <motion.span
        className="pointer-events-none absolute inset-0 z-[3] hidden w-[42%] skew-x-[-18deg] bg-[linear-gradient(100deg,transparent,rgba(255,255,255,0.1),transparent)] mix-blend-screen [html[data-theme=light]_&]:bg-[linear-gradient(100deg,transparent,rgba(250,252,248,0.22),transparent)]"
        animate={{ x: ["-130%", "130%"] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 2.4 }}
      />
    </motion.figure>
  );
}
