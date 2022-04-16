import React, { ReactElement } from "react";
import { BLOCK_TYPES, ListModalData, TEXT_STYLES } from "../../definitions";
import {
  H2Icon,
  H1Icon,
  H3Icon,
  BulletedListIcon,
  NumberedListIcon,
  QuoteIcon,
  BodyTextIcon,
  BoldIcon,
  UnderlineIcon,
  StrikethroughIcon,
  SubscriptIcon,
  SuperscriptIcon,
  CodeIcon,
  RemoveFormattingIcon,
  LeftAlignIcon,
  RightAlignIcon,
  CenterAlignIcon,
} from "../../icons";
import ItalicsIcon from "../../icons/ItalicsIcon";

export const changeBlockTypeIcons = (
  currentBlockType: string
): { icon: ReactElement; id: string; text: string } => {
  switch (currentBlockType) {
    case BLOCK_TYPES.HEADER_ONE:
      return {
        icon: <H1Icon />,
        id: "HeaderOne",
        text: "Large heading",
      };

    case BLOCK_TYPES.HEADER_TWO:
      return {
        icon: <H2Icon />,
        id: "HeaderTwo",
        text: "Medium heading",
      };

    case BLOCK_TYPES.HEADER_THREE:
      return {
        // eslint-disable-next-line react/jsx-no-undef
        icon: <H3Icon />,
        id: "HeaderThree",
        text: "Small heading",
      };

    case BLOCK_TYPES.BULLETED_LIST:
      return {
        icon: <BulletedListIcon />,
        id: "BulletedList",
        text: "Bulleted list",
      };

    case BLOCK_TYPES.NUMBERED_LIST:
      return {
        icon: <NumberedListIcon />,
        id: "NumberedList",
        text: "Numbered list",
      };

    case BLOCK_TYPES.QUOTE:
      return {
        icon: <QuoteIcon />,
        id: "Quote",
        text: "Quote",
      };

    default:
      return {
        icon: <BodyTextIcon />,
        id: "Text",
        text: "Body",
      };
  }
};

export enum TextStylesTypes {
  BOLD = "studySet.toolbar.bold",
  ITALICS = "studySet.toolbar.italics",
  CENTER_ALIGN = "studySet.toolbar.underline",
}

export const changeTextStylesData: ListModalData = [
  {
    icon: <BoldIcon />,
    value: TEXT_STYLES.BOLD,
    label: "Bold",
  },
  {
    icon: <ItalicsIcon />,
    value: TEXT_STYLES.ITALIC,
    label: "Italics",
  },
  {
    icon: <UnderlineIcon />,
    value: TEXT_STYLES.UNDERLINE,
    label: "Underline",
  },
  {
    icon: <StrikethroughIcon />,
    value: TEXT_STYLES.STRIKETHROUGH,
    label: "Strikethrough",
  },
  {
    icon: <SubscriptIcon />,
    value: TEXT_STYLES.SUBSCRIPT,
    label: "Subscript",
  },
  {
    icon: <SuperscriptIcon />,
    value: TEXT_STYLES.SUPERSCRIPT,
    label: "Superscript",
  },
  {
    icon: <CodeIcon />,
    value: TEXT_STYLES.CODE,
    label: "InlineCode",
  },
  {
    icon: <RemoveFormattingIcon />,
    value: TEXT_STYLES.REMOVE_FORMATTING,
    label: "RemoveFormatting",
  },
];

export enum AlignmentTypes {
  LEFT_ALIGN = "left",
  RIGHT_ALIGN = "right",
  CENTER_ALIGN = "center",
}

export const changeAlignmentData: ListModalData = [
  {
    label: "studySet.toolbar.leftAlign",
    icon: <LeftAlignIcon />,
    value: AlignmentTypes.LEFT_ALIGN,
  },
  {
    label: "studySet.toolbar.centerAlign",
    icon: <CenterAlignIcon />,
    value: AlignmentTypes.CENTER_ALIGN,
  },
  {
    label: "studySet.toolbar.rightAlign",
    icon: <RightAlignIcon />,
    value: AlignmentTypes.RIGHT_ALIGN,
  },
];
