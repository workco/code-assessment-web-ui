import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import '../src/styles/app.scss';

addDecorator(withKnobs);

configure(require.context('../src', true, /\.stories\.js$/), module);
