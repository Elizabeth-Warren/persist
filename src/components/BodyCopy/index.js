import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';

export const BodyCopySizes = {
  '2XS': '2xs',
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
};

const CopyWrapper = styled.span`
  font-family: ${theme.fontFamily.sans};
  font-size: ${({ size }) => {
    switch (size) {
      case BodyCopySizes.XL:
        return theme.fontSize['2xl'];
      case BodyCopySizes.LG:
        return theme.fontSize.xl;
      case BodyCopySizes.SM:
        return theme.fontSize.base;
      case BodyCopySizes.XS:
        return theme.fontSize.sm;
      case BodyCopySizes['2XS']:
        return theme.fontSize.xs;
      case BodyCopySizes.MD:
      default:
        return theme.fontSize.md;
    }
  }};
  line-height: ${({ size }) => {
    switch (size) {
      case BodyCopySizes.XL:
        return theme.leading.tight;
      default:
        return theme.leading.snug;
    }
  }};
`;

const BodyCopy = ({
  children, size, as, ...other
}) => (
  <CopyWrapper
    as={as}
    size={size}
    {...other}
  >
    {children}
  </CopyWrapper>
);

BodyCopy.propTypes = {
  /** Child text or elements */
  children: PropTypes.node.isRequired,
  /** HTML tag name or React element. */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  /** Size of the headline */
  size: PropTypes.oneOf(Object.values(BodyCopySizes)),
};

BodyCopy.defaultProps = {
  size: BodyCopySizes.MD,
};

export default BodyCopy;
