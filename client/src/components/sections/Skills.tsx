import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "JavaScript/TypeScript", level: 90 },
  { name: "React & React Native", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "HTML/CSS", level: 95 },
  { name: "SQL & NoSQL", level: 75 },
  { name: "DevOps & Cloud", level: 70 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Skills</h2>
        <p className="mt-4 text-muted-foreground">
          Technologies I work with
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <div className="flex justify-between">
              <span className="font-medium">{skill.name}</span>
              <span className="text-muted-foreground">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
