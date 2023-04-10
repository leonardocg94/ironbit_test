import { List, SxProps, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { RickAndMortyCharacterListItem } from "./RickAndMortyCharacterListItem";

export const RickAndMortyCharacterList = () => {
  //REDUX
  const { results, loading } = useSelector(
    (state: RootState) => state.rickAndMorty
  );
  //RENDERIZADO
  return loading ? (
    // vista cuando se estan cargando los personajes desde el api
    <Typography sx={commonTextStyles}>Buscando personajes...</Typography>
  ) : results.length > 0 ? (
    // vista cuando la lista de personajes no es vacia
    <List sx={listStyles}>
      {results.map((character) => (
        <RickAndMortyCharacterListItem key={character.id} item={character} />
      ))}
    </List>
  ) : (
    // vista cuando la lista de personajes esta vacia
    <Typography variant="body1" sx={commonTextStyles}>
      No hay personajes
    </Typography>
  );
};
//ESTILOS
const commonTextStyles: SxProps = {
  textAlign: "center",
  color: "#808080",
  mt: 2,
};
const listStyles: SxProps = {
  display: "flex",
  flexWrap: "wrap",
  gap: "25px",
  justifyContent: "space-around",
  mt: 3,
};
