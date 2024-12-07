import type { ResolvableFlatConfig } from "eslint-flat-config-utils";

export function globalConfigs() {
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
  ] as const satisfies ResolvableFlatConfig[];
}
