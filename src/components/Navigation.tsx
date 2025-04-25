
import React from 'react';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="font-title text-2xl font-semibold text-gray-900">
            Pedro Cantalice
          </a>
          <div className="hidden md:flex space-x-8">
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
              <a href="#contato" className="font-body">Contato</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
