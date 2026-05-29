"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { navItems, profile, projects, skills, timeline } from "../../data/portfolio";
import { SiteHeader } from "./SiteHeader";
import { ContactSection } from "../sections/ContactSection";
import { HeroSection } from "../sections/HeroSection";
import { StackSection } from "../sections/StackSection";
import { TimelineSection } from "../sections/TimelineSection";

export function PortfolioPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

  return (
    <main className="relative overflow-hidden">
      <motion.div className="fixed left-0 top-0 z-[100] h-[3px] w-full origin-left bg-linear-to-r from-[var(--cyan)] via-[var(--violet)] to-[var(--blue)] shadow-[0_0_24px_rgba(56,189,248,0.42)]" style={{ scaleX }} aria-hidden="true" />
      <SiteHeader navItems={navItems} />
      <HeroSection profile={profile} />
      <TimelineSection timeline={timeline} projects={projects} />
      <StackSection skills={skills} />
      <ContactSection profile={profile} />
    </main>
  );
}
