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

  const textContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center py-20">
      <div className="text-center">
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.h1 
            variants={textItem}
            className="text-4xl font-bold sm:text-5xl md:text-6xl"
          >
            John Doe
          </motion.h1>
          <motion.p 
            variants={textItem}
            className="text-xl text-muted-foreground sm:text-2xl"
          >
            Full Stack Developer
          </motion.p>
          <motion.p 
            variants={textItem}
            className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg"
          >
            I build exceptional and accessible digital experiences for the web.
          </motion.p>
          <motion.div 
            variants={textItem}
            className="mt-8 flex justify-center gap-4"
          >
            <Button 
              asChild
              className="relative overflow-hidden group"
            >
              <motion.a 
                href="#projects" 
                onClick={(e) => scrollToProjects(e as any)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </Button>
            <Button 
              variant="outline" 
              asChild
              className="relative overflow-hidden group"
            >
              <motion.a 
                href="#contact" 
                className="scroll-smooth"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </Button>
          </motion.div>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 1.5,
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer p-2"
          onClick={scrollToProjects}
          aria-label="Scroll to projects"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.button>
      </div>
    </section>
  );
}