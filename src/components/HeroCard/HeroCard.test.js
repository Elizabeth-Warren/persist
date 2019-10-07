import React from 'react';
import renderer from 'react-test-renderer';
import HeroCard from './index';

it('renders correctly', () => {
  const heroProps = {
    title: 'Pledge to vote',
    subtitle: 'We are happy to have you in this fight. Thank you for committing to vote for Elizabeth in the New Hampshire primary!',
    image: '//images.ctfassets.net/4ubxbgy9463z/3lPcBr8shu5sKGj0i2ZDRd/54437e08b70b346b42fbfbf2c1170dfd/new-hampshire.jpg',
  };
  const tree = renderer
    .create(<HeroCard {...heroProps} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
