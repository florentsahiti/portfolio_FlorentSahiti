"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-6 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-blue-400 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:florent.sahiti@email.com" className="text-text-tertiary hover:text-red-400 transition-colors">
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
