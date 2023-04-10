import { Box } from "@mui/material";
import { SquareContainer } from "../ui/containers";
import { NthTermForm } from "./NthTermForm";
import { ResultSeries } from "./ResultSeries";
import { NthTermModalContent } from "./NthTermModalContent";
import { Modal3D } from "../ui/modals";
import { useSelector } from "react-redux";
import { RootState, setNthTermModalState } from "../../store";
import { useAppDispatch } from "../../hooks";

export const NthTermContent = () => {
  //REDUX
  const { showModal } = useSelector((state: RootState) => state.nthTerm.modal);
  const dispatch = useAppDispatch();
  //FUNCIONES Y MANEJADORES
  const onCloseModalHandler = () =>
    dispatch(
      setNthTermModalState({
        messageType: null,
        modalMessage: "",
        showModal: false,
        modalTitle: "",
      })
    );
  //RENDERIZADO
  return (
    <>
      <SquareContainer>
        <NthTermForm />
        <Box mt={8} />
        <ResultSeries />
      </SquareContainer>
      <Modal3D open={showModal} closeHandler={onCloseModalHandler}>
        <NthTermModalContent />
      </Modal3D>
    </>
  );
};
