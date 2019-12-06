# Code Assessment: Web Edition ⭑⭑

## Instructions

### Mirroring the Repo

For your own privacy, please do not fork this repo! Instead, follow these instructions to mirror the repository to a new private repo on your account:

1. Create a new private repo on your github (eg, my-assessment)

2. On the command line, create a bare clone of our repo:

```
git clone --bare git@github.com:workco/code-assessment-web-v2.git
```

3. Enter the temporary directory created by that command and push to your repo

```
cd code-assessment-web-v2.git
git push --mirror git@github.com:my-github-account/my-assessment.git
```

4. Clone the repo to start local development

```
git clone git@github.com:my-github-account/my-assessment
```

When you’re done with your work, please share your private repo with [workco-talent](https://github.com/workco-talent).

If you’re having trouble with these mirroring instructions, let us know!

### Task Guidelines

Please refer to emailed instructions from the talent team as to which/how many tasks to work on.

[Create a pull request](https://help.github.com/en/desktop/contributing-to-projects/creating-a-pull-request) for each task you work on. Set this up like you would a real PR. Some features we’ll look for:

- Informative, consistent commit message(s)
- A detailed PR description. Explain the fixes or functionalities accomplished, any decisions you made along the way, or alternative implementations you may have considered or attempted. Feel free to add images and videos.
- If applicable: Why did you choose this task?

You can merge the PR when you’re done.

Other things we’re looking for in your work:

- Code quality and consistency
- New/updated tests (when appropriate)
- New/updated stories (when appropriate)

### Design/Browser Info

You can find the Figma file for this project here: https://www.figma.com/file/TghrEZgi3nl3t3iZ72Ufmt/Code-Assessment---Final. The "App" designs are for the mobile assessment - please disregard.

Please see package.json for a list of supported browsers.

Note: The UI is optimized for widths of greater than or equal to 375px.

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). In the project directory, you can run:

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

Lint all .js files according to eslint config. Run `yarn lint:fix` to automatically apply fixes.

### `yarn storybook`

Start a local storybook server to browse component stories.
