import type { ResolvableFlatConfig } from "eslint-flat-config-utils";
import prettier from "eslint-plugin-prettier/recommended";

export function formattingConfigs() {
  return [
    {
      ...prettier,
      name: "danielwaltz/formatting/prettier",
    },
  ] as const satisfies ResolvableFlatConfig[];
}
