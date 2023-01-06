import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import SideBarWidget from "./SideBarWidget/SideBarWidget";

const Sidebar = () => {
  const [selectedSkills, setSelectedSkills] = useState();
  const [availableSkills, setAvailableSkills] = useState([
    { id: 1, name: "coding" },
    { id: 2, name: "cloud" },
    { id: 3, name: "html" },
    { id: 4, name: "javascript" },
    { id: 5, name: "typeScript" },
    { id: 6, name: "coding" },
    { id: 7, name: "cloud" },
    { id: 8, name: "html" },
    { id: 9, name: "javascript" },
    { id: 10, name: "typeScript typeScript" },
    { id: 11, name: "coding" },
    { id: 12, name: "cloud" },
    { id: 13, name: "html" },
    { id: 14, name: "javascript" },
    { id: 15, name: "typeScript" },
    { id: 16, name: "coding" },
    { id: 17, name: "cloud" },
    { id: 18, name: "html" },
    { id: 19, name: "javascript" },
  ]);

  const handleSelectedSkills = () => {};

  return (
    <Flex
      w="20%"
      flexDir={"column"}
      p={3}
      boxShadow="lg"
    >
      <SideBarWidget
        skills={availableSkills}
        title="Selected skills"
        noSkillText="No skill selected"
      />
      <SideBarWidget
        title="Available skills"
        noSkillText="No skill available"
        skills={availableSkills}
      />
    </Flex>
  );
};

export default Sidebar;
