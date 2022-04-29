import React from "react";
import { BLOCK_TYPES, ROTATE, ListModalData } from "../../definitions";
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

export const blockData: ListModalData = [
  {
    label: "Text",
    value: BLOCK_TYPES.UNSTYLED,
    icon: <BodyTextIcon size="24px" />,
    description: "Just start writing with plain text",
  },
  {
    label: "Heading 1",
    value: BLOCK_TYPES.HEADER_ONE,
    icon: <H1Icon size="24px" />,
    description: "Big section heading",
  },
  {
    label: "Heading 2",
    value: BLOCK_TYPES.HEADER_TWO,
    icon: <H2Icon size="24px" />,
    description: "Medium section heading",
  },
  {
    label: "Heading 3",
    value: BLOCK_TYPES.HEADER_THREE,
    icon: <H3Icon size="24px" />,
    description: "Small section heading",
  },
  {
    label: "Bulleted list",
    value: BLOCK_TYPES.BULLETED_LIST,
    icon: <BulletedListIcon size="24px" />,
    description: "Create a simple bulleted list",
  },
  {
    label: "Numbered list",
    value: BLOCK_TYPES.NUMBERED_LIST,
    icon: <NumberedListIcon size="24px" />,
    description: "Create a list with numbering",
  },
  {
    label: "Quote",
    value: BLOCK_TYPES.QUOTE,
    icon: <QuoteIcon size="24px" />,
    description: "Capture a quote",
  },
  {
    label: "Code",
    value: BLOCK_TYPES.CODE,
    icon: <CodeIcon size="24px" />,
    description: " Capture a code snippet",
  },
];

export const ConvertToBlockData: ListModalData = [...blockData];

export const NoteTakingBlocksData: ListModalData = [
  ...blockData,

  {
    label: "Divider",
    value: BLOCK_TYPES.DIVIDER,
    icon: <DividerIcon size="24px" rotate={ROTATE.NINETY} strokeWidth="1px" />,
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

export const noMatchingBlocksData: ListModalData = [
  {
    label: "No results",
    icon: <CloseIcon size="24px" />,
    value: "",
    turnOffHover: true,
  },
];
