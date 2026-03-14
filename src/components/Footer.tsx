"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/florent-sahiti-25a0a7230/",
  github: "https://github.com/florentsahiti",
  email: "florentsahiti06@gmail.com",
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-6 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a 
              href={SOCIAL_LINKS.github} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-text-tertiary hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
            <a 
              href={SOCIAL_LINKS.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-text-tertiary hover:text-blue-400 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href={`mailto:${SOCIAL_LINKS.email}`}
              aria-label="Email"
              className="text-text-tertiary hover:text-red-400 transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
          <p className="text-text-tertiary text-xs">
            © {year} Florent Sahiti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
