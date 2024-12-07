import type { Linter } from "eslint";
import prettier from "eslint-plugin-prettier/recommended";

export function formatting() {
  return [
    {
      ...prettier,
      name: "danielwaltz/formatting",
    },
  ] as const satisfies Linter.Config[];
}
