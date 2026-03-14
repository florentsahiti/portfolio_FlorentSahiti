"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, ArrowRight, ExternalLink, Code, Database, Wrench, Layers, Sparkles, Zap, Globe, Monitor } from "lucide-react";

const skills = {
  frontend: [
    { name: "Next.js", icon: "⚡", level: 95 },
    { name: "React", icon: "⚛️", level: 90 },
    { name: "Tailwind CSS", icon: "🎨", level: 92 },
    { name: "TypeScript", icon: "📘", level: 88 },
  ],
  backend: [
    { name: "Node.js", icon: "🟢", level: 85 },
    { name: "REST APIs", icon: "🔗", level: 90 },
  ],
  database: [
    { name: "SQL", icon: "🗃️", level: 82 },
    { name: "Relational DBs", icon: "🔢", level: 80 },
  ],
  tools: [
    { name: "GitHub", icon: "🐙", level: 90 },
    { name: "n8n", icon: "🔄", level: 75 },
    { name: "DevTools", icon: "🛠️", level: 88 },
  ],
};

const projects = [
  {
    title: "PRONEX KS",
    description: "Business website for a leading company, featuring modern design and optimal user experience with seamless navigation.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://www.pronex-ks.com/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    screenshotColor: "from-blue-600 to-cyan-500",
  },
  {
    title: "Danuts",
    description: "E-commerce platform with seamless shopping experience, modern web technologies, and intuitive user interface.",
    technologies: ["Next.js", "Node.js", "SQL", "TypeScript"],
    link: "https://danuts.it/",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    screenshotColor: "from-purple-600 to-pink-500",
  },
  {
    title: "Gazi RKS",
    description: "Professional business website showcasing company services, portfolio, and corporate identity.",
    technologies: ["Next.js", "React", "TypeScript"],
    link: "https://www.gazi-rks.com/",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    screenshotColor: "from-orange-600 to-red-500",
  },
  {
    title: "AFZ ICT",
    description: "Technology services company website with modern SaaS aesthetic and professional design.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://afz-ict.ch/",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
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

function FloatingElement({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function GradientOrb({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`absolute rounded-full blur-3xl ${className}`}
    />
  );
}

function SkillBar({ name, level, icon, delay }: { name: string; level: number; icon: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="mb-4"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="flex items-center gap-2 text-text-secondary">
          <span>{icon}</span>
          <span>{name}</span>
        </span>
        <span className="text-text-tertiary text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-background-tertiary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
        />
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -12, rotateX: 2 }}
      className="group"
      style={{ perspective: 1000 }}
    >
      <div className="glass rounded-3xl overflow-hidden transform transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-accent-primary/20">
        {/* Project Image */}
        <div className="relative h-56 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.screenshotColor}`} />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:scale-110 group-hover:opacity-60 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-transparent to-transparent" />
          
          {/* Floating Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
            className="absolute top-4 right-4 w-12 h-12 glass rounded-xl flex items-center justify-center"
          >
            <Globe className="text-white" size={20} />
          </motion.div>
        </div>

        {/* Project Info */}
        <div className="p-6">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="text-xl font-outfit font-bold mb-2 group-hover:text-accent-primary transition-colors"
          >
            {project.title}
          </motion.h3>
          <p className="text-text-secondary text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.05 }}
                className="px-3 py-1 text-xs bg-background-tertiary/80 text-text-secondary rounded-full border border-border"
              >
                {tech}
              </motion.span>
            ))}
          </div>
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-accent-primary font-semibold text-sm group-hover:gap-3 transition-all"
          >
            Visit Website <ArrowRight size={16} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 grid-pattern" />
        
        {/* Gradient Orbs */}
        <GradientOrb className="w-[600px] h-[600px] bg-accent-primary/20 -top-40 -left-40" delay={0} />
        <GradientOrb className="w-[500px] h-[500px] bg-accent-secondary/15 top-1/3 -right-32" delay={2} />
        <GradientOrb className="w-[400px] h-[400px] bg-accent-pink/15 bottom-20 left-1/4" delay={4} />

        {/* Floating Elements */}
        <FloatingElement delay={0} className="absolute top-32 left-[10%]">
          <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center">
            <Zap className="text-yellow-400" size={24} />
          </div>
        </FloatingElement>
        <FloatingElement delay={1.5} className="absolute top-48 right-[15%]">
          <div className="w-12 h-12 glass rounded-xl flex items-center justify-center">
            <Sparkles className="text-purple-400" size={20} />
          </div>
        </FloatingElement>
        <FloatingElement delay={3} className="absolute bottom-40 left-[20%]">
          <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center">
            <Code className="text-cyan-400" size={22} />
          </div>
        </FloatingElement>

        {/* Hero Content */}
        <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto px-6 py-32 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-accent-primary text-sm font-medium"
            >
              <Sparkles size={16} />
              Available for projects
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-outfit font-bold mb-6"
          >
            <motion.span
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8 }}
              className="gradient-text"
            >
              Florent
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-text-primary"
            >
              Sahiti
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl text-text-secondary font-outfit mb-4"
          >
            Software Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-text-tertiary max-w-2xl mx-auto mb-12 text-lg"
          >
            Crafting scalable, modern web applications with clean code and thoughtful architecture
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={() => scrollToSection("#projects")}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-gradient rounded-2xl font-outfit font-bold text-lg text-white glow hover:opacity-90 transition-all shadow-lg shadow-accent-primary/25"
            >
              View Projects
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("#contact")}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 glass rounded-2xl font-outfit font-bold text-lg text-text-primary hover:bg-white/10 transition-all border border-border"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-7 h-12 border-2 border-text-tertiary/50 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-3 bg-accent-primary rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-outfit font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Get to know the developer behind the code
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ perspective: 1000 }}
            >
              <div className="relative">
                {/* 3D Card Effect */}
                <motion.div
                  whileHover={{ rotateY: 5, rotateX: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative transform transition-transform"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-pink rounded-3xl blur-2xl opacity-30" />
                  <div className="relative glass rounded-3xl p-8 min-h-[400px] flex flex-col items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", delay: 0.3 }}
                      className="w-40 h-40 rounded-2xl bg-gradient p-1 mb-6"
                    >
                      <div className="w-full h-full bg-background-secondary rounded-2xl flex items-center justify-center">
                        <span className="text-6xl font-outfit font-bold gradient-text">FS</span>
                      </div>
                    </motion.div>
                    
                    <div className="text-center">
                      <h3 className="text-2xl font-outfit font-bold mb-2">Florent Sahiti</h3>
                      <p className="text-text-secondary">Software Developer</p>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="absolute -bottom-6 -right-6 flex gap-3"
                    >
                      <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center">
                        <Code className="text-accent-primary" size={28} />
                      </div>
                      <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center">
                        <Monitor className="text-accent-secondary" size={28} />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-outfit font-semibold">
                Building the <span className="gradient-text">future</span> with code
              </h3>
              <p className="text-text-secondary leading-relaxed text-lg">
                I&apos;m a <span className="text-text-primary font-medium">software developer</span> passionate about creating 
                exceptional digital experiences. With a strong foundation in programming logic and software development principles, 
                I specialize in building <span className="text-text-primary font-medium">scalable web applications</span> using modern technologies.
              </p>
              <p className="text-text-secondary leading-relaxed text-lg">
                My experience working with <span className="text-text-primary font-medium">international teams</span> and US-based organizations 
                has sharpened my ability to communicate effectively across cultures and time zones. I thrive in collaborative environments 
                where I can contribute to meaningful projects.
              </p>
              <p className="text-text-secondary leading-relaxed text-lg">
                I&apos;m deeply passionate about <span className="text-text-primary font-medium">automation</span>, creating efficient workflows, 
                and building systems that scale. Every project I work on is an opportunity to solve real problems with clean, maintainable, 
                and elegant solutions.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex gap-4 pt-6"
              >
                {[
                  { icon: Github, href: "https://github.com", color: "hover:text-white" },
                  { icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-400" },
                  { icon: Mail, href: "mailto:florent.sahiti@email.com", color: "hover:text-red-400" },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 glass rounded-xl text-text-secondary ${item.color} transition-colors`}
                  >
                    <item.icon size={22} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-background-secondary/30 relative">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-outfit font-bold mb-4">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Technologies I work with to bring ideas to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Frontend", icon: Layers, skills: skills.frontend, color: "from-blue-500 to-cyan-400", delay: 0 },
              { title: "Backend", icon: Code, skills: skills.backend, color: "from-purple-500 to-pink-400", delay: 0.1 },
              { title: "Database", icon: Database, skills: skills.database, color: "from-emerald-500 to-teal-400", delay: 0.2 },
              { title: "Tools", icon: Wrench, skills: skills.tools, color: "from-orange-500 to-red-400", delay: 0.3 },
            ].map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: category.delay }}
                whileHover={{ y: -8 }}
                className="glass rounded-3xl p-6 hover:bg-background-tertiary/50 transition-all group"
                style={{ perspective: 1000 }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <category.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-outfit font-bold mb-5">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      icon={skill.icon}
                      delay={0.5 + i * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-outfit font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              A selection of projects I&apos;ve worked on
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-background-secondary/30 relative">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-outfit font-bold mb-4">
              Experience & <span className="gradient-text">Background</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              My professional journey
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative"
              >
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-pink" />
                
                <motion.div
                  whileHover={{ x: 10 }}
                  className="glass rounded-3xl p-8 ml-16 relative"
                >
                  <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gradient shadow-lg shadow-accent-primary/50" />
                  
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                      <exp.icon className="text-white" size={28} />
                    </div>
                    
                    <div className="flex-1">
                      <span className="text-accent-primary font-semibold text-sm">
                        {exp.period}
                      </span>
                      <h3 className="text-2xl font-outfit font-bold mt-1">
                        {exp.title}
                      </h3>
                      <p className="text-text-tertiary mt-1">
                        {exp.company}
                      </p>
                      <p className="text-text-secondary mt-4 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Additional Info Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-8 ml-16">
              {[
                { title: "International Teams", desc: "Experience working with global teams", icon: Globe },
                { title: "Clean Architecture", desc: "Focus on scalable and maintainable code", icon: Code },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-background-tertiary rounded-xl flex items-center justify-center">
                      <item.icon className="text-accent-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-outfit font-semibold">{item.title}</h4>
                      <p className="text-text-tertiary text-sm">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <GradientOrb className="w-[500px] h-[500px] bg-accent-primary/10 -top-40 -left-40" />
        <GradientOrb className="w-[400px] h-[400px] bg-accent-pink/10 bottom-0 right-0" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-outfit font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Have a project in mind? Let&apos;s talk about how we can work together
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-outfit font-bold mb-4">
                  Let&apos;s build something <span className="gradient-text">amazing</span>
                </h3>
                <p className="text-text-secondary text-lg">
                  I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "florent.sahiti@email.com", href: "mailto:florent.sahiti@email.com", color: "from-blue-500 to-cyan-500" },
                  { icon: Github, label: "GitHub", value: "github.com/florent-sahiti", href: "https://github.com", color: "from-purple-500 to-pink-500" },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/florent-sahiti", href: "https://linkedin.com", color: "from-blue-600 to-blue-400" },
                ].map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-5 p-5 glass rounded-2xl hover:bg-background-tertiary/50 transition-all group"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <item.icon className="text-white" size={22} />
                    </div>
                    <div>
                      <p className="text-text-tertiary text-sm">{item.label}</p>
                      <p className="text-text-primary font-medium">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Form submitted!");
              }}
              className="glass rounded-3xl p-8 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-text-secondary text-sm mb-3 font-medium">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-5 py-4 bg-background-tertiary border border-border rounded-xl text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-text-secondary text-sm mb-3 font-medium">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-5 py-4 bg-background-tertiary border border-border rounded-xl text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-text-secondary text-sm mb-3 font-medium">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-background-tertiary border border-border rounded-xl text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-gradient rounded-xl font-outfit font-bold text-lg text-white glow hover:opacity-90 transition-all shadow-lg shadow-accent-primary/25"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}
