import { ProjectCard } from "@/components/ProjectCard";
import { getGithubProjects } from "@/lib/projects";

export async function ProjectsSection() {
  const { projects, isFallback } = await getGithubProjects();

  return (
    <section id="projects" className="section-shell scroll-mt-24 py-20">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">GitHub</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Featured Projects
          </h2>
        </div>
        {isFallback ? (
          <p className="text-sm text-slate-500">
            Showing fallback projects while GitHub is unavailable.
          </p>
        ) : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
