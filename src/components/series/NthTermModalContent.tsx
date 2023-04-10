import { Box, Divider, SxProps, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const NthTermModalContent = () => {
  //REDUX
  const { messageType, modalMessage, modalTitle } = useSelector(
    (state: RootState) => state.nthTerm.modal
  );
  //RENDERIZADO
  return (
    <Box sx={rootContainerStyles}>
      <Typography
        variant="h3"
        sx={(theme) => ({
          color:
            messageType === "error"
              ? theme.palette.error.main
              : theme.palette.success.main,
        })}
      >
        {modalTitle}
      </Typography>
      <Divider sx={{ my: 4 }} />
      <Typography>{modalMessage}</Typography>
    </Box>
  );
};
//ESTILOS
const rootContainerStyles: SxProps = {
  p: 4,
};
