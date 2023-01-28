// https://dev.to/franklin030601/usando-zustand-con-react-js-33le
import create from "zustand";

export const useLoginStore = create((set, get) => ({
  isLoged: false,
  name: "",

  updateLogin: newLogin => {
    // const loginState = get().isLoged;
    set({ isLoged: newLogin });
  },

  updateName: newName => {
    //  const nameState = get().name;
    set({ name: newName });
  },
}));
