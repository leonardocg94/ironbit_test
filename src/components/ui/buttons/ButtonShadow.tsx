import { Button, ButtonProps } from "@mui/material";
import { FC, PropsWithChildren } from "react";

type Props = {} & ButtonProps;
export const ButtonShadow: FC<PropsWithChildren<Props>> = ({
  children,
  sx,
  ...rest
}) => {
  //RENDERIZADO
  return (
    <Button sx={sx} {...rest}>
      {children}
    </Button>
  );
};
