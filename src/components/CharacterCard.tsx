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
    <article className="group relative overflow-hidden rounded-2xl border border-green-500/20 bg-black p-4 shadow-[0_0_0_1px_rgba(34,197,94,0.18),0_0_24px_rgba(34,197,94,0.08)] transition-all duration-200 hover:-translate-y-1 hover:border-green-500/60 hover:shadow-[0_0_0_1px_rgba(34,197,94,0.4),0_0_30px_rgba(34,197,94,0.18)]">
      <button
        type="button"
        aria-label={favorito ? `Remover ${character.name} dos favoritos` : `Adicionar ${character.name} aos favoritos`}
        onClick={() => aoAlternarFavorito(character.id)}
        className="absolute right-3 top-3 z-10 rounded-full border border-green-500/30 bg-black/90 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:border-green-500 hover:text-green-500"
      >
        {favorito ? "Favorito" : "Salvar"}
      </button>

      <Link href={`/detalhes/${character.id}`} className="block">
        <div className="relative mb-4 h-56 w-full overflow-hidden rounded-xl border border-green-500/10 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.2),_rgba(17,24,39,0.9)_60%)]">
          {character.image ? (
            <Image
              src={character.image}
              alt={`${character.name} image`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full items-center justify-center px-4 text-center text-sm font-semibold text-white/70">
              Imagem indisponível
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        <div className="space-y-2">
          <h3 className="line-clamp-2 text-xl font-black uppercase tracking-wide text-white">{character.name}</h3>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500">{character.status} - {character.species}</p>
        </div>
      </Link>
    </article>
  );
}
