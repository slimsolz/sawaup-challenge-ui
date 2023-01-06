export const urlStringConverter = (url: string) =>
  "https://www.youtube.com/embed/".concat(url.substring(url.indexOf("=") + 1));
