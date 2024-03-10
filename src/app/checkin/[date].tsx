import { Section } from "../components/Section";

export const CheckInDetails = ({ client }) => {
  return (
    <Section title={`S{client.name}'s Check-In`}>
      <p> checkin details</p>
    </Section>
  );
};
