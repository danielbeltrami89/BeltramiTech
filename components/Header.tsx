import { Github } from "lucide-react";
import { GITHUB_URL } from "@/lib/constants";

const navItems = [
  { label: "Sobre", href: "#about" },
  { label: "Projetos", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contato", href: "#contact" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/72 backdrop-blur-xl">
      <div className="section-shell">
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid size-8 place-items-center rounded-md border border-white/10 bg-white/10 text-sm font-bold text-white">
              BT
            </span>
            <span className="text-sm font-semibold text-white sm:text-base">
              Beltrami Tech
            </span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={GITHUB_URL || "https://github.com/"}
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub"
            className="inline-flex size-10 items-center justify-center rounded-md border border-white/10 bg-white/10 text-white transition hover:border-sky-300/40 hover:bg-white/15"
          >
            <Github size={18} />
          </a>
        </div>

        <nav className="flex items-center gap-5 overflow-x-auto border-t border-white/10 py-3 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
