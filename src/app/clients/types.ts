export type Client = {
  id: number;
  name: string;
  dob: string;
  bloodGroup: string;
  currentPlan: any;
  planStartDate: string;
  currentPlanType: any;
  email: string;
  checkinType: string;
  nutritionGoals: {
    calories: number;
    carbs: number;
    protein: number;
    fats: number;
  };
  lastCheckIn: string;
};

export type ClientsTableProps = Readonly<{
  clients: Client[];
}>;
