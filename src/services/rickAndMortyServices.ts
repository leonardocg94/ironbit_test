import { RickAndMortyCharactersResponse } from "../types/services";
import { axiosInstance } from "../utils";

export const x = null;
export const searchRickAndMortyCharacterService = async (
  searchValue: string
) => {
  try {
    const response = await axiosInstance.get<RickAndMortyCharactersResponse>(
      `character/?name=${searchValue}`
    );
    if (response.status === 200) return response.data.results.slice(0, 5);
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
