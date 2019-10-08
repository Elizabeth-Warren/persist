import { addDecorator, addParameters, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import theme from '../src/theme.js';

addDecorator(withInfo);
addDecorator(withKnobs);
addParameters({
  backgrounds: Object.entries(theme.colors).map(([name, value]) => ({ name, value }))
});

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
