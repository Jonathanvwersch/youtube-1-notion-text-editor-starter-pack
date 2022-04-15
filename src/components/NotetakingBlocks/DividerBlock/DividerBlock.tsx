import React, { memo, useEffect } from "react";
import styled from "styled-components";

import { addNewBlockAt, updateDataOfBlock } from "../../Editor/Editor.helpers";

const DividerBlock: React.FC = (props: any) => {
  const { block, blockProps } = props;
  const { setEditorState, editorState } = blockProps;
  const data = block.getData();
  const newBlock = data.has("created") && data.get("created") === true;

  const updateData = () => {
    const newData = data.set("created", true);
    setEditorState(
      updateDataOfBlock(
        addNewBlockAt(editorState, block.getKey()),
        block,
        newData
      )
    );
  };

  // Add new block after divider, if the block has been created for the first time
  useEffect(() => {
    if (!newBlock) {
      updateData();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <Divider id={`${block.getKey()}-0-0`} />;
};

export default memo(DividerBlock);

const Divider = styled.hr`
  color: ${({ theme }) => theme.colors.fontColor};
  background-color: ${({ theme }) => theme.colors.fontColor};
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
  width: 100%;
  height: 1px;
`;
