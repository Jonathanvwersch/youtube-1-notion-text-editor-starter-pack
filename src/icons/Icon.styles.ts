import styled from "styled-components";
import { IconType } from "../definitions";
import Icon from "./Icon";

// SVG wrapper component to be used when height and width of the component are equal to one another
// If no size is provided the SVG will default to a size of small, otherwise it will equal the specified size
export const Svg = styled(Icon).attrs(() => ({
  viewBox: "0 0 16 16",
  fill: "none",
}))<IconType>`
  transform: ${({ rotate }) => rotate};
  transform: ${({ scale }) => scale && `scale(${scale})`};
  width: ${({ size }) => "18px" || size};
  height: ${({ size }) => "18px" || size};

  * {
    fill: ${({ color, shouldFill }) =>
      shouldFill !== false ? color || "#2C2C31" : undefined};
    stroke: ${({ color, shouldStroke }) =>
      shouldStroke ? color || "#2C2C31" : undefined};
  }
`;

export const SvgVaried = styled(Icon)<IconType>`
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  transform: ${({ rotate }) => rotate};
  transform: ${({ scale }) => scale && `scale(${scale})`};
`;
