"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { cn } from "../../lib/cn";
import { GithubLogo, LinkedInLogo, XLogo } from "../ui/BrandLogos";
import { fadeUp } from "../motion-presets";

const contactLinkClass = cn(
  "relative inline-flex min-h-12 items-center justify-center gap-2.5 overflow-hidden rounded-lg border border-slate-400/20 bg-slate-900/50 px-[18px] font-[850] text-[var(--text)] transition-[transform,border-color,background,color,box-shadow] duration-150",
  "hover:-translate-y-0.5 hover:border-sky-400/40 hover:shadow-[0_20px_58px_rgba(56,189,248,0.15),0_0_42px_rgba(139,92,246,0.1)] focus-visible:-translate-y-0.5 focus-visible:border-sky-400/40 focus-visible:shadow-[0_20px_58px_rgba(56,189,248,0.15),0_0_42px_rgba(139,92,246,0.1)] focus-visible:outline-none",
  "[html[data-theme=light]_&]:border-[#2d46591f] [html[data-theme=light]_&]:bg-[rgba(250,252,248,0.78)] [html[data-theme=light]_&]:text-[#172033] [html[data-theme=light]_&]:shadow-[0_12px_32px_rgba(31,42,54,0.055)]",
  "max-[680px]:w-full"
);

export function ContactSection({ profile }) {
  return (
    <section className="border-t border-[var(--line)] bg-[rgba(2,6,23,0.74)] py-[78px] [html[data-theme=light]_&]:bg-[rgba(238,243,239,0.82)]" id="contact" aria-labelledby="contact-title">
      <motion.div
        className="mx-auto grid w-[min(1480px,calc(100%_-_56px))] grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] items-start gap-10 max-[980px]:w-[min(100%_-_28px,920px)] max-[980px]:grid-cols-1"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.28 }}
      >
        <div>
          <h2 className="mt-2.5 max-w-[860px] text-[3.35rem] font-[930] leading-none tracking-normal max-[980px]:text-[2.62rem] max-[680px]:text-[2.12rem]" id="contact-title">Let&apos;s build something accurate, useful, and production-ready.</h2>
        </div>
        <div className="flex flex-wrap justify-end gap-3 max-[980px]:justify-start">
          <a className={contactLinkClass} href={`mailto:${profile.email}`}>
            <Mail size={18} aria-hidden="true" />
            Email me
          </a>
          <a className={contactLinkClass} href={profile.linkedin} target="_blank" rel="noreferrer">
            <LinkedInLogo />
            LinkedIn
          </a>
          <a className={contactLinkClass} href={profile.github} target="_blank" rel="noreferrer">
            <GithubLogo/>
            GitHub
          </a>
          <a className={contactLinkClass} href={profile.twitter} target="_blank" rel="noreferrer">
            <XLogo />
            Twitter
          </a>
        </div>
      </motion.div>
    </section>
  );
}
