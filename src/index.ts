import { hasVue, sxzz } from "@sxzz/eslint-config";
import { e18eConfigs } from "./configs/e18e.js";
import { typescriptConfigs } from "./configs/typescript.js";
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

export function danielwaltz<
  const TConfig extends BaseConfig = BaseConfig,
  const TConfigNames extends string = BaseConfigNames,
>(...params: Parameters<typeof sxzz>) {
  const composer = defineFlatConfigs<TConfig, TConfigNames>();

  composer.prepend(sxzz(...params));

  composer.append(e18eConfigs<TConfig>());
  composer.append(typescriptConfigs<TConfig>());
  composer.append(unicornConfigs<TConfig>());
  if (hasVue()) composer.append(vueConfigs<TConfig>());

  return composer;
}
