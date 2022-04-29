import styled from "styled-components";
import { IconType } from "../definitions";
import Icon from "./Icon";

export const Svg = styled(Icon).attrs(() => ({
  viewBox: "0 0 16 16",
  fill: "none",
}))<IconType>`
  transform: ${({ rotate }) => rotate};
  transform: ${({ scale }) => scale && `scale(${scale})`};
  width: ${({ size }) => size || "18px"};
  height: ${({ size }) => size || "18px"};

  * {
    fill: ${({ color, shouldFill }) =>
      shouldFill !== false ? color || "#2C2C31" : undefined};
    stroke: ${({ color, shouldStroke }) =>
      shouldStroke ? color || "#2C2C31" : undefined};
  }
`;
