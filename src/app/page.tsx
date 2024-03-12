"use client";

import { Card, Flex, Text, Table } from "@mantine/core";
import { Section } from "./_components/Section";
import Image from "next/image";

export default function Home() {
  const coachDetails = {
    newClients: 3,
  };
  return (
    <Section
      title="Hey Coach, Welcome Back!"
      description="Your client updates are here."
    >
      <Flex justify="space-between" gap={30}>
        <Flex gap={20} w="40%">
          <Card withBorder h={150} w={200}>
            <Flex h={"100%"} direction="column" align="center" justify="center">
              <Text fw={700} fz={32}>
                {coachDetails.newClients}
              </Text>
              <Text>new clients</Text>
            </Flex>
          </Card>
          <Card withBorder h={150} w={200}>
            <Flex h={"100%"} direction="column" align="center" justify="center">
              <Text fw={700} fz={32}>
                {coachDetails.newClients}
              </Text>
              <Text>new check ins</Text>
            </Flex>
          </Card>
          <Card withBorder h={150} w={200}>
            <Flex h={"100%"} direction="column" align="center" justify="center">
              <Text fw={700} fz={32}>
                4
              </Text>
              <Text>plans ending today</Text>
            </Flex>
          </Card>
        </Flex>

        <Flex w="100%">
          <Card withBorder w="100%" padding="lg">
            <Card.Section withBorder>
              <Text fw={600} my={10} mx={10}>
                Payment Details
              </Text>
            </Card.Section>
            <Card.Section withBorder>
              <Table>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Name</Table.Th>
                    <Table.Th>Status</Table.Th>
                    <Table.Th>Payment Date</Table.Th>
                    <Table.Th>Due Date</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  <Table.Tr>
                    <Table.Td>Joey Tribbiani</Table.Td>
                    <Table.Td>
                      <Flex gap={4}>
                        <Image
                          src="/green-check.svg"
                          alt="green-check-svg"
                          height={10}
                          width={10}
                        />
                        Paid
                      </Flex>
                    </Table.Td>
                    <Table.Td>12/03/2024</Table.Td>
                    <Table.Td>12/03/2024</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>Phoebe Buffay</Table.Td>
                    <Table.Td>
                      <Flex gap={4}>
                        <Image
                          src="/warning.svg"
                          alt="warning-svg"
                          height={14}
                          width={14}
                        />
                        Pending
                      </Flex>
                    </Table.Td>
                    <Table.Td>11/03/2024</Table.Td>
                    <Table.Td>12/03/2024</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>Joey Tribbiani</Table.Td>
                    <Table.Td>
                      <Flex gap={4}>
                        <Image
                          src="/error.svg"
                          alt="error-svg"
                          height={14}
                          width={14}
                        />
                        Failed
                      </Flex>
                    </Table.Td>
                    <Table.Td>11/03/2024</Table.Td>
                    <Table.Td>12/03/2024</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>Ross Geller</Table.Td>
                    <Table.Td>
                      <Flex gap={4}>
                        <Image
                          src="/green-check.svg"
                          alt="green-check-svg"
                          height={10}
                          width={10}
                        />
                        Paid
                      </Flex>
                    </Table.Td>
                    <Table.Td>11/03/2024</Table.Td>
                    <Table.Td>12/03/2024</Table.Td>
                  </Table.Tr>
                </Table.Tbody>
              </Table>
            </Card.Section>
          </Card>
        </Flex>
      </Flex>
    </Section>
  );
}
