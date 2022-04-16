import { Flex } from "@rebass/grid";
import { EditorState } from "draft-js";
import React from "react";
import { DividerIcon } from "../../icons";
import ChangeTextStyles from "./ChangeTextStyles";
import ChangeTextAlignment from "./ChangeTextAlignment";

type ToolbarProps = {
  editorState: EditorState;
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
};

const Toolbar: React.FC<ToolbarProps> = ({ editorState, setEditorState }) => {
  return (
    <Flex style={{ gap: "4px" }}>
      <ChangeTextStyles
        editorState={editorState}
        setEditorState={setEditorState}
      />
      <DividerIcon />
      <ChangeTextAlignment
        editorState={editorState}
        setEditorState={setEditorState}
      />
    </Flex>
  );
};

export default Toolbar;
