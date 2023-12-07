# Changelog

## [4.0.3](https://github.com/npm/eslint-config/compare/v4.0.2...v4.0.3) (2023-12-07)

### Chores

* [`82484a5`](https://github.com/npm/eslint-config/commit/82484a533af4eaa3c6c9673c46cfd1d5ef48ab50) [#98](https://github.com/npm/eslint-config/pull/98) postinstall for dependabot template-oss PR (@lukekarrys)
* [`c765633`](https://github.com/npm/eslint-config/commit/c7656332d34217e5713dc11c1ef62f142e8d2de5) [#98](https://github.com/npm/eslint-config/pull/98) bump @npmcli/template-oss from 4.21.1 to 4.21.3 (@dependabot[bot])
* [`3704d59`](https://github.com/npm/eslint-config/commit/3704d59b7e6a3bd541e48af35f091f611bf45d0f) [#95](https://github.com/npm/eslint-config/pull/95) postinstall for dependabot template-oss PR (@lukekarrys)
* [`c137125`](https://github.com/npm/eslint-config/commit/c1371253aac9e7eab630bbf23cdb095cee656508) [#95](https://github.com/npm/eslint-config/pull/95) bump @npmcli/template-oss from 4.19.0 to 4.21.1 (@dependabot[bot])
* [`4540676`](https://github.com/npm/eslint-config/commit/4540676a275ba18afcaf16ef24a962ae56771e25) [#76](https://github.com/npm/eslint-config/pull/76) postinstall for dependabot template-oss PR (@lukekarrys)
* [`7c2757f`](https://github.com/npm/eslint-config/commit/7c2757faaebd6cf691be2e99cbbd4339a66c7fe4) [#76](https://github.com/npm/eslint-config/pull/76) bump @npmcli/template-oss from 4.18.1 to 4.19.0 (@dependabot[bot])
* [`45d13a5`](https://github.com/npm/eslint-config/commit/45d13a53343168d977b94dcefa8b701743175933) [#75](https://github.com/npm/eslint-config/pull/75) postinstall for dependabot template-oss PR (@lukekarrys)
* [`7032111`](https://github.com/npm/eslint-config/commit/7032111f0cab50ffe34e3cb981970a81c9a8aeaf) [#75](https://github.com/npm/eslint-config/pull/75) bump @npmcli/template-oss from 4.18.0 to 4.18.1 (@dependabot[bot])
* [`2dd5976`](https://github.com/npm/eslint-config/commit/2dd597656a038fa149b32868193bcfb9e93ec494) [#73](https://github.com/npm/eslint-config/pull/73) postinstall for dependabot template-oss PR (@lukekarrys)
* [`d0fc181`](https://github.com/npm/eslint-config/commit/d0fc181285bb9bfaae6eafbc608f31b0679ecb3f) [#73](https://github.com/npm/eslint-config/pull/73) bump @npmcli/template-oss from 4.17.0 to 4.18.0 (@dependabot[bot])
* [`0d5e9c1`](https://github.com/npm/eslint-config/commit/0d5e9c171fcee11e7a5b37330f1866672f5a36c7) [#71](https://github.com/npm/eslint-config/pull/71) postinstall for dependabot template-oss PR (@lukekarrys)
* [`e310707`](https://github.com/npm/eslint-config/commit/e310707d1ef323e274f238860134cbaf15a6d3f6) [#71](https://github.com/npm/eslint-config/pull/71) bump @npmcli/template-oss from 4.15.1 to 4.17.0 (@dependabot[bot])

## [4.0.2](https://github.com/npm/eslint-config/compare/v4.0.1...v4.0.2) (2023-05-09)

### Bug Fixes

* [`653976f`](https://github.com/npm/eslint-config/commit/653976fcac5fe68e8de292844f95482849b83b46) [#67](https://github.com/npm/eslint-config/pull/67) do not allow importing dev deps from lib/bin (#67) (@tjenkinson)

## [4.0.1](https://github.com/npm/eslint-config/compare/v4.0.0...v4.0.1) (2022-11-03)

### Dependencies

* [`d1336c9`](https://github.com/npm/eslint-config/commit/d1336c9e7ed63325a709992c20884c6f921ee32b) [#56](https://github.com/npm/eslint-config/pull/56) bump which from 2.0.2 to 3.0.0

## [4.0.0](https://github.com/npm/eslint-config/compare/v3.1.0...v4.0.0) (2022-10-10)

### ⚠️ BREAKING CHANGES

* `@npmcli/eslint-config` is now compatible with the following semver range for node: `^14.17.0 || ^16.13.0 || >=18.0.0`

### Features

* [`aacbd69`](https://github.com/npm/eslint-config/commit/aacbd69cc05e6c9b5b9bdf14f8389af65dfceecb) [#47](https://github.com/npm/eslint-config/pull/47) postinstall for dependabot template-oss PR (@lukekarrys)

## [3.1.0](https://github.com/npm/eslint-config/compare/v3.0.1...v3.1.0) (2022-07-21)


### Features

* add import, promise, and recommended rules ([#34](https://github.com/npm/eslint-config/issues/34)) ([e1c01fd](https://github.com/npm/eslint-config/commit/e1c01fd5ab6f53c8d307a00263f5388cee2c194c))

### [3.0.1](https://www.github.com/npm/eslint-config/compare/v3.0.0...v3.0.1) (2022-03-14)


### Bug Fixes

* ignore tap-snapshots from linting ([#21](https://www.github.com/npm/eslint-config/issues/21)) ([eb127fc](https://www.github.com/npm/eslint-config/commit/eb127fc366aadde588e192f6adefd6f224dfb8d1))

## [3.0.0](https://www.github.com/npm/eslint-config/compare/v2.0.0...v3.0.0) (2022-02-14)


### ⚠ BREAKING CHANGES

* this will report lint errors for all variable shadowing except for the common case of `t` used in tap tests

### Features

* add `no-shadow` rule as an error ([#11](https://www.github.com/npm/eslint-config/issues/11)) ([7af16a8](https://www.github.com/npm/eslint-config/commit/7af16a81a2881e22314c3ee2c6036be912e0dc58))
* allow global/native extensions in tests ([#9](https://www.github.com/npm/eslint-config/issues/9)) ([5ddad11](https://www.github.com/npm/eslint-config/commit/5ddad11acbe7bbb9ca5dcca6708c568d59b3492b))
