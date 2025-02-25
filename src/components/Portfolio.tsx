import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { portfolioItems } from '../data/portfolio-items';
import { PortfolioItem } from '../data/portfolio-items';



const VideoWithLazyLoad: React.FC<{ src: string }> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <video 
      ref={videoRef}
      src={isInView ? src : undefined}
      autoPlay={isInView}
      playsInline
      muted
      loop
      preload="metadata"
      webkit-playsinline="true"
      className="w-full h-full object-contain rounded-lg"
    />
  );
};

const PortfolioCard: React.FC<{ item: PortfolioItem }> = ({ item }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg h-full min-h-[600px]">
      {/* Left section with main image or video */}
      <div className="lg:w-1/2 flex flex-col items-center justify-center">
        <div className="w-full h-[400px] relative mb-4">
          {item.displayVideo ? (
            <VideoWithLazyLoad src={item.displayVideo} />
          ) : (
            <div className="relative">
              <img 
                src={item.displayImage} 
                alt={item.title} 
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                className={`w-auto h-full m-auto rounded-lg transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
              )}
            </div>
          )}
        </div>
        
        {/* Conditional rendering based on whether it's Iveez or other projects */}
        {item.title === "Iveez (E-commerce Hybrid Mobile App)" ? (
          // App store download links for Iveez
          <div className="flex gap-4 mt-auto w-full justify-center">
            {item.playStoreLink && (
              <a 
                href={item.playStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img 
                  src="/assets/download-playstore.png" 
                  alt="Download on Play Store" 
                  className="h-12"
                />
              </a>
            )}
            {item.appStoreLink && (
              <a 
                href={item.appStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img 
                  src="/assets/download-app-store.png" 
                  alt="Download on the App Store" 
                  className="h-12"
                />
              </a>
            )}
          </div>
        ) : (
          // Website visit button for other projects
          item.website && (
            <button 
              onClick={() => window.open(item.website, '_blank')}
              className="w-full px-6 py-3 mt-0 bg-[#1699E5] text-white rounded-lg 
                       hover:bg-[#1487cc] dark:bg-[#1699E5] dark:hover:bg-[#1487cc] 
                       transition-all duration-300 flex items-center justify-center gap-2
                       shadow-md hover:shadow-lg"
            >
              Visit Website
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
            </button>
          )
        )}
      </div>
      
      {/* Right section with content */}
      <div className="lg:w-1/2">
        <h3 className="text-2xl font-bold text-gray-900 text-center dark:text-white mb-4">{item.title}</h3>
        
        {/* Technologies Icons */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            {item.title === "Taxibokko" && (
              <>
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg" 
                     alt="Ionic" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" 
                     alt="Angular" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" 
                     alt="Node.js" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
                <img src="https://www.shareicon.net/data/2016/07/08/117547_developer_512x512.png" 
                     alt="Firebase" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
                <img src="https://www.gstatic.com/images/branding/product/2x/maps_96dp.png" 
                     alt="Google Maps" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" 
                     alt="Figma" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
              </>
            )}
            {item.title === "Microfinance Digitale" && (
              <>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" 
                     alt="Angular" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" 
                     alt="Node.js" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic-00.iconduck.com%2Fassets.00%2Fnestjs-icon-2048x2040-3rrvcej8.png&f=1&nofb=1&ipt=61dd0e48c653ddf3a429755d9ee032d62cea51821633f5c487116b6d69ba88aa&ipo=images" 
                     alt="Nest.js" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" 
                     alt="TypeScript" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A616%2F1*1sVrbiOmejvXVikqenKgFw.png&f=1&nofb=1&ipt=f551d021cf7ff59329b379eff4d64d8c3f9d58af6f6a7af95fc87d537513b1e3&ipo=images" 
                     alt="Docker" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frepository-images.githubusercontent.com%2F594831409%2F540d66b0-37c0-4bb3-ae90-eb39fcb6008c&f=1&nofb=1&ipt=4c54bad54b0dcfc3180d966aa70d0806d53ca741a094f1fd6757c331df6e9f97&ipo=images" 
                     alt="Docker" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fai.nd.edu%2Fassets%2F596212%2Fgoogle_gemini_logo.png&f=1&nofb=1&ipt=10db5ee7871d6a4a0fae490fb285c9804d130216beae27b66e3e2f3105a74354&ipo=images" 
                     alt="Gemini" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
              </>
            )}
            {item.title === "RV-ACD (Rassemblement pour la Vérité)" && (
              <>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" 
                     alt="Angular" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
                <img src="https://www.shareicon.net/data/2016/07/08/117547_developer_512x512.png" 
                     alt="Firebase" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" 
                     alt="TypeScript" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogodix.com%2Flogo%2F2042910.png&f=1&nofb=1&ipt=0a24e29e8c5ef6d97349ef5ff8848f964e51dda0ce5bc15aedd26c7fc68eca08&ipo=images" 
                     alt="Hostinger" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
              </>
            )}
            {item.title === "Iveez (E-commerce Hybrid Mobile App)" && (
              <>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" 
                     alt="Angular" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg" 
                     alt="Ionic" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" 
                     alt="TypeScript" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" 
                     alt="JavaScript" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" 
                     alt="Node.js" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
                <img src="https://www.shareicon.net/data/2016/07/08/117547_developer_512x512.png" 
                     alt="Firebase" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.jim-nielsen.com%2Fmacos%2F1024%2Fxcode-2020-11-11.png&f=1&nofb=1&ipt=a2f8784e39958615fe09c107f87eae83ca770a9f2004333f0781b0b1af4d813c&ipo=images" 
                     alt="JavaScript" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2019.png" 
                     alt="JavaScript" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
              </>
            )}
            {item.title === "Iveez Landing Page" && (
              <>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                     alt="React" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Three.js_Icon.svg" 
                     alt="Three.js" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
                <img src="https://slickdemon.com/wp-content/themes/sd/images/code_logos/gsap-logo.png" 
                     alt="GSAP" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" 
                     alt="Tailwind CSS" 
                     loading="lazy"
                     className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
              </>
            )}
          </div>
          <div className="w-full h-[2px] bg-gray-200 dark:bg-gray-700"></div>
        </div>

        {/* Description List */}
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          {item.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">MY PORTFOLIO</h2>
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
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true
            }}
            loop={true}
            className="portfolio-swiper !pb-12"
          >
            {portfolioItems.map((item, index) => (
              <SwiperSlide key={index} className="min-h-[50vh] w-full">
                <PortfolioCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
