import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Science",
    school: "Tech University",
    period: "2014 - 2016",
    description: "Specialized in Software Engineering and Distributed Systems",
  },
  {
    degree: "Bachelor of Computer Science",
    school: "State University",
    period: "2010 - 2014",
    description: "Major in Computer Science with a minor in Mathematics",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Education</h2>
        <p className="mt-4 text-muted-foreground">
          Academic background and qualifications
        </p>
      </div>
      <div className="mt-12">
        {education.map((item, index) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="mb-6">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <GraduationCap className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">{item.degree}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {item.school} | {item.period}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
