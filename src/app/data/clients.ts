import { Client } from "../clients/types";

export const clients: Client[] = [
  {
    id: 1,
    name: "Neha Rajesh",
    dob: "26/07/1997",
    bloodGroup: "O+",
    currentPlan: {
      id: 1,
      name: "Three Month Plan",
      duration: 3,
      durationType: "months",
    }, //planId
    planStartDate: "12/02/2024",
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
    lastCheckIn: "11/03/2024",
  },
];
