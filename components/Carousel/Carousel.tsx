import React from "react";
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const CourseCarousel = ({ children, title }: any) => {
  return (
    <Box w="100%" p={4} boxShadow={2} mb={3}>
      <Center>
        <Heading as="h3" size="lg" mb={5}>
          {title}
        </Heading>
      </Center>
      <Flex justifyContent="space-between" p={2}>
        <ArrowLeftIcon
          color="blue"
          alignSelf={"center"}
          pl={2}
          cursor="pointer"
          fontSize={20}
          onClick={() => alert("")}
        />
        <Flex flex={1} ml={4} mr={4} justifyContent="space-around">
          {children}
        </Flex>
        <ArrowRightIcon
          color="blue"
          alignSelf={"center"}
          pr={2}
          cursor="pointer"
          fontSize={20}
        />
      </Flex>
    </Box>
  );
};

export default CourseCarousel;
