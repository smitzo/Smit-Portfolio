import { ThemeToggle } from "../ui/ThemeToggle";

export function SiteHeader({ navItems }) {
  return (
    <header className="top-controls" aria-label="Primary navigation">
      <a className="wordmark" href="#top" aria-label="Smit Joshi home">
        Smit Joshi
      </a>
      <nav className="nav-links">
        {navItems.map(([label, href]) => (
          <a className="nav-link" key={label} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a className="availability" href="#contact">
          <span aria-hidden="true" />
          Available to connect
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}
