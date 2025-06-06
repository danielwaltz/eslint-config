import { configs } from "eslint-plugin-depend";
import type { BaseConfig } from "../types.js";
import type { ResolvableFlatConfig } from "eslint-flat-config-utils";

export function dependConfigs<const TConfig extends BaseConfig = BaseConfig>() {
  return [
    {
      name: "danielwaltz/depend",
      ...configs["flat/recommended"],
    },
  ] as const satisfies ResolvableFlatConfig<TConfig>;
}
