import { accomplishments } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Briefcase, Calendar, Check, ArrowRight, MapPin } from "lucide-react";

export default function CareerPage() {
  const allFeatures = accomplishments.flatMap(acc => 
    acc.features ? acc.features.map(feat => ({ ...feat, accomplishment: acc })) : []
  );

  return (
    <div className="bg-muted">
      <div className="container mx-auto px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl">Career</h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            A summary of my professional roles and key responsibilities. Below, you'll find detailed case studies on specific features and projects I've led.
          </p>
        </div>

        <div className="mt-16 border-t border-border pt-16 space-y-12">
          {accomplishments.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-x-8">
              <div className="md:col-span-1 mb-4 md:mb-0">
                <h2 className="font-headline text-2xl text-primary">{item.company}</h2>
                <p className="font-semibold">{item.title}</p>
                <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4"/>
                  <span>{item.period}</span>
                </div>
                {item.location && (
                  <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4"/>
                    <span>{item.location}</span>
                  </div>
                )}
              </div>
              <div className="md:col-span-3">
                 <ul className="space-y-3">
                  {item.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                       <Check className="h-5 w-5 mt-1 text-accent flex-shrink-0" /> 
                       <span className="text-foreground/90">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {allFeatures.length > 0 && (
          <div className="mt-24 border-t border-border pt-16">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Featured Case Studies</h2>
              <p className="mt-4 text-lg leading-8 text-foreground/80">
                Dive deeper into specific challenges, actions, and results from my work.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {allFeatures.map((feature) => (
                <Link href={`/career/${feature.slug}`} key={feature.slug} className="group block">
                  <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                    <CardHeader>
                      <CardTitle className="font-headline text-2xl text-accent">{feature.title}</CardTitle>
                      <CardDescription>{feature.accomplishment.company} &middot; {feature.accomplishment.title}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p>{feature.summary}</p>
                    </CardContent>
                    <CardFooter>
                      <span className="flex items-center text-sm font-semibold text-primary">
                        Read Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
