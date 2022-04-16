import { Flex } from "@rebass/grid";
import React, { ReactElement, useRef, useState } from "react";
import { ListModal } from "..";
import { CoordsType, ROTATE, ListModalData } from "../../definitions";
import DropDownArrowIcon from "../../icons/DropDownArrowIcon";
import { positionModals } from "../../utils";

type IconDropdownProps = {
  modal: {
    height: number;
    data: ListModalData;
    clickFunctions: (args: any) => void;
  };
  icon: {
    icon: ReactElement;
    isDisabled?: boolean;
  };
  id?: string;
  fullHeightDropdownModal?: boolean;
};

const IconDropdown: React.FC<IconDropdownProps> = ({
  icon,
  modal,
  fullHeightDropdownModal,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<CoordsType>();
  const handleShowModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    setShowModal(true);
    setCoords(positionModals(e, modal.height, modalRef));
  };

  return (
    <>
      <div
        role="button"
        style={{ cursor: "pointer" }}
        ref={modalRef}
        onMouseDown={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          handleShowModal(e)
        }
      >
        <Flex>
          {icon.icon}
          <DropDownArrowIcon rotate={ROTATE.NINETY} />
        </Flex>
      </div>

      <ListModal
        coords={coords}
        clickFunctions={modal.clickFunctions}
        open={showModal}
        handleClose={() => setShowModal(false)}
        data={modal.data}
        fakeFocus={true}
        fullHeight={fullHeightDropdownModal}
      />
    </>
  );
};

export default React.memo(IconDropdown);
