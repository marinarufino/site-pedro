
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="font-title text-2xl font-semibold text-gray-900 hover:text-primary transition-colors">
            Pedro Cantalice
          </a>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-4">
              <Button variant="ghost" asChild>
                <a href="#sobre" className="font-body">Sobre</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#pesquisa" className="font-body">Pesquisa</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#musica" className="font-body">Música</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#eventos" className="font-body">Eventos</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#midia" className="font-body">Mídia</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#contato" className="font-body">Contato</a>
              </Button>
            </div>
            <div className="flex items-center space-x-4 ml-6 border-l pl-6">
              <a href="https://www.facebook.com/pedrocantalice" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/pedrocantalice" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/pedrocantalice" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
