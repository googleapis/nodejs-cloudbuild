# Changelog

### [2.0.4](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v2.0.3...v2.0.4) (2020-11-03)


### ⚠ BREAKING CHANGES

* The WorkerPool API in the v1 surface has been long deprecated, so it has been deleted from the v1 surface. Alpha WorkerPool customers who want to call the WorkerPool API can use gcloud.

### Features

* updated third_party Cloud Build clients with new Build message, fix: revert removal of WorkerPool API ([#166](https://www.github.com/googleapis/nodejs-cloudbuild/issues/166)) ([b8d7a39](https://www.github.com/googleapis/nodejs-cloudbuild/commit/b8d7a395bbcc2f6ff83b798ef678e2f27395802d))


### Bug Fixes

* revert removal of WorkerPool API ([#178](https://www.github.com/googleapis/nodejs-cloudbuild/issues/178)) ([07400cb](https://www.github.com/googleapis/nodejs-cloudbuild/commit/07400cbcb05808762ab3c56c5827607cdefd43c0))

### [2.0.3](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v2.0.2...v2.0.3) (2020-07-24)


### Bug Fixes

* add missing cloudbuild RPCs to retry config, add Node 8 tests  ([#141](https://www.github.com/googleapis/nodejs-cloudbuild/issues/141)) ([e4b83e8](https://www.github.com/googleapis/nodejs-cloudbuild/commit/e4b83e8a63f6ddba2ea158ab0ed9b4a50fa536bf))
* inline markup spans must be separated from the surrounding text by non-word characters ([#146](https://www.github.com/googleapis/nodejs-cloudbuild/issues/146)) ([52b4770](https://www.github.com/googleapis/nodejs-cloudbuild/commit/52b4770f0c262ce91306e31d68f3b47b0598751d))

### [2.0.2](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v2.0.1...v2.0.2) (2020-07-09)


### Bug Fixes

* typeo in nodejs .gitattribute ([#132](https://www.github.com/googleapis/nodejs-cloudbuild/issues/132)) ([80b5bd9](https://www.github.com/googleapis/nodejs-cloudbuild/commit/80b5bd963aa43e5a47da9e6d0e2ffbf0cde7feef))

### [2.0.1](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v2.0.0...v2.0.1) (2020-07-06)


### Bug Fixes

* support fallback mode for electron ([#124](https://www.github.com/googleapis/nodejs-cloudbuild/issues/124)) ([d2c9f9b](https://www.github.com/googleapis/nodejs-cloudbuild/commit/d2c9f9b69463f9739b1813c673ba53ee97c9a3d5))

## [2.0.0](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v1.5.0...v2.0.0) (2020-06-11)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.

### Features

* add time-to-live in a queue for builds ([04e3387](https://www.github.com/googleapis/nodejs-cloudbuild/commit/04e3387af33a7ab39eb0c4df47ce08026507b499))
* check status of long running operation by its name ([#114](https://www.github.com/googleapis/nodejs-cloudbuild/issues/114)) ([7b50a74](https://www.github.com/googleapis/nodejs-cloudbuild/commit/7b50a74c098e782393f92140a37e3bd26f45e77d))
* drop node8 support, support for async iterators ([#91](https://www.github.com/googleapis/nodejs-cloudbuild/issues/91)) ([74a195d](https://www.github.com/googleapis/nodejs-cloudbuild/commit/74a195d5cdf63dab1ac3d0d52ef42e1254ab3a2e))
* improve support for x-goog-request-params ([#111](https://www.github.com/googleapis/nodejs-cloudbuild/issues/111)) ([e08d640](https://www.github.com/googleapis/nodejs-cloudbuild/commit/e08d64017e059c911ebe55055c26a0ab76481d86))
* move ts target to es2018 from es2016 ([#121](https://www.github.com/googleapis/nodejs-cloudbuild/issues/121)) ([59c5477](https://www.github.com/googleapis/nodejs-cloudbuild/commit/59c547744519ef9e8d073ea3ecdb81248176a71a))


### Bug Fixes

* remove eslint, update gax, fix generated protos, run the generator ([#100](https://www.github.com/googleapis/nodejs-cloudbuild/issues/100)) ([aafb9cc](https://www.github.com/googleapis/nodejs-cloudbuild/commit/aafb9cc7745b4d5d6dce58f17763f76379af733f))
* synth.py clean up for multiple version ([#115](https://www.github.com/googleapis/nodejs-cloudbuild/issues/115)) ([aa7d99b](https://www.github.com/googleapis/nodejs-cloudbuild/commit/aa7d99b9c02267808cac07f7691f5ce62f06ca14))

## [1.5.0](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v1.4.0...v1.5.0) (2020-03-09)


### Features

* cloudbuild/v1 add new fields and annotate OUTPUT_OUT fields. ([#79](https://www.github.com/googleapis/nodejs-cloudbuild/issues/79)) ([0889fff](https://www.github.com/googleapis/nodejs-cloudbuild/commit/0889fff058e83dd421d4ad798c0f5318d74f22ff))
* deferred client initialization ([#75](https://www.github.com/googleapis/nodejs-cloudbuild/issues/75)) ([47b177d](https://www.github.com/googleapis/nodejs-cloudbuild/commit/47b177dfed997bf4fafcf2810ddae9c5c7815112))
* export protos in src/index.ts ([c8e28b3](https://www.github.com/googleapis/nodejs-cloudbuild/commit/c8e28b3f39fa25e09ebaf19292a46b9078738498))

## [1.4.0](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v1.3.3...v1.4.0) (2020-02-13)


### Features

* bump release level to GA ([#62](https://www.github.com/googleapis/nodejs-cloudbuild/issues/62)) ([114756d](https://www.github.com/googleapis/nodejs-cloudbuild/commit/114756d12007d1978fc3e4bb71b72e543bcc6945))

### [1.3.3](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v1.3.2...v1.3.3) (2020-02-10)


### Bug Fixes

* pass x-goog-request-params header for streaming calls ([365842b](https://www.github.com/googleapis/nodejs-cloudbuild/commit/365842beb7e0ceee9f5861d4172f5de076335902))

### [1.3.2](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v1.3.1...v1.3.2) (2020-01-28)


### Bug Fixes

* enum, bytes, and Long types now accept strings ([64538fe](https://www.github.com/googleapis/nodejs-cloudbuild/commit/64538fe21aae6430f8f3e1ec6604b286bd890535))

### [1.3.1](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v1.3.0...v1.3.1) (2020-01-06)


### Bug Fixes

* increase timeout from 20s to 60s ([#35](https://www.github.com/googleapis/nodejs-cloudbuild/issues/35)) ([b9d7f10](https://www.github.com/googleapis/nodejs-cloudbuild/commit/b9d7f1089bd3dc0f3d53f54015b12bd2bf036c62))
* wait for client before checking for terminate ([35c1905](https://www.github.com/googleapis/nodejs-cloudbuild/commit/35c19050bd7594301df14ffa182fc6e6e73c1d64))

## [1.3.0](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v1.2.0...v1.3.0) (2019-12-11)


### Features

* make operationsClient and service stub public ([2fa96df](https://www.github.com/googleapis/nodejs-cloudbuild/commit/2fa96dfe9145f479a2561b5a1215a6ffd19ddf07))

## [1.2.0](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v1.1.0...v1.2.0) (2019-12-05)


### Features

* add default exports ([#22](https://www.github.com/googleapis/nodejs-cloudbuild/issues/22)) ([870bfd6](https://www.github.com/googleapis/nodejs-cloudbuild/commit/870bfd649e99f0332b04b51eddfce27ab5078cf5))


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([c8d7267](https://www.github.com/googleapis/nodejs-cloudbuild/commit/c8d72671a810750d13d327e78b0eafbd0aeac46f))
* **docs:** snippets are now replaced in jsdoc comments ([#21](https://www.github.com/googleapis/nodejs-cloudbuild/issues/21)) ([b6bf159](https://www.github.com/googleapis/nodejs-cloudbuild/commit/b6bf159e7d3799121b58fe8b290181c16b6aa894))

## [1.1.0](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v1.0.0...v1.1.0) (2019-11-11)


### Features

* adds listBuildTriggersStream method ([59dad8a](https://www.github.com/googleapis/nodejs-cloudbuild/commit/59dad8afb351527cd7fd3348921ce30e4cd1956b))

## 1.0.0 (2019-10-31)


### Features

* initial release of cloud build library ([#2](https://www.github.com/googleapis/nodejs-cloudbuild/issues/2)) ([b3dbed2](https://www.github.com/googleapis/nodejs-cloudbuild/commit/b3dbed28a63e88f09bcaf7bfa2984582ef058fb6))
* **docs:** add listBuildTriggers sample to README ([#5](https://www.github.com/googleapis/nodejs-cloudbuild/issues/5)) ([adcdb63](https://www.github.com/googleapis/nodejs-cloudbuild/commit/adcdb632244ddf18c1b57a1b0bdef1dcef3ae14b))
* moves library to TypeScript code generation ([#10](https://www.github.com/googleapis/nodejs-cloudbuild/issues/10)) ([871fa08](https://www.github.com/googleapis/nodejs-cloudbuild/commit/871fa0814d9483fdfa0081fad409c535ce25cac1))
