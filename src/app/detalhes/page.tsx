import CharacterList from "@/components/CharacterList";
import { getCharacters } from "@/services/rickandmorty";
import { Character } from "@/types/character";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todos os Personagens | Rick and Morty Portal",
  description:
    "Explore todos os personagens de Rick and Morty, filtre por status, busque por nome e salve seus favoritos.",
  openGraph: {
    title: "Todos os Personagens | Rick and Morty Portal",
    description:
      "Explore todos os personagens de Rick and Morty, filtre por status, busque por nome e salve seus favoritos.",
    url: "https://rickandmortyapi.com/",
    siteName: "Rick and Morty Portal",
    images: [
      {
        url: "/rickandmorty-logo.png",
        width: 1200,
        height: 630,
        alt: "Rick and Morty Characters List",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Todos os Personagens | Rick and Morty Portal",
    description:
      "Explore todos os personagens de Rick and Morty, filtre por status, busque por nome e salve seus favoritos.",
    images: ["/rickandmorty-logo.png"],
  },
};

export default async function CharactersPage() {
  let characters: Character[] = [];
  let hasApiError = false;

  try {
    characters = await getCharacters();
  } catch {
    hasApiError = true;
  }

  return (
    <div className="flex-1 bg-gradient-to-b from-black to-gray-900">
      <section className="mx-auto w-full max-w-6xl px-4 pb-8 pt-12 sm:px-6 lg:px-8">
        <div className="border border-green-500/20 bg-black/80 p-8 backdrop-blur-sm sm:p-10">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.3em] text-green-500">Personagens</p>
          <h1 className="text-4xl font-black uppercase leading-[1.05] text-white sm:text-6xl">Todos os Personagens</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/85 sm:text-base">
            Explore todos os personagens de Rick and Morty, filtre por status, busque por nome e salve seus favoritos.
          </p>
        </div>
      </section>

      {hasApiError ? (
        <section className="mx-auto mb-16 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="border border-green-500/60 bg-red-900 p-8 text-white">
            <h2 className="text-xl font-black uppercase tracking-wider">API indisponível</h2>
            <p className="mt-2 text-sm leading-6 text-white/90">
              A API do Rick and Morty está temporariamente indisponível. Atualize a página em alguns instantes.
            </p>
          </div>
        </section>
      ) : (
        <CharacterList characters={characters} />
      )}
    </div>
  );
}
