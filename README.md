<p align="center">
  <img src="https://github.com/joshwcomeau/new-component/blob/main/docs/logo@2x.png?raw=true" width="285" height="285" alt="new-component logo">
  <br>
  <a href="https://www.npmjs.org/package/new-component"><img src="https://img.shields.io/npm/v/new-component.svg?style=flat" alt="npm"></a>
</p>

# create-component

### Simple, customizable utility for adding new React components to your project.

This project is a CLI tool that allows you to quickly scaffold new components. All of the necessary boilerplate will be generated automatically.

<br />

## Features

- Simple CLI interface for adding new React components
- Customizable file structure and naming conventions

<br />

## Quickstart

Install via NPM:

```bash
# Using Yarn:
$ yarn global add new-component

# or, using NPM
$ npm i -g new-component
```

`cd` into your project's directory, and try creating a new component:

```bash
$ new-component MyNewComponent
```

Your project will now have a new directory at `src/components/MyNewComponent`. This directory has three files:

```jsx
// `MyNewComponent/index.ts`
export * from './MyNewComponent';
```

```jsx
// `MyNewComponent/MyNewComponent.tsx`
import { MyNewComponentContainer } from "./MyNewComponent.styled";

export const MyNewComponent = () => {
  return <MyNewComponentContainer></MyNewComponentContainer>;
}
```
```jsx
// `MyNewComponent/MyNewComponent.styled.ts`
import styled from "styled-components";

export const MyNewComponentContainer = styled.div`
  size: 100%;
`;
```

These files will be formatted according to your Prettier configuration.

<br />

### Coming soon:
## Configuration

Configuration can be done through 3 different ways:

- Creating a global `.new-component-config.json` in your home directory (`~/.new-component-config.json`).
- Creating a local `.new-component-config.json` in your project's root directory.
- Command-line arguments.

The resulting values are merged, with command-line values overwriting local values, and local values overwriting global ones.

<br />

### Directory

Controls the desired directory for the created component. Defaults to `src/components`

**Usage:**

Command line: `--dir <value>` or `-d <value>`

JSON config: `{ "dir": <value> }`
<br />


## Platform Support

This has only been tested in macOS.
<br />

## Known Issues

If you try to use this package with the Next.js App Router, you’ll run into an error:

```md
**Syntax error:** the name `default` is exported multiple times
```
