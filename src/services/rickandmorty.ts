import { Character } from "@/types/character";

const RICK_AND_MORTY_API_BASE_URL = "https://rickandmortyapi.com/api/character";

type ApiCharacter = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type ApiResponse = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: ApiCharacter[];
};

function mapApiCharacterToCharacter(apiCharacter: ApiCharacter): Character {
  return {
    id: apiCharacter.id,
    name: apiCharacter.name ?? "Nome desconhecido",
    status: apiCharacter.status ?? "Status desconhecido",
    species: apiCharacter.species ?? "Espécie desconhecida",
    type: apiCharacter.type ?? "",
    gender: apiCharacter.gender ?? "Gênero desconhecido",
    origin: apiCharacter.origin ?? { name: "Origem desconhecida", url: "" },
    location: apiCharacter.location ?? { name: "Localização desconhecida", url: "" },
    image: apiCharacter.image ?? "",
    episode: apiCharacter.episode ?? [],
    episodeCount: apiCharacter.episode ? apiCharacter.episode.length : 0,
    url: apiCharacter.url ?? "",
    created: apiCharacter.created ?? "",
  };
}

async function fetchCharactersFromApi(): Promise<ApiCharacter[]> {
  try {
    const response = await fetch(RICK_AND_MORTY_API_BASE_URL, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`Rick and Morty API request failed with status ${response.status}`);
    }

    const payload = (await response.json()) as ApiResponse;

    if (!Array.isArray(payload.results)) {
      throw new TypeError("A API do Rick and Morty retornou um formato inesperado.");
    }

    return payload.results;
  } catch (error) {
    console.error("Failed to fetch characters from Rick and Morty API:", error);
    throw new Error("Nao foi possivel carregar os personagens do Rick and Morty no momento.");
  }
}

export async function getCharacters(): Promise<Character[]> {
  const apiCharacters = await fetchCharactersFromApi();
  return apiCharacters.map(mapApiCharacterToCharacter);
}

export async function getCharacterById(id: string): Promise<Character | null> {
  try {
    const response = await fetch(`${RICK_AND_MORTY_API_BASE_URL}/${id}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return null;
    }

    const apiCharacter = (await response.json()) as ApiCharacter;
    return mapApiCharacterToCharacter(apiCharacter);
  } catch (error) {
    console.error(`Falha ao buscar o personagem ${id}:`, error);
    return null;
  }
}
