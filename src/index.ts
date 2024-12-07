import { global } from "./global.js";
import { formatting } from "./formatting.js";
import type { ResolvableFlatConfig } from "eslint-flat-config-utils";
import { defineFlatConfigs } from "./utils.js";
import { typescript } from "./typescript.js";

export * from "./utils.js";

export async function danielwaltz(...userConfigs: ResolvableFlatConfig[]) {
  const composer = defineFlatConfigs(...userConfigs);

  await composer.prepend(global());

  await composer.append(typescript());

  await composer.append(formatting());

  return composer;
}
