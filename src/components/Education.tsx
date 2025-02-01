import React from 'react';
import educationData from '../data/education.json';
import { GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">EDUCATION</h2>
          <div className="w-24 h-1 bg-[#1699E5] mx-auto"></div>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {educationData.education.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Logo Section */}
                <div className="flex-shrink-0">
                  <a 
                    href={`https://${edu.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {edu.logo ? (
                      <img 
                        src={edu.logo} 
                        alt={`${edu.school} logo`} 
                        className="w-24 h-24 object-contain hover:opacity-80 transition-opacity"
                      />
                    ) : (
                      <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-12 h-12 text-[#1699E5]" />
                      </div>
                    )}
                  </a>
                </div>

                {/* Content Section */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.school}
                  </h3>
                  {edu.location && (
                    <p className="text-gray-600 dark:text-gray-400 mb-1">
                      📍 {edu.location}
                    </p>
                  )}
                  <p className="text-[#1699E5] font-semibold mb-1">
                    {edu.program}
                  </p>
                  {edu.certificate && (
                    <p className="text-gray-700 dark:text-gray-300 mb-1">
                      Certificate: {edu.certificate}
                    </p>
                  )}
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.period}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};