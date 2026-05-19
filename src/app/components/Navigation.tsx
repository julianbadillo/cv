export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#32333c] h-[80px] md:h-[141px] flex items-center justify-center gap-2 sm:gap-4 md:gap-8 px-2 z-50">
      <button
        onClick={() => scrollToSection('home')}
        className="font-['Alexandria',sans-serif] font-bold text-[#2f9ddc] text-[14px] sm:text-[18px] md:text-[24px] tracking-[-0.48px] hover:text-[#29e7d1] transition-colors"
      >
        HOME
      </button>
      <button
        onClick={() => scrollToSection('skills')}
        className="font-['Alexandria',sans-serif] font-bold text-[#2f9ddc] text-[14px] sm:text-[18px] md:text-[24px] tracking-[-0.48px] hover:text-[#29e7d1] transition-colors"
      >
        SKILLS
      </button>
      <button
        onClick={() => scrollToSection('experience')}
        className="font-['Alexandria',sans-serif] font-bold text-[#2f9ddc] text-[14px] sm:text-[18px] md:text-[24px] tracking-[-0.48px] hover:text-[#29e7d1] transition-colors"
      >
        EXPERIENCE
      </button>
      <button
        onClick={() => scrollToSection('education')}
        className="font-['Alexandria',sans-serif] font-bold text-[#2f9ddc] text-[14px] sm:text-[18px] md:text-[24px] tracking-[-0.48px] hover:text-[#29e7d1] transition-colors"
      >
        EDUCATION
      </button>
      <button
        onClick={() => scrollToSection('awards')}
        className="font-['Alexandria',sans-serif] font-bold text-[#2f9ddc] text-[14px] sm:text-[18px] md:text-[24px] tracking-[-0.48px] hover:text-[#29e7d1] transition-colors"
      >
        AWARDS
      </button>
    </nav>
  );
}
