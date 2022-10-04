# electron-ts

Build any website as a desktop application for Windows, Mac, or Linux.

## Setup

Clone and open project:

```bash
$ git clone https://github.com/cdleveille/electron-ts.git
$ cd electron-ts
```

Install project dependencies:

```bash
$ yarn install
```

Build project:

```bash
$ yarn build
```

## Configure

The target URL can be passed in via `.env` file in the root directory:

```
URL=https://www.google.com
```

Alternatively, the string value assigned to the `DEFAULT_URL` variable in `src/main.ts` can be changed (build required):

```ts
const DEFAULT_URL = "https://www.google.com";
```

Once the project is released as an executable, the URL can also be passed in via command line argument at runtime:

```bash
> electron-ts.exe --url="https://www.google.com"
```

## Test

Run the app locally:

```bash
$ yarn start
```

## Release

Build the app for Windows:

```bash
$ yarn release-win [app_name]
```

Build the app for MacOS (must be run on a Mac):

```bash
$ yarn release-mac [app_name]
```

Build the app for Linux:

```bash
$ yarn release-linux [app_name]
```

All releases will be output to the `release` folder.
