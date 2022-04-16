import React from "react";
import { Svg } from ".";
import { IconType } from "../definitions";

const RightAlignIcon: React.FC<IconType> = ({ color, size }) => {
  return (
    <Svg size={size} color={color}>
      <path d="M2 14H14V12.6667H2V14ZM6 11.3333H14V10H6V11.3333ZM2 8.66667H14V7.33333H2V8.66667ZM6 6H14V4.66667H6V6ZM2 2V3.33333H14V2H2Z" />
    </Svg>
  );
};

export default RightAlignIcon;
