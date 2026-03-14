# Florent Sahiti - Portfolio Website Specification

## Project Overview
- **Project Name**: Florent Sahiti Portfolio
- **Type**: Personal Portfolio Website
- **Core Functionality**: Showcase skills, projects, and experience of a software developer with teaching background
- **Target Users**: Tech recruiters, potential clients, hiring managers

## Tech Stack
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (icons)

## UI/UX Specification

### Layout Structure
- **Header**: Fixed navigation with glassmorphism effect
- **Hero**: Full viewport height with animated introduction
- **Sections**: Full-width with max-width container (1280px)
- **Footer**: Minimal with social links

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Visual Design

#### Color Palette (Dark Mode - Primary)
- Background Primary: `#0a0a0f` (deep dark)
- Background Secondary: `#12121a` (card backgrounds)
- Background Tertiary: `#1a1a24` (elevated surfaces)
- Accent Primary: `#6366f1` (indigo)
- Accent Secondary: `#8b5cf6` (violet)
- Accent Gradient: `linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)`
- Text Primary: `#f8fafc` (white-ish)
- Text Secondary: `#94a3b8` (muted)
- Text Tertiary: `#64748b` (subtle)
- Border: `rgba(255, 255, 255, 0.08)`
- Glow: `rgba(99, 102, 241, 0.3)`

#### Typography
- **Font Family**: 
  - Headings: "Outfit" (Google Fonts) - geometric, modern
  - Body: "DM Sans" (Google Fonts) - clean, readable
- **Font Sizes**:
  - Hero Name: 72px (desktop), 48px (mobile)
  - Section Titles: 48px (desktop), 32px (mobile)
  - Body: 16px
  - Small: 14px

#### Spacing System
- Section padding: 120px vertical (desktop), 80px (mobile)
- Container padding: 24px (mobile), 48px (desktop)
- Card padding: 32px
- Gap between elements: 16px, 24px, 32px

#### Visual Effects
- Glassmorphism: `backdrop-blur-xl bg-white/5 border border-white/10`
- Card shadows: `0 25px 50px -12px rgba(0, 0, 0, 0.5)`
- Glow effects on hover
- Gradient text for headings
- Subtle grid pattern background

### Components

#### 1. Navigation
- Logo (FS monogram)
- Nav links: About, Skills, Projects, Experience, Contact
- Theme toggle (optional)
- Glassmorphism background on scroll
- Mobile: Hamburger menu with slide-in drawer

#### 2. Hero Section
- Animated gradient background with floating orbs
- Large name with gradient text effect
- Title: "Software Developer"
- Tagline: "Building scalable, modern web applications with clean code and thoughtful architecture"
- Two CTA buttons: "View Projects" (primary), "Contact Me" (outline)
- Scroll indicator at bottom
- Staggered fade-in animations

#### 3. About Section
- Two-column layout (image placeholder + text)
- Personal story emphasizing:
  - Programming teacher background
  - Passion for teaching and explaining complex concepts
  - Experience with international teams
  - Focus on scalable systems and automation
- Skills visualization icons

#### 4. Skills Section
- Categorized skill cards with icons
- Categories:
  - Frontend: Next.js, React, Tailwind CSS, JavaScript/TypeScript
  - Backend: Node.js, REST APIs
  - Database: SQL, Relational Databases
  - Tools: GitHub, n8n, DevTools
- Animated progress bars or skill tags
- Hover effects with glow

#### 5. Projects Section
- Grid layout (2 columns desktop, 1 mobile)
- Project cards with:
  - Gradient border on hover
  - Project screenshot placeholder (abstract gradient)
  - Project title
  - Description
  - Technologies used (pill tags)
  - "Visit Website" button
  - Subtle scale and glow animation on hover

**Projects:**
1. **PRONEX KS** - Business website - Next.js, React, TypeScript
2. **Danuts** - E-commerce/platform - Next.js, Node.js, SQL
3. **Gazi RKS** - Business website - Next.js, React
4. **AFZ ICT** - Technology services - Next.js, TypeScript

#### 6. Experience Section
- Timeline or card-based layout
- Highlight:
  - Programming Teacher (teaching experience)
  - Software Developer
  - International team collaboration

#### 7. Contact Section
- Two columns: Form + Contact info
- Contact form (Name, Email, Message)
- Social links: GitHub, LinkedIn, Email
- Gradient accent elements

#### 8. Footer
- Copyright
- Social links
- "Built with Next.js" badge

### Animations (Framer Motion)

#### Page Load
- Staggered reveal of sections
- Hero text slides up with fade
- Navigation slides down

#### Scroll Animations
- Sections fade in and slide up on scroll
- Skill cards stagger in
- Project cards scale up on scroll

#### Interactions
- Button hover: scale(1.02) + glow
- Card hover: translateY(-4px) + shadow increase
- Link hover: color transition + underline slide

## Functionality Specification

### Core Features
1. Smooth scroll navigation
2. Responsive design (mobile-first)
3. SEO optimization (metadata, Open Graph)
4. Form validation on contact form
5. External links open in new tab
6. Accessible (keyboard navigation, ARIA labels)

### User Interactions
- Click nav link → smooth scroll to section
- Click CTA → scroll to projects/contact
- Hover cards → visual feedback
- Submit form → console log (no backend)

### Edge Cases
- Long project descriptions truncate
- Empty states handled
- Fallback fonts if Google Fonts fail

## Acceptance Criteria
1. ✅ Page loads without errors
2. ✅ All sections render correctly
3. ✅ Navigation works (smooth scroll)
4. ✅ Responsive on mobile, tablet, desktop
5. ✅ Animations are smooth (60fps)
6. ✅ Dark mode is default and looks premium
7. ✅ All 4 projects are displayed with correct info
8. ✅ Contact form is functional (client-side)
9. ✅ No console errors
10. ✅ SEO metadata is present
