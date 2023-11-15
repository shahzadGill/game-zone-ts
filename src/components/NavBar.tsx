import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  // "HStact" means horizontal stack
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
    </HStack>
  );
};

export default NavBar;
