"use client";

import { Menu } from "@mantine/core";
import { MenuItem } from "./MenuItem";

export const HeaderMenu = () => {
  return (
    <Menu trigger="click-hover" width={200} position="bottom-end">
      <Menu.Target>
        <img src="/menu.svg" alt="menu icon" width={26} />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>General</Menu.Label>
        <MenuItem title="Home" redirectTo="/" />
        <MenuItem title="Dashboard" redirectTo="/" />
        <MenuItem title="Clients" redirectTo="/clients" />
        <MenuItem title="Checkin" redirectTo="/checkin" />
        <MenuItem title="Library" redirectTo="/library" />
      </Menu.Dropdown>
    </Menu>
  );
};
