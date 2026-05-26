"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubLogo, LinkedInLogo, XLogo } from "../BrandLogos";
import { fadeUp } from "../motion-presets";

export function ContactSection({ profile }) {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <motion.div
        className="page-shell contact-grid"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.28 }}
      >
        <div>
          {/* <p className="section-kicker">Contact</p> */}
          <h2 id="contact-title">Let&apos;s build something accurate, useful, and production-ready.</h2>
        </div>
        <div className="contact-actions">
          <a className="button secondary" href={`mailto:${profile.email}`}>
            <Mail size={18} aria-hidden="true" />
            Email me
          </a>
          <a className="button secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
            <LinkedInLogo />
            LinkedIn
          </a>
           <a className="button secondary" href={profile.github} target="_blank" rel="noreferrer">
            <GithubLogo/>
            Github
          </a>
          <a className="button secondary" href={profile.twitter} target="_blank" rel="noreferrer">
            <XLogo />
            Twitter
          </a>
        </div>
      </motion.div>
    </section>
  );
}
