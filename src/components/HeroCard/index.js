// TODO(jjandoc): Based on some talks with Victoria, it looks like this is going
// to be a more commonly used component. We should consider adding in theming
// similar to what's happening with FormBlocks once the patterns are ironed out.

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Headline from '../Headline';
import theme from '../../theme';
import getContentfulImage from '../../utils/getContentfulImage';

const Wrapper = styled.div`
  margin: auto;
  max-width: ${theme.maxWidth.section};

  @media (min-width: ${theme.screens.md}) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

const Content = styled.div`
  background: ${theme.colors.navy};
  color: ${theme.colors.white};
  padding: ${theme.spacing.sp4} ${theme.spacing.sp4} ${theme.sp8};

  @media (min-width: ${theme.screens.md}) {
    padding: ${theme.spacing.sp4};
    width: 33.333%;
  }
`;

const Title = styled.h1`
  margin: 0 0 ${theme.spacing.sp3};
`;

const Subtitle = styled.p`
  font-size: ${theme.fontSize.md};
  line-height: ${theme.leading.normal};
  margin: 0 0 ${theme.spacing.sp3};
`;

const ImageWrapper = styled.div`
  margin: -${theme.spacing.sp4} ${theme.spacing.sp4} 0;

  @media (min-width: ${theme.screens.md}) {
    background-image: ${({ image }) => `url(${image})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    margin: 0;
    min-height: 300px;
    width: 66.667%;
  }
`;

const Image = styled.img`
  max-width: 100%;

  @media (min-width: ${theme.screens.md}) {
    display: none;
  }
`;

const w = Math.round(parseInt(theme.maxWidth.section, 10) * 0.667);

const HeroCard = ({
  children, title, subtitle, image,
}) => {
  const imageUrl = getContentfulImage(image, { w });
  return (
    <Wrapper>
      <Content>
        {title && <Headline as={Title} breakpoint={theme.screens.lg}>{title}</Headline>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Content>
      <ImageWrapper image={imageUrl}>
        <Image src={imageUrl} alt="" />
      </ImageWrapper>
    </Wrapper>
  );
};

HeroCard.propTypes = {
  /** Card title. */
  title: PropTypes.string,
  /** Optional card subtitle. */
  subtitle: PropTypes.string,
  /**
   * Card image. If this is an image path coming from Contentful it will be
   * normalized with a protocol and resized to a width of 724px.
   */
  image: PropTypes.string.isRequired,
  /** Child text or elements */
  children: PropTypes.node.isRequired,
};

HeroCard.defaultProps = {
  title: null,
  subtitle: null,
};

export default HeroCard;
