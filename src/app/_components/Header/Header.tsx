import classes from "./header.module.css";
import { Flex, Text } from "@mantine/core";

export const Header = () => {
  return (
    <Flex justify="space-between" p={20} className={classes.header}>
      <a href="/">
        <Flex gap={4}>
          <img src="/kettlebell.svg" height={20} width={20} />{" "}
          <Text>Train Pro</Text>
        </Flex>
      </a>

      <Flex gap={40}>
        <a href="/clients">Clients</a>
        <a href="/checkin">Check In</a>
        <a href="/library">Library</a>
      </Flex>
      <div>
        <p>Login</p>
      </div>
    </Flex>
  );
};
