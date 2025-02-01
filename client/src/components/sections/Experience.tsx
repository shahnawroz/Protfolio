import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Developer",
    company: "Tech Corp",
    period: "2020 - Present",
    description:
      "Led development of multiple full-stack applications using modern technologies.",
  },
  {
    title: "Full Stack Developer",
    company: "Web Solutions Inc",
    period: "2018 - 2020",
    description:
      "Developed and maintained various web applications for enterprise clients.",
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2016 - 2018",
    description:
      "Created responsive and interactive web interfaces for diverse clients.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Experience</h2>
        <p className="mt-4 text-muted-foreground">
          My professional journey
        </p>
      </div>
      <div className="mt-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="mb-6">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">
                    {experience.title} at {experience.company}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {experience.period}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {experience.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
