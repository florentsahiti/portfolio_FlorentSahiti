"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Code, Database, Wrench, Layers, Sparkles, Globe, Send, CheckCircle, AlertCircle } from "lucide-react";

// ============================================================================
// CONFIGURATION - Social Links
// ============================================================================
const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/florent-sahiti-25a0a7230/",
  github: "https://github.com/florentsahiti",
  email: "florentsahiti06@gmail.com",
};

// Formspree form ID - Replace with your own after creating account at https://formspree.io
const FORMSPREE_FORM_ID = "xwkdqvjl";

// ============================================================================
// DATA - Skills & Projects
// ============================================================================
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
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect fill='%231a1a2e' width='800' height='600'/%3E%3Ctext x='400' y='300' text-anchor='middle' fill='%236366f1' font-size='48' font-family='system-ui'%3EPRONEX KS%3C/text%3E%3C/svg%3E",
    screenshotColor: "from-blue-600 to-cyan-500",
  },
  {
    title: "Danuts",
    description: "E-commerce platform with seamless shopping experience and modern web technologies.",
    technologies: ["Next.js", "Node.js", "SQL", "TypeScript"],
    link: "https://danuts.it/",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect fill='%231a1a2e' width='800' height='600'/%3E%3Ctext x='400' y='300' text-anchor='middle' fill='%238b5cf6' font-size='48' font-family='system-ui'%3EDanuts%3C/text%3E%3C/svg%3E",
    screenshotColor: "from-purple-600 to-pink-500",
  },
  {
    title: "Gazi RKS",
    description: "Professional business website showcasing company services and portfolio.",
    technologies: ["Next.js", "React", "TypeScript"],
    link: "https://www.gazi-rks.com/",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect fill='%231a1a2e' width='800' height='600'/%3E%3Ctext x='400' y='300' text-anchor='middle' fill='%23f97316' font-size='48' font-family='system-ui'%3EGazi RKS%3C/text%3E%3C/svg%3E",
    screenshotColor: "from-orange-600 to-red-500",
  },
  {
    title: "AFZ ICT",
    description: "Technology services company website with modern SaaS aesthetic.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://afz-ict.ch/",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect fill='%231a1a2e' width='800' height='600'/%3E%3Ctext x='400' y='300' text-anchor='middle' fill='%2310b981' font-size='48' font-family='system-ui'%3EAFZ ICT%3C/text%3E%3C/svg%3E",
    screenshotColor: "from-emerald-600 to-teal-500",
  },
];

// ============================================================================
// UTILITIES
// ============================================================================
const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Email validation regex
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// ============================================================================
// COMPONENTS
// ============================================================================

// Fade-in animation wrapper
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Social link button component
function SocialLink({ 
  href, 
  icon: Icon, 
  label, 
  colorClass,
  iconColor 
}: { 
  href: string; 
  icon: React.ElementType; 
  label: string; 
  colorClass: string;
  iconColor: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-background-tertiary/50 transition-colors"
    >
      <div className={`w-12 h-12 ${colorClass} rounded-xl flex items-center justify-center`}>
        <Icon className={iconColor} size={20} />
      </div>
      <div>
        <p className="text-text-tertiary text-xs">{label}</p>
        <p className="text-text-primary font-medium text-sm">
          {href.replace(/^https?:\/\//, '').replace(/^mailto:/, '')}
        </p>
      </div>
    </a>
  );
}

// Contact form component
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate fields
    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name");
      return;
    }
    if (!isValidEmail(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }
    if (!formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please enter a message");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again or email directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="glass rounded-2xl p-8 text-center space-y-4">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto" />
        <h3 className="text-xl font-outfit font-semibold">Message Sent!</h3>
        <p className="text-text-secondary">Thank you for reaching out. I'll get back to you soon.</p>
        <button
          onClick={() => setStatus("idle")}
          className="text-accent-primary hover:underline text-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
      {/* Error Message */}
      {status === "error" && (
        <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
          <AlertCircle size={18} />
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-text-secondary text-sm mb-2">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            disabled={status === "loading"}
            className="w-full px-4 py-3 bg-background-tertiary border border-border rounded-xl text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary transition-colors disabled:opacity-50"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-text-secondary text-sm mb-2">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            disabled={status === "loading"}
            className="w-full px-4 py-3 bg-background-tertiary border border-border rounded-xl text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary transition-colors disabled:opacity-50"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-text-secondary text-sm mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell me about your project..."
          disabled={status === "loading"}
          className="w-full px-4 py-3 bg-background-tertiary border border-border rounded-xl text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary transition-colors resize-none disabled:opacity-50"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 bg-gradient rounded-xl font-outfit font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send size={18} />
          </>
        )}
      </button>
    </form>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-background-primary">
          <div className="absolute top-0 -left-40 w-96 h-96 bg-accent-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 -right-40 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[120px]" />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-32 text-center relative z-10">
          <FadeIn delay={0}>
            <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-accent-primary text-sm font-medium mb-8">
              <Sparkles size={14} />
              Available for projects
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-outfit font-bold mb-4">
              <span className="gradient-text">Florent</span>
              <br />
              <span className="text-text-primary">Sahiti</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-2xl md:text-3xl text-text-secondary font-outfit mb-3">
              Software Developer
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-text-tertiary max-w-xl mx-auto mb-10 text-lg">
              Building scalable, modern web applications with clean code
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("#projects")}
                className="px-10 py-5 bg-gradient rounded-2xl font-outfit font-bold text-white transition-transform hover:scale-105 active:scale-95"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="px-10 py-5 glass rounded-2xl font-outfit font-bold text-text-primary border border-border hover:bg-white/5 transition-colors"
              >
                Contact Me
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-text-tertiary/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-text-tertiary/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-text-secondary">Get to know the developer behind the code</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-pink rounded-3xl blur-xl opacity-20" />
                <div className="relative glass rounded-3xl p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-2xl bg-gradient flex items-center justify-center">
                    <span className="text-6xl font-outfit font-bold text-white">FS</span>
                  </div>
                  <h3 className="text-2xl font-outfit font-semibold">Florent Sahiti</h3>
                  <p className="text-text-secondary mt-1">Software Developer</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-5">
                <h3 className="text-2xl font-outfit font-semibold">
                  Building the <span className="gradient-text">future</span> with code
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  I&apos;m a <span className="text-text-primary font-medium">software developer</span> passionate about creating 
                  exceptional digital experiences with strong foundations in programming logic and software development principles.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  I specialize in building <span className="text-text-primary font-medium">scalable web applications</span> using modern technologies 
                  like Next.js, Node.js, and TypeScript. Experience with <span className="text-text-primary font-medium">international teams</span> has sharpened my communication skills.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Passionate about <span className="text-text-primary font-medium">automation</span>, efficient workflows, 
                  and building systems that scale with business needs.
                </p>

                {/* Social Links */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-3 glass rounded-xl text-text-secondary hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-3 glass rounded-xl text-text-secondary hover:text-blue-400 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    aria-label="Email"
                    className="p-3 glass rounded-xl text-text-secondary hover:text-red-400 transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 md:py-32 bg-background-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-text-secondary">Technologies I work with</p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "Frontend", icon: Layers, skills: skills.frontend, color: "blue" },
              { title: "Backend", icon: Code, skills: skills.backend, color: "purple" },
              { title: "Database", icon: Database, skills: skills.database, color: "emerald" },
              { title: "Tools", icon: Wrench, skills: skills.tools, color: "orange" },
            ].map((category, idx) => (
              <FadeIn key={category.title} delay={idx * 0.1}>
                <div className="glass rounded-2xl p-6 hover:bg-background-tertiary/30 transition-colors group">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    category.color === 'blue' ? 'bg-blue-500/20' :
                    category.color === 'purple' ? 'bg-purple-500/20' :
                    category.color === 'emerald' ? 'bg-emerald-500/20' : 'bg-orange-500/20'
                  }`}>
                    <category.icon className={
                      category.color === 'blue' ? 'text-blue-400' :
                      category.color === 'purple' ? 'text-purple-400' :
                      category.color === 'emerald' ? 'text-emerald-400' : 'text-orange-400'
                    } size={24} />
                  </div>
                  <h3 className="text-lg font-outfit font-semibold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill.name}
                        className="px-3 py-1.5 text-xs bg-background-tertiary/50 text-text-secondary rounded-lg border border-border/50 group-hover:border-accent-primary/30 transition-colors"
                      >
                        {skill.icon} {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-text-secondary">Projects I&apos;ve worked on</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <FadeIn key={project.title} delay={i * 0.1}>
                <div className="glass rounded-2xl overflow-hidden group">
                  <div className="h-48 md:h-56 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.screenshotColor}`} />
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-40 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-background-primary/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-outfit font-bold mb-2 group-hover:text-accent-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs bg-background-tertiary/50 text-text-secondary rounded-lg border border-border/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent-primary font-semibold text-sm group-hover:gap-3 transition-all"
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
      <section id="experience" className="py-24 md:py-32 bg-background-secondary/30">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4">
              Experience
            </h2>
            <p className="text-text-secondary">My professional journey</p>
          </FadeIn>

          <div className="space-y-4">
            <FadeIn>
              <div className="glass rounded-2xl p-6 flex gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Code className="text-white" size={24} />
                </div>
                <div>
                  <span className="text-accent-primary text-sm font-medium">Present</span>
                  <h3 className="text-xl font-outfit font-semibold">Software Developer</h3>
                  <p className="text-text-tertiary text-sm">Tech Industry</p>
                  <p className="text-text-secondary mt-3 leading-relaxed">
                    Building scalable web applications and working with international teams to deliver high-quality software solutions.
                  </p>
                </div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FadeIn delay={0.1}>
                <div className="glass rounded-xl p-5">
                  <Globe className="text-accent-primary mb-3" size={22} />
                  <h4 className="font-outfit font-semibold mb-1">International Teams</h4>
                  <p className="text-text-tertiary text-xs">Global collaboration experience</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="glass rounded-xl p-5">
                  <Code className="text-accent-secondary mb-3" size={22} />
                  <h4 className="font-outfit font-semibold mb-1">Clean Architecture</h4>
                  <p className="text-text-tertiary text-xs">Scalable & maintainable code</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-text-secondary">Let&apos;s work together</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-10">
            <FadeIn className="space-y-6">
              <div>
                <h3 className="text-2xl font-outfit font-semibold mb-4">
                  Let&apos;s build something <span className="gradient-text">amazing</span>
                </h3>
                <p className="text-text-secondary">
                  I&apos;m open to discussing new projects and opportunities.
                </p>
              </div>

              <div className="space-y-3">
                <SocialLink
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  icon={Mail}
                  label="Email"
                  colorClass="bg-blue-500/20"
                  iconColor="text-blue-400"
                />
                <SocialLink
                  href={SOCIAL_LINKS.github}
                  icon={Github}
                  label="GitHub"
                  colorClass="bg-purple-500/20"
                  iconColor="text-purple-400"
                />
                <SocialLink
                  href={SOCIAL_LINKS.linkedin}
                  icon={Linkedin}
                  label="LinkedIn"
                  colorClass="bg-blue-600/20"
                  iconColor="text-blue-500"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
