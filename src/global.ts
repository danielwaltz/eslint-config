import type { Linter } from "eslint";

export function global() {
  return [
    {
      ignores: [
        "**/.next/**",
        "**/.nuxt/**",
        "**/build/**",
        "**/coverage/**",
        "**/dist/**",
        "**/node_modules/**",
        "**/out/**",
      ],
      name: "danielwaltz/global",
    },
  ] as const satisfies Linter.Config[];
}
