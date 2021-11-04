## @npmcli/eslint-config

This module contains eslint rules used by the npm CLI team. All rules are
listed in `index.js` at the root of this repo.

### Usage

To facilitate having a single `.eslintrc.js` that can live untouched in every
project, we prefer to use a default config like:


```js
const { readdirSync: readdir } = require('fs')

const localConfigs = readdir(__dirname)
  .filter((file) => file.startsWith('.eslintrc.local.'))
  .map((file) => `./${file}`)

module.exports = {
  extends: [
    '@npmcli',
    ...localConfigs,
  ],
}
```

This allows any overrides for a project to exist in a separate file, typically
`.eslintrc.local.json`.

#### `bin`

This module also contains a bin script that will run `eslint` with the bundled config.

```
npm i -D @npmcli/eslint-config

# lint with our style rules
npx @npmcli/eslint-config -- # any args to eslint go here...`
