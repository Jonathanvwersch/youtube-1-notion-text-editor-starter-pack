import React from "react";
import { Svg } from ".";
import { IconType } from "../definitions";

const H1Icon: React.FC<IconType> = ({ color, size }) => {
  return (
    <Svg size={size} color={color}>
      <path d="M8.637 13.0009V3.66992H7.379V7.62092H2.758V3.67092H1.5V13.0009H2.758V8.72892H7.378V13.0009H8.637ZM13.966 13.0009V3.66992H12.722L10.5 5.31692V6.58192L12.66 5.01692H12.722V13.0009H13.966Z" />
    </Svg>
  );
};

export default H1Icon;
