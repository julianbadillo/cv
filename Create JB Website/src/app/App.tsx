import { useState } from 'react';
import { Code, Award, Briefcase, GraduationCap, Mail, Linkedin, Github } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#2f9ddc]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#32333c] h-[141px] flex items-center justify-center gap-8 z-50">
        {['HOME', 'SKILLS', 'EXPERIENCE', 'AWARDS', 'EDUCATION'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="font-['Alexandria',sans-serif] font-bold text-[24px] tracking-[-0.48px] text-[#2f9ddc] hover:text-[#29e7d1] transition-colors"
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-[141px] px-8">
        <h1 className="font-['Sansita_One',sans-serif] text-[96px] text-[#f1fdff] tracking-[-3.84px] leading-normal mb-4">
          Julian Badillo
        </h1>
        <h2 className="font-['Alexandria',sans-serif] font-bold text-[32px] text-[#29e7d1] tracking-[1.28px]">
          SOFTWARE ENGINEER
        </h2>
        <div className="flex gap-6 mt-12">
          <a href="mailto:julian@example.com" className="p-4 bg-[#29e7d1] rounded-full hover:bg-[#f1fdff] transition-colors">
            <Mail className="w-6 h-6 text-[#32333c]" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-[#29e7d1] rounded-full hover:bg-[#f1fdff] transition-colors">
            <Linkedin className="w-6 h-6 text-[#32333c]" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-[#29e7d1] rounded-full hover:bg-[#f1fdff] transition-colors">
            <Github className="w-6 h-6 text-[#32333c]" />
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex flex-col items-center justify-center px-8 py-24">
        <h2 className="font-['Alexandria',sans-serif] font-bold text-[48px] text-[#f1fdff] mb-16">
          SKILLS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {[
            {
              category: 'Programming Languages',
              skills: ['Python', 'JavaScript', 'HTML', 'CSS', 'C#', 'Java', 'SQL', 'Kotlin', 'C/C++', 'TypeScript', 'Go', 'Ruby', 'Matlab']
            },
            {
              category: 'Databases',
              skills: ['PostgreSQL', 'SQL Server', 'Oracle DB', 'MySQL', 'MariaDB', 'MongoDB', 'LiteDB', 'React', 'Django', 'ASP MVC']
            },
            {
              category: 'Web Frameworks',
              skills: ['React', 'Django', 'ASP MVC', 'Node.js', 'Express', 'JEE', 'Ruby on Rails', 'Mentoring Requirements']
            },
            {
              category: 'Other Skills',
              skills: ['Mentoring Requirements', 'Specs', 'Full Stack', 'Dev Ops', 'HCI', 'UI / UX', 'Data Architecture', 'Prompt Engineering']
            },
            {
              category: 'Miscellaneous',
              skills: ['CSS', 'jQuery', 'Docker', 'Swarm', 'Git', 'Unix', 'Linux', 'Bash', 'PowerShell']
            }
          ].map((skillGroup) => (
            <div key={skillGroup.category} className="bg-[#32333c] rounded-lg p-6 hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-[#29e7d1]" />
                <h3 className="font-['Alexandria',sans-serif] font-bold text-[24px] text-[#29e7d1]">
                  {skillGroup.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {skillGroup.skills.map((skill) => (
                  <li key={skill} className="font-['Alexandria',sans-serif] text-[16px] text-[#f1fdff]">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex flex-col items-center justify-center px-8 py-24">
        <h2 className="font-['Alexandria',sans-serif] font-bold text-[48px] text-[#f1fdff] mb-16">
          EXPERIENCE
        </h2>
        <div className="max-w-4xl space-y-8">
          {[
            {
              title: 'Senior Software Engineer',
              company: 'Tech Innovations Inc.',
              period: '2022 - Present',
              description: 'Led development of scalable microservices architecture, mentored junior developers, and implemented CI/CD pipelines that reduced deployment time by 60%.'
            },
            {
              title: 'Full Stack Developer',
              company: 'Digital Solutions Co.',
              period: '2020 - 2022',
              description: 'Developed and maintained web applications using React and Node.js, collaborated with design team to create responsive user interfaces, and optimized database queries improving performance by 40%.'
            },
            {
              title: 'Frontend Developer',
              company: 'StartUp Ventures',
              period: '2018 - 2020',
              description: 'Built modern web applications with React and TypeScript, implemented reusable component libraries, and worked closely with UX designers to deliver pixel-perfect implementations.'
            }
          ].map((job, index) => (
            <div key={index} className="bg-[#32333c] rounded-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-4">
                <Briefcase className="w-8 h-8 text-[#29e7d1] mt-1" />
                <div>
                  <h3 className="font-['Alexandria',sans-serif] font-bold text-[28px] text-[#29e7d1] mb-2">
                    {job.title}
                  </h3>
                  <p className="font-['Alexandria',sans-serif] font-bold text-[20px] text-[#f1fdff] mb-2">
                    {job.company}
                  </p>
                  <p className="font-['Alexandria',sans-serif] text-[16px] text-[#29e7d1] mb-4">
                    {job.period}
                  </p>
                  <p className="font-['Alexandria',sans-serif] text-[16px] text-[#f1fdff] leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="min-h-screen flex flex-col items-center justify-center px-8 py-24">
        <h2 className="font-['Alexandria',sans-serif] font-bold text-[48px] text-[#f1fdff] mb-16">
          AWARDS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {[
            {
              title: 'Employee of the Year',
              organization: 'Tech Innovations Inc.',
              year: '2024',
              description: 'Recognized for outstanding contributions to product development and team leadership'
            },
            {
              title: 'Best Hackathon Project',
              organization: 'Global Dev Summit',
              year: '2023',
              description: 'Won first place for developing an AI-powered code review assistant'
            },
            {
              title: 'Innovation Award',
              organization: 'Digital Solutions Co.',
              year: '2021',
              description: 'Awarded for creating a novel approach to frontend state management'
            },
            {
              title: 'Rising Star Developer',
              organization: 'Tech Community Awards',
              year: '2020',
              description: 'Recognized as an emerging talent in the software development community'
            }
          ].map((award, index) => (
            <div key={index} className="bg-[#32333c] rounded-lg p-8 hover:scale-105 transition-transform">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-[#29e7d1] mt-1" />
                <div>
                  <h3 className="font-['Alexandria',sans-serif] font-bold text-[24px] text-[#29e7d1] mb-2">
                    {award.title}
                  </h3>
                  <p className="font-['Alexandria',sans-serif] font-bold text-[18px] text-[#f1fdff] mb-1">
                    {award.organization}
                  </p>
                  <p className="font-['Alexandria',sans-serif] text-[16px] text-[#29e7d1] mb-3">
                    {award.year}
                  </p>
                  <p className="font-['Alexandria',sans-serif] text-[14px] text-[#f1fdff]">
                    {award.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen flex flex-col items-center justify-center px-8 py-24">
        <h2 className="font-['Alexandria',sans-serif] font-bold text-[48px] text-[#f1fdff] mb-16">
          EDUCATION
        </h2>
        <div className="max-w-4xl space-y-8">
          {[
            {
              degree: 'Master of Science in Computer Science',
              school: 'Stanford University',
              period: '2016 - 2018',
              details: 'Focus on Artificial Intelligence and Machine Learning. Thesis on Neural Network Optimization.'
            },
            {
              degree: 'Bachelor of Science in Software Engineering',
              school: 'Massachusetts Institute of Technology',
              period: '2012 - 2016',
              details: 'Graduated with Honors. Focus on Web Technologies and Distributed Systems.'
            }
          ].map((edu, index) => (
            <div key={index} className="bg-[#32333c] rounded-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-8 h-8 text-[#29e7d1] mt-1" />
                <div>
                  <h3 className="font-['Alexandria',sans-serif] font-bold text-[28px] text-[#29e7d1] mb-2">
                    {edu.degree}
                  </h3>
                  <p className="font-['Alexandria',sans-serif] font-bold text-[20px] text-[#f1fdff] mb-2">
                    {edu.school}
                  </p>
                  <p className="font-['Alexandria',sans-serif] text-[16px] text-[#29e7d1] mb-4">
                    {edu.period}
                  </p>
                  <p className="font-['Alexandria',sans-serif] text-[16px] text-[#f1fdff]">
                    {edu.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#32333c] py-12 text-center">
        <p className="font-['Alexandria',sans-serif] text-[16px] text-[#f1fdff]">
          © 2026 Julian Badillo. All rights reserved.
        </p>
      </footer>
    </div>
  );
}