import React from "react";
import {
  Box,
  Flex,
  Heading,
  Spinner,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { operationType, SidebarTypes, skillType } from "../../../utils/types";

const SideBarWidget = ({
  loading,
  title,
  noSkillText,
  skills,
  handleSelection,
  removeSelection,
  type,
  fill,
}: SidebarTypes) => {
  const handleClick = (type: string, skill: skillType) => {
    type === operationType.select
      ? handleSelection(skill)
      : removeSelection(skill);
  };

  return (
    <Box flex={1} pl={2} pr={2} overflowY={"scroll"}>
      <Heading mt={5} mb={5} size={"lg"} as="h2" textAlign={"center"}>
        {title}
      </Heading>
      {loading ? (
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      ) : skills.length ? (
        <Flex
          p={3}
          flexWrap="wrap"
          justifyContent="space-around"
          alignItems="center"
        >
          {skills.map((skill) => {
            return (
              <Tag
                size={"md"}
                key={skill?.id}
                variant={fill ? "solid" : "outline"}
                colorScheme="blue"
                mb={2}
                p={2}
                rounded="md"
                shadow="md"
                cursor="pointer"
                onClick={() => handleClick(type, skill)}
              >
                <TagLabel>{skill?.name}</TagLabel>
              </Tag>
            );
          })}
        </Flex>
      ) : (
        <Text textAlign={"center"} mt={4} color="grey">
          {noSkillText}
        </Text>
      )}
    </Box>
  );
};

export default SideBarWidget;
