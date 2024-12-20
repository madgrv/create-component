<p align="center">
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
copy the repository locally, and run: 
```npm i npm link```

cd to your current working project folder and run:
```bash
$ create-component MyNewComponent
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

### Directory

Controls the desired directory for the created component. Defaults to `src/components`

example CLI command:
```bash
create-component -d src/components/_common MyNewComponent
```


**Usage:**

Command line: `--dir <value>` or `-d <value>`

JSON config: `{ "dir": <value> }`
<br />
<br />
<br />



### Coming soon:
Install via NPM:

```bash
using NPM
$ npm i -g create-component
```

`cd` into your project's directory, and try creating a new component:

```bash
$ create-component MyNewComponent
```


These files will be formatted according to your Prettier configuration.

<br />

## Coming soon:
### Add test file
Support command to optionally create a `.spec.tsx` test file to the component folder, with relevant boilerplate setup. 

```jsx
import { render } from 'src/tests/helpers';

import { MyNewComponent } from './MyNewComponent';

describe('MyNewComponent component', () => {
    it('should render MyNewComponent successfully', () => {
        // test logic
    });
});

```


## Platform Support

This has only been tested in macOS.
