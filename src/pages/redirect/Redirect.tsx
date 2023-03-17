import { useSearchParams } from "react-router-dom";

const nameSeparator = import.meta.env.VITE_NAME_SEPARATOR;

export function Redirect(): JSX.Element {
  const [params] = useSearchParams();

  console.log(params.get("name")?.split(nameSeparator).join(" "));
  console.log(params.get("linkedin"));
  console.log(params.get("github"));

  return <p>oi</p>;
}
