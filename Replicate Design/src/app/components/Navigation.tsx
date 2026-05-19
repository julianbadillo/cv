export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#32333c] h-[141px] flex items-center justify-center gap-8 z-50">
      <button
        onClick={() => scrollToSection('home')}
        className="font-['Alexandria:Bold',sans-serif] font-bold text-[#2f9ddc] text-[24px] tracking-[-0.48px] hover:text-[#29e7d1] transition-colors"
      >
        HOME
      </button>
      <button
        onClick={() => scrollToSection('skills')}
        className="font-['Alexandria:Bold',sans-serif] font-bold text-[#2f9ddc] text-[24px] tracking-[-0.48px] hover:text-[#29e7d1] transition-colors"
      >
        SKILLS
      </button>
      <button
        onClick={() => scrollToSection('experience')}
        className="font-['Alexandria:Bold',sans-serif] font-bold text-[#2f9ddc] text-[24px] tracking-[-0.48px] hover:text-[#29e7d1] transition-colors"
      >
        EXPERIENCE
      </button>
      <button
        onClick={() => scrollToSection('education')}
        className="font-['Alexandria:Bold',sans-serif] font-bold text-[#2f9ddc] text-[24px] tracking-[-0.48px] hover:text-[#29e7d1] transition-colors"
      >
        EDUCATION
      </button>
      <button
        onClick={() => scrollToSection('awards')}
        className="font-['Alexandria:Bold',sans-serif] font-bold text-[#2f9ddc] text-[24px] tracking-[-0.48px] hover:text-[#29e7d1] transition-colors"
      >
        AWARDS
      </button>
    </nav>
  );
}
