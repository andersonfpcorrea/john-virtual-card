import { useSearchParams } from "react-router-dom";

export function Redirect(): JSX.Element {
  const [params] = useSearchParams();
  return <p>{params}</p>;
}
