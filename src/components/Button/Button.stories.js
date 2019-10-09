import React from 'react';
import { action } from '@storybook/addon-actions';
import { select, text } from '@storybook/addon-knobs';
import Button, { ButtonLevels, ButtonSizes } from './index';

const getLevelOptions = () => select('Level', Object.values(ButtonLevels), Button.defaultProps.size);
const getSizeOptions = () => select('Size', Object.values(ButtonSizes), Button.defaultProps.size);
const handleClick = action('button clicked');

export default {
  title: 'Components/Button',
  component: Button,
};

export const withKnobs = () => {
  const buttonText = text('Text', 'Click me');
  const level = getLevelOptions();
  const size = getSizeOptions();
  return (<Button level={level} size={size} onClick={handleClick}>{buttonText}</Button>);
};
