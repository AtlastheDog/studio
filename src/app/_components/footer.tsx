import { Mail, Mountain } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Mountain className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose md:text-left">
            &copy; {currentYear} Matt Casey. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="mailto:mattcasey8@gmail.com"
            className="flex items-center gap-2 text-sm transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4" />
            mattcasey8@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
