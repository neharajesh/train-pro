import { Section } from "../components/Section";
import { TableGeneric } from "../components/Table";
import "./clients.css";

const Clients = () => {
  return (
    <div className="clients-page-container">
      <button className="add-clients-button">
        <i className="gg-add-r" /> Add Client
      </button>
      <Section
        title="Clients"
        description="Manage Clients Here, See their latest Progress & Check-ins"
      >
        <TableGeneric
          headerValues={["Name", "Last Check-In", "Plan Due", "Actions"]}
          bodyValues={[
            {
              name: "Vikram",
              last_check_in: "12/02/2024",
              plan_due: "12/02/2024",
              actions: "buttons",
            },
            {
              name: "Tushar",
              last_check_in: "25/02/2024",
              plan_due: "25/02/2024",
              actions: "buttons",
            },
            {
              name: "Monkey",
              last_check_in: "--",
              plan_due: "--",
              actions: "setup",
            },
          ]}
        />
      </Section>
    </div>
  );
};

export default Clients;
