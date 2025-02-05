import React, { useRef, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string;
  tools: string;
  link?: string;
}

interface ExperienceProps {
  isDark: boolean;
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

const ExperienceCard: React.FC<{ exp: ExperienceItem }> = ({ exp }) => (
  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg h-full flex flex-col">
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
    
    <div className="flex-grow">
      {exp.description.map((desc, i) => (
        <p key={i} className="text-gray-700 dark:text-gray-300 mb-2">{desc}</p>
      ))}
    </div>
    
    <div className="mt-auto">
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
  </div>
);

export const Experience: React.FC<ExperienceProps> = ({isDark}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const url = isDark ? 'https://w9fm7lberulf8kgk.public.blob.vercel-storage.com/experienceDark-CVdQjs1efo09merz9ioRpDU6MJMzqo.mp4' : '/assets/newwhitebg.mp4';

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
          console.log('Video play failed on interaction',  error);
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
    <section id="experience" className="relative min-h-screen flex items-center justify-center">
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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">WORK EXPERIENCE</h2>
          <div className="w-24 h-1 bg-[#1699E5] mx-auto"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            className="experience-swiper"
          >
            {experiences.map((exp, index) => (
              <SwiperSlide key={index} className="h-auto">
                <ExperienceCard exp={exp} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
