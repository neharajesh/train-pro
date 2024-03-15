import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Client } from "../clients/types";

dayjs.extend(customParseFormat);

export const clients: Client[] = [
  {
    id: 1,
    name: "Neha Rajesh",
    dob: dayjs("26/07/1997", "DD/MM/YYYY"),
    bloodGroup: "O+",
    currentPlan: {
      id: 1,
      name: "Three Month Plan",
      duration: 3,
      durationType: "months",
    }, //planId
    planStartDate: dayjs("12/02/2024", "DD/MM/YYYY"),
    currentPlanType: {
      id: 1,
      name: "Weight Loss",
    }, //planType id
    email: "leehanseok3@gmail.com",
    checkinType: "daily", //daily or weekly
    nutritionGoals: {
      calories: 3000,
      carbs: 400,
      protein: 180,
      fats: 80,
    },
    lastCheckIn: dayjs("11/03/2024", "DD/MM/YYYY"),
  },
  {
    id: 2,
    name: "Joey Tribbiani",
    dob: dayjs("26/07/1997", "DD/MM/YYYY"),
    bloodGroup: "O+",
    currentPlan: {
      id: 1,
      name: "Three Month Plan",
      duration: 3,
      durationType: "months",
    }, //planId
    planStartDate: dayjs("12/02/2024", "DD/MM/YYYY"),
    currentPlanType: {
      id: 1,
      name: "Weight Loss",
    }, //planType id
    email: "joeyjoey@gmail.com",
    checkinType: "daily", //daily or weekly
    nutritionGoals: {
      calories: 3000,
      carbs: 400,
      protein: 180,
      fats: 80,
    },
    lastCheckIn: dayjs("11/03/2024", "DD/MM/YYYY"),
  },
  {
    id: 3,
    name: "Phoebe Buffay",
    dob: dayjs("26/07/1997", "DD/MM/YYYY"),
    bloodGroup: "O+",
    currentPlan: {
      id: 1,
      name: "Three Month Plan",
      duration: 3,
      durationType: "months",
    }, //planId
    planStartDate: dayjs("12/02/2024", "DD/MM/YYYY"),
    currentPlanType: {
      id: 1,
      name: "Weight Loss",
    }, //planType id
    email: "phoeeebs@gmail.com",
    checkinType: "daily", //daily or weekly
    nutritionGoals: {
      calories: 3000,
      carbs: 400,
      protein: 180,
      fats: 80,
    },
    lastCheckIn: dayjs("11/03/2024", "DD/MM/YYYY"),
  },
  {
    id: 4,
    name: "Ross Geller",
    dob: dayjs("26/07/1997", "DD/MM/YYYY"),
    bloodGroup: "O+",
    currentPlan: {
      id: 1,
      name: "Three Month Plan",
      duration: 3,
      durationType: "months",
    }, //planId
    planStartDate: dayjs("12/02/2024", "DD/MM/YYYY"),
    currentPlanType: {
      id: 1,
      name: "Weight Loss",
    }, //planType id
    email: "mightyross@gmail.com",
    checkinType: "daily", //daily or weekly
    nutritionGoals: {
      calories: 3000,
      carbs: 400,
      protein: 180,
      fats: 80,
    },
    lastCheckIn: dayjs("11/03/2024", "DD/MM/YYYY"),
  },
];
