import { Box, IconButton, Modal, ModalProps, SxProps } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  containerStyles?: SxProps;
  modalStyles?: SxProps;
  closeHandler: () => void;
} & ModalProps;
export const Modal3D: FC<PropsWithChildren<Props>> = ({
  children,
  containerStyles,
  modalStyles,
  closeHandler,
  ...rest
}) => {
  //ESTILOS DINÁMICOS 
  const modalInitialStyles: SxProps = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...(modalStyles && modalStyles),
  };
  const finalContaninerStyles: SxProps = {
    maxWidth: "95%",
    bgcolor: "white",
    boxShadow: "8px 8px 0px #A5FCD4",
    position: "relative",
    "::before": {
      content: '""',
      width: "10px",
      height: "8px",
      bgcolor: "#A5FCD4",
      position: "absolute",
      left: "2px",
      bottom: "-5px",
      transform: "rotateZ(45deg)",
      zIndex: -1,
    },
    "::after": {
      content: '""',
      width: "10px",
      height: "8px",
      bgcolor: "#A5FCD4",
      position: "absolute",
      top: "2.5px",
      right: "-6px",
      transform: "rotateZ(45deg)",
      zIndex: -1,
    },
    ...(containerStyles && containerStyles),
  };
  //RENDERIZADO
  return (
    <Modal sx={modalInitialStyles} {...rest} disableScrollLock={true} >
      <Box sx={finalContaninerStyles}>
        <>
          <IconButton sx={closeButtonStyles} onClick={closeHandler}>
            <CloseIcon />
          </IconButton>
          {children}
        </>
      </Box>
    </Modal>
  );
};
//ESTILOS
const closeButtonStyles: SxProps = {
  position: "absolute",
  right: { sm: "-40px", xs: "0px" },
  top: "-40px",
  border: "2px solid white",
  borderRadius: "0px",
  width: "30px",
  height: "30px",
  color: "white",
};
