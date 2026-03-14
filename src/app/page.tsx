"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Code, Database, Wrench, Layers, Sparkles, Globe } from "lucide-react";

const skills = {
  frontend: [
    { name: "Next.js", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "TypeScript", icon: "📘" },
  ],
  backend: [
    { name: "Node.js", icon: "🟢" },
    { name: "REST APIs", icon: "🔗" },
  ],
  database: [
    { name: "SQL", icon: "🗃️" },
    { name: "Relational DBs", icon: "🔢" },
  ],
  tools: [
    { name: "GitHub", icon: "🐙" },
    { name: "n8n", icon: "🔄" },
    { name: "DevTools", icon: "🛠️" },
  ],
};

const projects = [
  {
    title: "PRONEX KS",
    description: "Business website for a leading company, featuring modern design and optimal user experience.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://www.pronex-ks.com/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=60",
    screenshotColor: "from-blue-600 to-cyan-500",
  },
  {
    title: "Danuts",
    description: "E-commerce platform with seamless shopping experience and modern web technologies.",
    technologies: ["Next.js", "Node.js", "SQL", "TypeScript"],
    link: "https://danuts.it/",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=60",
    screenshotColor: "from-purple-600 to-pink-500",
  },
  {
    title: "Gazi RKS",
    description: "Professional business website showcasing company services and portfolio.",
    technologies: ["Next.js", "React", "TypeScript"],
    link: "https://www.gazi-rks.com/",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=60",
    screenshotColor: "from-orange-600 to-red-500",
  },
  {
    title: "AFZ ICT",
    description: "Technology services company website with modern SaaS aesthetic.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://afz-ict.ch/",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=60",
    screenshotColor: "from-emerald-600 to-teal-500",
  },
];

const experiences = [
  {
    title: "Software Developer",
    company: "Tech Industry",
    period: "Present",
    description: "Building scalable web applications and working with international teams to deliver high-quality software solutions.",
    icon: Code,
  },
];

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Simplified Background */}
        <div className="absolute inset-0 bg-background-primary">
          <div className="absolute top-0 -left-40 w-80 h-80 bg-accent-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 -right-40 w-80 h-80 bg-accent-secondary/20 rounded-full blur-[100px]" />
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto px-6 py-32 text-center relative z-10">
          <FadeIn delay={0}>
            <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-accent-primary text-sm font-medium mb-8">
              <Sparkles size={14} />
              Available for projects
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-outfit font-bold mb-6">
              <span className="gradient-text">Florent</span>
              <br />
              <span className="text-text-primary">Sahiti</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-text-secondary font-outfit mb-4">
              Software Developer
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-text-tertiary max-w-xl mx-auto mb-10 text-base md:text-lg">
              Building scalable, modern web applications with clean code
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => scrollToSection("#projects")}
                className="px-8 py-4 bg-gradient rounded-xl font-outfit font-semibold text-white"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="px-8 py-4 glass rounded-xl font-outfit font-semibold text-text-primary"
              >
                Contact Me
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Simple Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-text-tertiary/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-text-tertiary/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 relative">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-3">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-text-secondary">Get to know the developer behind the code</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-3xl blur-lg opacity-20" />
                <div className="relative glass rounded-3xl p-8 text-center">
                  <div className="w-28 h-28 mx-auto mb-4 rounded-2xl bg-gradient flex items-center justify-center">
                    <span className="text-5xl font-outfit font-bold text-white">FS</span>
                  </div>
                  <h3 className="text-xl font-outfit font-semibold">Florent Sahiti</h3>
                  <p className="text-text-secondary text-sm">Software Developer</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="space-y-4">
              <h3 className="text-xl md:text-2xl font-outfit font-semibold">
                Building the <span className="gradient-text">future</span> with code
              </h3>
              <p className="text-text-secondary leading-relaxed">
                I'm a <span className="text-text-primary">software developer</span> passionate about creating 
                exceptional digital experiences with strong foundations in programming logic and software development principles.
              </p>
              <p className="text-text-secondary leading-relaxed">
                I specialize in building <span className="text-text-primary">scalable web applications</span> using modern technologies 
                like Next.js, Node.js, and TypeScript. Experience with <span className="text-text-primary">international teams</span> has sharpened my communication skills.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Passionate about <span className="text-text-primary">automation</span>, efficient workflows, 
                and building systems that scale with business needs.
              </p>

              <div className="flex gap-3 pt-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl text-text-secondary hover:text-white transition-colors">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl text-text-secondary hover:text-blue-400 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="mailto:florent.sahiti@email.com" className="p-3 glass rounded-xl text-text-secondary hover:text-red-400 transition-colors">
                  <Mail size={18} />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-28 bg-background-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-3">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-text-secondary">Technologies I work with</p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "Frontend", icon: Layers, skills: skills.frontend, color: "from-blue-500 to-cyan-400" },
              { title: "Backend", icon: Code, skills: skills.backend, color: "from-purple-500 to-pink-400" },
              { title: "Database", icon: Database, skills: skills.database, color: "from-emerald-500 to-teal-400" },
              { title: "Tools", icon: Wrench, skills: skills.tools, color: "from-orange-500 to-red-400" },
            ].map((category, idx) => (
              <FadeIn key={category.title} delay={idx * 0.1}>
                <div className="glass rounded-2xl p-5 hover:bg-background-tertiary/30 transition-colors">
                  <div className={`w-10 h-10 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                    <category.icon className="text-white" size={20} />
                  </div>
                  <h3 className="font-outfit font-semibold mb-3">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex items-center gap-2 text-sm text-text-secondary">
                        <span>{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-3">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-text-secondary">Projects I've worked on</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <FadeIn key={project.title} delay={i * 0.1}>
                <div className="glass rounded-2xl overflow-hidden group">
                  <div className="h-44 md:h-52 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.screenshotColor}`} />
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-outfit font-bold mb-2 group-hover:text-accent-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs bg-background-tertiary text-text-secondary rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent-primary text-sm font-medium group-hover:gap-3 transition-all"
                    >
                      Visit Website <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-28 bg-background-secondary/30">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-3">
              Experience
            </h2>
            <p className="text-text-secondary">My professional journey</p>
          </FadeIn>

          <div className="space-y-4">
            <FadeIn>
              <div className="glass rounded-2xl p-6 flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Code className="text-white" size={22} />
                </div>
                <div>
                  <span className="text-accent-primary text-sm font-medium">Present</span>
                  <h3 className="text-lg font-outfit font-semibold">Software Developer</h3>
                  <p className="text-text-tertiary text-sm">Tech Industry</p>
                  <p className="text-text-secondary mt-2 text-sm">
                    Building scalable web applications and working with international teams to deliver high-quality software solutions.
                  </p>
                </div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FadeIn delay={0.1}>
                <div className="glass rounded-xl p-4">
                  <Globe className="text-accent-primary mb-2" size={20} />
                  <h4 className="font-outfit font-medium">International Teams</h4>
                  <p className="text-text-tertiary text-xs">Global collaboration</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="glass rounded-xl p-4">
                  <Code className="text-accent-secondary mb-2" size={20} />
                  <h4 className="font-outfit font-medium">Clean Architecture</h4>
                  <p className="text-text-tertiary text-xs">Scalable code</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-3">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-text-secondary">Let's work together</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn className="space-y-4">
              <h3 className="text-xl font-outfit font-semibold">
                Let's build something <span className="gradient-text">amazing</span>
              </h3>
              <p className="text-text-secondary text-sm">
                I'm open to discussing new projects and opportunities.
              </p>

              <div className="space-y-3">
                <a href="mailto:florent.sahiti@email.com" className="flex items-center gap-3 p-3 glass rounded-xl hover:bg-background-tertiary/50 transition-colors">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="text-blue-400" size={18} />
                  </div>
                  <div>
                    <p className="text-text-tertiary text-xs">Email</p>
                    <p className="text-text-primary text-sm">florent.sahiti@email.com</p>
                  </div>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 glass rounded-xl hover:bg-background-tertiary/50 transition-colors">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Github className="text-purple-400" size={18} />
                  </div>
                  <div>
                    <p className="text-text-tertiary text-xs">GitHub</p>
                    <p className="text-text-primary text-sm">github.com/florent-sahiti</p>
                  </div>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 glass rounded-xl hover:bg-background-tertiary/50 transition-colors">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Linkedin className="text-blue-500" size={18} />
                  </div>
                  <div>
                    <p className="text-text-tertiary text-xs">LinkedIn</p>
                    <p className="text-text-primary text-sm">linkedin.com/in/florent-sahiti</p>
                  </div>
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <form onSubmit={(e) => { e.preventDefault(); }} className="glass rounded-2xl p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-text-secondary text-xs mb-2">Name</label>
                    <input type="text" required placeholder="Your name" className="w-full px-4 py-3 bg-background-tertiary border border-border rounded-lg text-text-primary text-sm placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary" />
                  </div>
                  <div>
                    <label className="block text-text-secondary text-xs mb-2">Email</label>
                    <input type="email" required placeholder="your@email.com" className="w-full px-4 py-3 bg-background-tertiary border border-border rounded-lg text-text-primary text-sm placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary" />
                  </div>
                </div>
                <div>
                  <label className="block text-text-secondary text-xs mb-2">Message</label>
                  <textarea required rows={4} placeholder="Tell me about your project..." className="w-full px-4 py-3 bg-background-tertiary border border-border rounded-lg text-text-primary text-sm placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary resize-none" />
                </div>
                <button type="submit" className="w-full py-3 bg-gradient rounded-lg font-outfit font-semibold text-white">
                  Send Message
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
