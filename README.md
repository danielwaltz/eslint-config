# @danielwaltz/eslint-config

My personal ESLint configuration.

## Installation

```shell
npx -y nypm@latest i -D eslint prettier @danielwaltz/eslint-config
```

## Usage

```mjs
import { danielwaltz } from "@danielwaltz/eslint-config";

export default danielwaltz();
```

## Customization

```mjs
import { danielwaltz } from "@danielwaltz/eslint-config";

export default danielwaltz([...customRules])
  .prepend([...prependRules])
  .append([...appendRules]);
```
