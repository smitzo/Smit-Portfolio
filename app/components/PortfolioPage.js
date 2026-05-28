"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { navItems, profile, projects, skills, timeline } from "../data/portfolio";
import { SiteHeader } from "./SiteHeader";
import { ContactSection } from "./sections/ContactSection";
import { HeroSection } from "./sections/HeroSection";
import { StackSection } from "./sections/StackSection";
import { TimelineSection } from "./sections/TimelineSection";

export function PortfolioPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

  return (
    <main>
      <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
      <SiteHeader navItems={navItems} />
      <HeroSection profile={profile} />
      <TimelineSection timeline={timeline} projects={projects} />
      <StackSection skills={skills} />
      <ContactSection profile={profile} />
    </main>
  );
}
