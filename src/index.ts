import { hasVue, sxzz } from "@sxzz/eslint-config";
import { e18eConfigs } from "./configs/e18e.ts";
import { typescriptConfigs } from "./configs/typescript.ts";
import { vueConfigs } from "./configs/vue.ts";
import { defineFlatConfigs } from "./utils.ts";
import type { BaseConfig, BaseConfigNames } from "./types.ts";

export * from "./utils.ts";
export * from "@sxzz/eslint-config";

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
  if (hasVue()) composer.append(vueConfigs<TConfig>());

  return composer;
}
