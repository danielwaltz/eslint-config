import type { ResolvableFlatConfig } from "eslint-flat-config-utils";
import prettier from "eslint-plugin-prettier/recommended";

export function formattingConfigs() {
  return [
    prettier,
    {
      rules: { "prettier/prettier": "warn" },
      name: "danielwaltz/formatting/customized",
    },
  ] as const satisfies ResolvableFlatConfig[];
}
