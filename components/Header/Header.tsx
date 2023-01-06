import { Flex } from "@chakra-ui/react";
import Logo from "./assets/logo-white-sawaup.svg";

const Header = () => {
  return (
    <Flex p={4} bgColor="blue" height={"6vh"} alignItems="center">
      <Logo />
    </Flex>
  );
};

export default Header;
