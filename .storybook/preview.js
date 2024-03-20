import { BrowserRouter } from 'react-router-dom';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  ),
];

export default preview;
