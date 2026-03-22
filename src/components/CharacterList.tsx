"use client";

import { useEffect, useMemo, useState } from "react";
import CharacterCard from "@/components/CharacterCard";
import { Switch } from "@/components/ui/switch";
import { Character } from "@/types/character";

const FAVORITES_STORAGE_KEY = "rickandmorty-favorite-characters";

type CharacterListProps = {
  characters: Character[];
};

export default function CharacterList({ characters }: Readonly<CharacterListProps>) {
  const [busca, setBusca] = useState("");
  const [statusSelecionado, setStatusSelecionado] = useState("TODOS");
  const [somenteFavoritos, setSomenteFavoritos] = useState(false);
  const [idsFavoritos, setIdsFavoritos] = useState<number[]>(() => {
    if (!("window" in globalThis)) {
      return [];
    }

    const favoritosSalvos = globalThis.localStorage.getItem(FAVORITES_STORAGE_KEY);

    if (!favoritosSalvos) {
      return [];
    }

    try {
      const parsed = JSON.parse(favoritosSalvos) as unknown;
      return Array.isArray(parsed) ? parsed.filter((item): item is number => typeof item === "number") : [];
    } catch {
      globalThis.localStorage.removeItem(FAVORITES_STORAGE_KEY);
      return [];
    }
  });

  useEffect(() => {
    globalThis.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(idsFavoritos));
  }, [idsFavoritos]);

  const statuses = useMemo(() => {
    return Array.from(new Set(characters.map((character) => character.status))).sort((a, b) => a.localeCompare(b));
  }, [characters]);

  const charactersFiltrados = useMemo(() => {
    return characters.filter((character) => {
      const correspondeBusca = character.name.toLowerCase().includes(busca.toLowerCase().trim());
      const correspondeStatus = statusSelecionado === "TODOS" || character.status === statusSelecionado;
      const correspondeFavoritos = !somenteFavoritos || idsFavoritos.includes(character.id);

      return correspondeBusca && correspondeStatus && correspondeFavoritos;
    });
  }, [characters, idsFavoritos, somenteFavoritos, busca, statusSelecionado]);

  function alternarFavorito(characterId: number) {
    setIdsFavoritos((atuais) => {
      if (atuais.includes(characterId)) {
        return atuais.filter((id) => id !== characterId);
      }

      return [...atuais, characterId];
    });
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mb-8 grid gap-4 border border-green-500/20 bg-black p-4 sm:grid-cols-[2fr_1fr_auto]">
        <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-[0.15em] text-white/85">
          <span>Buscar personagem</span>
          <input
            type="text"
            value={busca}
            onChange={(event) => setBusca(event.target.value)}
            placeholder="Digite um nome"
            className="h-11 border border-green-500/20 bg-gray-800 px-3 text-sm text-white outline-none transition-colors focus:border-green-500"
          />
        </label>

        <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-[0.15em] text-white/85">
          <span>Filtrar por status</span>
          <select
            value={statusSelecionado}
            onChange={(event) => setStatusSelecionado(event.target.value)}
            className="h-11 border border-green-500/20 bg-gray-800 px-3 text-sm text-white outline-none transition-colors focus:border-green-500"
          >
            <option value="TODOS">Todos os status</option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>

        <div className="flex h-full flex-col gap-2 border border-green-500/20 bg-gray-800 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white/85">
          <span>Favoritos</span>
          <label className="flex flex-1 items-center justify-between gap-3 text-xs font-normal normal-case tracking-normal text-white">
            <span className="select-none leading-5">Somente favoritos</span>
            <Switch
              checked={somenteFavoritos}
              onCheckedChange={setSomenteFavoritos}
              aria-label="Ativar filtro de favoritos"
            />
          </label>
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/80">
          {charactersFiltrados.length} personagens em exibicao
        </p>
      </div>

      {charactersFiltrados.length === 0 ? (
        <div className="border border-green-500/20 bg-black p-8 text-center text-white">
          <p className="text-lg font-bold uppercase tracking-widest">Nenhum personagem corresponde aos filtros atuais.</p>
          <p className="mt-2 text-sm text-white/75">Ajuste a busca, o status ou o filtro de favoritos.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {charactersFiltrados.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              favorito={idsFavoritos.includes(character.id)}
              aoAlternarFavorito={alternarFavorito}
            />
          ))}
        </div>
      )}
    </section>
  );
}
