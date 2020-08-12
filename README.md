@tmuniversal/ts [![NPM](https://img.shields.io/npm/v/@tmuniversal/ts.svg)](https://www.npmjs.com/package/@tmuniversal/ts)
===

TypeScript config, linting and compiler helper for my projects.

Inspired by [@ayanaware/ts](https://gitlab.com/ayanaware/ts).

Installation
---

```bash
yarn add @tmuniversal/ts tslint typescript --dev
```

```bash
npm i @tmuniversal/ts tslint typescript --only=dev
```

Usage
---

To use the TSConfig, add the following to your `tsconfig.json`:

```json
{
	"extends": "@tmuniversal/ts/config"
}
```


To use the TSLint config, add the following to your `tslint.json`:

```json
{
	"extends": "@tmuniversal/ts/lint"
}
```
