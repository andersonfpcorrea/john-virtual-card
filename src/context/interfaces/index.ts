export interface IUseContextStore {
  name?: string | null;
  setName?: React.Dispatch<React.SetStateAction<string | undefined | null>>;
  linkedin?: string | null;
  setLinkedin?: React.Dispatch<React.SetStateAction<string | undefined | null>>;
  github?: string | null;
  setGithub?: React.Dispatch<React.SetStateAction<string | undefined | null>>;
}
