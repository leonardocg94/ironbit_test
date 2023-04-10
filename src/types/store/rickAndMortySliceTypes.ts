import { RickAndMortyCharacter } from "../rickAndMortyTypes";

export type RickAndMortyState = {
  searchValue: string;
  results: RickAndMortyCharacter[];
  loading: boolean;
};
