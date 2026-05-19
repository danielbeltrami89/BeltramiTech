import { ExternalLink, Star } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="panel flex h-full flex-col p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-300/30">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-white">{project.name}</h3>
        <span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300">
          <Star size={13} />
          {project.stargazers_count}
        </span>
      </div>
      <p className="mt-4 min-h-20 flex-1 text-sm leading-6 text-slate-400">
        {project.description || "Public GitHub repository by Daniel Beltrami."}
      </p>
      <div className="mt-5 flex items-center justify-between gap-4">
        <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-sky-200">
          {project.language || "Code"}
        </span>
        <a
          href={project.html_url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-sky-100"
        >
          View project
          <ExternalLink size={14} />
        </a>
      </div>
    </article>
  );
}
