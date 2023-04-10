import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Box, Typography } from "@mui/material";

export const ResultSeries = () => {
  //REDUX
  const { prime, multiple3, nth } = useSelector(
    (state: RootState) => state.nthTerm
  );
  //RENDERIZADO
  return (
    <Box>
      <Typography variant="body1" mb={2}>
        El número primo en la posición {nth ? nth : "x"} es:{" "}
        <Typography
          component={"span"}
          variant="body1"
          sx={{ fontWeight: "600" }}
        >
          {prime}
        </Typography>
      </Typography>
      <Typography variant="body1">
        El número multiplo de 3 en la posición {nth ? nth : "x"} es:{" "}
        <Typography
          component={"span"}
          variant="body1"
          sx={{ fontWeight: "600" }}
        >
          {multiple3}
        </Typography>
      </Typography>
    </Box>
  );
};
