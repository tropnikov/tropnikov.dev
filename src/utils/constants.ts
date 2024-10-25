import type { Site } from "@utils/types.ts";

export const SITE: Site = {
  TITLE: "Max Tropnikov – Front-end Engineer",
  DESCRIPTION:
    "Max Tropnikov is a software frontend engineer, passionate about user experience and speed. Currently in Istanbul, Turkey.",
  EMAIL: "max@tropnikov.dev",
};

export const LINKS = {
  email: "mailto:max@tropnikov.dev",
  telegram: "https://t.me/tropnikov",
  github: "https://github.com/tropnikov",
  linkedin: "https://www.linkedin.com/in/maksim-tropnikov/",
  mastodon: "https://mastodon.social/@totmaks",
  bento: "https://bento.me/tropnikov",
  twitter: "https://twitter.com/totmaks",
};

export const loaderAnimation = [
  ".loader",
  { opacity: [1, 0], pointerEvents: "none" },
  { easing: "ease-out" },
];
