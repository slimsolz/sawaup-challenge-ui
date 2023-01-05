import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const dashboard = () => {
  return (
    <div>
      <Header />
      <Flex h="94vh">
        <Sidebar />
        <Box bgColor="red" w="80%">
          Dashboard
        </Box>
      </Flex>
    </div>
  );
};

export default dashboard;
