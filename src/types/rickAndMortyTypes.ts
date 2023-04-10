export type RickAndMortyCharacter = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: RickAndMortyCharacter_Place;
  location: RickAndMortyCharacter_Place;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export type RickAndMortyCharacter_Place = {
  name: string;
  url: string;
}
