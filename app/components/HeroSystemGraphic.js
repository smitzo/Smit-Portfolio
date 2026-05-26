"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSystemGraphic() {
  return (
    <motion.figure
      className="infra-figure hero-image-figure"
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      aria-hidden="true"
    >
      <motion.div
        className="hero-illustration-motion"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          className="hero-illustration hero-illustration-dark"
          src="/illustrations/fullstack-developer-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          draggable="false"
        />
        <Image
          className="hero-illustration hero-illustration-light"
          src="/illustrations/fullstack-developer-hero-light.png"
          alt=""
          fill
          priority
          sizes="100vw"
          draggable="false"
        />
      </motion.div>
      <motion.span
        className="hero-image-glow cyan"
        animate={{ opacity: [0.26, 0.54, 0.26], scale: [0.9, 1.08, 0.9] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="hero-image-glow violet"
        animate={{ opacity: [0.2, 0.44, 0.2], scale: [1.06, 0.92, 1.06] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.45 }}
      />
      <motion.span
        className="hero-image-sheen"
        animate={{ x: ["-130%", "130%"] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 2.4 }}
      />
    </motion.figure>
  );
}
