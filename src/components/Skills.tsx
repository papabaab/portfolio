import React from 'react';
import { Brain, Users, Languages, PersonStanding } from 'lucide-react';

const programmingSkills = [
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    proficiency: 90
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    proficiency: 85
  },
  {
    name: "React.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    proficiency: 90
  },
  {
    name: "Angular",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    proficiency: 85
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    proficiency: 85
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    proficiency: 80
  },
  {
    name: "Spring Boot",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    proficiency: 75
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    proficiency: 80
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    proficiency: 75
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    proficiency: 70
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    proficiency: 85
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    proficiency: 80
  }
];

const softSkills = [
  {
    icon: <Users className="w-8 h-8 text-[#1699E5]" />,
    name: "Team Collaboration",
    proficiency: 95
  },
  {
    icon: <Brain className="w-8 h-8 text-[#1699E5]" />,
    name: "Problem Solving",
    proficiency: 90
  },
  {
    icon: <PersonStanding className="w-8 h-8 text-[#1699E5]" />,
    name: "Leadership",
    proficiency: 85
  }
];

const languages = [
  {
    icon: <Languages className="w-8 h-8 text-[#1699E5]" />,
    name: "English",
    proficiency: 100
  },
  {
    icon: <Languages className="w-8 h-8 text-[#1699E5]" />,
    name: "French",
    proficiency: 100
  }
];

const SkillCard = ({ name, logo, proficiency, icon }: { name: string; logo?: string; proficiency: number; icon?: React.ReactNode }) => (
  <div className="bg-white dark:bg-gray-900 p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center">
    {logo ? (
      <img src={logo} alt={name} className="w-6 h-6 mb-2" />
    ) : (
      <div className="scale-50">{icon}</div>
    )}
    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1.5 text-center truncate w-full">{name}</h3>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-0.5">
      <div 
        className="bg-[#1699E5] h-1.5 rounded-full transition-all duration-500"
        style={{ width: `${proficiency}%` }}
      ></div>
    </div>
    <span className="text-xs text-gray-600 dark:text-gray-400">{proficiency}%</span>
  </div>
);

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-10 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-2 sm:px-40"> {/* Reduced padding on mobile */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">MY SKILLS</h2>
          <div className="w-12 h-0.5 bg-[#1699E5] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Technical Skills Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">Technical Skills</h3>
            <div className="grid grid-cols-3 gap-2 sm:gap-3"> {/* Changed to always show 3 columns */}
              {programmingSkills.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </div>

          {/* Soft Skills and Languages Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">Soft Skills</h3>
              <div className="grid grid-cols-3 gap-2 sm:gap-3"> {/* Changed to always show 3 columns */}
                {softSkills.map((skill, index) => (
                  <SkillCard key={index} {...skill} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">Languages</h3>
              <div className="grid grid-cols-3 gap-2 sm:gap-3"> {/* Changed to always show 3 columns */}
                {languages.map((skill, index) => (
                  <SkillCard key={index} {...skill} />
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">Personality Type</h3>
              <div className="text-center">
                <a href="https://www.16personalities.com/profiles/59ebfa46cebcf" target="_blank" className="text-base font-semibold text-[#1699E5] mb-1">INTJ-A ("Architect")</a>
                <p className="text-sm text-gray-600 dark:text-gray-300">Strategic, logical, and goal-oriented thinker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
