"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader({ navItems }) {
  return (
    <motion.header
      className="site-header"
      aria-label="Primary navigation"
      initial={{ opacity: 0, y: -14, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <a className="brand" href="#top" aria-label="Smit Joshi home">
        SJ
      </a>
      <nav>
        {navItems.map(([label, href]) => (
          <a key={label} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <ThemeToggle />
    </motion.header>
  );
}
