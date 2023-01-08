import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { getAllSkills } from "../slices/skillSlice";
import { AppDispatch, RootState } from "../store";
import {
  getAllCourses,
  getAllCoursesBasedOnSkills,
} from "../slices/courseSlice";
import CoursesSection from "../components/CoursesSection/CoursesSection";

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [skillIds, setSkillIds] = useState<number[]>([]);
  const [pageDetails, setPageDetails] = useState({
    page: 1,
    perPage: 3,
    totalCount: 1,
    totalPage: 1,
  });

  const [skillPageDetails, setSkillPageDetails] = useState({
    page: 1,
    perPage: 3,
    totalCount: 1,
    totalPage: 1,
  });

  const { skills, isLoading } = useSelector((state: RootState) => state.skill);
  const { courses, isLoading: isCourseLoading } = useSelector(
    (state: RootState) => state.course
  );

  const { skillsCourses, isSkillLoading } = useSelector(
    (state: RootState) => state.course
  );

  useEffect(() => {
    dispatch(getAllSkills());
  }, []);

  useEffect(() => {
    dispatch(getAllCourses(pageDetails));
  }, [dispatch, pageDetails.page, pageDetails.perPage]);

  useEffect(() => {
    dispatch(
      getAllCoursesBasedOnSkills({ ...skillPageDetails, ids: skillIds })
    );
  }, [skillIds, skillPageDetails.page, skillPageDetails.perPage]);

  const handleChange = (page: number) => {
    setPageDetails((prev) => ({ ...prev, page, perPage: pageDetails.perPage }));
  };

  const handleSkillPageChange = (page: number) => {
    setSkillPageDetails((prev) => ({
      ...prev,
      page,
      perPage: skillPageDetails.perPage,
    }));
  };

  return (
    <div>
      <Header />
      <Flex h="94vh">
        <Sidebar
          loading={isLoading}
          skills={skills}
          skillIds={skillIds}
          setSkillIds={setSkillIds}
          setSkillPageDetails={setSkillPageDetails}
        />
        <Box w="80%" p={4} overflow={"scroll"}>
          <CoursesSection
            courses={skillsCourses.courses}
            isLoading={isSkillLoading}
            title="courses based on your skills"
            pageDetails={skillsCourses.pageDetails}
            handleChange={handleSkillPageChange}
          />
          <CoursesSection
            courses={courses.courses}
            isLoading={isCourseLoading}
            title="courses available"
            pageDetails={courses.pageDetails}
            handleChange={handleChange}
          />
        </Box>
      </Flex>
    </div>
  );
};

export default Dashboard;
