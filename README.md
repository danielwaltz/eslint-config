# @danielwaltz/eslint-config [![npm](https://img.shields.io/npm/v/@danielwaltz/eslint-config.svg)](https://npmjs.com/package/@danielwaltz/eslint-config)

My personal ESLint configuration. Extends from [@sxzz/eslint-config](https://github.com/sxzz/eslint-config).

## Installation

```shell
npx -y nypm@latest i -D eslint prettier @danielwaltz/eslint-config
```

## Usage

Using a TypeScript `eslint.config.ts` config file is ideal.

```ts
import { danielwaltz } from "@danielwaltz/eslint-config";

export default danielwaltz();
```

## Customization

Refer to [eslint-flat-config-utils](https://github.com/antfu/eslint-flat-config-utils) for all available options.

```ts
import { danielwaltz } from "@danielwaltz/eslint-config";

export default danielwaltz([...customConfigs])
  .prepend([...prependConfigs])
  .append([...appendConfigs]);
```

## Nuxt

Install the official [Nuxt ESLint](https://eslint.nuxt.com/) module.

```shell
npx nuxi module add eslint
```

Update the generated config.

```ts
import { danielwaltz } from "@danielwaltz/eslint-config";
import { withNuxt } from "./.nuxt/eslint.config.mjs";

export default withNuxt(danielwaltz());
```
