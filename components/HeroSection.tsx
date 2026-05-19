import { ArrowRight, Github, Mail } from "lucide-react";
import {
  EMAIL,
  GITHUB_URL,
  HERO_DESCRIPTION,
  HERO_SUBTITLE,
  HERO_TITLE,
} from "@/lib/constants";

export function HeroSection() {
  const emailHref = EMAIL ? `mailto:${EMAIL}` : "#contact";

  return (
    <section
      id="home"
      className="section-shell flex min-h-screen items-center pb-20 pt-36 md:pt-28"
    >
      <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="eyebrow">Senior Mobile Developer</p>
          <h1 className="mt-5 text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            {HERO_TITLE}
          </h1>
          <p className="mt-5 max-w-2xl text-2xl font-medium leading-snug text-slate-200 sm:text-3xl">
            {HERO_SUBTITLE}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            {HERO_DESCRIPTION}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={GITHUB_URL || "https://github.com/"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-100"
            >
              <Github size={18} />
              View GitHub
            </a>
            <a
              href={emailHref}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-sky-300/40 hover:bg-white/15"
            >
              <Mail size={18} />
              Contact me
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="panel relative overflow-hidden p-5">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,165,233,0.18),transparent_45%,rgba(20,184,166,0.12))]" />
          <div className="relative rounded-md border border-white/10 bg-black/30 p-5">
            <div className="mb-5 flex items-center gap-2">
              <span className="size-3 rounded-full bg-red-400" />
              <span className="size-3 rounded-full bg-yellow-300" />
              <span className="size-3 rounded-full bg-green-400" />
            </div>
            <div className="space-y-4 font-mono text-sm text-slate-300">
              <p>
                <span className="text-sky-300">const</span> focus = [
              </p>
              <p className="pl-4 text-slate-100">"iOS", "Android",</p>
              <p className="pl-4 text-slate-100">"Streaming", "CarPlay",</p>
              <p className="pl-4 text-slate-100">"Android Auto", "Scale"</p>
              <p>];</p>
              <p className="pt-3 text-teal-300">shipProducts(focus);</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
