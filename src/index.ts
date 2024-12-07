import type { ResolvableFlatConfig } from "eslint-flat-config-utils";
import { formattingConfigs } from "./formatting.js";
import { globalConfigs } from "./global.js";
import { importConfigs } from "./import.js";
import { typescriptConfigs } from "./typescript.js";
import { defineFlatConfigs } from "./utils.js";

export * from "./utils.js";

export async function danielwaltz(...userConfigs: ResolvableFlatConfig[]) {
  const composer = defineFlatConfigs(...userConfigs);

  await composer.prepend(globalConfigs());

  await composer.append(typescriptConfigs());

  await composer.append(importConfigs());

  await composer.append(formattingConfigs());

  return composer;
}
