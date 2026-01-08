import e18e from "@e18e/eslint-plugin";
import type { BaseConfig } from "../types.js";
import type { ResolvableFlatConfig } from "eslint-flat-config-utils";

export function e18eConfigs<const TConfig extends BaseConfig = BaseConfig>() {
  return [
    {
      ...(e18e.configs!.recommended as TConfig),
      name: "danielwaltz/e18e",
    },
  ] as const satisfies ResolvableFlatConfig<TConfig>;
}
