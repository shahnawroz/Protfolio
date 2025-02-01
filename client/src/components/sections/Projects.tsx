import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with React and Node.js",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    github: "https://github.com",
    live: "https://example.com",
    tags: ["React", "Node.js", "TypeScript"],
  },
  {
    title: "Project Two",
    description: "Full-stack e-commerce platform with real-time features",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    github: "https://github.com",
    live: "https://example.com",
    tags: ["Next.js", "Prisma", "Tailwind"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="mt-4 text-muted-foreground">
          Here are some of my recent projects
        </p>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-12 grid gap-6 sm:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={item}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <motion.div 
                  className="aspect-video overflow-hidden rounded-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-200"
                  />
                </motion.div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </motion.a>
                  </Button>
                  <Button size="sm" asChild>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </motion.a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}