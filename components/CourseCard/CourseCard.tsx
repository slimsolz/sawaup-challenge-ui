import React from "react";
import { Flex, Icon, Tag, TagLabel, useDisclosure } from "@chakra-ui/react";
import { Card, CardBody, CardFooter, Heading, Image } from "@chakra-ui/react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import CourseVideoModal from "../CourseVideoModal/CourseVideoModal";
import { urlStringConverter } from "../../utils/urlConverter";

type CourseDetails = {
  id: number;
  name: string;
  url: string;
  thumbnail: string;
  skills: { skill: { id: number; name: string } }[];
  likes?: Record<string, any>;
};

const CourseCard = ({
  id,
  name,
  url,
  thumbnail,
  skills,
  likes,
}: CourseDetails) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          {likes ? <Icon as={FaHeart} color="red" /> : <Icon as={FaRegHeart} />}
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
