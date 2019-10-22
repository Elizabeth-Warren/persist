# Persist

A shared library of React components, hooks, styles and utility functions. Persist responsibly.

## Installation

### Creating a token

Persist is available as a private npm package. To use Persist in your own project you will need an authentication token. If you are a member of the @ewarren npm organization you can create your own.

```sh
$ npm login
# You'll be prompted to enter your username, password, email,
# and 2FA/OTP (one-time password) code

$ npm token create --read-only
# You will likely be prompted for a 2FA/OTP code again.
# The response will look something like:

┌────────────────┬──────────────────────────────────────┐
│ token          │ XXXXXXXX-XXXX-XXXX-XXXXXXXXXXXXXXXXX │
├────────────────┼──────────────────────────────────────┤
│ cidr_whitelist │                                      │
├────────────────┼──────────────────────────────────────┤
│ readonly       │ true                                 │
├────────────────┼──────────────────────────────────────┤
│ created        │ 2019-10-09T22:01:26.383Z             │
└────────────────┴──────────────────────────────────────┘

```

Ensure that you're creating a readonly token.

Once you have a token, you have a couple options. If you're working in a private github project and not concerned about leaving your token in github, you can simply create an `.npmrc` file in your project root with the following contents, substituting in your own token.

```
//registry.npmjs.org/:_authToken=XXXXXXXX-XXXX-XXXX-XXXXXXXXXXXXXXXXX
```

If the project is public or exposing the token is otherwise a concern you'll need to rely on environment variables. For Docker-based projects, a good solution is available [here](https://www.alexandraulsh.com/2018/06/25/docker-npmrc-security/).

Once the auth token is set up you can include Persist in your project by installing the package.

```sh
$ npm i @ewarren/persist
```

### Usage

Components are individually imported into your JS files.

```js
// MyButton.js
import { Button, Chevron } from '@ewarren/persist;

const MyButton = () => (<Button>Hello world! <Chevron /></Button>);

export default MyButton
```

Optionally, some components have enums for possible prop values, or extendable styling functions that are made available alongside the default export in their individual packages that can be included by importing the component directly.

```js
// MyButton.js
import Button, { ButtonLevels, ButtonSizes } from '@ewarren/persist/lib/components/Button';
import Chevron, { ChevronDirections } from '@ewarren/persist/lib/components/Chevron';

const MyButton = () => (
  <Button level={ButtonLevels.SECONDARY} size={ButtonSizes.SM}>
    Hellow World!
    {' '}
    <Chevron direction={ChevronDirections.DOWN} />
  </Button>
)

export default MyButton;
```

## Storybook

[Storybook](https://storybook.js.org/docs/basics/introduction/) is used for showcasing and documenting available components.

A public version reflecting the latest code on master is available at [https://persistui.netlify.com](https://persistui.netlify.com).

You can also run Storybook locally and use it as a development environment for creating and testing components (see ["storybook driven development"](https://medium.com/nulogy/storybook-driven-development-a3c517276c07)). Node 10 or higher is required. It can be installed via the [nodejs installer](https://nodejs.org/en/). Then:

```sh
# Clone this repo
$ git clone git@github.com:Elizabeth-Warren/persist.git

# Install dependencies
$ npm i

# Launch Storybook
$ npm run storybook
```

## Contributing

This library follows [Airbnb style guidelines](https://github.com/airbnb/javascript) and is enforced with [eslint](https://eslint.org). [Styled components](https://www.styled-components.com/) are used for CSS-in-JS styling and style guideline conventions are enforced with [stylelint](https://stylelint.io/user-guide). Files are automatically linted and autofixed _when possible_ before being added to commits in git. Any style violations will throw errors when attempting to commit files. To lint files from the command line:

```sh
# Lint JavaScript
$ npm run lint

# Lint styles
$ npm run lint:css
```

[Jest](https://jestjs.io/docs/en/api) is used for unit testing and structural snapshot testing. To run tests:

```sh
# Run tests.
$ npm test

# Run tests and watch for file changes.
$ npm test -- --watch

# Run tests and update snapshot files.
$ npm test -- -u

# Run tests and save output to a JSON file for use by Storybook.
$ npm run test:generate-output
```
