import styled from "styled-components";

type DividerProps = {
  width?: string;
  height?: string;
  color?: string;
};

export const Divider = styled.div<DividerProps>`
  height: ${({ height }) => (height ? height : "1px")};
  width: ${({ width }) => (width ? width : "100%")};
  background-color: #d3d3d3;
`;

