import React from 'react';
import { GithubIcon, InstagramIcon, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1699E5] dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">About Me</h3>
            <p className="text-gray-100">
              Full-stack developer passionate about creating elegant solutions to complex problems. I am because we are! <br/> Je.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-gray-300 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-gray-300 transition-colors">Services</a></li>
              <li><a href="#skills" className="hover:text-gray-300 transition-colors">Skills</a></li>
              <li><a href="#portfolio" className="hover:text-gray-300 transition-colors">Portfolio</a></li>
              <li><a href="#education" className="hover:text-gray-300 transition-colors">Education</a></li>
              <li><a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Services</h3>
            <ul className="space-y-2">
              <li>Front-end Development</li>
              <li>Backend Development</li>
              <li>DevOps Practices</li>
              <li>Agile Project Management</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Connect With Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/papabaab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                {/* <Linkedin className="w-6 h-6" /> */}
                <img className='w-6 h-6' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/1200px-LinkedIn_logo_initials.png" alt="" />
              </a>
              <a 
                href="https://instagram.com/papabaab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                {/* <InstagramIcon className="w-6 h-6" /> */}
                <img className='w-6 h-6' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" alt="" />
              </a>
              <a 
                href="https://github.com/papabaab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                {/* <GithubIcon className="w-6 h-6" /> */}
                <img className='w-6 h-6' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.icon-icons.com%2Ficons2%2F836%2FPNG%2F512%2FGithub_icon-icons.com_66788.png&f=1&nofb=1&ipt=f6c0dc26834b30c87dfd997679429d992cff4f76526efaf6583db978154ed334&ipo=images" alt="" />
              </a>
              <a 
                href="https://youtube.com/@papabaab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                {/* <GithubIcon className="w-6 h-6" /> */}
                <img className='w-6 h-6' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1200px-YouTube_full-color_icon_%282017%29.svg.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Papabaab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
