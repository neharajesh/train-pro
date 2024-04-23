import { Menu } from "@mantine/core";

type MenuItemProps = {
  title: string;
  icon?: string;
  redirectTo: string;
};

export const MenuItem = ({ title, icon, redirectTo }: MenuItemProps) => {
  return (
    <Menu.Item
      leftSection={icon}
      component="a"
      href={redirectTo}
      target="_blank"
    >
      {title}
    </Menu.Item>
  );
};
