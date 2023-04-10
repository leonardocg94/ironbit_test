import { RickAndMortyCharacter } from "../rickAndMortyTypes";

export type RickAndMortyCharactersResponse = {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: string | null;
  };
  results: RickAndMortyCharacter[]
};


