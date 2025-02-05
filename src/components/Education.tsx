import React, { useRef, useEffect } from 'react';
import educationData from '../data/education.json';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

interface EducationProps {
  isDark: boolean;
}

export const Education: React.FC<EducationProps> = ({ isDark }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const url = isDark ? 
    'https://w9fm7lberulf8kgk.public.blob.vercel-storage.com/experienceDark-CVdQjs1efo09merz9ioRpDU6MJMzqo.mp4' :
    'https://w9fm7lberulf8kgk.public.blob.vercel-storage.com/newwhitebg-n90D8unXkXrFbHh0BRm5yg9QeanRh0.mp4';

  const playVideo = async (video: HTMLVideoElement) => {
    try {
      await video.play();
    } catch (error) {
      console.log('Video play failed, trying again on user interaction',  error);

      const playOnInteraction = async () => {
        try {
          await video.play();
          document.removeEventListener('touchstart', playOnInteraction);
          document.removeEventListener('click', playOnInteraction);
        } catch (error) {
          console.log('Video play failed on interaction', error);
        }
      };

      document.addEventListener('touchstart', playOnInteraction);
      document.addEventListener('click', playOnInteraction);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;

      const handleLoadedData = () => {
        playVideo(video);
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.load();

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, [url]);

  return (
    <section id="education" className="relative min-h-screen flex items-center justify-center">
      {/* Video Background */}
      <video
        ref={videoRef}
        key={url}
        autoPlay
        playsInline
        muted
        loop
        preload="auto"
        className="absolute w-full h-full object-cover"
        webkit-playsinline="true"
      >
        <source src={url} type="video/mp4" />
      </video>

      {/* Overlay to improve content readability */}
      {isDark && <div className="absolute inset-0 bg-gray-900/80"></div>}

      <div className="container relative z-10 mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.5
            }
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">EDUCATION</h2>
          <div className="w-24 h-1 bg-[#1699E5] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {educationData.education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.2 // Stagger the animations
                }
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white/90 dark:bg-gray-900/90 p-6 rounded-lg shadow-xl shadow-[#1699E5]/20 dark:shadow-white/10 hover:shadow-2xl hover:shadow-[#1699E5]/40 dark:hover:shadow-white/20 transition-all duration-300 backdrop-blur-sm aspect-square flex flex-col"
            >
              <div className="flex-1 flex flex-col">
                {/* Logo Section */}
                <div className="mb-6 flex justify-center">
                  <a 
                    href={`https://${edu.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-32 h-32 relative"
                  >
                    {edu.logo ? (
                      <img 
                        src={edu.logo} 
                        alt={`${edu.school} logo`} 
                        className="w-full h-full object-contain hover:opacity-80 transition-opacity"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-16 h-16 text-[#1699E5]" />
                      </div>
                    )}
                  </a>
                </div>

                {/* Content Section */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.school}
                  </h3>
                  {edu.location && (
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      📍 {edu.location}
                    </p>
                  )}
                  <p className="text-[#1699E5] font-semibold mb-2">
                    {edu.program}
                  </p>
                  {edu.certificate && (
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Certificate: {edu.certificate}
                    </p>
                  )}
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.period}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
