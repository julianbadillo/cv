export default function AwardsSection() {
  const awards = [
    {
      year: "2024",
      description: "Numat - CEO Excellence Award"
    },
    {
      year: "2018",
      description: "Fermilab - Exceptional Performance Recognition Award"
    },
    {
      year: "2009",
      description: "Honors Degree \"Cum Laude\" on Master studies. GPA 4.9/5.0"
    },
    {
      year: "2007",
      description: "Honors Degree \"Magna Cum Laude\" on Bachelor studies. GPA 4.6/5.0"
    },
    {
      year: "2006",
      description: "Top-five score on National Exam (ECAES) for Systems Engineering"
    },
    {
      year: "2006",
      description: "2nd place on ACM International Collegiate Programming Contest - South America"
    },
    {
      year: "2002",
      description: "Honors Degree \"Best year student\" and \"Highest ICFES score\" on Highschool"
    },
    {
      year: "2002",
      description: "\"Andres Bello\" award to top-100 National Highschool Exam (ICFES)"
    }
  ];

  return (
    <section id="awards" className="bg-[#2f9ddc] min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl w-full px-8">
        <h2 className="font-['Alexandria',sans-serif] font-bold text-white text-[48px] tracking-[-0.96px] mb-12 text-center">
          AWARDS
        </h2>
        <div className="space-y-4">
          {awards.map((award, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border-l-4 border-[#29e7d1] flex gap-4">
              <span className="font-['Alexandria',sans-serif] font-bold text-[#2f9ddc] text-[20px] tracking-[-0.4px] min-w-[60px]">
                {award.year}:
              </span>
              <p className="font-['Alexandria',sans-serif] text-[#32333c] text-[18px] tracking-[-0.36px]">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
