import type { BaseConfig } from "../types.js";
import type { ResolvableFlatConfig } from "eslint-flat-config-utils";

const FILENAME_CASE_IGNORE_REGEXES = [/^[A-Z]+\..*$/, /import_map\.json/];

export function unicornConfigs<
  const TConfig extends BaseConfig = BaseConfig,
>() {
  return [
    {
      name: "danielwaltz/unicorn",
      rules: {
        "unicorn/filename-case": [
          "error",
          {
            cases: { camelCase: true, kebabCase: true, pascalCase: true },
            ignore: FILENAME_CASE_IGNORE_REGEXES,
          },
        ],
      },
    },
  ] as const satisfies ResolvableFlatConfig<TConfig>;
}
