export type NthTermSliceState = {
  nth?: number;
  multiple3?: number;
  prime?: number;
  modal: {
    showModal: boolean;
    modalMessage: string;
    messageType: TNthTermModalMessageTypes | null; 
    modalTitle: string;
  };
};
export const NTH_TERM_MODAL_MESSAGE_TYPES = ["error", "success"] as const;
export type TNthTermModalMessageTypes =
  typeof NTH_TERM_MODAL_MESSAGE_TYPES[number];
