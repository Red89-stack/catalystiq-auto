import HeroSection from "@/components/ui/HeroSection";
import AboutSection from "@/components/ui/AboutSection";
import ServicesOverview from "@/components/ui/ServicesOverview";
import ProjectsPreview from "@/components/ui/ProjectsPreview";
import ContactSection from "@/components/ui/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <ServicesOverview />
      <ProjectsPreview />
      <ContactSection />
    </main>
  );
}
