import { navItems, profile, projects, skills, timeline } from "../../data/portfolio";
import { SiteHeader } from "./SiteHeader";
import { ContactSection } from "../sections/ContactSection";
import { HeroSection } from "../sections/HeroSection";
import { StackSection } from "../sections/StackSection";
import { TimelineSection } from "../sections/TimelineSection";

export function PortfolioPage() {
  return (
    <main className="site-shell" id="top">
      <SiteHeader navItems={navItems} />
      <HeroSection profile={profile} />
      <TimelineSection timeline={timeline} projects={projects} />
      <StackSection skills={skills} />
      <ContactSection profile={profile} />
    </main>
  );
}
