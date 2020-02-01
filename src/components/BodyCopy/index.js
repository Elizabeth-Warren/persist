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

export const BodyCopyWeights = {
  light: 'light',
  normal: 'normal',
  bold: 'bold',
};

const CopyWrapper = styled.span`
  color: ${({ color }) => theme.colors[color]};
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
  font-weight: ${({ weight }) => {
    switch (weight) {
      case BodyCopyWeights.light:
        return theme.fontWeight.light;
      case BodyCopyWeights.normal:
        return theme.fontWeight.normal;
      case BodyCopyWeights.bold:
        return theme.fontWeight.bold;
      default:
        return theme.fontWeight.normal;
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
  /** Font weight of the headline */
  weight: PropTypes.oneOf(Object.values(BodyCopyWeights)),
  colors: PropTypes.oneOf(Object.keys(theme.colors)),
};

BodyCopy.defaultProps = {
  size: BodyCopySizes.MD,
  weight: BodyCopyWeights.normal,
  colors: theme.colors.black,
};

export default BodyCopy;
