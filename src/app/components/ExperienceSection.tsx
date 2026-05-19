import { useState } from 'react';

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Numat, Inc.",
      period: "March 2022 - Now",
      tasks: [
        "Maintain software for chemical research and processing",
        "REST API integration of R&D solutions"
      ],
      accomplishments: [
        "Data migration from on-prem apps to cloud-hosted.",
        "Set up data engineering infrastructure in Snowflake.",
        "Automation of chemical inventory cleanup",
        "Implementation of internal company Launchpad.",
        "Refactoring and testing of legacy code in Django / Python."
      ],
      reference: "Paul Boone paul.boone@numat.com"
    },
    {
      title: "Applications Developer & Systems Analyst",
      company: "Fermilab",
      period: "Jan 2021 - Feb 2022",
      tasks: [
        "Do use case analysis for accelerator controls modernization.",
        "Develop software for accelerator controls."
      ],
      accomplishments: [
        "Use cases and functional requirements for new control system.",
        "Refurbish of physical key inventory tracking tool."
      ],
      reference: "Erik Gottschalk egottschalk@fnal.gov"
    },
    {
      title: "Applications Developer",
      company: "Fermilab",
      period: "Jan 2016 - Dec 2020",
      tasks: [
        "Design and build full-stack web tools for the projects office.",
        "Support and maintain existing software tools."
      ],
      accomplishments: [
        "Refactoring and design from scratch of three web tools: fBCR, CAMeToolbox, RAPTR, that automated and improved intensive manual tasks of project controls.",
        "Exceptional Performance Recognition Award (2018)"
      ],
      reference: "Richard Marcum rmarcum@fnal.gov"
    },
    {
      title: "Workflow Team Leader",
      company: "CERN",
      period: "Sept 2013 - Dec 2015",
      tasks: [
        "DevOps of Monte Carlo simulation workflows on the CMS Grid.",
        "Debugging / troubleshooting on Linux/Python grid platform."
      ],
      accomplishments: [
        "Performance optimization on several operational tools.",
        "Automation of manual tasks that were laborious for operators and error-prone.",
        "Tide-up, maintenance and documentation of legacy operations code."
      ],
      reference: "Oliver Gustche gutsche@fnal.gov, gutsche@cern.ch | Maria Girone maria.girone@cern.ch"
    },
    {
      title: "Teacher",
      company: "Politecnico Grancolombiano",
      period: "Jan 2011 - Jul 2013",
      tasks: [
        "Algorithm analysis and correction.",
        "Logics and Maths for Computing Science",
        "Programming in Java",
        "Distributed systems",
        "Cryptography"
      ],
      accomplishments: [
        "Systems Engineering's best teacher award, rated by students.",
        "Design of graduate degree in information security."
      ],
      reference: "Rafael García, rgarcia@poli.edu.co"
    },
    {
      title: "Software Development Leader",
      company: "cyte",
      period: "Sept 2007 - Dec 2010",
      tasks: [
        "Design, develop and support software applications intended to secure our client's information.",
        "Provide expertise in consulting projects about information security, awareness, information classifying, business continuity planning and information technology risk analysis."
      ],
      accomplishments: [
        "Refactoring and improvement of the company's cryptographic products",
        "Design of new products based on client's needs.",
        "Leading security-related consulting."
      ],
      reference: "Milton Quiroga, mquiroga@cyte.co"
    }
  ];

  const [selectedExperience, setSelectedExperience] = useState(0);

  return (
    <section id="experience" className="bg-white min-h-screen flex items-center justify-center py-12 md:py-20">
      <div className="max-w-7xl w-full px-4 md:px-8">
        <h2 className="font-['Alexandria',sans-serif] font-bold text-[#2f9ddc] text-[32px] md:text-[56px] tracking-[-0.64px] md:tracking-[-1.12px] mb-8 md:mb-16 text-center">
          EXPERIENCE
        </h2>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Sidebar */}
          <div className="w-full md:w-72 md:flex-shrink-0">
            <div className="bg-[#2f9ddc] rounded-xl p-4 md:p-6 space-y-2 md:space-y-3">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedExperience(index)}
                  className={`w-full text-left px-4 md:px-6 py-3 md:py-4 rounded-lg font-['Alexandria',sans-serif] font-bold tracking-[-0.36px] transition-all duration-200 ${
                    selectedExperience === index
                      ? 'bg-[#29e7d1] text-[#32333c] shadow-lg'
                      : 'text-white hover:bg-white hover:bg-opacity-20 hover:text-[#2f9ddc]'
                  }`}
                >
                  <div className="text-[15px] md:text-[16px] mb-1">{exp.company}</div>
                  <div className="text-[12px] opacity-80">{exp.period}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            <div className="bg-[#f1fdff] p-5 md:p-10 rounded-xl border-l-4 border-[#29e7d1] min-h-[300px] md:min-h-[500px]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-5 md:mb-6">
                <div>
                  <h3 className="font-['Alexandria',sans-serif] font-bold text-[#32333c] text-[22px] md:text-[32px] tracking-[-0.44px] md:tracking-[-0.64px]">
                    {experiences[selectedExperience].title}
                  </h3>
                  <p className="font-['Alexandria',sans-serif] text-[#2f9ddc] text-[18px] md:text-[24px] tracking-[-0.36px] md:tracking-[-0.48px]">
                    {experiences[selectedExperience].company}
                  </p>
                </div>
                <span className="font-['Alexandria',sans-serif] text-[#2f9ddc] text-[16px] md:text-[20px] tracking-[-0.4px]">
                  {experiences[selectedExperience].period}
                </span>
              </div>

              <div className="mb-5 md:mb-6">
                <h4 className="font-['Alexandria',sans-serif] font-bold text-[#32333c] text-[18px] md:text-[22px] tracking-[-0.36px] md:tracking-[-0.44px] mb-3 pb-2 border-b-2 border-[#29e7d1]">
                  Tasks:
                </h4>
                <ul className="space-y-2">
                  {experiences[selectedExperience].tasks.map((item, i) => (
                    <li
                      key={i}
                      className="font-['Alexandria',sans-serif] text-[#32333c] text-[16px] md:text-[18px] tracking-[-0.32px] md:tracking-[-0.36px] flex items-start"
                    >
                      <span className="text-[#29e7d1] mr-3 text-[18px] md:text-[20px]">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-5 md:mb-6">
                <h4 className="font-['Alexandria',sans-serif] font-bold text-[#32333c] text-[18px] md:text-[22px] tracking-[-0.36px] md:tracking-[-0.44px] mb-3 pb-2 border-b-2 border-[#29e7d1]">
                  Key Accomplishments:
                </h4>
                <ul className="space-y-2">
                  {experiences[selectedExperience].accomplishments.map((item, i) => (
                    <li
                      key={i}
                      className="font-['Alexandria',sans-serif] text-[#32333c] text-[16px] md:text-[18px] tracking-[-0.32px] md:tracking-[-0.36px] flex items-start"
                    >
                      <span className="text-[#29e7d1] mr-3 text-[18px] md:text-[20px]">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t-2 border-[#29e7d1]">
                <span className="font-['Alexandria',sans-serif] font-bold text-[#2f9ddc] text-[16px] md:text-[18px] tracking-[-0.32px] md:tracking-[-0.36px]">
                  References:{' '}
                </span>
                <span className="font-['Alexandria',sans-serif] text-[#32333c] text-[16px] md:text-[18px] tracking-[-0.32px] md:tracking-[-0.36px] break-words">
                  {experiences[selectedExperience].reference}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
