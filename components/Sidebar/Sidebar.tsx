import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import SideBarWidget from "./SideBarWidget/SideBarWidget";
import { operationType, SkillState, skillType } from "../../utils/types";

const Sidebar = ({
  loading,
  skills,
  skillIds,
  setSkillIds,
  setSkillPageDetails,
}: SkillState) => {
  const [selectedSkills, setSelectedSkills] = useState<skillType[]>([]);

  const handleSelection = (skill: skillType) => {
    let skillAlreadySelected = false;
    if (selectedSkills.length) {
      skillAlreadySelected = selectedSkills.some((e) => e.id === skill.id);
    }

    const selectedSkill = skills.find(
      (selected) => skill.id === selected.id
    ) as skillType;

    if (!skillAlreadySelected) {
      setSelectedSkills((prev) => [...prev, selectedSkill]);
      setSkillIds((prev) => [...prev, skill.id]);
      setSkillPageDetails({ page: 1, perPage: 3, totalCount: 1, totalPage: 1 });
    }
  };

  const removeSelection = (skill: skillType) => {
    const selectedSkill = selectedSkills.filter(
      (selected) => skill.id !== selected.id
    );
    const selectedSkillIds = skillIds.filter((id) => skill.id !== id);

    setSelectedSkills(selectedSkill);
    setSkillIds(selectedSkillIds);
    setSkillPageDetails({ page: 1, perPage: 3, totalCount: 1, totalPage: 1 });
  };

  return (
    <Flex w="20%" flexDir={"column"} p={3} boxShadow="lg">
      <SideBarWidget
        loading={loading}
        skills={selectedSkills}
        title="Selected skills"
        noSkillText="No skill selected"
        handleSelection={handleSelection}
        removeSelection={removeSelection}
        type={operationType.remove}
        fill={true}
      />
      <SideBarWidget
        loading={loading}
        title="Available skills"
        noSkillText="No skill available"
        skills={skills}
        handleSelection={handleSelection}
        removeSelection={removeSelection}
        type={operationType.select}
        fill={false}
      />
    </Flex>
  );
};

export default Sidebar;
