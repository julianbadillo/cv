import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import AwardsSection from './components/AwardsSection';
import EducationSection from './components/EducationSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="size-full overflow-y-auto">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <AwardsSection />
      <Footer />
    </div>
  );
}