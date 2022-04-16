import React from "react";
import { Svg } from ".";
import { IconType } from "../definitions";

const CenterAlignIcon: React.FC<IconType> = ({ color, size }) => {
  return (
    <Svg size={size} color={color}>
      <path d="M4.66667 10V11.3333H11.3333V10H4.66667ZM2 14H14V12.6667H2V14ZM2 8.66667H14V7.33333H2V8.66667ZM4.66667 4.66667V6H11.3333V4.66667H4.66667ZM2 2V3.33333H14V2H2Z" />
    </Svg>
  );
};

export default CenterAlignIcon;
