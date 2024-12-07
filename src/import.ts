import type { Linter } from "eslint";
import type { ResolvableFlatConfig } from "eslint-flat-config-utils";
import importPlugin from "eslint-plugin-import-x";

export function importConfigs() {
  return [
    importPlugin.flatConfigs.recommended as Linter.Config,
    importPlugin.flatConfigs.typescript,
    {
      files: ["**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx,d.ts,vue}"],
      rules: {
        "import-x/no-unresolved": ["error", { ignore: ["\\?*$"] }],
        "import-x/order": [
          "warn",
          {
            groups: [
              "builtin",
              "external",
              "internal",
              "parent",
              "sibling",
              "index",
            ],
            alphabetize: { order: "asc", caseInsensitive: false },
          },
        ],
      },
      name: "danielwaltz/import/customized",
    },
  ] as const satisfies ResolvableFlatConfig[];
}
