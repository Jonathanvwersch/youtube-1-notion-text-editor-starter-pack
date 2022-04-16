import React from "react";
import { Svg } from ".";
import { IconType } from "../definitions";

const RemoveFormattingIcon: React.FC<IconType> = ({ color, size }) => {
  return (
    <Svg size={size} color={color}>
      <path d="M4.00016 3.33301V3.45301L5.88016 5.33301H7.48016L7.00016 6.45301L8.40016 7.85301L9.4735 5.33301H13.3335V3.33301H4.00016ZM2.18016 3.33301L1.3335 4.17967L5.98016 8.82634L4.3335 12.6663H6.3335L7.38016 10.2263L11.1535 13.9997L12.0002 13.153L2.36683 3.51301L2.18016 3.33301Z" />
    </Svg>
  );
};

export default RemoveFormattingIcon;
