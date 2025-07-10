import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Heart, User, BookOpen, Waves, Compass, Library, BrainCircuit, Briefcase } from "lucide-react";
import React from "react";

const IceSkateIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2 16.5A2.5 2.5 0 0 1 4.5 19H18" />
    <path d="M20.5 19h-2.5" />
    <path d="M5 16.5l2-11.5 1.5.5-2 11.5" />
    <path d="m14 5-1 11" />
    <path d="M19 5.5s-1.5 1-4 2" />
  </svg>
);

const interests = [
  { icon: BookOpen, text: "Reading" },
  { icon: Waves, text: "Water Polo" },
  { icon: IceSkateIcon, text: "San Jose Sharks" },
  { icon: Compass, text: "Exploring" },
];

const readingList = {
    life: {
        title: "Life",
        icon: BrainCircuit,
        books: [
            "A Short History of Nearly Everything - Bill Bryson",
            "The Righteous Mind: Why good people are divided by politics and religion. - Jonathan Haidt",
            "How to win friends and influence people - Dale Carnegie"
        ]
    },
    professional: {
        title: "Professional",
        icon: Briefcase,
        books: [
            "Great by Choice - Jim Collins",
            "Deep Work - Cal Newport",
            "Build - Tony Fadell"
        ]
    },
    productManagement: {
        title: "Product Management",
        icon: Library,
        books: [
            "Inspired: How to Create Tech Products Customers Love - Marty Cagan",
            "Continuous Discovery Habits: Discover Products that Create Customer Value and Business Value - Teresa Torres",
            "Lean UX: Designing Great Products with Agile Teams - Jeff Gothelf"
        ]
    }
}

export default function GetToKnowMePage() {
  return (
    <div className="bg-muted">
      <div className="container mx-auto px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl">More Than Just Code</h1>
            <p className="mt-6 text-lg leading-8 text-foreground/80">
            A glimpse into my life outside of the editor, my passions, and how to get in touch.
            </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
            <Card className="lg:col-span-3">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <User className="h-8 w-8 text-accent"/>
                        <CardTitle className="font-headline text-3xl">My Background</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4 text-lg text-foreground/90">
                    <p>
                        I grew up fascinated by how things work, which led me from dismantling old electronics to building my first websites. My journey into tech was driven by a desire to not just build, but to solve real-world problems for real people.
                    </p>
                    <p>
                        This path has taught me the importance of empathy in design, the power of collaboration, and the thrill of seeing a complex project come to life. When I am not working, I'm usually exploring new ideas, whether that's through a book, a conversation, trying out new tools, or even exploring the Central Coast.
                    </p>
                </CardContent>
            </Card>
            <Card className="lg:col-span-2">
                 <CardHeader>
                    <div className="flex items-center gap-3">
                        <Heart className="h-8 w-8 text-accent"/>
                        <CardTitle className="font-headline text-3xl">Interests</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {interests.map((interest, index) => (
                            <li key={index} className="flex items-center gap-4">
                                <interest.icon className="h-6 w-6 text-primary flex-shrink-0" />
                                <span className="text-lg">{interest.text}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>

        <div className="mt-24">
             <div className="mx-auto max-w-4xl text-center">
                <h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">What I'm Reading</h2>
                <p className="mt-4 text-lg leading-8 text-foreground/80">
                    Get a glimpse into my brain by reviewing some of my favorite books.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {Object.values(readingList).map((category) => (
                    <Card key={category.title} className="flex flex-col">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <category.icon className="h-7 w-7 text-accent"/>
                                <CardTitle className="font-headline text-2xl">{category.title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <ul className="space-y-3">
                                {category.books.map((book, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <BookOpen className="h-4 w-4 mt-1 text-primary/70 flex-shrink-0" />
                                        <span>{book}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>

        <div className="mt-24 text-center">
             <Card className="max-w-2xl mx-auto p-8 bg-background shadow-xl">
                 <CardHeader>
                     <Mail className="h-12 w-12 mx-auto text-primary" />
                     <CardTitle className="font-headline text-4xl mt-4">Let's Connect</CardTitle>
                 </CardHeader>
                 <CardContent>
                    <p className="text-lg text-foreground/80 mb-6">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team. Feel free to reach out.
                    </p>
                    <Button asChild size="lg">
                        <a href="mailto:mattcasey8@gmail.com">
                            <Mail className="mr-2 h-5 w-5" />
                            Say Hello
                        </a>
                    </Button>
                 </CardContent>
             </Card>
        </div>
      </div>
    </div>
  );
}
