# Code Assessment: Web Edition ⭑⭑

## Instructions

### 1. Mirror the Repo

For your own privacy, please do not fork this repo! Instead, follow these instructions to mirror the repository to a new private repo on your account:

1. Create a new **private** repo on your github (eg, my-assessment)

2. On the command line, create a bare clone of our repo:

```
git clone --bare git@github.com:workco/code-assessment-web-ui.git
```

3. Enter the temporary directory created by that command and push to your repo

```
cd code-assessment-web-ui.git
git push --mirror git@github.com:my-github-account/my-assessment.git
```

4. In the working directory of your choice, clone the repo to start local development

```
git clone git@github.com:my-github-account/my-assessment
```

PS: Having trouble with these instructions? Reply to the talent team with your questions.

### 2. Implement Your Task(s)

Please refer to emailed instructions from the talent team as to which/how many tasks to work on. See the master task list [here](/tasks/tasks.md).

Create a new branch off of `main` for each task you work on (except #5).

[Make one pull request](https://help.github.com/en/desktop/contributing-to-projects/creating-a-pull-request) for each task. Set this up like you would a real PR. Some features we’ll look for:

- Informative, consistent commit message(s)
- A detailed PR description. Explain the fixes or functionalities accomplished, any decisions you made along the way, or alternative implementations you may have considered or attempted. Feel free to add images and videos.
- If applicable: Why did you choose this task?

You can merge the PR when you’re done. Implement your tasks in any order you'd like.

Other things we’re looking for in your work:

- Code quality and consistency
- New/updated Jest tests (when appropriate)
- New/updated Storybook stories (when appropriate)

### 3. Submit Your Work

When you’re done with your work, please share your private repo with [workco-talent](https://github.com/workco-talent) and reply to your original email from the talent team to let us know you're done.

## Available Scripts

In the project directory, you can run:

### `yarn`

Install dependencies.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:coverage`

Runs tests (out of watch mode) and create a coverage report.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.<br />
The build is minified and the filenames include the hashes.

### `yarn lint`

Lint all .js files according to ESLint config. Run `yarn lint:fix` to automatically apply fixes.

### `yarn storybook`

Start a local Storybook server to browse component stories.

## About the Code

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### React

We're using [React](https://reactjs.org/), one of our favorite front-end libraries!

- Our implementation features [React Hooks](https://reactjs.org/docs/hooks-intro.html), a feature that came out in React 16.8. We primarily use the [useState](https://reactjs.org/docs/hooks-state.html) and [useEffect](https://reactjs.org/docs/hooks-effect.html) hooks.
- The app's data is exposed using [React Context](https://reactjs.org/docs/context.html) and managed via a [custom React Hook](https://reactjs.org/docs/hooks-custom.html) called `useAppContext`.
- Routing via [React Router](https://reacttraining.com/react-router/web/guides/quick-start).
- Most of our current React projects validate properties with TypeScript or Flow, but for this exercise we've opted to use Facebook's [PropTypes library](https://github.com/facebook/prop-types). See more info in [the React docs](https://reactjs.org/docs/typechecking-with-proptypes.html).

### Sass & Fonts

- Fonts are provided by Google Fonts.
- Styling uses CSS modules and Sass. [This article](https://blog.bitsrc.io/how-to-use-sass-and-css-modules-with-create-react-app-83fa8b805e5e) contains a good writeup of how the two work together.

### Storybook

We use [Storybook](https://storybook.js.org/) on many of our projects to provide a living style guide of our app's components. This project includes some basic stories and the following addons:

- [Actions](https://github.com/storybookjs/storybook/tree/HEAD/addons/actions)
- [Knobs](https://github.com/storybookjs/storybook/tree/HEAD/addons/knobs)
- [Storysource](https://github.com/storybookjs/storybook/tree/HEAD/addons/storysource)

### Jest

Create React App comes with [Jest](https://jestjs.io/) [built-in](https://create-react-app.dev/docs/running-tests/). We've written a few tests and included the following dependencies to support them:

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [React Hooks Testing Library](https://react-hooks-testing-library.com/)
- [React Test Renderer](https://reactjs.org/docs/test-renderer.html)

### ESLint

To catch errors and enforce consistency, we're using [ESLint](https://eslint.org/) in two forms:

- Create React App's [ESLint Config](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app)
- [ESLint Prettier Plugin](https://github.com/prettier/eslint-plugin-prettier)

For more information, read about ESLint [in the Create React App docs](https://create-react-app.dev/docs/setting-up-your-editor#displaying-lint-output-in-the-editor).

### NVM

Use [nvm](https://github.com/nvm-sh/nvm) to ensure the correct Node.js version (specified in .nvmrc)

```bash
nvm use
```

Additionally, you may need to run `nvm install` if the specified version is not yet installed.

## Design/Browser Info

You can find the Figma file for this project here: https://www.figma.com/file/ddnRArsK0ZT4CmmQvLvJTh/Code-Assessment. The "App" designs are for a mobile assessment - please disregard.

Please see package.json for a list of supported browsers.

Note: The UI is optimized for widths of greater than or equal to 375px.
