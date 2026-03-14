import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://florentsahiti.com'),
  title: {
    default: "Florent Sahiti | Software Developer",
    template: "%s | Florent Sahiti",
  },
  description: "Software Developer specializing in building scalable, modern web applications. Experience with Next.js, Node.js, TypeScript, and automation tools.",
  keywords: ["Software Developer", "Next.js", "React", "TypeScript", "Node.js", "Portfolio", "Web Developer", "Kosovo", "Freelancer"],
  authors: [{ name: "Florent Sahiti" }],
  creator: "Florent Sahiti",
  publisher: "Florent Sahiti",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Florent Sahiti | Software Developer",
    description: "Building scalable, modern web applications with clean code and thoughtful architecture.",
    type: "website",
    url: "https://florentsahiti.com",
    siteName: "Florent Sahiti Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Florent Sahiti | Software Developer",
    description: "Building scalable, modern web applications with clean code and thoughtful architecture.",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Outfit:wght@400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-dm antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
