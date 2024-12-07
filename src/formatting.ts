import type { Linter } from "eslint";
import prettier from "eslint-plugin-prettier/recommended";

export function formatting() {
  return [
    {
      ...prettier,
      name: "danielwaltz/formatting/prettier",
    },
  ] as const satisfies Linter.Config[];
}
