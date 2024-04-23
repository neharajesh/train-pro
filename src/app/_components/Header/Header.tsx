import { HeaderMenu } from "./components";
import classes from "./header.module.css";
import { Flex, Text } from "@mantine/core";

export const Header = () => {
  return (
    <Flex justify="space-between" p={20} className={classes.header}>
      <a href="/">
        <Flex gap={4} px={30}>
          <img src="/kettlebell.svg" height={20} width={20} />{" "}
          <Text>Train Pro</Text>
        </Flex>
      </a>

      <Flex gap={40} mr={30}>
        <p>Login</p>
        <HeaderMenu />
      </Flex>
    </Flex>
  );
};
