import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import TeamSection from "@/components/team-section";
import Footer from "@/components/footer";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="bg-background">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <Footer />
    </main>
  );
}
