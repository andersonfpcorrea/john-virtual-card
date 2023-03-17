import { useState } from "react";
import { type IUseContextStore } from "../context";

export const useContextStore = (): IUseContextStore => {
  const [name, setName] = useState<IUseContextStore["name"]>(undefined);
  const [linkedin, setLinkedin] =
    useState<IUseContextStore["linkedin"]>(undefined);
  const [github, setGithub] = useState<IUseContextStore["github"]>(undefined);

  return {
    name,
    setName,
    linkedin,
    setLinkedin,
    github,
    setGithub,
  };
};
