import { useState } from 'react';

export default function SkillsSection() {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "TypeScript", "SQL", "HTML", "CSS", "C#", "Java", "Kotlin", "C/C++", "Matlab"]
    },
    {
      category: "Databases",
      items: ["Snowflake", "PostgreSQL", "SQL Server", "Oracle DB", "MySql", "MariaDB", "MongoDB", "LiteDB"]
    },
    {
      category: "Web Frameworks",
      items: ["React", "Django", "ASP MVC", "Node.js", "Express", "JEE", "Ruby on Rails"]
    },
    {
      category: "Developer",
      items: ["Mentoring", "Requirements / Specs", "Full Stack", "DevOps", "HCI", "UI / UX", "Data Architecture", "Prompt Engineering"]
    },
    {
      category: "Miscellaneous",
      items: ["AI/LLM Integration", "Data Engineering", "dbt", "JQuery", "Docker", "Swarm", "Git", "Linux", "Bash", "PowerShell"]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section id="skills" className="bg-[#32333c] min-h-screen flex items-center justify-center py-12 md:py-20">
      <div className="max-w-7xl w-full px-4 md:px-8">
        <h2 className="font-['Alexandria',sans-serif] font-bold text-[#29e7d1] text-[32px] md:text-[56px] tracking-[-0.64px] md:tracking-[-1.12px] mb-8 md:mb-16 text-center">
          SKILLS
        </h2>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Sidebar */}
          <div className="w-full md:w-72 md:flex-shrink-0">
            <div className="bg-[#2f9ddc] rounded-xl p-4 md:p-6 space-y-2 md:space-y-3">
              {skills.map((skillGroup, index) => (
                <button
                  key={skillGroup.category}
                  onClick={() => setSelectedCategory(index)}
                  className={`w-full text-left px-4 md:px-6 py-3 md:py-4 rounded-lg font-['Alexandria',sans-serif] font-bold text-[16px] md:text-[20px] tracking-[-0.4px] transition-all duration-200 ${selectedCategory === index
                      ? 'bg-[#29e7d1] text-[#32333c] shadow-lg'
                      : 'text-white hover:bg-white hover:bg-opacity-20 hover:text-[#2f9ddc]'
                    }`}
                >
                  {skillGroup.category}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            <div className="bg-white p-5 md:p-10 rounded-xl shadow-2xl min-h-[300px] md:min-h-[500px]">
              <h3 className="font-['Alexandria',sans-serif] font-bold text-[#32333c] text-[24px] md:text-[36px] tracking-[-0.48px] md:tracking-[-0.72px] mb-5 md:mb-8 pb-3 md:pb-4 border-b-4 border-[#29e7d1]">
                {skills[selectedCategory].category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5">
                {skills[selectedCategory].items.map((skill) => (
                  <div
                    key={skill}
                    className="font-['Alexandria',sans-serif] text-[#32333c] text-[18px] md:text-[20px] tracking-[-0.4px] flex items-center bg-[#f1fdff] px-4 md:px-5 py-2.5 md:py-3 rounded-lg border-l-4 border-[#29e7d1] hover:shadow-md transition-shadow"
                  >
                    <span className="text-[#29e7d1] mr-3 md:mr-4 text-[18px] md:text-[20px] font-bold">●</span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
