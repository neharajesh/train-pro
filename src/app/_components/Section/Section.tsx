import { Box, Text } from "@mantine/core";
import { SectionProps } from "./types";

export const Section = ({ title, description, children }: SectionProps) => {
  return (
    <Box className="block w-full">
      <h2 className="text-xl pb-2">{title}</h2>
      {description && <Text c="grey">{description}</Text>}
      <div className="pt-8">{children}</div>
    </Box>
  );
};
