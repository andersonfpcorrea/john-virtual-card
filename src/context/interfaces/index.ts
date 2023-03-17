export interface IUseContextStore {
  name?: string;
  setName?: React.Dispatch<React.SetStateAction<string | undefined>>;
  linkedin?: string;
  setLinkedin?: React.Dispatch<React.SetStateAction<string | undefined>>;
  github?: string;
  setGithub?: React.Dispatch<React.SetStateAction<string | undefined>>;
}
