"use client";

import {
  achievements,
  achievementMoments,
  hobbies,
  navItems,
  profile,
  projects,
  skills,
  timeline,
} from "../../data/portfolio";
import { SiteHeader } from "./SiteHeader";
import { AchievementsSection } from "../sections/AchievementsSection";
import { ContactSection } from "../sections/ContactSection";
import { HobbiesSection } from "../sections/HobbiesSection";
import { HeroSection } from "../sections/HeroSection";
import { StackSection } from "../sections/StackSection";
import { ProjectsSection, TimelineSection } from "../sections/TimelineSection";

export function PortfolioPage() {
  return (
    <main className="site-shell" id="top">
      <SiteHeader navItems={navItems} />
      <HeroSection profile={profile} projects={projects} />
      <TimelineSection timeline={timeline} />
      <AchievementsSection achievements={achievements} moments={achievementMoments} />
      <ProjectsSection projects={projects} />
      <StackSection skills={skills} />
      <HobbiesSection hobbies={hobbies} />
      <ContactSection profile={profile} />
    </main>
  );
}
