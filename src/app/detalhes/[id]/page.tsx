import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCharacterById, getCharacters } from "@/services/rickandmorty";
import { character } from "@/types/character";

type characterPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  try {
    const characters = await getCharacters();
    return characters.map((character) => ({ id: character.id.toString() }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: characterPageProps): Promise<Metadata> {
  const { id } = await params;

  try {
    const character = await getCharacterById(id);

    if (!character) {
      return {
        title: "Personagem nao encontrado | Rick and Morty Portal",
        description: "O perfil de personagem solicitado nao foi encontrado.",
        openGraph: {
          title: "Personagem nao encontrado | Rick and Morty Portal",
          description: "O perfil de personagem solicitado nao foi encontrado.",
          url: `https://rickandmortyapi.com/character/${id}`,
          siteName: "Rick and Morty Portal",
          images: [
            {
              url: "/rickandmorty-logo.png",
              width: 1200,
              height: 630,
              alt: "Rick and Morty Character Not Found",
            },
          ],
          locale: "pt_BR",
          type: "article",
        },
        twitter: {
          card: "summary_large_image",
          title: "Personagem nao encontrado | Rick and Morty Portal",
          description: "O perfil de personagem solicitado nao foi encontrado.",
          images: ["/rickandmorty-logo.png"],
        },
      };
    }

    return {
      title: `${character.name} | Rick and Morty Portal`,
      description: `Conheça ${character.name}, um personagem de Rick and Morty. Status: ${character.status}, Espécie: ${character.species}.`,
      openGraph: {
        title: `${character.name} | Rick and Morty Portal`,
        description: `Conheça ${character.name}, um personagem de Rick and Morty. Status: ${character.status}, Espécie: ${character.species}.`,
        url: `https://rickandmortyapi.com/character/${id}`,
        siteName: "Rick and Morty Portal",
        images: [
          {
            url: character.image,
            width: 1200,
            height: 630,
            alt: character.name,
          },
        ],
        locale: "pt_BR",
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: `${character.name} | Rick and Morty Portal`,
        description: `Conheça ${character.name}, um personagem de Rick and Morty.`,
        images: [character.image],
      },
    };
  } catch {
    return {
      title: "Perfil do personagem | Rick and Morty Portal",
      description: "Consulte informacoes dos personagens de Rick and Morty.",
      openGraph: {
        title: "Perfil do personagem | Rick and Morty Portal",
        description: "Consulte informacoes dos personagens de Rick and Morty.",
        url: `https://rickandmortyapi.com/character/${id}`,
        siteName: "Rick and Morty Portal",
        images: [
          {
            url: "/rickandmorty-logo.png",
            width: 1200,
            height: 630,
            alt: "Rick and Morty Character",
          },
        ],
        locale: "pt_BR",
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: "Perfil do personagem | Rick and Morty Portal",
        description: "Consulte informacoes dos personagens de Rick and Morty.",
        images: ["/rickandmorty-logo.png"],
      },
    };
  }
}

function InfoPanel({ character }: Readonly<{ character: character }>) {
  return (
    <section className="border border-green-500/20 bg-black p-5">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-500">Informações</p>
      <div className="mt-3 space-y-2">
        <div>
          <span className="text-sm font-bold text-white">Status: </span>
          <span className="text-sm text-white/85">{character.status}</span>
        </div>
        <div>
          <span className="text-sm font-bold text-white">Espécie: </span>
          <span className="text-sm text-white/85">{character.species}</span>
        </div>
        <div>
          <span className="text-sm font-bold text-white">Gênero: </span>
          <span className="text-sm text-white/85">{character.gender}</span>
        </div>
        <div>
          <span className="text-sm font-bold text-white">Origem: </span>
          <span className="text-sm text-white/85">{character.origin.name}</span>
        </div>
        <div>
          <span className="text-sm font-bold text-white">Localização: </span>
          <span className="text-sm text-white/85">{character.location.name}</span>
        </div>
        <div>
          <span className="text-sm font-bold text-white">Número de episódios: </span>
          <span className="text-sm text-white/85">{character.episodeCount}</span>
        </div>
      </div>
    </section>
  );
}

export default async function CharacterDetailPage({ params }: Readonly<characterPageProps>) {
  const { id } = await params;

  let character: character | null;

  try {
    character = await getCharacterById(id);
  } catch {
    return (
      <main className="mx-auto flex w-full max-w-6xl flex-1 items-center px-4 py-16 sm:px-6 lg:px-8">
        <section className="w-full border border-green-500/60 bg-red-900 p-8 text-white">
          <h1 className="text-2xl font-black uppercase tracking-wide">Falha ao carregar dados do personagem</h1>
          <p className="mt-3 text-sm text-white/90">Nao foi possivel acessar a API do Rick and Morty agora. Tente novamente em instantes.</p>
          <Link href="/" className="mt-6 inline-flex border border-white/30 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] hover:border-green-500 hover:text-green-500">
            Voltar para a Home
          </Link>
        </section>
      </main>
    );
  }

  if (!character) {
    notFound();
  }

  return (
    <main className="relative min-h-screen w-full flex-1 bg-gradient-to-b from-black to-gray-900">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Link href="/detalhes" className="mb-6 inline-flex border border-white/30 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white hover:border-green-500 hover:text-green-500">
          Voltar ao Catálogo
        </Link>
        <section className="grid gap-8 border border-green-500/20 bg-black/90 p-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col items-center justify-center">
            <div className="relative mb-6 h-80 w-80 max-w-full overflow-hidden rounded-xl border border-green-500/20 bg-gray-800 shadow-lg">
              <Image
                src={character.image}
                alt={character.name}
                fill
                sizes="320px"
                className="object-contain p-4 drop-shadow-xl"
                priority
              />
            </div>
            <h1 className="text-4xl font-black uppercase tracking-tight text-white drop-shadow-lg">
              {character.name}
            </h1>
            <p className="mt-2 text-base text-white/90 text-center max-w-md">
              {character.status} - {character.species}
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <InfoPanel character={character} />
          </div>
        </section>
      </div>
    </main>
  );
}