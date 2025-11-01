import {
  composer,
  type FlatConfigComposer,
  type ResolvableFlatConfig,
} from "eslint-flat-config-utils";
import type { BaseConfig, BaseConfigNames } from "./types.js";

export function defineFlatConfigs<
  const TConfig extends BaseConfig = BaseConfig,
  const TConfigNames extends string = BaseConfigNames,
>(
  ...configs: ResolvableFlatConfig<TConfig>[]
): FlatConfigComposer<TConfig, TConfigNames> {
  return composer(...configs) as FlatConfigComposer<TConfig, TConfigNames>;
}
