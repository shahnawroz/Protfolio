import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/">
            <a className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Portfolio</span>
            </a>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  "text-foreground"
                )}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden ml-2">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col space-y-4">
                {links.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="text-foreground/60 transition-colors hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}