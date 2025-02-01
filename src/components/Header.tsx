import React from 'react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-lg dark:shadow-[#1699E5]/20 dark:shadow-lg transition-shadow duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left section */}
            <nav className="hidden md:flex items-center space-x-6">
              <a onClick={(e) => handleClick(e, 'home')} href="#home" className="text-gray-600 hover:text-[#1699E5] dark:text-gray-300 dark:hover:text-[#1699E5] cursor-pointer">Home</a>
              <a onClick={(e) => handleClick(e, 'services')} href="#services" className="text-gray-600 hover:text-[#1699E5] dark:text-gray-300 dark:hover:text-[#1699E5] cursor-pointer">Services</a>
              <a onClick={(e) => handleClick(e, 'skills')} href="#skills" className="text-gray-600 hover:text-[#1699E5] dark:text-gray-300 dark:hover:text-[#1699E5] cursor-pointer">Skills</a>
            </nav>

            {/* Center logo */}
            <div className="flex items-center space-x-2">
              <img 
                src={isDark ? "/src/assets/je-noir-blanc.png" : "/src/assets/je-blanc-noir.png"} 
                alt="Logo" 
                className="w-10 h-10"
              />
              <span className="text-xl font-bold dark:text-white">Portfolio</span>
            </div>

            {/* Right section */}
            <div className="flex items-center">
              <nav className="hidden md:flex items-center space-x-6 mr-6">
                <a onClick={(e) => handleClick(e, 'portfolio')} href="#portfolio" className="text-gray-600 hover:text-[#1699E5] dark:text-gray-300 dark:hover:text-[#1699E5] cursor-pointer">Portfolio</a>
                <a onClick={(e) => handleClick(e, 'experience')} href="#experience" className="text-gray-600 hover:text-[#1699E5] dark:text-gray-300 dark:hover:text-[#1699E5] cursor-pointer">Experience</a>
                <a onClick={(e) => handleClick(e, 'contact')} href="#contact" className="text-gray-600 hover:text-[#1699E5] dark:text-gray-300 dark:hover:text-[#1699E5] cursor-pointer">Contact</a>
              </nav>
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
