"use client";
import { Section } from "@/app/_components/Section";
import { clients } from "@/app/data/clients";
import { Card, Table, Text, Flex } from "@mantine/core";

const getCurrentClient = (id: number) => {
  return clients.find((client) => client.id == id);
};

const Page = ({ params }: any) => {
  const client = getCurrentClient(params.id);
  console.log({ client });

  return (
    client && (
      <Section
        title={client?.name}
        description={`${client?.currentPlan.name} - ${client.currentPlanType.name}`}
      >
        <Flex justify="space-between">
          <Card w="30%" withBorder padding="lg">
            <Card.Section withBorder>
              <Text my={10} mx={10} fw={600}>
                Basic Details
              </Text>
            </Card.Section>
            <Card.Section w="100%">
              <Table my={10} mx={10}>
                <Table.Tbody>
                  <Table.Tr>
                    <Table.Td fw={600}>Full Name</Table.Td>
                    <Table.Td>{client.name}</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td fw={600}>Email</Table.Td>
                    <Table.Td>{client.email}</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td fw={600}>Date of Birth</Table.Td>
                    <Table.Td>{client.dob}</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td fw={600}>Blood Group</Table.Td>
                    <Table.Td>{client.bloodGroup}</Table.Td>
                  </Table.Tr>
                </Table.Tbody>
              </Table>
            </Card.Section>
          </Card>

          <Card w="30%" withBorder padding="lg">
            <Card.Section withBorder>
              <Text my={10} mx={10} fw={600}>
                Plan Details
              </Text>
            </Card.Section>
            <Card.Section w="100%">
              <Table my={10} mx={10}>
                <Table.Tbody>
                  <Table.Tr>
                    <Table.Td fw={600}>Current Plan</Table.Td>
                    <Table.Td>{client.currentPlan.name}</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td fw={600}>Current Plan Type</Table.Td>
                    <Table.Td>{client.currentPlanType.name}</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td fw={600}>Plan Start Date</Table.Td>
                    <Table.Td>{client.planStartDate}</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td fw={600}>Last Check In Date</Table.Td>
                    <Table.Td>{client.lastCheckIn}</Table.Td>
                  </Table.Tr>
                </Table.Tbody>
              </Table>
            </Card.Section>
          </Card>

          <Card w="30%" withBorder padding="lg">
            <Card.Section withBorder>
              <Text my={10} mx={10} fw={600}>
                Nutrition Goals
              </Text>
            </Card.Section>
            <Card.Section w="100%">
              <Table my={10} mx={10}>
                <Table.Tbody>
                  <Table.Tr>
                    <Table.Td fw={600}>Calories</Table.Td>
                    <Table.Td>{client.nutritionGoals.calories}</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td fw={600}>Carbs</Table.Td>
                    <Table.Td>{client.nutritionGoals.carbs}</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td fw={600}>Protein</Table.Td>
                    <Table.Td>{client.nutritionGoals.protein}</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td fw={600}>Fats</Table.Td>
                    <Table.Td>{client.nutritionGoals.fats}</Table.Td>
                  </Table.Tr>
                </Table.Tbody>
              </Table>
            </Card.Section>
          </Card>
        </Flex>
      </Section>
    )
  );
};

export default Page;
