import { Bot, Braces, Code2, Database, GitBranch, Server } from "lucide-react";

const orbitItems = [
  [Code2, "Python", "#007aff"],
  [Server, "APIs", "#5856d6"],
  [Database, "Postgres", "#af52de"],
  [Braces, "Next.js", "#ff2d55"],
  [Bot, "AI agents", "#ff9500"],
  [GitBranch, "Odoo", "#34c759"],
];

export function HeroSystemGraphic() {
  return (
    <aside className="hero-card" aria-label="Technology constellation">
      <div className="tech-constellation">
        {orbitItems.map(([Icon, label, accent], index) => (
          <div
            className={`constellation-orbit constellation-orbit-${index + 1}`}
            style={{ "--accent": accent }}
            key={label}
          >
            <div className="constellation-item">
              <span className="constellation-icon"><Icon size={27} /></span>
              <span className="constellation-name">{label}</span>
            </div>
          </div>
        ))}
        <div className="constellation-center">
          <span>SJ</span>
          <small>systems</small>
        </div>
        <div className="constellation-ring constellation-ring-one" />
        <div className="constellation-ring constellation-ring-two" />
      </div>
    </aside>
  );
}
