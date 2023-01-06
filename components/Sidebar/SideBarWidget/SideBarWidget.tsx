import React from "react";
import { Box, Flex, Heading, Tag, TagLabel, Text } from "@chakra-ui/react";

type SidebarTypes = {
  title: string;
  noSkillText?: string;
  skills?: Record<string, number | string>[];
};

const SideBarWidget = ({ title, noSkillText, skills }: SidebarTypes) => {
  const handleClick = (id: number | string) => {
    console.log(id);
  };

  return (
    <Box flex={1} pl={2} pr={2} overflowY={"scroll"}>
      <Heading mt={5} mb={5} size={"lg"} as="h2" textAlign={"center"}>
        {title}
      </Heading>
      {skills ? (
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
                variant="outline"
                colorScheme="blue"
                mb={2}
                p={2}
                rounded="md"
                shadow="md"
                cursor="pointer"
                onClick={() => handleClick(skill?.id)}
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
