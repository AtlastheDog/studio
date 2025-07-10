
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "./_components/project-card";
import { projects } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="py-24 sm:py-32 md:py-40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h1 className="font-headline text-5xl font-bold tracking-tight text-primary md:text-6xl lg:text-7xl">
                Matt Casey
              </h1>
              <p className="mt-6 text-lg leading-8 text-foreground/80 md:text-xl">
                Strategic and technically fluent Product Manager with experience spanning early-stage startups, Private Equity backed high-growth environments, and scaling a product up to 1 million DAU. Skilled at translating user needs into business impact, fostering a culture of experimentation, and delivering data-informed solutions that accelerate growth.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button asChild size="lg">
                  <Link href="/projects">View My Work</Link>
                </Button>
                <Button asChild variant="ghost" size="lg">
                  <Link href="/get-to-know-me">
                    Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2">
               <Image
                  src="/20250703_112450.jpg"
                  alt="A professional headshot of Matt Casey"
                  width={600}
                  height={600}
                  priority
                  className="rounded-full aspect-square object-cover shadow-2xl mx-auto w-3/4 md:w-full"
                />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 sm:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl text-center mb-12">
              Featured Project
            </h2>
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/TirLWJztPEE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>


      <section className="py-24 sm:py-32 bg-muted">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">Latest Projects</h2>
            <p className="mt-6 text-lg leading-8 text-foreground/80">
              Here are some of the projects I'm most proud of. Each one represents a unique challenge and a learning opportunity.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
