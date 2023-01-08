import React, { useEffect, useState } from "react";
import { Flex, Icon, Tag, TagLabel, useDisclosure } from "@chakra-ui/react";
import { Card, CardBody, CardFooter, Heading, Image } from "@chakra-ui/react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import CourseVideoModal from "../CourseVideoModal/CourseVideoModal";
import { urlStringConverter } from "../../utils/helpers";
import { CourseDetailsProps } from "../../utils/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { toggleLikesCourses } from "../../slices/courseSlice";

const CourseCard = ({
  id,
  name,
  url,
  thumbnail,
  skills,
  users,
}: CourseDetailsProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userLike, setUserLike] = useState(users);
  const [like, setLike] = useState(false);

  const { liked, isLikeSuccess } = useSelector(
    (state: RootState) => state.course
  );

  const toggleLike = () => {
    let user = localStorage.getItem("user") || "";
    dispatch(toggleLikesCourses({ courseId: id, name: user }));
  };

  useEffect(() => {
    if (isLikeSuccess) {
      const status = liked.courseId === id;
      setLike(status);
      setUserLike(status ? [liked] : []);
    }
  }, [liked]);

  return (
    <>
      <Card maxW="xs" variant="outline" cursor="pointer">
        <CardBody p={0}>
          <Image
            src={thumbnail}
            alt={name}
            borderRadius="lg"
            borderBottomRadius="none"
            onClick={onOpen}
          />
        </CardBody>
        <Flex justifyContent="space-between" p={4}>
          <Heading size="md" onClick={onOpen}>
            {name}
          </Heading>
          {userLike?.length || like ? (
            <Icon onClick={toggleLike} as={FaHeart} color="red" />
          ) : (
            <Icon onClick={toggleLike} as={FaRegHeart} />
          )}
        </Flex>
        <Flex flexWrap="wrap" justifyContent="space-around" mb={2}>
          {skills.map(({ skill }) => {
            return (
              <Tag
                size={"sm"}
                key={skill?.id}
                variant="outline"
                colorScheme="blue"
                p={2}
                rounded="md"
                cursor="pointer"
              >
                <TagLabel>{skill?.name}</TagLabel>
              </Tag>
            );
          })}
        </Flex>
      </Card>
      <CourseVideoModal
        open={isOpen}
        close={onClose}
        videoUrl={urlStringConverter(url)}
      />
    </>
  );
};

export default CourseCard;
