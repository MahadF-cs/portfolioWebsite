import { Tag, useColorModeValue } from "@chakra-ui/react";

const TagComponent = ({ children, color, ...props }) => {
  return (
    <Tag
      fontSize=".9rem"
      fontWeight="600"
      color="white"
      // backgroundColor={color.bgColor ? color.bgColor : color}
      // if color.bgColor is undefined then set backgroundColor to white
      backgroundColor={useColorModeValue("telegram.500", "telegram.400")}
      minHeight="2rem"
      m="0 .5rem 7px 0"
      p=".3rem .75rem"
      cursor="pointer"
      transitionDuration="250ms"
      userSelect="none"
      _hover={{
        backgroundColor: useColorModeValue("telegram.500", "telegram.400"),
      }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default TagComponent;
