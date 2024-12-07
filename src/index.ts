import { hasVue, sxzz } from "@sxzz/eslint-config";
import { vueConfigs } from "./configs/vue.js";
import { defineFlatConfigs } from "./utils.js";
import type { ResolvableFlatConfig } from "eslint-flat-config-utils";

export * from "@sxzz/eslint-config";
export * from "./utils.js";

export function danielwaltz(...userConfigs: ResolvableFlatConfig[]) {
  const composer = defineFlatConfigs(...userConfigs);

  composer.append(sxzz());

  if (hasVue) composer.append(vueConfigs());

  return composer;
}
