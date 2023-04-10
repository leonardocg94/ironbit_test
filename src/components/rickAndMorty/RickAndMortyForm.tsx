import { Box, SxProps, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState, setSearchValue } from "../../store";
import { useAppDispatch } from "../../hooks";
import { ChangeEvent } from "react";

export const RickAndMortyForm = () => {
  //REDUX
  const { searchValue } = useSelector((state: RootState) => state.rickAndMorty);
  const dispatch = useAppDispatch();
  //MANEJADORES Y FUNCIONES
  const onChangeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => dispatch(setSearchValue(event.target.value));
  //RENDERIZADO
  return (
    <Box component={"form"}>
      <Typography variant="h2" sx={titleStyles}>
        Ingresa el nombre de un personaje de Rick y Morty
      </Typography>
      <Box sx={flexContainerStyles}>
        <TextField
          label="Personaje"
          value={searchValue}
          type="text"
          onChange={onChangeHandler}
          sx={inputStyles}
        />
      </Box>
    </Box>
  );
};
//ESTILOS
const flexContainerStyles: SxProps = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "20px",
  mt: 5,
  alignItems: "center",
  minHeight: "80px",
};
const titleStyles: SxProps = {
  textAlign: "center",
};
const inputStyles: SxProps = {
  width: { sm: "auto", xs: "100%" },
  minWidth: { xs: "auto", sm: "500px" },
};
