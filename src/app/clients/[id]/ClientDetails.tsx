import { Card, Table, Text, Flex } from "@mantine/core";
import { Client } from "../types";
import { DetailsCard } from "./DetailsCard";

type ClientDetailsProps = {
  client: Client;
};

export const ClientDetails = ({ client }: ClientDetailsProps) => {
  return (
    <Flex justify="space-between">
      <DetailsCard
        cardTitle="Basic Details"
        cardDetails={[
          { title: "Full Name", value: client.name },
          { title: "Email", value: client.email },
          { title: "Date of Birth", value: client.dob.format("DD/MM/YYYY") },
          { title: "Blood Group", value: client.bloodGroup },
        ]}
      />

      <DetailsCard
        cardTitle="Plan Details"
        cardDetails={[
          { title: "Current Plan", value: client.currentPlan.name },
          { title: "Current Plan Type", value: client.currentPlanType.name },
          {
            title: "Plan Start Date",
            value: client.planStartDate.format("DD/MM/YYYY"),
          },
          {
            title: "Last Check In Date",
            value: client.lastCheckIn.format("DD/MM/YYYY"),
          },
        ]}
      />

      <DetailsCard
        cardTitle="Nutrition Goals"
        cardDetails={[
          { title: "Calories", value: client.nutritionGoals.calories },
          { title: "Carbs", value: client.nutritionGoals.carbs },
          { title: "Protein", value: client.nutritionGoals.protein },
          { title: "Fats", value: client.nutritionGoals.fats },
        ]}
      />
    </Flex>
  );
};
