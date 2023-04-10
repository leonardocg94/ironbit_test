import {
  ListItem,
  Avatar,
  Typography,
  SxProps,
  Theme,
  Box,
  Divider,
} from "@mui/material";
import { RickAndMortyCharacter } from "../../types";
import { FC } from "react";

type Props = {
  item: RickAndMortyCharacter;
};
export const RickAndMortyCharacterListItem: FC<Props> = ({
  item: { image, name, gender, origin, species, status },
}) => {
  //RENDERIZADO
  return (
    <ListItem sx={rootContainerStyles}>
      <Box sx={fillStyles}>
        <Avatar sx={avatarStyles} src={image} />
        <Typography variant="body1" color={"white"}>
          {name}
        </Typography>
      </Box>
      <Box sx={dataContainerStyles}>
        <Typography sx={descriptionTextStyles}>Genero: {gender}</Typography>
        <Divider sx={dividerStyles} />
        <Typography sx={descriptionTextStyles}>Especie: {species}</Typography>
        <Divider sx={dividerStyles} />
        <Typography sx={descriptionTextStyles}>
          Origen: {origin.name ? origin.name : "Desconocido"}
        </Typography>
        <Divider sx={dividerStyles} />
        <Typography sx={descriptionTextStyles}>
          Estatus: {status ? status : "Desconocido"}
        </Typography>
      </Box>
    </ListItem>
  );
};
//ESTILOS
const rootContainerStyles: SxProps<Theme> = (theme) => ({
  width: "300px",
  maxWidth: "300px",
  minWidth: "300px",
  flex: 1,
  p: 0,
  boxShadow: "3px 3px 5px rgba(0,0,0,0.3)",
  display: "flex",
  flexDirection: "column",
});
const avatarStyles: SxProps = {
  width: "75px",
  height: "75px",
  border: "3px solid white",
  mb: 1.5,
};
const fillStyles: SxProps<Theme> = (theme) => ({
  bgcolor: theme.palette.primary.main,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  py: 3,
  px: 1,
});
const dataContainerStyles: SxProps = {
  py: 3,
  px: 2,
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
};
const descriptionTextStyles: SxProps = {
  flex: 1,
  minWidth: "100%",
  textAlign: 'center'
};
const dividerStyles: SxProps = {
  width: "60%",
  borderColor: "#d0d0d0",
  mx: "auto",
};
