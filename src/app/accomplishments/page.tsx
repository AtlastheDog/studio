import { accomplishments } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Briefcase, Calendar, Check, ArrowRight } from "lucide-react";

export default function AccomplishmentsPage() {
  return (
    <div className="bg-muted">
      <div className="container mx-auto px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl">Professional Accomplishments</h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            Throughout my career, I've had the privilege of contributing to impactful projects and leading talented teams. This section outlines my key roles and the results I've delivered.
          </p>
        </div>
        
        <div className="mt-16 space-y-12">
          {accomplishments.map((item, index) => (
            <Card key={index} className="overflow-hidden transition-shadow hover:shadow-xl">
              <div className="grid md:grid-cols-3">
                <div className="p-6 bg-secondary/50 md:border-r">
                    <CardTitle className="font-headline text-2xl text-primary">{item.title}</CardTitle>
                    <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                        <Briefcase className="h-4 w-4"/>
                        <span>{item.company}</span>
                    </div>
                     <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4"/>
                        <span>{item.period}</span>
                    </div>
                </div>
                <div className="md:col-span-2 p-6">
                  <CardHeader className="p-0 mb-4">
                    <h3 className="font-headline text-xl text-accent">Key Achievements</h3>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-2">
                      {item.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                           <Check className="h-5 w-5 mt-1 text-accent flex-shrink-0" /> 
                           <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="link" className="px-0 mt-4 text-accent">
                      <Link href={`/accomplishments/${item.slug}`}>
                          Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
