import { Flex } from "@rebass/grid";
import { EditorState, RichUtils } from "draft-js";
import React from "react";
import { BLOCK_TYPES, TEXT_STYLES } from "../../definitions";
import {
  doesBlockContainStyle,
  getCurrentBlock,
  removeSpecificBlockStyle,
  toggleInlineStyle,
} from "../Editor/Editor.helpers";
import { ConvertToBlockData } from "../EditorBlockModal/EditorBlockModal.helpers";
import IconDropdown from "../IconDropdown/IconDropdown";
import { changeBlockTypeIcons, changeTextStylesData } from "./Toolbar.helpers";

type ChangeTextStyleProps = {
  editorState: EditorState;
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
};

const ChangeTextStyles: React.FC<ChangeTextStyleProps> = ({
  editorState,
  setEditorState,
}) => {
  const stylesToRemoveScripts = [
    TEXT_STYLES.SUBSCRIPT,
    TEXT_STYLES.SUPERSCRIPT,
  ];

  const currentBlockType =
    getCurrentBlock(editorState)?.getType() || "unstyled";

  const changeBlockTypes = (type: BLOCK_TYPES) => {
    // only change block type if user chooses option other than current block type
    if (getCurrentBlock(editorState).getType() !== type) {
      const newEditorState = RichUtils.toggleBlockType(editorState, type);
      setEditorState(newEditorState);
    }
  };

  const changeTextStyles = (textStyle: TEXT_STYLES) => {
    if (
      textStyle === TEXT_STYLES.SUBSCRIPT ||
      textStyle === TEXT_STYLES.SUPERSCRIPT
    ) {
      const oppositeStyle =
        textStyle === TEXT_STYLES.SUBSCRIPT
          ? TEXT_STYLES.SUPERSCRIPT
          : TEXT_STYLES.SUBSCRIPT;
      if (doesBlockContainStyle(editorState, textStyle)) {
        setEditorState(removeSpecificBlockStyle([textStyle], editorState));
      } else {
        const newEditorState = toggleInlineStyle(
          removeSpecificBlockStyle([oppositeStyle], editorState),
          textStyle,
          stylesToRemoveScripts
        );

        setEditorState(newEditorState);
      }
    } else if (textStyle === TEXT_STYLES.REMOVE_FORMATTING) {
      const newEditorState = removeSpecificBlockStyle(
        undefined,
        editorState,
        true
      );
      setEditorState(newEditorState);
    } else {
      setEditorState(toggleInlineStyle(editorState, textStyle));
    }
  };

  return (
    <Flex style={{ gap: "4px" }}>
      <IconDropdown
        modal={{
          height: 272,
          data: ConvertToBlockData,
          clickFunctions: changeBlockTypes,
        }}
        icon={{
          icon: changeBlockTypeIcons(currentBlockType).icon,
        }}
        id="ChangeTextStyles"
      />

      {changeTextStylesData.map((textStyleData) => (
        <div
          key={textStyleData.label}
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
            changeTextStyles(textStyleData.value);
          }}
          style={{ marginRight: "4px", cursor: "pointer" }}
          role="button"
        >
          {textStyleData.icon}
        </div>
      ))}
    </Flex>
  );
};

export default ChangeTextStyles;
