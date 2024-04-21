# Changelog

## [4.0.3](https://github.com/npm/eslint-config/compare/v4.0.2...v4.0.3) (2024-04-21)

### Bug Fixes

* [`acd463d`](https://github.com/npm/eslint-config/commit/acd463dfb7637118d8d6fe4690d743d17d771d96) [#103](https://github.com/npm/eslint-config/pull/103) set args to after-used for no-unused-vars rule (#103) (@lukekarrys)
* [`436f26c`](https://github.com/npm/eslint-config/commit/436f26cc248b10126abcb992fd9c5b69418d51ca) [#102](https://github.com/npm/eslint-config/pull/102) don't enforce max-len on comments (#102) (@wraithgar)

### Chores

* [`f2706f7`](https://github.com/npm/eslint-config/commit/f2706f72b75d4b59a2cb11c228832d6b4eed8252) [#104](https://github.com/npm/eslint-config/pull/104) postinstall for dependabot template-oss PR (@lukekarrys)
* [`511b2b7`](https://github.com/npm/eslint-config/commit/511b2b7d123e383126b7e719f00f0d72b189c370) [#104](https://github.com/npm/eslint-config/pull/104) bump @npmcli/template-oss from 4.21.3 to 4.21.4 (@dependabot[bot])

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
