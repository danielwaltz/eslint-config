# @danielwaltz/eslint-config

My personal ESLint configuration. Extends from [@sxzz/eslint-config](https://github.com/sxzz/eslint-config).

## Installation

```shell
npx -y nypm@latest i -D eslint @danielwaltz/eslint-config
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
