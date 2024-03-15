export type Client = {
  id: number;
  name: string;
  dob: Date;
  bloodGroup: string;
  currentPlan: any;
  planStartDate: Date;
  currentPlanType: any;
  email: string;
  checkinType: string;
  nutritionGoals: {
    calories: number;
    carbs: number;
    protein: number;
    fats: number;
  };
  lastCheckIn: Date;
};

export type ClientsTableProps = Readonly<{
  clients: Client[];
}>;
