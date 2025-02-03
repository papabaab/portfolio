import React from 'react';
import { Code2, Server, GitBranch, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUpWithDelay } from '../animations/scroll-animations';

const services = [
  {
    icon: <Code2 className="w-12 h-12 text-[#1699E5] mb-4" />,
    title: "Front-end Design & Development",
    description: "Creating responsive, user-friendly interfaces using modern frameworks like React, with a focus on performance and accessibility."
  },
  {
    icon: <Server className="w-12 h-12 text-[#1699E5] mb-4" />,
    title: "Backend App Development",
    description: "Building robust server-side applications with Node.js, Express, and various databases to power scalable web solutions."
  },
  {
    icon: <GitBranch className="w-12 h-12 text-[#1699E5] mb-4" />,
    title: "DevOps Practices",
    description: "Implementing CI/CD pipelines, container orchestration, and cloud infrastructure management for seamless deployment."
  },
  {
    icon: <Users className="w-12 h-12 text-[#1699E5] mb-4" />,
    title: "Agile Project Management",
    description: "Leading teams with Agile methodologies, ensuring efficient project delivery through sprint planning and iterative development."
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">MY SERVICES</h2>
          <div className="w-24 h-1 bg-[#1699E5] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={fadeInUpWithDelay(index)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 25px rgba(22, 153, 229, 0.5)',
                transition: { duration: 0.2 }
              }}
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg transition-all duration-200 text-center cursor-pointer"
            >
              <div className="flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
