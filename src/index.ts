/* eslint-disable @typescript-eslint/no-floating-promises */
import type { ResolvableFlatConfig } from "eslint-flat-config-utils";
import { formattingConfigs } from "./formatting.js";
import { globalConfigs } from "./global.js";
import { importConfigs } from "./import.js";
import { typescriptConfigs } from "./typescript.js";
import { defineFlatConfigs } from "./utils.js";

export * from "./utils.js";

export { formattingConfigs, globalConfigs, importConfigs, typescriptConfigs };

export function danielwaltz(...userConfigs: ResolvableFlatConfig[]) {
  const composer = defineFlatConfigs(...userConfigs);

  composer.prepend(globalConfigs());

  composer.append(typescriptConfigs());

  composer.append(importConfigs());

  composer.append(formattingConfigs());

  return composer;
}
