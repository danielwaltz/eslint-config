import erasableSyntaxOnlyPlugin from "eslint-plugin-erasable-syntax-only";
import type { BaseConfig } from "../types.js";
import type { ResolvableFlatConfig } from "eslint-flat-config-utils";

export function typescriptConfigs<
  const TConfig extends BaseConfig = BaseConfig,
>() {
  return [
    {
      name: "danielwaltz/erasable-syntax-only",
      ...(erasableSyntaxOnlyPlugin.configs.recommended as BaseConfig),
    },
  ] as const satisfies ResolvableFlatConfig<TConfig>;
}
