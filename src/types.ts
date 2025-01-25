import type { Linter } from "eslint";
import type { DefaultConfigNamesMap } from "eslint-flat-config-utils";

export type BaseConfig = Linter.Config<Linter.RulesRecord>;
export type BaseConfigNames = keyof DefaultConfigNamesMap;
