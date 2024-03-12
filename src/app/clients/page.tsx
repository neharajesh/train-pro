"use client";
import { Section } from "../_components/Section";
import { Button, Flex, Table } from "@mantine/core";
import "./clients.css";
import classes from "./clientsMantine.module.css";

const Clients = () => {
  const tableData = [
    {
      id: 1,
      name: "Vikram",
      last_check_in: "12/02/2024",
      plan_due: "12/02/2024",
      actions: "buttons",
    },
    {
      id: 2,
      name: "Tushar",
      last_check_in: "25/02/2024",
      plan_due: "25/02/2024",
      actions: "buttons",
    },
    {
      id: 3,
      name: "Monkey",
      last_check_in: "--",
      plan_due: "--",
      actions: "setup",
    },
  ];

  return (
    <div className="clients-page-container">
      <Button
        size="sm"
        className={classes.addClientsButton}
        style={(theme) => ({
          backgroundColor: theme.colors.secondary[4],
        })}
        leftSection={<i className="gg-add-r" />}
      >
        Add Client
      </Button>
      <Section
        title="Clients"
        description="Manage Clients Here, See their latest Progress & Check-ins"
      >
        <Table
          highlightOnHover
          withTableBorder
          withColumnBorders
          className="clients-table"
        >
          <Table.Thead
            style={(theme) => ({ backgroundColor: theme.colors.info[2] })}
          >
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Last Check-In</Table.Th>
              <Table.Th>Plan Due</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {tableData.map((item: any) => (
              <Table.Tr key={item.id}>
                <Table.Td>{item.name}</Table.Td>
                <Table.Td>{item.last_check_in}</Table.Td>
                <Table.Td>{item.plan_due}</Table.Td>
                <Table.Td>
                  {item.actions === "setup" ? (
                    <Button color="blue" size="xs">
                      Setup
                    </Button>
                  ) : (
                    <Flex gap={10}>
                      <Button color="blue" size="xs" variant="outline">
                        Settings
                      </Button>
                      <Button color="blue" size="xs" variant="outline">
                        Notify
                      </Button>
                      <Button color="blue" size="xs" variant="outline">
                        Delete
                      </Button>
                    </Flex>
                  )}
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Section>
    </div>
  );
};

export default Clients;
