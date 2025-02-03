import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { handleClick } from '../commons/func';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {

  const linkStyles = "md:min-w-[8vw] lg:min-w-[10vw] text-center text-gray-600 hover:text-[#1699E5] dark:text-gray-300 dark:hover:text-[#1699E5] cursor-pointer transition-all duration-300 hover:scale-110 px-3 py-2 rounded-lg";

  return (
    <div className="flex justify-center">
      <header className="fixed top-4 sm:ml-4 md:ml-0 max-w-7xl z-50 left-[2vw] md:left-auto">
        <div className="relative bg-white/80 dark:bg-gray-900/10 dark:border-[.5px] dark:border-gray-500 backdrop-blur-md rounded-2xl shadow-xl shadow-[#1699E5]/20 dark:shadow-white/10 transition-all duration-300">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Left section */}
              <nav className="hidden md:flex items-center space-x-6">
                <a onClick={(e) => handleClick(e, 'home')} href="#home" className={linkStyles}>Home</a>
                <a onClick={(e) => handleClick(e, 'services')} href="#services" className={linkStyles}>Services</a>
                <a onClick={(e) => handleClick(e, 'skills')} href="#skills" className={linkStyles}>Skills</a>
              </nav>

              {/* Center logo */}
              <a href="#home" onClick={(e) => handleClick(e, 'home')}>
              <div className="flex items-center space-x-2 px-1 group" >
                <img 
                  src={isDark ? "/src/assets/je-noir-blanc.png" : "/src/assets/je-blanc-noir.png"} 
                  alt="Logo" 
                  className="max-w-10 h-10 transition-transform duration-300 group-hover:scale-[2] group-hover:shadow-[#1699E5] group-hover:shadow-md rounded-[50%] cursor-pointer"
                />
              </div>
                  </a>

              {/* Right section */}
              <nav className="hidden md:flex items-center space-x-6">
                <a onClick={(e) => handleClick(e, 'portfolio')} href="#portfolio" className={linkStyles}>Portfolio</a>
                <a onClick={(e) => handleClick(e, 'experience')} href="#experience" className={linkStyles}>Experience</a>
                <a onClick={(e) => handleClick(e, 'contact')} href="#contact" className={linkStyles}>Contact</a>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div className="fixed top-4 right-[2vw] mx-auto px-6 py-4 bg-white/80 dark:border-[.5px] dark:border-gray-500 dark:bg-gray-900/10 backdrop-blur-md rounded-2xl shadow-xl shadow-[#1699E5]/20 dark:shadow-white/10 transition-all duration-300 z-50">
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};
