import { global } from "./global.js";
import { formatting } from "./formatting.js";
import type { ResolvableFlatConfig } from "eslint-flat-config-utils";
import { defineFlatConfigs } from "./utils.js";

export * from "./utils.js";

export function danielwaltz(...userConfigs: ResolvableFlatConfig[]) {
  const composer = defineFlatConfigs(...userConfigs);

  composer.prepend(global());

  composer.append(formatting());

  return composer;
}
