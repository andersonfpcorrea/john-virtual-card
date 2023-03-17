import { createContext } from "react";

const initialStore = {
  name: "",
  linkedin: "",
  github: "",
};

export const Context =
  createContext<Partial<typeof initialStore>>(initialStore);
