import { Box, SxProps, Theme } from "@mui/material";
import { FC, PropsWithChildren } from "react";

type Props = {};
export const SquareContainer: FC<PropsWithChildren<Props>> = ({ children }) => {
  return <Box sx={rootContainerStyles}>{children}</Box>;
};

const rootContainerStyles: SxProps<Theme> = (theme) => ({
  bgcolor: "white",
  width: "800px",
  maxWidth: "100%",
  mx: "auto",
  p: 4,
  boxShadow: "10px 10px 5px rgba(0,0,0,0.16)",
  borderTop: `3px solid ${theme.palette.primary.main}`,
  borderLeft: `3px solid ${theme.palette.primary.main}`,
});
