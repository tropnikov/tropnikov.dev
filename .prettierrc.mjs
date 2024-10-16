// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  printWidth: 80,
  arrowParens: "always",
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        printWidth: 80,
      },
    },
  ],
};
