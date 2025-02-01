import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string;
  tools: string;
  link?: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Lead Developer",
    company: "Freelance",
    period: "2020-2023",
    description: ["Created, developed, and launched a hybrid e-commerce mobile application (IVEZ)."],
    technologies: "Ionic-Angular, HTML, SCSS, TypeScript, JavaScript, Node.js",
    tools: "Figma (UI/UX Design), Agile (Trello for task management)"
  },
  {
    role: "Co-founder & Lead Developer",
    company: "TAXIBOKKO",
    period: "2019-2020",
    description: ["Developed a car-sharing application (Taxibokko)."],
    technologies: "Ionic-Angular, Node.js, Firebase",
    tools: "Figma (UI/UX Design), Google API Integration",
    link: "https://www.linkedin.com/company/taxibokko/"
  },
  {
    role: "Android Developer",
    company: "EDACY",
    period: "March-June 2019",
    description: ["Developed an Android application for Edacy's Work-Learning program."],
    technologies: "Java, Android Studio, MVVM Architecture, Firebase (Auth, Cloud Storage, Real-time DB)",
    tools: "Figma (UI/UX Design)"
  },
  {
    role: "Angular Developer",
    company: "RV-AND CI DËGG",
    period: "",
    description: ["Worked in a team to develop the front-end of a political party website."],
    technologies: "Angular",
    tools: "",
    link: "https://rv-acd.com/"
  },
  {
    role: "Full Stack Developer",
    company: "Microfinance Digitale",
    period: "",
    description: ["Developed a digital finance platform with AI integration."],
    technologies: "Angular, Tailwind, Sass, Angular Material (Front-end), Nest.js (Back-end)",
    tools: "Figma (Prototyping), CI/CD (GitHub Actions + Docker), Google Gemini AI Integration",
    link: "https://microfinance-digitale-codecrafter-oytr2c9lg.vercel.app/home"
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">WORK EXPERIENCE</h2>
          <div className="w-24 h-1 bg-[#1699E5] mx-auto"></div>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                  <p className="text-[#1699E5] font-semibold">{exp.company}</p>
                  {exp.period && <p className="text-gray-600 dark:text-gray-400">{exp.period}</p>}
                </div>
                {exp.link && (
                  <a 
                    href={exp.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#1699E5] hover:text-[#1487cc] flex items-center gap-1"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              
              {exp.description.map((desc, i) => (
                <p key={i} className="text-gray-700 dark:text-gray-300 mb-2">{desc}</p>
              ))}
              
              {exp.technologies && (
                <div className="mt-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Technologies Used:</span> {exp.technologies}
                  </p>
                </div>
              )}
              
              {exp.tools && (
                <div className="mt-2">
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Tools & Methods:</span> {exp.tools}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};