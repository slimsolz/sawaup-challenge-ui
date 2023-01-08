import React from "react";
import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { CourseCarouselProps } from "../../utils/types";

const CourseCarousel = ({
  children,
  title,
  pageDetails,
  handlePageChange,
}: CourseCarouselProps) => {
  const handlePagination = (type: string, nextPageNumber: number): void => {
    if (
      (type === "prev" && pageDetails.page > 1) ||
      (type === "next" && pageDetails.page !== pageDetails.totalPage)
    ) {
      handlePageChange(nextPageNumber);
    }
  };

  return (
    <Box w="100%" p={4} boxShadow={2} mb={5}>
      <Center>
        <Heading as="h3" size="lg" mb={5}>
          {title.toUpperCase()}
        </Heading>
      </Center>
      <Flex justifyContent="space-between" p={2}>
        <ArrowLeftIcon
          color={pageDetails.page <= 1 ? "grey" : "blue"}
          alignSelf={"center"}
          pl={2}
          cursor={pageDetails.page <= 1 ? "not-allowed" : "pointer"}
          fontSize={20}
          onClick={() => handlePagination("prev", pageDetails.page - 1)}
        />
        <Flex flex={1} ml={4} mr={4} justifyContent="space-around">
          {children}
        </Flex>
        <ArrowRightIcon
          color={pageDetails.page >= pageDetails.totalPage ? "grey" : "blue"}
          alignSelf={"center"}
          pr={2}
          cursor={
            pageDetails.page === pageDetails.totalPage
              ? "not-allowed"
              : "pointer"
          }
          fontSize={20}
          onClick={() => handlePagination("next", pageDetails.page + 1)}
        />
      </Flex>
    </Box>
  );
};

export default CourseCarousel;
