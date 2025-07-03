import { accomplishments } from "@/lib/data";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

export async function generateStaticParams() {
  return accomplishments.map((item) => ({
    slug: item.slug,
  }));
}

export default function AccomplishmentDetailsPage({ params }: { params: { slug: string } }) {
  const item = accomplishments.find((p) => p.slug === params.slug);

  if (!item) {
    notFound();
  }

  return (
    <article className="bg-background py-12 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12 pb-8 border-b">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            {item.title}
          </h1>
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              <span className="text-lg">{item.company}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span className="text-lg">{item.period}</span>
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none prose-h2:font-headline prose-h2:text-primary prose-h2:text-3xl prose-h2:mb-4">
          <h2 className="sr-only">Case Study</h2>
          <div className="space-y-8">
            {item.caseStudy.map((section, index) => (
                <Card key={index} className="bg-muted/50">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl text-accent">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg">{section.content}</p>
                    </CardContent>
                </Card>
            ))}
          </div>
        </div>

      </div>
    </article>
  );
}
