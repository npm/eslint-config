# Changelog

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
