import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { EMAIL, GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL } from "@/lib/constants";

const contactLinks = [
  { label: "GitHub", href: GITHUB_URL || "https://github.com/", icon: Github },
  { label: "LinkedIn", href: LINKEDIN_URL || "#contact", icon: Linkedin },
  { label: "Instagram", href: INSTAGRAM_URL || "#contact", icon: Instagram },
  { label: "Email", href: EMAIL ? `mailto:${EMAIL}` : "#contact", icon: Mail },
];

export function ContactSection() {
  return (
    <section id="contact" className="section-shell scroll-mt-24 py-20">
      <div className="panel overflow-hidden p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
              Let’s build something
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Open to international remote opportunities, freelance projects
              and product ideas.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {contactLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-sky-300/40 hover:bg-white/15"
              >
                <Icon size={18} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
