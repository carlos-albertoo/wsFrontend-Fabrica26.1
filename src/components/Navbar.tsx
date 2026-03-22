"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-green-500 bg-black/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        

        <div className="flex items-center">
          <Link href="/" className="group flex items-center gap-2">
            <span className="text-xl font-black uppercase tracking-tighter text-white">
              Rick and <span className="text-green-500">Morty</span>
            </span>
          </Link>
        </div>

       
        <div className="hidden space-x-8 sm:flex">
          <Link href="/" className="text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-green-500">
            Home
          </Link>
          <Link href="/detalhes" className="text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-green-500">
            Personagens
          </Link>
        </div>

      
        <div className="flex items-center gap-4">
          <button className="hidden border border-green-500/20 bg-green-500 px-6 py-2 text-[13px] font-extrabold uppercase tracking-[0.2em] text-black transition-all hover:bg-green-300 sm:block rounded-md">
            <a href="https://www.netflix.com/br/title/80014749" target="_blank" rel="noopener noreferrer">
              Assista Aqui
            </a>
          </button>

        
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-[5px] sm:hidden focus:outline-none"
            aria-label="Menu"
          >
            <span className={`h-0.5 w-6 bg-green-500 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-green-500 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-green-500 transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </div>

    
      <div className={`sm:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="flex flex-col space-y-4 border-t border-green-500/10 bg-black/95 px-4 py-6 text-center">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-widest text-white hover:text-green-500">
            Home
          </Link>
          <Link href="/detalhes" onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-widest text-white hover:text-green-500">
            Personagens
          </Link>
          <a 
            href="https://www.netflix.com/br/title/80014749" 
            target="_blank" 
            className="mx-auto w-fit border border-green-500 bg-green-500 px-6 py-2 text-[11px] font-bold uppercase text-black rounded-md"
          >
            Assista Aqui
          </a>
        </div>
      </div>
    </nav>
  );
}