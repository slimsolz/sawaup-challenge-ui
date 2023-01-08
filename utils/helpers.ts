export const urlStringConverter = (url: string): string =>
  "https://www.youtube.com/embed/".concat(url.substring(url.indexOf("=") + 1));

export const createGuestUser = (): string => {
  const uniqueCode = Math.floor(Math.random() * (999 - 100 + 1) + 100);
  let user = localStorage.getItem("user");

  if (!user) {
    user = `GUEST${uniqueCode}`;
    localStorage.setItem("user", user);
  }

  return user;
};
