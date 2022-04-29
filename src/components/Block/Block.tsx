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
  topText?: string;
  bottomText?: string;
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
  topText,
  bottomText,
}) => {
  return (
    <HoverCard
      turnOffHover={turnOffHover}
      index={index}
      activeIndex={activeIndex}
      backgroundColor={backgroundColor || "white"}
      handleMouseDown={handleMouseDown}
      handleClick={handleClick}
      padding="8px"
      borderRadius="6px"
      className={className}
      fakeFocus={fakeFocus}
    >
      <Flex width="100%" alignItems="center">
        <Flex mr="16px">{icon}</Flex>
        <TextWrapper>
          <Paragraph className="overflow">{topText}</Paragraph>
          {bottomText && (
            <Paragraph
              style={{ color: "rgba(55, 53, 47, 0.65)" }}
              className="overflow"
            >
              {bottomText}
            </Paragraph>
          )}
        </TextWrapper>
      </Flex>
    </HoverCard>
  );
};

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 4px;
`;

const Paragraph = styled.p`
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0px;
  white-space: nowrap;
  color: rgb(55, 53, 47); ;
`;

export default Block;
