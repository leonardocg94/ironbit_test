import { SquareContainer } from "../ui/containers";
import { RickAndMortyCharacterList } from "./RickAndMortyCharacterList";
import { RickAndMortyConsumer } from "./RickAndMortyConsumer";
import { RickAndMortyForm } from "./RickAndMortyForm";

export const RickAndMortyContent = () => {
  //RENDERIZADO
  return (
    <SquareContainer>
      <RickAndMortyConsumer />
      <RickAndMortyForm />
      <RickAndMortyCharacterList />
    </SquareContainer>
  );
};
