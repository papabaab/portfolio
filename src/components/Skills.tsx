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
  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center">
    {logo ? (
      <img src={logo} alt={name} className="w-12 h-12 mb-4" /> // Reduced from w-16 h-16 to w-12 h-12
    ) : icon}
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{name}</h3>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
      <div 
        className="bg-[#1699E5] h-2.5 rounded-full transition-all duration-500"
        style={{ width: `${proficiency}%` }}
      ></div>
    </div>
    <span className="text-sm text-gray-600 dark:text-gray-400">{proficiency}%</span>
  </div>
);

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">MY SKILLS</h2>
          <div className="w-24 h-1 bg-[#1699E5] mx-auto"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6"> {/* Changed from md:grid-cols-3 lg:grid-cols-4 to md:grid-cols-4 */}
            {programmingSkills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {languages.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">Personality Type</h3>
          <div className="text-center">
            <a href="https://www.16personalities.com/profiles/59ebfa46cebcf" target="_blank" className="text-xl font-semibold text-[#1699E5] mb-2">INTJ-A ("Architect")</a>
            <p className="text-gray-600 dark:text-gray-300">Strategic, logical, and goal-oriented thinker</p>
          </div>
        </div>
      </div>
    </section>
  );
};