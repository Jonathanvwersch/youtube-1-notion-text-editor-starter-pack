import React, { useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { CoordsType } from "../../definitions";
import { useOutsideClickListener } from "../../hooks";

interface OverlayProps {
  children: JSX.Element;
  isOpen: boolean;
  handleClose: (args?: any) => void;
  center?: boolean;
  coords?: CoordsType;
  modalWidth?: string;
  modalHeight?: string;
}

const Overlay: React.FC<OverlayProps> = ({
  children,
  isOpen,
  handleClose,
  coords,
  modalWidth,
  modalHeight,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClickListener(modalRef, handleClose, isOpen);

  return createPortal(
    isOpen ? (
      <OuterContainer>
        <Modal
          ref={modalRef}
          coords={coords}
          modalWidth={modalWidth}
          modalHeight={modalHeight}
        >
          {children}
        </Modal>
      </OuterContainer>
    ) : null,
    document.getElementById("modal-overlay")!
  );
};

const OuterContainer = styled.div`
  pointer-events: auto;
  position: relative;
  z-index: 0;
`;

const Modal = styled.div<{
  coords?: CoordsType;
  modalWidth?: string;
  modalHeight?: string;
}>`
  top: ${({ coords }) => (coords?.top ? `${coords?.top}px` : "auto")};
  bottom: ${({ coords }) => (coords?.bottom ? `${coords?.bottom}px` : "auto")};
  left: ${({ coords }) => (coords?.left ? `${coords?.left}px` : "auto")};
  right: ${({ coords }) => (coords?.right ? `${coords?.right}px` : "auto")};
  width: ${({ modalWidth }) => modalWidth};
  height: ${({ modalHeight }) => modalHeight};
  position: fixed;
  z-index: 100;
`;

export default Overlay;
