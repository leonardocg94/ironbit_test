import { Box, SxProps, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState, findNthSeriesTerm, setNthTerm } from "../../store";
import { useAppDispatch } from "../../hooks";
import { ChangeEvent, FormEvent } from "react";
import { ButtonShadow } from "../ui/buttons";

export const NthTermForm = () => {
  //REDUX
  const { nth } = useSelector((state: RootState) => state.nthTerm);
  const dispatch = useAppDispatch();
  //FUNCIONES Y MANEJADORES
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch(setNthTerm(parseInt(event.target.value)));

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    dispatch(findNthSeriesTerm());
  };
  //RENDERIZADO
  return (
    <Box component={"form"} onSubmit={onSubmitHandler}>
      <Typography variant="h2" sx={titleStyles}>
        Ingresa el término n-ésimo que quieres buscar
      </Typography>
      <Box sx={flexContainerStyles}>
        <TextField
          label="Posición"
          value={nth}
          type="number"
          onChange={onChangeHandler}
          sx={{ width: { sm: "auto", xs: "100%" } }}
        />
        <ButtonShadow
          sx={buttonStyles}
          type="submit"
          variant="outlined"
          color="primary"
        >
          Buscar
        </ButtonShadow>
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
const buttonStyles: SxProps = {
  width: { sm: "auto", xs: "100%" },
};
