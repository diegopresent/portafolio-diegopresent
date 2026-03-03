"use client";

import AnnounceBar from "@/components/AnnounceBar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import TechStack from "@/components/TechStack";
import Profile from "@/components/Profile";
import Experience from "@/components/Experience";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-blue-500/30 font-sans">
      <AnnounceBar />
      <Hero />
      <ProjectsSection />
      <TechStack />
      <Profile />
      <Experience />
      <ContactSection />
      <Footer />
    </main>
  );
}
