import React from "react";
import { BLOCK_TYPES } from "../../../definitions";
import DividerBlock from "../DividerBlock/DividerBlock";
import TextBlock from "../TextBlock/TextBlock";

const GeneralBlock: React.FC = (props: any) => {
  const { type } = props.blockProps;

  const GeneralBlock = () => {
    switch (type) {
      case BLOCK_TYPES.UNSTYLED:
        return <TextBlock props={props} type={type} />;
      case BLOCK_TYPES.DIVIDER:
        return <DividerBlock {...props} />;
      // case BLOCK_TYPES.TODO:
      //   return <TodoBlock {...props} />;
      default:
        return <TextBlock type={type} props={props} />;
    }
  };

  return <>{GeneralBlock()}</>;
};

export default GeneralBlock;
