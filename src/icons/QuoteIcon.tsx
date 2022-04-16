import React from "react";
import { Svg } from ".";
import { IconType } from "../definitions";

const QuoteIcon: React.FC<IconType> = ({ color, size }) => {
  return (
    <Svg size={size} color={color}>
      <path d="M9.33398 11.3337H11.334L12.6673 8.66699V4.66699H8.66732V8.66699H10.6673L9.33398 11.3337ZM4.00065 11.3337H6.00065L7.33398 8.66699V4.66699H3.33398V8.66699H5.33398L4.00065 11.3337Z" />
    </Svg>
  );
};

export default QuoteIcon;
