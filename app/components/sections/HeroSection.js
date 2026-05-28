"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";
import { HeroSystemGraphic } from "../visuals/HeroSystemGraphic";
import { fadeUp, heroCopy } from "../motion-presets";

export function HeroSection({ profile }) {
  return (
    <section className="hero" id="top">
      <HeroSystemGraphic />
      <div className="hero-noise" aria-hidden="true" />
      <div className="hero-aurora" aria-hidden="true" />
      <motion.div
        className="hero-status-pill"
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.5 }}
      >
        <span aria-hidden="true" />
        Building production backend systems
      </motion.div>
      <motion.a
        className="hero-scroll-cue"
        href="#timeline"
        aria-label="Scroll to timeline"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.95 }}
      >
        <ArrowDown size={18} aria-hidden="true" />
      </motion.a>
      <div className="hero-shell page-shell">
        <motion.div
          className="hero-copy-block"
          variants={heroCopy}
          initial="hidden"
          animate="show"
        >
          {/* <motion.div className="availability" variants={fadeUp}>
            <BadgeCheck size={18} aria-hidden="true" />
            Backend engineering + production infrastructure
          </motion.div> */}
          <motion.h1 variants={fadeUp}>
            Smit
            <span>Joshi</span>
          </motion.h1>
          <motion.p className="hero-copy" variants={fadeUp}>
            {profile.role} focused on building backends, automating financial workflows,
            creating and integrating APIs, and exploring agentic AI.
          </motion.p>
          <motion.div className="contact-row" aria-label="Profile links" variants={fadeUp}>
            <span>
              <MapPin size={16} aria-hidden="true" />
              {profile.location}
            </span>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-proof-card"
          initial={{ opacity: 0, x: 24, y: 18 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
        >
          <Sparkles size={18} aria-hidden="true" />
          <div>
            <strong>Full-stack flow, backend-first craft.</strong>
            <span>APIs, automation, data, and compliance workflows that hold up in production.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
