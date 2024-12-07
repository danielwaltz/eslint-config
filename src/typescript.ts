/* eslint-disable import-x/no-named-as-default-member */
import eslint from "@eslint/js";
import type { ResolvableFlatConfig } from "eslint-flat-config-utils";
import tseslint from "typescript-eslint";

export function typescriptConfigs() {
  return tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    tseslint.configs.strictTypeChecked,
    {
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: import.meta.dirname,
        },
      },
      name: "danielwaltz/typescript/language-options",
    },
    {
      files: ["**/*.{js,mjs,cjs,jsx}"],
      extends: [tseslint.configs.disableTypeChecked],
      name: "danielwaltz/typescript/disable-in-javascript",
    },
    {
      files: ["**/*.{ts,mts,cts,tsx,d.ts,vue,svelte,astro}"],
      rules: {
        "@typescript-eslint/consistent-type-imports": [
          "error",
          { fixStyle: "inline-type-imports" },
        ],
        "@typescript-eslint/no-import-type-side-effects": "error",
      },
      name: "danielwaltz/typescript/customized",
    },
  ) as ResolvableFlatConfig;
}
