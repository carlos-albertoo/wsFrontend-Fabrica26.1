import Link from "next/link";

export default function CharacterNotFoundPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 items-center px-4 py-16 sm:px-6 lg:px-8">
      <section className="w-full border-2 border-[#97ce4c]/50 bg-[#0b0c10] p-8 text-[#e0e2e5] shadow-[0_0_15px_rgba(151,206,76,0.15)]">
        
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#97ce4c]">
          Dimensão 404
        </p>
        
        <h1 className="mt-2 text-3xl font-black uppercase text-[#f0e14a]">
          Personagem não encontrado
        </h1>
        
        <p className="mt-3 text-sm text-[#e0e2e5]/85">
          Aw, geez! Acho que você errou de dimensão... Esse personagem não existe no nosso multiverso.
        </p>
        
        <Link 
          href="/" 
          className="mt-6 inline-flex border-2 border-[#97ce4c]/50 bg-[#0b0c10] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#97ce4c] transition-all hover:bg-[#97ce4c] hover:text-[#0b0c10] hover:shadow-[0_0_15px_#97ce4c]"
        >
          Voltar ao Multiverso
        </Link>
        
      </section>
    </main>
  );
}