import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Header } from './_components/header';
import { Footer } from './_components/footer';

export const metadata: Metadata = {
  title: 'Matt Casey Portfolio',
  description: 'A portfolio of side projects and professional accomplishments.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22hsl(235 63% 30%)%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22m8 3 4 8 5-5 5 15H2L8 3z%22/></svg>" />
      </head>
      <body className="font-body bg-background text-foreground antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
