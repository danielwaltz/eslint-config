import {
  type ResolvableFlatConfig,
  type FlatConfigComposer,
  composer,
} from "eslint-flat-config-utils";

export function defineFlatConfigs(
  ...configs: ResolvableFlatConfig[]
): FlatConfigComposer {
  return composer(...configs);
}
