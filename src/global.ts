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
        "**/generated/**",
        "**/node_modules/**",
        "**/out/**",
      ],
      name: "danielwaltz/global/ignores",
    },
  ] as const satisfies Linter.Config[];
}
