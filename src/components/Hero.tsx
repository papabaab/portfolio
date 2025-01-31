import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Software Developer
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Passionate about creating elegant solutions to complex problems. 
          Specialized in full-stack development with a focus on scalable and maintainable applications.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-[#1699E5] text-white rounded-lg hover:bg-[#1487cc] transition-colors"
          >
            Hire Me
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Portfolio
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};