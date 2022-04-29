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
}) => {
  const { activeIndex } = useKeyDownAndUpListener(open, data.length);

  return (
    <Overlay isOpen={open} handleClose={handleClose} coords={coords}>
      <StyledScrollerModal
        fullHeight={fullHeight}
        coords={coords}
        padding="6px"
        width="290px"
        cardRef={cardRef}
      >
        <ModalHeader>BASIC BLOCKS</ModalHeader>
        {data.map((item, index) => (
          <Block
            index={index}
            key={item.label}
            activeIndex={activeIndex}
            icon={item?.icon}
            topText={item.label}
            fakeFocus={fakeFocus}
            bottomText={item.description}
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

const ModalHeader = styled.div`
  color: rgba(55, 53, 47, 0.65);
  padding: 8px 0px;
  font-size: 12px;
`;

const StyledScrollerModal = styled(ShadowCard)<{
  coords: CoordsType | undefined;
  fullHeight?: boolean;
}>`
  max-height: 350px;
  overflow: hidden;
  z-index: 100;
  &:hover {
    overflow: auto;
  }
`;

export default ScrollerModal;
