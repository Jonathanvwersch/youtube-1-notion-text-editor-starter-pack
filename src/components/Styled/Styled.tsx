import React from "react";
import styled from "styled-components";

type DividerProps = {
  width?: string;
  height?: string;
  color?: string;
};

const Divider: React.FC<DividerProps> = ({ ...props }) => {
  return <StyledDivider {...props} />;
};

const StyledDivider = styled.div<DividerProps>`
  height: ${({ height }) => (height ? height : "1px")};
  width: ${({ width }) => (width ? width : "100%")};
  background-color: #d3d3d3;
`;

export default Divider;
