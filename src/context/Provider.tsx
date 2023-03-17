import { type PropsWithChildren } from "react";
import { Context } from "./context";
import { useContextStore } from "../hooks";

export function ContextProvider({ children }: PropsWithChildren): JSX.Element {
  const { name, linkedin, github, setName, setLinkedin, setGithub } =
    useContextStore();
  return (
    <Context.Provider
      value={{ name, linkedin, github, setName, setLinkedin, setGithub }}
    >
      {children}
    </Context.Provider>
  );
}
