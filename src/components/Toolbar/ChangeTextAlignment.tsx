import { Flex } from "@rebass/grid";
import { EditorState } from "draft-js";
import React from "react";
import { CenterAlignIcon, LeftAlignIcon, RightAlignIcon } from "../../icons";
import {
  getCurrentBlock,
  removeSpecificBlockStyle,
  updateDataOfBlock,
} from "../Editor/Editor.helpers";
import { AlignmentTypes } from "./Toolbar.helpers";

type ChangeTextStyleProps = {
  editorState: EditorState;
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
  isDisabled?: boolean;
  saveEditor?: (args: any) => void;
};

const ChangeTextStyles: React.FC<ChangeTextStyleProps> = ({
  editorState,
  setEditorState,
  saveEditor,
}) => {
  const block = getCurrentBlock(editorState);
  const data = block?.getData();

  // change alignment of block by updating meta state
  const updateData = (alignment: AlignmentTypes) => {
    const currentData = data.get("alignment");
    if (currentData !== alignment) {
      const newData = data.set("alignment", alignment);

      const newEditorState = updateDataOfBlock(
        removeSpecificBlockStyle(undefined, editorState, true),
        block,
        newData
      );
      setEditorState(newEditorState);
      saveEditor && saveEditor(newEditorState);
    }
  };

  return (
    <Flex style={{ gap: "4px" }}>
      <div
        onClick={() => {
          updateData(AlignmentTypes.LEFT_ALIGN);
        }}
        style={{ marginRight: "4px", cursor: "pointer" }}
        role="button"
      >
        <LeftAlignIcon />
      </div>
      <div
        onClick={() => {
          updateData(AlignmentTypes.CENTER_ALIGN);
        }}
        style={{ marginRight: "4px", cursor: "pointer" }}
        role="button"
      >
        <CenterAlignIcon />
      </div>
      <div
        onClick={() => {
          updateData(AlignmentTypes.RIGHT_ALIGN);
        }}
        style={{ marginRight: "4px", cursor: "pointer" }}
        role="button"
      >
        <RightAlignIcon />
      </div>
    </Flex>
  );
};

export default ChangeTextStyles;
