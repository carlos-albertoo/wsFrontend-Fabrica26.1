import Image from "next/image";
import Link from "next/link";
import { Character } from "@/types/character";

type CharacterCardProps = {
  character: Character;
  favorito: boolean;
  aoAlternarFavorito: (characterId: number) => void;
};

export default function CharacterCard({ character, favorito, aoAlternarFavorito }: Readonly<CharacterCardProps>) {
  return (
    <article className="group relative border border-green-500/15 bg-black p-4 shadow-[0_0_0_1px_rgba(0,255,0,0.15)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(0,255,0,0.6)]">
      <button
        type="button"
        aria-label={favorito ? `Remover ${character.name} dos favoritos` : `Adicionar ${character.name} aos favoritos`}
        onClick={() => aoAlternarFavorito(character.id)}
        className="absolute right-3 top-3 z-10 border border-green-500/20 bg-black/90 px-2 py-1 text-xs font-bold tracking-wider text-white transition-colors hover:border-green-500 hover:text-green-500"
      >
        {favorito ? "FAVORITO" : "SALVAR"}
      </button>

      <Link href={`/detalhes/${character.id}`} className="block">
        <div className="relative mb-4 h-44 w-full overflow-hidden border border-green-500/10 bg-gray-800">
          {character.image ? (
            <Image
              src={character.image}
              alt={`${character.name} image`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-contain p-5 transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center px-4 text-center text-sm font-semibold text-white/70">
              Imagem indisponível
            </div>
          )}
        </div>

        <h3 className="text-xl font-black uppercase tracking-wide text-white">{character.name}</h3>
        <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-green-500">{character.status} - {character.species}</p>
      </Link>
    </article>
  );
}
