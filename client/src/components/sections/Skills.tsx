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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold">Skills</h2>
        <p className="mt-4 text-muted-foreground">
          Technologies I work with
        </p>
      </motion.div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="space-y-2"
          >
            <motion.div 
              className="flex justify-between"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <span className="font-medium">{skill.name}</span>
              <span className="text-muted-foreground">{skill.level}%</span>
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ 
                delay: index * 0.1 + 0.3,
                duration: 0.8,
                ease: "easeOut"
              }}
              style={{ transformOrigin: "left" }}
            >
              <Progress value={skill.level} className="h-2" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}