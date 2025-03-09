import { hasVue, sxzz } from "@sxzz/eslint-config";
import { unicornConfigs } from "./configs/unicorn.js";
import { vueConfigs } from "./configs/vue.js";
import { defineFlatConfigs } from "./utils.js";
import type { BaseConfig, BaseConfigNames } from "./types.js";

export * from "@sxzz/eslint-config";
export * from "./utils.js";

export {
  defineFlatConfig,
  type DefaultConfigNamesMap,
} from "eslint-flat-config-utils";

export async function danielwaltz<
  const TConfig extends BaseConfig = BaseConfig,
  const TConfigNames extends string = BaseConfigNames,
>(...params: Parameters<typeof sxzz>) {
  const composer = defineFlatConfigs<TConfig, TConfigNames>();

  composer.prepend(await sxzz(...params));

  composer.append(unicornConfigs<TConfig>());

  if (hasVue()) composer.append(vueConfigs<TConfig>());

  return composer;
}
