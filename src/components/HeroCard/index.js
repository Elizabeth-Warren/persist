// TODO(jjandoc): Based on some talks with Victoria, it looks like this is going
// to be a more commonly used component. We should consider adding in theming
// similar to what's happening with FormBlocks once the patterns are ironed out.

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import bp from '../../utils/createBreakpointStyles';
import theme from '../../theme';
import getContentfulImage from '../../utils/getContentfulImage';

const Wrapper = styled.div`
  margin: auto;
  max-width: ${theme.maxWidth.section};

  ${bp(theme.screens.md, css`
    display: flex;
    flex-direction: row-reverse
  `)}
`;

const Content = styled.div`
  background: ${theme.colors.navy};
  color: ${theme.colors.white};
  padding: ${theme.spacing.sp4} ${theme.spacing.sp4} ${theme.sp8};

  ${bp(theme.screens.md, css`
    padding: ${theme.spacing.sp4};
    width: 33.333%;
  `)}
`;

const Title = styled.h1`
  font-family: ${theme.fontFamily.compressed};
  font-weight: bold;
  font-size: ${theme.fontSize['2xl']};
  line-height: ${theme.leading.sub};
  margin: 0 0 ${theme.spacing.sp3};
  text-transform: uppercase;

  ${bp(theme.screens.lg, css`
    font-size: ${theme.fontSize['3xl']};
  `)}
`;

const Subtitle = styled.p`
  font-size: ${theme.fontSize.md};
  line-height: ${theme.leading.normal};
`;

const ImageWrapper = styled.div`
  margin: -${theme.spacing.sp4} ${theme.spacing.sp4} 0;

  ${bp(theme.screens.md, css`
    display: flex;
    margin: 0;
    width: 66.667%;
  `)}
`;

const Image = styled.img`
  object-fit: cover;
  max-width: 100%;
`;

const HeroCard = ({ title, subtitle, image }) => {
  const imageUrl = getContentfulImage(image);
  return (
    <Wrapper>
      <Content>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Content>
      <ImageWrapper>
        <Image src={imageUrl} alt="" />
      </ImageWrapper>
    </Wrapper>
  );
};

HeroCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  image: PropTypes.string.isRequired,
};

HeroCard.defaultProps = {
  subtitle: null,
};

export default HeroCard;
