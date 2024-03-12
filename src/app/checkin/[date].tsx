import { Section } from "../_components/Section";

export const CheckInDetails = ({ client }: any) => {
  return (
    <Section title={`S{client.name}'s Check-In`}>
      <p> checkin details</p>
    </Section>
  );
};
