import { useSelector } from "react-redux";
import { useAppDispatch, useNoFirstTimeEffect } from "../../hooks";
import { RootState, setLoading, setResults } from "../../store";
import { searchRickAndMortyCharacterService } from "../../services";

export const RickAndMortyConsumer = () => {
  //REDUX
  const { searchValue } = useSelector((state: RootState) => state.rickAndMorty);
  const dispatch = useAppDispatch();
  //EFFECTOS
  useNoFirstTimeEffect(() => {
    dispatch(setLoading(true));
    const unsubscribe = setTimeout(async () => {
      const characters = await searchRickAndMortyCharacterService(searchValue);
      dispatch(setResults(characters));
      dispatch(setLoading(false));
    }, 1000);
    return () => clearTimeout(unsubscribe);
  }, [searchValue]);

  return null;
};
