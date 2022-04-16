import React from "react";
import { Svg } from ".";
import { IconType } from "../definitions";

const DropDownArrowIcon: React.FC<IconType> = ({ color, size, rotate }) => {
  return (
    <Svg size={size} rotate={rotate}>
      <path d="M6.66797 11.333L10.0013 7.99967L6.66797 4.66634V11.333Z" />
    </Svg>
  );
};

export default DropDownArrowIcon;
