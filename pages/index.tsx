import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import CourseCarousel from "../components/Carousel/Carousel";
import CourseCard from "../components/CourseCard/CourseCard";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const data = [
  {
    id: 1,
    name: "Excel for beginners",
    url: "https://www.youtube.com/watch?v=Vl0H-qTclOg",
    thumbnail: "http://i3.ytimg.com/vi/Vl0H-qTclOg/hqdefault.jpg",
    skills: [
      {
        skill: {
          id: 16,
          name: "organization",
        },
      },
      {
        skill: {
          id: 5,
          name: "computer",
        },
      },
      {
        skill: {
          id: 15,
          name: "office",
        },
      },
      {
        skill: {
          id: 8,
          name: "excel",
        },
      },
    ],
  },
  {
    id: 2,
    name: "Intro in Kubernetes",
    url: "https://www.youtube.com/watch?v=s_o8dwzRlu4",
    thumbnail: "http://i3.ytimg.com/vi/s_o8dwzRlu4/hqdefault.jpg",
    skills: [
      {
        skill: {
          id: 3,
          name: "containers",
        },
      },
      {
        skill: {
          id: 11,
          name: "kubernetes",
        },
      },
      {
        skill: {
          id: 2,
          name: "cloud",
        },
      },
      {
        skill: {
          id: 5,
          name: "computer",
        },
      },
    ],
  },
  {
    id: 5,
    name: "Conventional commits",
    url: "https://www.youtube.com/watch?v=lwGcnDgwmFc",
    thumbnail: "http://i3.ytimg.com/vi/lwGcnDgwmFc/hqdefault.jpg",
    skills: [
      {
        skill: {
          id: 23,
          name: "scripting",
        },
      },
      {
        skill: {
          id: 5,
          name: "computer",
        },
      },
      {
        skill: {
          id: 4,
          name: "coding",
        },
      },
      {
        skill: {
          id: 24,
          name: "git",
        },
      },
    ],
  },
  // {
  //   id: 3,
  //   name: "Excel for beginners",
  //   url: "https://www.youtube.com/watch?v=Vl0H-qTclOg",
  //   thumbnail: "http://i3.ytimg.com/vi/Vl0H-qTclOg/hqdefault.jpg",
  //   skills: [
  //     {
  //       skill: {
  //         id: 16,
  //         name: "organization",
  //       },
  //     },
  //     {
  //       skill: {
  //         id: 5,
  //         name: "computer",
  //       },
  //     },
  //     {
  //       skill: {
  //         id: 15,
  //         name: "office",
  //       },
  //     },
  //     {
  //       skill: {
  //         id: 8,
  //         name: "excel",
  //       },
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   name: "Intro in Kubernetes",
  //   url: "https://www.youtube.com/watch?v=s_o8dwzRlu4",
  //   thumbnail: "http://i3.ytimg.com/vi/s_o8dwzRlu4/hqdefault.jpg",
  //   skills: [
  //     {
  //       skill: {
  //         id: 3,
  //         name: "containers",
  //       },
  //     },
  //     {
  //       skill: {
  //         id: 11,
  //         name: "kubernetes",
  //       },
  //     },
  //     {
  //       skill: {
  //         id: 2,
  //         name: "cloud",
  //       },
  //     },
  //     {
  //       skill: {
  //         id: 5,
  //         name: "computer",
  //       },
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   name: "Conventional commits",
  //   url: "https://www.youtube.com/watch?v=lwGcnDgwmFc",
  //   thumbnail: "http://i3.ytimg.com/vi/lwGcnDgwmFc/hqdefault.jpg",
  //   skills: [
  //     {
  //       skill: {
  //         id: 23,
  //         name: "scripting",
  //       },
  //     },
  //     {
  //       skill: {
  //         id: 5,
  //         name: "computer",
  //       },
  //     },
  //     {
  //       skill: {
  //         id: 4,
  //         name: "coding",
  //       },
  //     },
  //     {
  //       skill: {
  //         id: 24,
  //         name: "git",
  //       },
  //     },
  //   ],
  // },
];

const dashboard = () => {
  return (
    <div>
      <Header />
      <Flex h="94vh">
        <Sidebar />
        <Box w="80%" p={4} overflow={"scroll"}>
          <CourseCarousel title={"Courses based on your skills"}>
            {data.map(({ name, id, url, thumbnail, skills }) => (
              <CourseCard
                key={id}
                id={id}
                name={name}
                url={url}
                thumbnail={thumbnail}
                skills={skills}
              />
            ))}
          </CourseCarousel>
          <CourseCarousel title={"Courses Available"}>
            {data.map(({ name, id, url, thumbnail, skills }) => (
              <CourseCard
                key={id}
                id={id}
                name={name}
                url={url}
                thumbnail={thumbnail}
                skills={skills}
              />
            ))}
          </CourseCarousel>
        </Box>
      </Flex>
    </div>
  );
};

export default dashboard;
