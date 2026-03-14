"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:florent.sahiti@email.com"
              className="text-text-tertiary hover:text-text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="text-text-tertiary text-sm">
            &copy; {currentYear} Florent Sahiti. All rights reserved.
          </p>

          <p className="text-text-tertiary text-sm">
            Built with <span className="text-accent-primary">Next.js</span> &{" "}
            <span className="text-accent-secondary">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
