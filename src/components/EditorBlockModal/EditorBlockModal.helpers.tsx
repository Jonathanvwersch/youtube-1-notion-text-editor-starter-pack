import React from "react";
import { BLOCK_TYPES, ROTATE, ScrollerModalData } from "../../definitions";
import {
  BulletedListIcon,
  CloseIcon,
  CodeIcon,
  DividerIcon,
  H1Icon,
  H2Icon,
  H3Icon,
  NumberedListIcon,
  QuoteIcon,
} from "../../icons";
import BodyTextIcon from "../../icons/BodyTextIcon";

export const blockData: ScrollerModalData = [
  {
    label: "Body",
    value: BLOCK_TYPES.UNSTYLED,
    icon: <BodyTextIcon />,
  },
  {
    label: "Large heading",
    value: BLOCK_TYPES.HEADER_ONE,
    icon: <H1Icon />,
  },
  {
    label: "Medium heading",
    value: BLOCK_TYPES.HEADER_TWO,
    icon: <H2Icon />,
  },
  {
    label: "Small heading",
    value: BLOCK_TYPES.HEADER_THREE,
    icon: <H3Icon />,
  },
  {
    label: "Bulleted list",
    value: BLOCK_TYPES.BULLETED_LIST,
    icon: <BulletedListIcon />,
  },
  {
    label: "Numbered list",
    value: BLOCK_TYPES.NUMBERED_LIST,
    icon: <NumberedListIcon />,
  },
  {
    label: "Quote",
    value: BLOCK_TYPES.QUOTE,
    icon: <QuoteIcon />,
  },
  {
    label: "Code",
    value: BLOCK_TYPES.CODE,
    icon: <CodeIcon />,
  },
  {
    label: "Divider",
    value: BLOCK_TYPES.DIVIDER,
    icon: <DividerIcon rotate={ROTATE.NINETY} strokeWidth="1px" />,
  },
];

export const getSelectedBlockNode = (root: any) => {
  const selection = root.getSelection();
  if (selection.rangeCount === 0) {
    return null;
  }
  let node = selection.getRangeAt(0).startContainer;
  do {
    if (node.getAttribute && node.getAttribute("data-block") === "true") {
      return node;
    }
    node = node.parentNode;
  } while (node !== null);
  return null;
};

export const noMatchingBlocksData: ScrollerModalData = [
  {
    label: "No matching blocks",
    icon: <CloseIcon />,
    value: "",
    turnOffHover: true,
  },
];
