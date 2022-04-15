import React from "react";
import { Svg } from ".";
import { IconType } from "../definitions";

const DividerIcon: React.FC<IconType & { strokeWidth?: string }> = ({
  color,
  size,
  rotate,
  strokeWidth,
}) => {
  const iconColor = color ?? "#2C2C31";
  return (
    <Svg size={size} viewBox="0 0 16 16" fill={iconColor} rotate={rotate}>
      <line
        x1="8.15"
        y1="-6.55671e-09"
        x2="8.15"
        y2="16"
        stroke={iconColor}
        strokeWidth={strokeWidth ? strokeWidth : "0.5"}
      />
    </Svg>
  );
};

export default DividerIcon;
