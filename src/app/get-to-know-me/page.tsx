import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Heart, User, Coffee, Mountain, Code } from "lucide-react";
import Image from "next/image";

const interests = [
  { icon: Coffee, text: "Artisanal Coffee" },
  { icon: Mountain, text: "Mountain Hiking" },
  { icon: Code, text: "Open Source" },
  { icon: Heart, text: "Volunteering" },
];

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
                        This path has taught me the importance of empathy in design, the power of collaboration, and the thrill of seeing a complex project come to life. When I'm not coding, I'm usually exploring new ideas, whether that's through a book, a conversation, or a long walk in nature.
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

        <div className="mt-20 text-center">
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
