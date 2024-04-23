import { Client } from "../types";

type CheckinDetailsProps = {
  client: Client;
};

type AnthroStats = {
  bloodGlucose: number;
  bloodGlucoseUnit: string;
  rhr: number;
  weight: number;
  weightUnit: string;
};

type BioStats = {
  energy: number;
  hrv: number;
  hunger: number;
  readiness: number;
  stress: number;
};

type FluidsStats = {
  caffeine: number;
  caffeineUnit: string;
  sleep: string;
  steps: number;
  water: number;
  waterUnit: string;
};

type TrainingStats = {
  strengthTraining: string;
  strengthRating: string;
  cardioTime: number;
  cardioTimeUnit: string;
  steps: number;
};

type NutritionStats = {
  calories: number;
  carbs: number;
  protein: number;
  fats: number;
};

export type {
  CheckinDetailsProps,
  AnthroStats,
  BioStats,
  FluidsStats,
  TrainingStats,
  NutritionStats,
};
