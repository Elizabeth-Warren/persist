import React from 'react';
import { addParameters } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import HeroCard from './index';

addParameters({ jest: ['HeroCard'] });

export default {
  title: 'Components/HeroCard',
  component: HeroCard,
};

export const withContent = () => {
  const title = text('Title', 'Pledge to vote');
  const subtitle = text('Subtitle', 'We are happy to have you in this fight. Thank you for committing to vote for Elizabeth in the New Hampshire primary!');
  const image = text('Image', '//images.ctfassets.net/4ubxbgy9463z/3lPcBr8shu5sKGj0i2ZDRd/54437e08b70b346b42fbfbf2c1170dfd/new-hampshire.jpg');
  return (<HeroCard title={title} subtitle={subtitle} image={image} />);
};
