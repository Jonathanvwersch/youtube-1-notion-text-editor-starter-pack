import { Flex } from "@rebass/grid";
import React from "react";
import styled from "styled-components";
import { HoverCard } from "..";

type BlockProps = {
  backgroundColor?: string;
  handleClick?: (args: any) => any;
  handleMouseDown?: (args: any) => any;
  icon: any;
  activeIndex?: number;
  index?: number;
  className?: string;
  turnOffHover?: boolean;
  fakeFocus?: boolean;
  text?: string;
  extraText?: string;
};

const Block: React.FC<BlockProps> = ({
  handleClick,
  handleMouseDown,
  icon,
  activeIndex,
  index,
  backgroundColor,
  className,
  turnOffHover = false,
  fakeFocus,
  text,
  extraText,
}) => {
  return (
    <HoverCard
      turnOffHover={turnOffHover}
      index={index}
      activeIndex={activeIndex}
      backgroundColor={backgroundColor || "white"}
      handleMouseDown={handleMouseDown}
      handleClick={handleClick}
      padding={"8px 16px"}
      className={className}
      fakeFocus={fakeFocus}
    >
      <Flex justifyContent="space-between" width="100%">
        <Flex style={{ overflow: "hidden" }}>
          <Flex alignItems="center" mr="8px">
            {icon}
          </Flex>
          <Paragraph className="overflow">{text}</Paragraph>
        </Flex>
        {extraText && (
          <Flex
            pl="8px"
            style={{
              fontSize: "14px",
            }}
          >
            {extraText}
          </Flex>
        )}
      </Flex>
    </HoverCard>
  );
};

const Paragraph = styled.p`
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export default Block;
