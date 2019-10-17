import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';

export const WideHeadlineSizes = {
  SM: 'sm',
  LG: 'lg',
};

const HeadlineWrapper = styled.div`
  font-family: ${theme.fontFamily.wide};
  font-size: ${({ size }) => (size === WideHeadlineSizes.SM ? theme.fontSize.sm : theme.fontSize['3xl'])};
  font-weight: bold;
  letter-spacing: ${({ size }) => (size === WideHeadlineSizes.SM ? '1.6px' : 0)};
  line-height: ${({ size }) => (size === WideHeadlineSizes.SM ? theme.leading.tight : theme.leading.none)};
  text-transform: uppercase;
`;

const WideHeadline = ({
  as, children, size, ...other
}) => (
  <HeadlineWrapper
    as={as}
    size={size}
    {...other}
  >
    {children}
  </HeadlineWrapper>
);

WideHeadline.propTypes = {
  /** Child text or elements */
  children: PropTypes.node.isRequired,
  /** HTML tag name or React element. */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  /** Size of the headline */
  size: PropTypes.oneOf(Object.values(WideHeadlineSizes)),
};

WideHeadline.defaultProps = {
  size: WideHeadlineSizes.LG,
};

export default WideHeadline;
