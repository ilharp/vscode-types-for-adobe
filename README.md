# [vscode-types-for-adobe](https://github.com/Afanyiyu/vscode-types-for-adobe)

Use [Types-for-Adobe](https://github.com/bbb999/Types-for-Adobe) in Visual Studio Code. No need for Node.js, TypeScript or Git.

![Demo](https://cdn.jsdelivr.net/gh/Afanyiyu/vscode-types-for-adobe@master/docs/demo.gif)

## Features

Automatic add type definitions for Adobe ExtendScripts in your workspace.

## Usage

1. Install [ExtendScript Development Pack](https://marketplace.visualstudio.com/items?itemName=il-harper.vscode-extendscript-pack).

1. Open a folder and create a new JavaScript file.

1. Execute "Types for Adobe: Set-Up Types for Adobe" command and select your target product and API version.

1. Enjoy it!

## Requirements

Zero. No need for Node.js, TypeScript or Git.

## FAQ

- Q: You created `jsconfig.json` instead of `tsconfig.json` for me. Why?

A: I don't know if your project is a TypeScript project or a JavaScipt project, so I created `jsconfig.json` because VSCode will use that file for both JS and TS files if there are no `tsconfig.json`. If you need `tsconfig.json`, just rename `jsconfig.json` to it.

<!--
- Q: Why can't I use `files` field in `ts/jsconfig.json`?

A: This plugin requires **glob including** type definition files, so you must change `files` to `include` to manage your files.
-->

- Q: I'm using remote workspace and the config seems wrong.

A: Please install this plugin to your remote machine and use the plugin from remote.

- Q: I have both `jsconfig.json` and `tsconfig.json`. Types not working.

A: Please delete one of them.

## TODOs

- [ ] Add option to let user select custom [Types-for-Adobe](https://github.com/bbb999/Types-for-Adobe) folder on local drives.

- [ ] Add Set-Down command.

- [ ] Add `Do not show again` button on notifications.

- [ ] Beautify the result of JSON.stringify()

<!--
- [ ] Add more products' info into `productInfo.ts` - We need your help! If you have a "name-version comparison table" for Adobe products, please create an [issue](https://github.com/Afanyiyu/vscode-types-for-adobe/issues) or submit a PR!
-->

## Changelog

See [CHANGELOG](https://github.com/Afanyiyu/vscode-types-for-adobe/blob/master/CHANGELOG.md).

## BUGs & Issues

Feel free to open [issues](https://github.com/Afanyiyu/vscode-types-for-adobe/issues).

## Contributions

PRs are welcome! Feel free to contribute on this project.

## LICENSE

The code **in this plugin** use [MIT LICENSE](https://github.com/Afanyiyu/vscode-types-for-adobe/blob/master/LICENSE). The copyright of other content belongs to its owner.
