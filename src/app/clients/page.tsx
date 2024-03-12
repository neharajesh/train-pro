"use client";
import { Section } from "../_components/Section";
import { Button, Flex, Table } from "@mantine/core";
import classes from "./clientsMantine.module.css";
import { Client, ClientsTableProps } from "./types";
import { clients as staticClients } from "../data/clients";
import "./clients.css";
import { useState } from "react";
import dayjs from "dayjs";

const ClientsTable = ({ clients }: ClientsTableProps) => {
  const getPlanDue = (client: Client) => {
    const currentDate = dayjs(client.planStartDate, "DD/MM/YYYY");
    const planEndDate = currentDate.add(
      client.currentPlan.duration,
      client.currentPlan.durationType
    );

    return planEndDate.format("DD/MM/YYYY");
  };

  const handleNameClick = (client: Client) => {
    window.open(`/clients/${client.id}`);
  };

  return (
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
        {clients.map((item: any) => (
          <Table.Tr key={item.id}>
            <Table.Td onClick={() => handleNameClick(item)}>
              {item.name}
            </Table.Td>
            <Table.Td>{item.lastCheckIn}</Table.Td>
            <Table.Td>{getPlanDue(item)}</Table.Td>
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
  );
};

const Clients = () => {
  const [clients, setClients] = useState<Client[]>(staticClients);

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
        <ClientsTable clients={clients} />
      </Section>
    </div>
  );
};

export default Clients;
