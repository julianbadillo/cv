export default function EducationSection() {
  const education = [
    {
      degree: "MSc Systems and Computing Engineer (Honors)",
      school: "Universidad de los Andes",
      period: "2007-2010"
    },
    {
      degree: "BSc Systems and Computing Engineer (Honors)",
      school: "Universidad de los Andes",
      period: "2003-2007"
    }
  ];

  return (
    <section id="education" className="bg-[#32333c] min-h-screen flex items-center justify-center py-12 md:py-20">
      <div className="max-w-6xl w-full px-4 md:px-8">
        <h2 className="font-['Alexandria',sans-serif] font-bold text-[#29e7d1] text-[32px] md:text-[48px] tracking-[-0.64px] md:tracking-[-0.96px] mb-8 md:mb-12 text-center">
          EDUCATION
        </h2>

        <div className="space-y-4 md:space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-5 md:p-8 rounded-lg border-l-4 border-[#29e7d1]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="font-['Alexandria',sans-serif] font-bold text-[#32333c] text-[20px] md:text-[28px] tracking-[-0.4px] md:tracking-[-0.56px]">
                    {edu.degree}
                  </h3>
                  <p className="font-['Alexandria',sans-serif] text-[#2f9ddc] text-[16px] md:text-[20px] tracking-[-0.32px] md:tracking-[-0.4px]">
                    {edu.school}
                  </p>
                </div>
                <span className="font-['Alexandria',sans-serif] text-[#2f9ddc] text-[16px] md:text-[18px] tracking-[-0.32px] md:tracking-[-0.36px]">
                  {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
