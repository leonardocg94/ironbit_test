import { Box, Container } from "@mui/material";
import { NthTermContent } from "./components/series";
import { useSelector } from "react-redux";
import { RootState, setNthTermModalState } from "./store";
import { useAppDispatch } from "./hooks";
import { SquareContainer } from "./components/ui/containers";
import { RickAndMortyForm } from "./components/rickAndMorty/RickAndMortyForm";
import { RickAndMortyConsumer } from "./components/rickAndMorty/RickAndMortyConsumer";
import { RickAndMortyContent } from "./components/rickAndMorty";

const App = () => {
  //RENDERIZADO
  return (
    <>
      <Container
        sx={{
          py: 5,
          minHeight: "100vh",
        }}
      >
        <NthTermContent />
        <Box mt={{ xs: 5, sm: 7, md: 10 }} />
        <RickAndMortyContent />
      </Container>
    </>
  );
};

export default App;
