import { projects } from "@/lib/data";
import { ProjectCard } from "../_components/project-card";

export default function ProjectsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl">My Projects</h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            From professional-grade CRMs to AI-powered research tools, these projects showcase my ability to tackle complex problems and deliver robust, user-friendly solutions. Dive in to learn more about my process and the technologies I've used.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
