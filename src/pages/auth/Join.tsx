import { Box, Circle, Flex, Text } from "@chakra-ui/react";

const Join = () => {
  return (
    <>
      <Flex
        as="section"
        justify="center"
        alignItems="center"
        w="100%"
        h="50%"
        position="relative"
      >
        <Flex
          w="10rem"
          h="14rem"
          bg="#f6f6f6f"
          borderRadius="5px"
          border="2px solid #dedede"
          position="absolute"
          transform="rotate(-10deg)"
          zIndex="10"
          direction="row"
          p="30px 10px"
        >
          <Text
            transform="rotate(-90deg)"
            fontSize="20px"
            fontWeight="bold"
            h="24px"
            color="#e0e0e0"
          >
            SDHS
          </Text>
        </Flex>
        <Box
          w="11rem"
          h="3rem"
          borderRadius="50%"
          position="absolute"
          bottom="0"
          bg="#c3c3c3"
          transform="rotateX(80deg)"
        ></Box>
      </Flex>
    </>
  );
};

export default Join;
