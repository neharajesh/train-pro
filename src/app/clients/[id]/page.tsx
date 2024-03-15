"use client";
import { Section } from "@/app/_components/Section";
import { clients } from "@/app/data/clients";
import { ClientDetails } from "./ClientDetails";
import { CheckinDetails } from "./CheckinDetails";

const getCurrentClient = (id: number) => {
  return clients.find((client) => client.id == id);
};

const Page = ({ params }: any) => {
  const client = getCurrentClient(params.id);

  return (
    client && (
      <Section
        title={client?.name}
        description={`${client?.currentPlan.name} - ${client.currentPlanType.name}`}
      >
        <ClientDetails client={client} />
        <CheckinDetails client={client} />
      </Section>
    )
  );
};

export default Page;
