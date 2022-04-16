import { ROTATE } from ".";

export type CoordsType = {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
};

export type ListModalData = {
  label: any;
  value: any;
  icon?: React.ReactNode;
  style?: string;
  divider?: boolean;
  turnOffHover?: boolean;
  id?: string;
}[];

export type IconType = {
  color?: string;
  size?: string;
  rotate?: ROTATE;
  height?: string;
  viewBox?: string;
  shouldFill?: boolean;
  shouldStroke?: boolean;
  fill?: string;
  scale?: string;
  width?: string;
  ariaLabel?: string;
  className?: string;
};
