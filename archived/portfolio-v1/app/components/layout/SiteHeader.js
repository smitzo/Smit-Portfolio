import { ThemeToggle } from "../ui/ThemeToggle";

export function SiteHeader({ navItems }) {
  return (
    <header className="top-controls" aria-label="Primary navigation">
      <a className="wordmark" href="#top" aria-label="Smit Joshi home">
        <span aria-hidden="true">SJ</span>
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
        <a className="header-contact" href="#contact">Let&apos;s talk</a>
        <ThemeToggle />
      </div>
    </header>
  );
}
