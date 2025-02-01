import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const navHeight = 56; // Height of the navbar (14 * 4)
      const targetPosition = projectsSection.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center py-20">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            John Doe
          </h1>
          <p className="mt-4 text-xl text-muted-foreground sm:text-2xl">
            Full Stack Developer
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            I build exceptional and accessible digital experiences for the web.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild>
              <a href="#projects" onClick={(e) => scrollToProjects(e as any)}>View Projects</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact" className="scroll-smooth">Contact Me</a>
            </Button>
          </div>
        </motion.div>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer p-2"
          onClick={scrollToProjects}
          aria-label="Scroll to projects"
        >
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}