import { hasVue, sxzz } from "@sxzz/eslint-config";
import { unicornConfigs } from "./configs/unicorn.js";
import { vueConfigs } from "./configs/vue.js";
import { defineFlatConfigs } from "./utils.js";
import type { BaseConfig, BaseConfigNames } from "./types.js";
import type { ResolvableFlatConfig } from "eslint-flat-config-utils";

export * from "@sxzz/eslint-config";
export * from "./utils.js";

export {
  defineFlatConfig,
  type DefaultConfigNamesMap,
} from "eslint-flat-config-utils";

export function danielwaltz<
  const TConfig extends BaseConfig = BaseConfig,
  const TConfigNames extends string = BaseConfigNames,
>(...userConfigs: ResolvableFlatConfig<TConfig>[]) {
  const composer = defineFlatConfigs<TConfig, TConfigNames>(...userConfigs);

  composer.prepend(sxzz());

  composer.append(unicornConfigs<TConfig>());

  if (hasVue()) composer.append(vueConfigs<TConfig>());

  return composer;
}
