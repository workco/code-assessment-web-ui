import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import '../src/styles/app.scss';

addDecorator(withKnobs);
addDecorator(StoryRouter());

configure(require.context('../src', true, /\.stories\.js$/), module);
