import React from "react";
import { Svg } from ".";
import { IconType } from "../definitions";

const H1Icon: React.FC<IconType> = ({ color, size }) => {
  const iconColor = color ?? "#2C2C31";
  return (
    <Svg size={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M8.637 13.0009V3.66992H7.379V7.62092H2.758V3.67092H1.5V13.0009H2.758V8.72892H7.378V13.0009H8.637ZM13.966 13.0009V3.66992H12.722L10.5 5.31692V6.58192L12.66 5.01692H12.722V13.0009H13.966Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default H1Icon;
