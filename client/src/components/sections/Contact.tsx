import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4 text-muted-foreground">
          Get in touch with me
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <Card>
          <CardContent className="grid gap-6 p-6 sm:grid-cols-3">
            <Button
              variant="outline"
              className="h-auto flex-col gap-4 p-6"
              asChild
            >
              <a href="tel:+1234567890">
                <Phone className="h-6 w-6" />
                <div className="text-sm font-normal">+1 (234) 567-890</div>
              </a>
            </Button>
            <Button
              variant="outline"
              className="h-auto flex-col gap-4 p-6"
              asChild
            >
              <a href="mailto:sh.nawrose@gmail.com">
                <Mail className="h-6 w-6" />
                <div className="text-sm font-normal">sh.nawrose@gmail.com</div>
              </a>
            </Button>
            <Button
              variant="outline"
              className="h-auto flex-col gap-4 p-6"
              asChild
            >
              <a
                href="https://github.com/shahnawroz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
                <div className="text-sm font-normal">GitHub Profile</div>
              </a>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}