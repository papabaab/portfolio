import React from 'react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src={isDark ? "/src/assets/je-noir-blanc.png" : "/src/assets/je-blanc-noir.png"} 
            alt="Logo" 
            className="w-10 h-10"
          />
          <span className="text-xl font-bold dark:text-white">Portfolio</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-600 hover:text-[#1699E5] dark:text-gray-300 dark:hover:text-[#1699E5]">Home</a>
          <a href="#services" className="text-gray-600 hover:text-[#1699E5] dark:text-gray-300 dark:hover:text-[#1699E5]">Services</a>
          <a href="#skills" className="text-gray-600 hover:text-[#1699E5] dark:text-gray-300 dark:hover:text-[#1699E5]">Skills</a>
          <a href="#portfolio" className="text-gray-600 hover:text-[#1699E5] dark:text-gray-300 dark:hover:text-[#1699E5]">Portfolio</a>
          <a href="#experience" className="text-gray-600 hover:text-[#1699E5] dark:text-gray-300 dark:hover:text-[#1699E5]">Experience</a>
          <a href="#contact" className="text-gray-600 hover:text-[#1699E5] dark:text-gray-300 dark:hover:text-[#1699E5]">Contact</a>
        </nav>
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
};