import React from 'react';
import { Brain, Users, Languages, PersonStanding, Scale, Ear, LineChart, Binary } from 'lucide-react';
import { motion } from 'framer-motion';

const programmingSkills = [
  {
    name: "JavaScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    proficiency: 95
  },
  {
    name: "TypeScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    proficiency: 90
  },
  {
    name: "HTML5",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    proficiency: 95
  },
  {
    name: "CSS3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    proficiency: 90
  },
  {
    name: "Java",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    proficiency: 85
  },
  {
    name: "Node.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    proficiency: 90
  }
];

const frameworksSkills = [
  {
    name: "Angular",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
    proficiency: 95
  },
  {
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    proficiency: 90
  },
  {
    name: "Ionic",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg",
    proficiency: 90
  },
  {
    name: "Nest.js",
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic-00.iconduck.com%2Fassets.00%2Fnestjs-icon-2048x2040-3rrvcej8.png&f=1&nofb=1&ipt=61dd0e48c653ddf3a429755d9ee032d62cea51821633f5c487116b6d69ba88aa&ipo=images",
    proficiency: 85
  },
  {
    name: "Express.js",
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhackersandslackers-cdn.storage.googleapis.com%2F2020%2F05%2Fexpress.png&f=1&nofb=1&ipt=d8a661f9bd921abc445d833e221fe7ba0f369dbf42c5e0acd81941a3d576b47a&ipo=images",
    proficiency: 90
  }
];

const toolsSkills = [
  {
    name: "Docker",
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A616%2F1*1sVrbiOmejvXVikqenKgFw.png&f=1&nofb=1&ipt=f551d021cf7ff59329b379eff4d64d8c3f9d58af6f6a7af95fc87d537513b1e3&ipo=images",
    proficiency: 80
  },
  {
    name: "Git",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
    proficiency: 90
  },
  {
    name: "VS Code",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
    proficiency: 95
  },
  {
    name: "Postman",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png",
    proficiency: 90
  },
  {
    name: "Android Studio",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2019.png",
    proficiency: 85
  },
  {
    name: "Xcode",
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.jim-nielsen.com%2Fmacos%2F1024%2Fxcode-2020-11-11.png&f=1&nofb=1&ipt=a2f8784e39958615fe09c107f87eae83ca770a9f2004333f0781b0b1af4d813c&ipo=images",
    proficiency: 80
  }
];

const databasesSkills = [
  {
    name: "MongoDB",
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*DiNIG4Bfpm65_wwXf_JwMA.png&f=1&nofb=1&ipt=ffd6bf1a6422be22c40e379904c3bc27a9aeecd248ccd64b88cd73d0379c73d3&ipo=images",
    proficiency: 85
  },
  {
    name: "MySQL",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
    proficiency: 85
  },
  {
    name: "Firebase",
    logo: "https://www.shareicon.net/data/2016/07/08/117547_developer_512x512.png",
    proficiency: 90
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
    proficiency: 95
  },
  {
    icon: <PersonStanding className="w-8 h-8 text-[#1699E5]" />,
    name: "Leadership",
    proficiency: 90
  },
  {
    icon: <Scale className="w-8 h-8 text-[#1699E5]" />,
    name: "Pragmatism",
    proficiency: 90
  },
  {
    icon: <Ear className="w-8 h-8 text-[#1699E5]" />,
    name: "Empathic Listener",
    proficiency: 85
  },
  {
    icon: <LineChart className="w-8 h-8 text-[#1699E5]" />,
    name: "Analytical",
    proficiency: 90
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

const myersBriggsSkills = [
  {
    icon: <Binary className="w-8 h-8 text-[#1699E5]" />,
    name: "Architect (INTJ-A)",
    proficiency: 100,
    link: "https://www.16personalities.com/profiles/59ebfa46cebcf"
  }
];

const SkillCard = ({ 
  name, 
  logo, 
  proficiency, 
  icon, 
  index, 
  parentIndex,
  link 
}: { 
  name: string; 
  logo?: string; 
  proficiency: number; 
  icon?: React.ReactNode;
  index: number;
  parentIndex: number;
  link?: string;
}) => {
  const content = (
    <>
      <div className="flex-1 flex items-center justify-center">
        {logo ? (
          <img src={logo} alt={name} className="w-6 h-6 object-contain" />
        ) : (
          <div className="scale-50">{icon}</div>
        )}
      </div>
      <div className="w-full">
        <h3 className="text-[10px] font-medium text-gray-900 dark:text-white mb-0.5 text-center truncate">{name}</h3>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-0.5 mb-0.5">
          <div 
            className="bg-[#1699E5] h-0.5 rounded-full transition-all duration-500"
            style={{ width: `${proficiency}%` }}
          ></div>
        </div>
        <span className="text-[8px] text-gray-600 dark:text-gray-400">{proficiency}%</span>
      </div>
    </>
  );

  const cardClasses = "bg-white dark:bg-gray-900 p-1.5 rounded-md shadow hover:shadow-md transition-all duration-300 flex flex-col items-center aspect-square" + 
    (link ? " cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800" : "");

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.3,
          delay: (index * 0.1) + (parentIndex * 0.1)
        }
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={cardClasses}
      onClick={link ? () => window.open(link, '_blank') : undefined}
    >
      {content}
    </motion.div>
  );
};

const SkillSection = ({ title, skills, parentIndex }: { 
  title: string; 
  skills: { name: string; logo?: string; proficiency: number; icon?: React.ReactNode }[]; 
  parentIndex: number;
}) => (
  <div>
    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5 text-center">{title}</h3>
    <div className="grid grid-cols-6 gap-1.5">
      {skills.map((skill, index) => (
        <SkillCard 
          key={index} 
          {...skill} 
          index={index}
          parentIndex={parentIndex}
        />
      ))}
    </div>
  </div>
);

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-4 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-3">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-1">MY SKILLS</h2>
          <div className="w-8 h-0.5 bg-[#1699E5] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Technical Skills Section */}
          <div className="space-y-3">
            <SkillSection title="Programming Languages" skills={programmingSkills} parentIndex={0} />
            <SkillSection title="Frameworks" skills={frameworksSkills} parentIndex={1} />
            <SkillSection title="Databases" skills={databasesSkills} parentIndex={2} />
          </div>

          {/* Tools, Soft Skills, and Languages Section */}
          <div className="space-y-3">
            <SkillSection title="Tools" skills={toolsSkills} parentIndex={3} />
            <SkillSection title="Soft Skills" skills={softSkills} parentIndex={4} />
            <SkillSection title="Languages" skills={languages} parentIndex={5} />
            <SkillSection title="Myers-Briggs Test" skills={myersBriggsSkills} parentIndex={6} />
          </div>
        </div>
      </div>
    </section>
  );
};
