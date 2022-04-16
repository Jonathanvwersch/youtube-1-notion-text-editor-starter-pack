import React from "react";
import { Svg } from ".";
import { IconType } from "../definitions";

const DropDownArrowIcon: React.FC<IconType> = ({ color, size, rotate }) => {
  const iconColor = color ?? "#2C2C31";

  return (
    <Svg size={size} rotate={rotate} viewBox="0 0 16 16" fill="none">
      <path
        d="M6.66797 11.333L10.0013 7.99967L6.66797 4.66634V11.333Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default DropDownArrowIcon;
