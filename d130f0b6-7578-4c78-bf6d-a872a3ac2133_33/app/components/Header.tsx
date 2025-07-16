
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">NF</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                Negócios Familiares Cast
              </h1>
              <p className="text-sm text-gray-600">O futuro é agora</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('podcast')}
              className="text-gray-700 hover:text-orange-500 transition-colors cursor-pointer"
            >
              O Podcast
            </button>
            <button 
              onClick={() => scrollToSection('episodios')}
              className="text-gray-700 hover:text-orange-500 transition-colors cursor-pointer"
            >
              Episódios
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-gray-700 hover:text-orange-500 transition-colors cursor-pointer"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('patrocinio')}
              className="text-gray-700 hover:text-orange-500 transition-colors cursor-pointer"
            >
              Patrocínio
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-orange-500 transition-colors cursor-pointer"
            >
              Contato
            </button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-menu-line text-xl"></i>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('podcast')}
                className="text-gray-700 hover:text-orange-500 transition-colors cursor-pointer text-left"
              >
                O Podcast
              </button>
              <button 
                onClick={() => scrollToSection('episodios')}
                className="text-gray-700 hover:text-orange-500 transition-colors cursor-pointer text-left"
              >
                Episódios
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="text-gray-700 hover:text-orange-500 transition-colors cursor-pointer text-left"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('patrocinio')}
                className="text-gray-700 hover:text-orange-500 transition-colors cursor-pointer text-left"
              >
                Patrocínio
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-gray-700 hover:text-orange-500 transition-colors cursor-pointer text-left"
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
