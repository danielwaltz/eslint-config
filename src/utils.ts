import {
  composer,
  type FlatConfigComposer,
  type ResolvableFlatConfig,
} from "eslint-flat-config-utils";

export function defineFlatConfigs(
  ...configs: ResolvableFlatConfig[]
): FlatConfigComposer {
  return composer(...configs);
}
