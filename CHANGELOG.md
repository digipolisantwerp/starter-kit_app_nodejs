# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

## [1.5.1] - 2021-02-01

 - build issue (missing public folder)

## [1.5.0] - 2021-01-07

 - Postgres support

## [1.4.2] - 2020-08-13

 - Improve reusability of docker layers & update dependencies
 - Fallback if ARG release is not provided

## [1.4.0] - 2020-08-13

 - Add node 14 support
 - Add LICENSE
 - Add CODE_OF_CONDUCT
 - Update Docker setup
 - Fix db version
 - vulnerabilities updated to fix vulnerabilities in dev dependencies

## [1.3.0] - 2019-11-18

 - Add node 13 support
 - Use [Winston](https://www.npmjs.com/package/winston) as the default logger & disable logging during tests to prevent clutter in output
 - Minor bugfixes

## [1.2.0] - 2019-10-23

 - Add version call
 - Use `npm ci` for faster and stricter builds
 - Upgrade to node 12.13 (LTS)
 - Remove support for node 8
 - Upgrade Stretch to Buster
 - Remove vulnerabilities

## [1.1.0] - 2019-09-17

 - Remove the need to initialize the error middleware
 - Rewrite error middleware with tests
 - Add eslint to default test & fix warnings
 - Add test for fallback route * to cover 100%
 - Minor bugfixes


## [1.0.1] - 2019-09-02

   - Make `app.start()` a promise instead of a callback.
   - Add test for failing `app.start()`.
   - Make db promise instead of callback.
   - Add test for failing connection.
   - [#19](https://github.com/digipolisantwerp/starter-kit_app_nodejs/issues/19) Trust proxy should be enabled by default.
   - [#18](https://github.com/digipolisantwerp/starter-kit_app_nodejs/issues/18) Dockerfile does not build Frontend & build does not work out of the box.



## [1.0.0] - 2019-07-05
First tagged release.


[Unreleased]: https://github.com/digipolisantwerp/starter-kit_app_nodejs/compare/v1.5.1...HEAD

[1.5.1]: https://github.com/digipolisantwerp/starter-kit_app_nodejs/compare/v1.5.1

[1.5.0]: https://github.com/digipolisantwerp/starter-kit_app_nodejs/compare/v1.5.0

[1.4.2]: https://github.com/digipolisantwerp/starter-kit_app_nodejs/compare/v1.4.2

[1.4.0]: https://github.com/digipolisantwerp/starter-kit_app_nodejs/compare/v1.4.0

[1.3.0]: https://github.com/digipolisantwerp/starter-kit_app_nodejs/compare/v1.3.0

[1.2.0]: https://github.com/digipolisantwerp/starter-kit_app_nodejs/compare/v1.2.0

[1.1.0]: https://github.com/digipolisantwerp/starter-kit_app_nodejs/compare/v1.1.0

[1.0.1]: https://github.com/digipolisantwerp/starter-kit_app_nodejs/compare/v1.0.1

[1.0.0]: https://github.com/digipolisantwerp/starter-kit_app_nodejs/compare/v1.0.0
