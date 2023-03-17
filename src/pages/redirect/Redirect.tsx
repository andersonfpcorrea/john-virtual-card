import { useContext, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Context } from "../../context";
import { setToSessionStorage } from "../../utils";

const nameSeparator = import.meta.env.VITE_NAME_SEPARATOR;

export function Redirect(): null {
  const nav = useNavigate();
  const { setName, setLinkedin, setGithub } = useContext(Context);
  const [params] = useSearchParams();

  const name = params.get("name")?.split(nameSeparator).join(" ");
  const linkedin = params.get("linkedin");
  const github = params.get("github");

  setToSessionStorage(name, linkedin, github);

  useEffect(() => {
    setName?.(name);
    setLinkedin?.(linkedin);
    setGithub?.(github);
    nav(`/${name ?? ""}`);
  }, []);

  return null;
}
