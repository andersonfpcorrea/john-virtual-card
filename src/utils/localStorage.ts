export const setToSessionStorage = (
  name?: string | null,
  linkedin?: string | null,
  github?: string | null
): void => {
  sessionStorage.setItem("name", name ?? "");
  sessionStorage.setItem("linkedin", linkedin ?? "");
  sessionStorage.setItem("github", github ?? "");
};

export const getAllFromSessionStorage = (): {
  name: string | null;
  linkedin: string | null;
  github: string | null;
} => {
  const name = sessionStorage.getItem("name");
  const linkedin = sessionStorage.getItem("linkedin");
  const github = sessionStorage.getItem("github");

  return {
    name,
    linkedin,
    github,
  };
};
