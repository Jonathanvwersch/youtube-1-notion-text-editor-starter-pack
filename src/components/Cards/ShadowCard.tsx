import React, { ReactNode } from "react";
import styled from "styled-components";

type ShadowCardProps = {
  children: ReactNode;
  height?: string;
  width?: string;
  border?: string;
  backgroundColor?: string;
  position?: string;
  padding?: string;
  cardRef?: React.RefObject<HTMLDivElement>;
  zIndex?: string;
  maxHeight?: string;
  maxWidth?: string;
  id?: string;
  tabIndex?: number;
  ariaLabel?: string;
  margin?: string;
  role?: string;
  overflow?: string;
  style?: React.CSSProperties;
};

const ShadowCard: React.FC<ShadowCardProps> = ({ children, ...props }) => {
  return (
    <StyledShadowCard
      tabIndex={props.tabIndex}
      aria-label={props.ariaLabel}
      role={props.role}
      id={props.id}
      ref={props.cardRef}
      {...props}
    >
      {children}
    </StyledShadowCard>
  );
};

const StyledShadowCard = styled.div<ShadowCardProps>`
  box-shadow: rgb(15 15 15 / 5%) 0px 0px 0px 1px,
    rgb(15 15 15 / 10%) 0px 3px 6px, rgb(15 15 15 / 20%) 0px 9px 12px;
  max-height: ${({ maxHeight }) => maxHeight};
  max-width: ${({ maxWidth }) => maxWidth};
  border-radius: 6px;
  height: ${({ height }) => height};
  width: ${({ width }) => (width ? width : "100%")};
  border: ${({ border }) => border};
  position: ${({ position }) => position};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  z-index: ${({ zIndex }) => zIndex};
  overflow: ${({ overflow }) => overflow || "hidden"};
  background-color: white;
`;

export default ShadowCard;
