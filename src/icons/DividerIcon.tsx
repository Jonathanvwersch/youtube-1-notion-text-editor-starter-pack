import React from "react";
import { Svg } from ".";
import { IconType } from "../definitions";

const DividerIcon: React.FC<IconType & { strokeWidth?: string }> = ({
  color,
  size,
  rotate,
  strokeWidth,
}) => {
  return (
    <Svg
      size={size}
      viewBox="0 0 16 16"
      color={color}
      rotate={rotate}
      shouldStroke
    >
      <line
        x1="8.15"
        y1="-6.55671e-09"
        x2="8.15"
        y2="16"
        strokeWidth={strokeWidth ? strokeWidth : "0.5"}
      />
    </Svg>
  );
};

export default DividerIcon;
