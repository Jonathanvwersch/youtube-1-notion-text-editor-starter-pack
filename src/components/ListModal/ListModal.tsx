import React, { Fragment, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Block, Overlay } from "..";
import { CoordsType, ScrollerModalData } from "../../definitions";
import { useKeyDownAndUpListener } from "../../hooks";
import ShadowCard from "../Cards/ShadowCard";
import Divider from "../Styled/Styled";

type ScrollerModalProps = {
  open: boolean;
  handleClose: () => void;
  clickFunctions: (args?: any) => void;
  data: ScrollerModalData;
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
  const theme = useContext(ThemeContext);

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
        width={theme.sizes.modal.small}
        cardRef={cardRef}
      >
        {data.map((item, index) => (
          <Fragment key={item.label}>
            <Block
              index={index}
              activeIndex={activeIndex}
              icon={item?.icon}
              fakeFocus={fakeFocus}
              turnOffHover={item?.turnOffHover}
              handleClick={() => {
                handleClose();
                clickFunctions(item?.value);
              }}
            />
            <Divider />
          </Fragment>
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

export default React.memo(ScrollerModal);
