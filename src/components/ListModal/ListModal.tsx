import React from "react";
import styled from "styled-components";
import { Block, Overlay } from "..";
import { CoordsType, ListModalData } from "../../definitions";
import { useKeyDownAndUpListener } from "../../hooks";
import ShadowCard from "../Cards/ShadowCard";

type ScrollerModalProps = {
  open: boolean;
  handleClose: () => void;
  clickFunctions: (args?: any) => void;
  data: ListModalData;
  coords?: CoordsType;
  cardRef?: React.RefObject<HTMLDivElement>;
  fullHeight?: boolean;
  fakeFocus?: boolean;
  preventDefault?: boolean;
  id?: string;
};

const ScrollerModal: React.FC<ScrollerModalProps> = ({
  open,
  handleClose,
  cardRef,
  clickFunctions,
  data,
  coords,
  fullHeight,
  fakeFocus,
  preventDefault,
}) => {
  const { activeIndex } = useKeyDownAndUpListener(
    open,
    data.length,
    preventDefault
  );

  return (
    <Overlay isOpen={open} handleClose={handleClose} coords={coords}>
      <StyledScrollerModal
        fullHeight={fullHeight}
        coords={coords}
        width="220px"
        cardRef={cardRef}
      >
        {data.map((item, index) => (
          <Block
            index={index}
            key={item.label}
            activeIndex={activeIndex}
            icon={item?.icon}
            text={item.label}
            fakeFocus={fakeFocus}
            turnOffHover={item?.turnOffHover}
            handleClick={() => {
              handleClose();
              clickFunctions(item?.value);
            }}
          />
        ))}
      </StyledScrollerModal>
    </Overlay>
  );
};

const StyledScrollerModal = styled(ShadowCard)<{
  coords: CoordsType | undefined;
  fullHeight?: boolean;
}>`
  max-height: 250px;
  overflow: hidden;
  z-index: 100;
  &:hover {
    overflow: auto;
  }
`;

export default ScrollerModal;
