import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NthTermSliceState } from "../types/store";
import { Series } from "../utils";

const series = new Series();

const initialState: NthTermSliceState = {
  modal: {
    showModal: false,
    messageType: null,
    modalMessage: "",
    modalTitle: "",
  },
};

export const nthTermSlice = createSlice({
  name: "nthTerm",
  initialState,
  reducers: {
    setNthTerm(state, { payload }: PayloadAction<number>) {
      state.nth = payload;
      series.setNth(payload);
    },
    findNthSeriesTerm(state) {
      const prime = series._getNthTermOfPrimeSeries();
      const multiple3 = series._getNthTermOf3MultipleSeries();
      if ((typeof prime === "string" || typeof multiple3 === "string")) {
        state.modal.messageType = "error";
        state.modal.modalMessage = (prime || multiple3) as string;
        state.modal.showModal = true;
        state.modal.modalTitle = "Ocurrió un error";
        state.multiple3 = 0;
        state.prime = 0;
      } else {
        state.multiple3 = multiple3;
        state.prime = prime;
      }
    },
    setNthTermModalState(
      state,
      { payload }: PayloadAction<NthTermSliceState["modal"]>
    ) {
      state.modal = payload;
    },
  },
});

export const { setNthTerm, findNthSeriesTerm, setNthTermModalState } =
  nthTermSlice.actions;
