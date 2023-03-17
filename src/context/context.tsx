import { createContext } from "react";
import { type IUseContextStore } from "./interfaces";

const initialStore: IUseContextStore = {
  name: "",
  linkedin: "",
  github: "",
  setName: undefined,
  setLinkedin: undefined,
  setGithub: undefined,
};

export const Context =
  createContext<Partial<typeof initialStore>>(initialStore);
