import { accomplishments } from "@/lib/data";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, Building } from "lucide-react";

export async function generateStaticParams() {
  const allFeatures = accomplishments.flatMap(acc => acc.features || []);
  return allFeatures.map((feature) => ({
    slug: feature.slug,
  }));
}

export default function FeatureCaseStudyPage({ params }: { params: { slug: string } }) {
  let feature;
  let accomplishment;

  for (const acc of accomplishments) {
    const foundFeature = acc.features?.find(f => f.slug === params.slug);
    if (foundFeature) {
      feature = foundFeature;
      accomplishment = acc;
      break;
    }
  }

  if (!feature || !accomplishment) {
    notFound();
  }

  return (
    <article className="bg-background py-12 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12 pb-8 border-b">
          <p className="text-lg font-semibold text-accent mb-2">Case Study</p>
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            {feature.title}
          </h1>
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Building className="h-5 w-5" />
              <span className="text-lg">{accomplishment.company}</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              <span className="text-lg">{accomplishment.title}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span className="text-lg">{accomplishment.period}</span>
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none prose-h2:font-headline prose-h2:text-primary prose-h2:text-3xl prose-h2:mb-4">
          <Card className="mb-8 bg-secondary/20 border-accent/30">
            <CardHeader>
                <CardTitle className="font-headline text-xl text-primary">Summary</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-lg">{feature.summary}</p>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            {feature.caseStudy.map((section, index) => (
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
