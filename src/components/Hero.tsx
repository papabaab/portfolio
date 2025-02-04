import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { handleClick } from '../commons/func';

interface HeroProps {
  isDark: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const videoUrl = isDark ? '/assets/darkvid.mp4' : '/assets/whitevid.mp4';

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        key={videoUrl} // Add key to force video reload when source changes
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.8,
            ease: "easeOut"
          }
        }}
        viewport={{ once: true }}
        className="container md:max-w-[50vw] relative z-10 mx-auto px-4 py-16 text-center"
      >
        <div className="bg-white/30 dark:bg-gray-900/10 backdrop-blur-sm rounded-2xl dark:border-[.5px] dark:border-gray-500 p-8 shadow-xl shadow-[#1699E5]/20 dark:shadow-white/10 transition-all duration-300">
          <h1 className="text-2xl md:text-4xl font-bold text-[#1699E5] dark:text-white mb-6">
            Hi, I'm Papa,<br/> 
            <span className="text-gray-900 dark:text-white">
              a FullStack Software Developer 🤓
            </span>
          </h1>
          <p className="text-sm text-gray-900 dark:text-gray-200 mb-8 max-w-2xl mx-auto">
            💡 The most noble and fulfilling mindset is that of serving humanity. As we say at Virginia Tech: Ut Prosim (That I may serve). And one of my favorite ways of serving? It's Building high-quality software that makes life easier and solves real-world problems. Scroll down to learn more about me! 😎.
            <br/>Got a project? Contact me and let's discuss it. I'm lookinng forward to hearing from you.
            <br/>
          </p>
          <div className="flex justify-center gap-4">
            <a
            onClick={(e) => handleClick(e, 'contact')}
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-[#1699E5] text-white rounded-lg hover:bg-[#1487cc] transition-colors"
            >
              Contact Me
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
            onClick={(e) => handleClick(e, 'portfolio')}
              href="#portfolio"
              className="inline-flex items-center px-6 py-3 bg-black/50 backdrop-blur-sm text-white rounded-lg hover:bg-black/70 transition-colors"
            >
              Portfolio
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
