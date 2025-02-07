import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { handleClick } from '../commons/func';
import { Spinner } from './Spinner';

interface HeroProps {
  isDark: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoUrl = isDark ? 'https://w9fm7lberulf8kgk.public.blob.vercel-storage.com/darkvid-aeSGX8RVUs7H2Bxk8NpEnxvG3J1IIs.mp4' : 'https://w9fm7lberulf8kgk.public.blob.vercel-storage.com/whitevid-LPLLMVHmlGIXhiLt6R9y8yV7ZGn8LE.mp4';

  const playVideo = async (video: HTMLVideoElement) => {
    try {
      await video.play();
    } catch (error) {
      console.log('Video play failed, trying again on user interaction', error);

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
      setIsLoading(true);
      video.pause();
      video.currentTime = 0;
      
      const handleLoadedData = () => {
        setIsLoading(false);
        playVideo(video);
      };

      const handleError = () => {
        console.log('Video failed to load');
        setIsLoading(false);
      };

      const handleLoadStart = () => {
        // Check network state after a brief delay to allow for initial connection
        setTimeout(() => {
          if (video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE || 
              video.networkState === HTMLMediaElement.HAVE_NOTHING) {
            console.log('Network error or no source available');
            setIsLoading(false);
          }
        }, 1000);
      };

      video.addEventListener('loadstart', handleLoadStart);
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      video.addEventListener('abort', handleError);

      // Start loading the video
      video.load();

      return () => {
        video.removeEventListener('loadstart', handleLoadStart);
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
        video.removeEventListener('abort', handleError);
      };
    }
  }, [videoUrl]);

  return (
    <>
      {isLoading && <Spinner isDark={isDark} />}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          key={videoUrl}
          autoPlay
          playsInline
          muted
          loop
          preload="auto"
          className="absolute w-full h-full object-cover"
          webkit-playsinline="true" // For older iOS versions
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
              The most noble and fulfilling mindset is that of serving humanity. As we say at Virginia Tech: Ut Prosim (That I may serve). And one of my favorite ways of serving? It's Building high-quality software that makes life easier and solves real-world problems. Scroll down to learn more about me! 😎.
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
    </>
  );
};
