import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Abrar Awsaf Membership Vue",
    description: "A membership management system built with Vue.js and Quasar framework",
    techStack: ["Vue.js", "Quasar", "Sass"],
    link: "https://member.abrarawsafagrofarm.com/#/",
  },
  {
    title: "Mians Official Website",
    description: "Corporate website developed using React.js with custom CSS styling",
    techStack: ["React.js", "CSS"],
    link: "https://wanna-be-coder.github.io/MIANS/",
  },
  {
    title: "Marketing App",
    description: "A comprehensive marketing platform built with Vue.js and Quasar",
    techStack: ["Vue.js", "Quasar.js", "Sass"],
    link: "https://onbez.com/",
  },
  {
    title: "Adrar Awsaf E-commerce",
    description: "Modern e-commerce platform utilizing Next.js and Tailwind CSS",
    techStack: ["Next.js", "React", "Tailwind CSS"],
    link: "https://abrarawsafagrofarm.com/#/home",
  },
  {
    title: "Daatti Home Collection",
    description: "E-commerce website for home decor and collections",
    techStack: ["Next.js", "React", "Tailwind CSS"],
    link: "https://www.daattihomecollection.com/",
  },
  {
    title: "Motamot",
    description: "Web application built with Next.js and modern React features",
    techStack: ["Next.js", "React", "Tailwind CSS"],
    link: "https://www.daattihomecollection.com/",
  },
  {
    title: "MIANS",
    description: "Fast and modern website built with Astro framework",
    techStack: ["Astro"],
    link: "https://www.miansofficial.com/",
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
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={item}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="overflow-hidden h-full flex flex-col">
              <CardHeader>
                <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <motion.span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="mt-4">
                  <Button size="sm" asChild className="w-full">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Project
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