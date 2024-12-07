import type { Linter } from "eslint";
import {
  type ResolvableFlatConfig,
  type FlatConfigComposer,
  composer,
} from "eslint-flat-config-utils";

export function defineFlatConfigs(
  ...configs: ResolvableFlatConfig[]
): FlatConfigComposer<Linter.Config> {
  return composer(...configs);
}
