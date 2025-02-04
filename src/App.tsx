import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';



function App() {
  const [isDark, setIsDark] = useState(false);


  useEffect(() => {
    // Check system preference on initial load
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // Toggle the 'dark' class on the html element
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <Hero isDark={isDark} />
      <Services />
      <Skills />
      <Portfolio />
      <Education isDark={isDark} />
      <Contact />
      <Footer />
      <small className="fixed bottom-1  right-1 text-[7px] sm:text-xs text-gray-500 dark:text-gray-400">built with React.Js & Tailwind CSS @papabaab</small>
    </div>
  );
}

export default App;
