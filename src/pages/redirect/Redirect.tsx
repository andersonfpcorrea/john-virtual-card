import { useContext, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Context } from "../../context";

const nameSeparator = import.meta.env.VITE_NAME_SEPARATOR;

export function Redirect(): null {
  const nav = useNavigate();
  const { setName, setLinkedin, setGithub } = useContext(Context);
  const [params] = useSearchParams();

  const name = params.get("name")?.split(nameSeparator).join(" ");

  useEffect(() => {
    setName?.(name);
    setLinkedin?.(params.get("linkedin"));
    setGithub?.(params.get("github"));
    nav(`/${name ?? ""}`);
  }, []);

  return null;
}
