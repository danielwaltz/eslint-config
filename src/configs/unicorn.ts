import type { ResolvableFlatConfig } from "eslint-flat-config-utils";

export function unicornConfigs() {
  return [
    {
      name: "danielwaltz/unicorn",
      rules: {
        "unicorn/filename-case": [
          "error",
          {
            cases: { camelCase: true, kebabCase: true, pascalCase: true },
            ignore: [/^[A-Z]+\..*$/, /import_map\.json/],
          },
        ],
      },
    },
  ] as const satisfies ResolvableFlatConfig;
}
