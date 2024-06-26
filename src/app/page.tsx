import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import AchievementsSection from "./components/AchievementsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <NavBar/>
      <div className="container mx-auto py-4 px-12 mt-6">
     <HeroSection/>
     <AchievementsSection />
     <AboutSection />
     <ProjectSection />
     <EmailSection />
     </div>
     <Footer />
    </main>
  );
}
