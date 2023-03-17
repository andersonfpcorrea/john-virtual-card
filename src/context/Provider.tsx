import { type PropsWithChildren } from "react";
import { Context } from "./context";

export function ContextProvider({ children }: PropsWithChildren): JSX.Element {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
}
