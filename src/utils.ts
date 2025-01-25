import { composer, type ResolvableFlatConfig } from "eslint-flat-config-utils";
import type { BaseConfig, BaseConfigNames } from "./types.js";

export function defineFlatConfigs<
  TConfig extends BaseConfig = BaseConfig,
  TConfigNames extends string = BaseConfigNames,
>(...configs: ResolvableFlatConfig<TConfig>[]) {
  return composer<TConfig, TConfigNames>(...configs);
}
