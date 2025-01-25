import type { Linter } from "eslint";
import type { DefaultConfigNamesMap } from "eslint-flat-config-utils";

export type BaseConfig = Linter.Config;
export type BaseConfigNames = keyof DefaultConfigNamesMap;
