import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://florentsahiti.com'),
  title: "Florent Sahiti | Software Developer",
  description: "Software Developer specializing in building scalable, modern web applications. Experience with Next.js, Node.js, TypeScript, and automation tools.",
  keywords: ["Software Developer", "Next.js", "React", "TypeScript", "Node.js", "Portfolio"],
  authors: [{ name: "Florent Sahiti" }],
  openGraph: {
    title: "Florent Sahiti | Software Developer",
    description: "Building scalable, modern web applications with clean code and thoughtful architecture.",
    type: "website",
    url: "https://florentsahiti.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-dm antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
