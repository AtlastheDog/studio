import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ExternalLink, Dot } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailsPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="bg-background py-12 md:py-24">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">{project.description}</p>
          {project.liveUrl && (
            <div className="mt-6">
              <Button asChild>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Visit Live Site
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
        </header>

        <div className="mb-12 shadow-2xl rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            width={1600}
            height={900}
            className="w-full"
            data-ai-hint={project.imageHint}
          />
        </div>

        {project.videoUrl && (
          <div className="my-12">
             <h2 className="font-headline text-3xl font-bold text-primary mb-6 text-center">Video Walkthrough</h2>
            <div className="aspect-video max-w-4xl mx-auto">
              <iframe
                src={project.videoUrl}
                title={`${project.title} Video Walkthrough`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <Card>
                <CardHeader><CardTitle className="font-headline text-accent">Overview</CardTitle></CardHeader>
                <CardContent><p>{project.overview}</p></CardContent>
            </Card>
            <Card>
                <CardHeader><CardTitle className="font-headline text-accent">Objective</CardTitle></CardHeader>
                <CardContent><p>{project.objective}</p></CardContent>
            </Card>
            <Card>
                <CardHeader><CardTitle className="font-headline text-accent">Problem</CardTitle></CardHeader>
                <CardContent><p>{project.problem}</p></CardContent>
            </Card>
        </div>

        <div className="bg-muted p-8 rounded-lg my-12">
            <h2 className="font-headline text-3xl font-bold text-primary mb-6">Solution & Functionality</h2>
            <div className="space-y-6 text-lg text-foreground/90">
                <p className="whitespace-pre-line">{project.solution.description}</p>
                {project.solution.items && (
                    <ul className="space-y-4 pl-4">
                        {project.solution.items.map((item, index) => (
                            <li key={index} className="flex flex-col sm:flex-row">
                                <span className="font-semibold text-primary w-full sm:w-40 mb-1 sm:mb-0 shrink-0">{item.title}:</span>
                                <span className="flex-grow">{item.description}</span>
                            </li>
                        ))}
                    </ul>
                )}
                {project.solution.conclusion && (
                    <p>{project.solution.conclusion}</p>
                )}
            </div>
        </div>

        <div>
          <h2 className="font-headline text-3xl font-bold text-primary mb-6 text-center">Tools & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {project.techStack.map((tech) => (
              <Badge key={tech} className="text-base px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 border">
                <CheckCircle className="mr-2 h-4 w-4" />
                {tech}
              </Badge>
            ))}
          </div>
        </div>

      </div>
    </article>
  );
}
