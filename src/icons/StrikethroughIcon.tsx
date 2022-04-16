import React from "react";
import { Svg } from ".";
import { IconType } from "../definitions";

const StrikethroughIcon: React.FC<IconType> = ({ color, size, rotate }) => {
  return (
    <Svg size={size} rotate={rotate}>
      <path d="M2 9.33341H14V8.00008H2V9.33341ZM3.33333 2.66675V4.66675H6.66667V6.66675H9.33333V4.66675H12.6667V2.66675H3.33333ZM6.66667 12.6667H9.33333V10.6667H6.66667V12.6667Z" />
    </Svg>
  );
};

export default StrikethroughIcon;
