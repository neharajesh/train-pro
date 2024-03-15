import { Dayjs } from "dayjs";

export type Client = {
  id: number;
  name: string;
  dob: Dayjs;
  bloodGroup: string;
  currentPlan: any;
  planStartDate: Dayjs;
  currentPlanType: any;
  email: string;
  checkinType: string;
  nutritionGoals: {
    calories: number;
    carbs: number;
    protein: number;
    fats: number;
  };
  lastCheckIn: Dayjs;
};

export type ClientsTableProps = Readonly<{
  clients: Client[];
}>;
