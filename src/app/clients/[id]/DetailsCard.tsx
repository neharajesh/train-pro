import { Card, Table, Text } from "@mantine/core";

type DetailsCardProps = {
  cardTitle: string;
  cardDetails: any;
};

export const DetailsCard = ({ cardTitle, cardDetails }: DetailsCardProps) => {
  return (
    <Card miw={300} w="30%" withBorder padding="lg">
      <Card.Section withBorder>
        <Text my={10} mx={10} fw={600}>
          {cardTitle}
        </Text>
      </Card.Section>
      <Card.Section w="100%">
        <Table my={10} mx={10}>
          <Table.Tbody>
            {cardDetails.map((detail: any) => (
              <Table.Tr key={detail.title}>
                <Table.Td fw={600}>{detail.title}</Table.Td>
                <Table.Td>{detail.value}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Card.Section>
    </Card>
  );
};
