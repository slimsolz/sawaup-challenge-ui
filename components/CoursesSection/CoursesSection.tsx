import { Flex, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { courseProps } from "../../utils/types";
import CourseCarousel from "../Carousel/Carousel";
import CourseCard from "../CourseCard/CourseCard";

const CoursesSection = ({
  courses,
  isLoading,
  title,
  pageDetails,
  handleChange
}: courseProps) => {
  return (
    <CourseCarousel title={title} pageDetails={pageDetails} handlePageChange={handleChange}>
      {isLoading ? (
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      ) : courses.length ? (
        courses.map(({ name, id, url, thumbnail, skills }) => (
          <CourseCard
            key={id}
            id={id}
            name={name}
            url={url}
            thumbnail={thumbnail}
            skills={skills}
          />
        ))
      ) : (
        <Text textAlign={"center"} mt={4} color="grey">
          No Courses yet
        </Text>
      )}
    </CourseCarousel>
  );
};

export default CoursesSection;
