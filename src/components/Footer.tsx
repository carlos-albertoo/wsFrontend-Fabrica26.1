import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-green-500 bg-black backdrop-blur-md py-9 ">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
        
        <div className="flex items-center gap-3">
          <span className="text-lg font-black uppercase tracking-tighter text-white">
            Rick and <span className="text-green-500">Morty</span>
          </span>
          <span className="text-xs text-white/40 font-medium">
            © {new Date().getFullYear()}
          </span>
        </div>

        <div className="text-center text-xs uppercase tracking-widest text-white/60 sm:text-sm">
          Desenvolvido para o Desafio Workshop Front-End - 
          <span className="text-green-500 font-bold ml-1">Carlos Alberto</span>
        </div>

        <div className="hidden md:block w-[200px]"></div>

      </div>
    </footer>
  );
}