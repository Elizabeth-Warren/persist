import { addDecorator, addParameters, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';
import theme from '../src/theme.js';

addDecorator(withKnobs);
addDecorator(withTests({ results }));
addParameters({
  backgrounds: Object.entries(theme.colors).map(([name, value]) => ({ name, value }))
});

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js|mdx$/), module);
