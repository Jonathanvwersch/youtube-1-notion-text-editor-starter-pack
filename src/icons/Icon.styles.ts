import styled from 'styled-components';
import { IconType, SIZES } from '../typesAndEnums';
import Icon from './Icon';

// SVG wrapper component to be used when height and width of the component are equal to one another
// If no size is provided the SVG will default to a size of small, otherwise it will equal the specified size
export const Svg = styled(Icon)<IconType>`
  transform: ${({ rotate }) => rotate};
  transform: ${({ scale }) => scale && `scale(${scale})`};
  width: ${({ theme, size }) =>
    !size
      ? theme.sizes.icons[SIZES.SMALL]
      : size === SIZES.XLARGE ||
        size === SIZES.MEDIUM ||
        size === SIZES.LARGE ||
        size === SIZES.SMALL
      ? theme.sizes.icons[size]
      : size};
  height: ${({ theme, size }) =>
    !size
      ? theme.sizes.icons[SIZES.SMALL]
      : size === SIZES.XLARGE ||
        size === SIZES.MEDIUM ||
        size === SIZES.LARGE ||
        size === SIZES.SMALL
      ? theme.sizes.icons[size]
      : size};
`;

export const SvgVaried = styled(Icon)<IconType>`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  transform: ${({ rotate }) => rotate};
  transform: ${({ scale }) => scale && `scale(${scale})`};
`;
