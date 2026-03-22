import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Rick and Morty Multiverso",
  description: "Descubra todos os personagens e aventuras da Animação Rick and Morty. Interface inspirada na série.",
  openGraph: {
    title: "Rick and Morty Portal",
    description: "Descubra todos os personagens e aventuras da Animação Rick and Morty. Interface inspirada na série.",
    url: "https://rickandmortyapi.com/",
    siteName: "Rick and Morty Portal",
    images: [
      {
        url: "/rickandmorty-logo.png",
        width: 1200,
        height: 630,
        alt: "Rick and Morty Portal Logo",
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
  
};

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-green-900 to-black opacity-80"></div>
      <section className="z-10 mx-auto flex max-w-4xl flex-col items-center px-4 py-24 text-center">
        <h1 className="mb-6 text-5xl font-black uppercase leading-tight tracking-tight text-green-500 drop-shadow-lg sm:text-7xl">
          Bem-vindo ao Multiverso 
        </h1>

       <Image
  src="/imgs/rick.png" 
  alt="Rick and Morty"
  width={700}
  height={700}
  className="animate-glow transition-all duration-500 hover:scale-110"
/>

        <p className="mb-10 max-w-2xl text-lg text-white/90 sm:text-xl">
          Descubra todos os personagens e aventuras da Animação Rick and Morty.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="https://www.netflix.com/br/title/80014749"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-green-500 px-8 py-4 text-lg font-semibold text-green-500 transition-colors duration-300 hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          >
            Assistir Episodios
          </a>
          <Link href="/detalhes" className="inline-flex items-center rounded-lg border border-green-500 px-8 py-4 text-lg font-semibold text-green-500 transition-colors duration-300 hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2">
            Ver Personagens
          </Link>
        </div>
      </section>
    </main>
  );
}
