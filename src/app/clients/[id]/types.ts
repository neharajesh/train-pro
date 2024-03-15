import { Client } from "../types";

export type CheckinDetailsProps = {
  client: Client;
};

export type AnthroStats = {
  bloodGlucose: number;
  bloodGlucoseUnit: string;
  rhr: number;
  weight: number;
  weightUnit: string;
};

export type BioStats = {
  energy: number;
  hrv: number;
  hunger: number;
  readiness: number;
  stress: number;
};

export type FluidsStats = {
  caffeine: number;
  caffeineUnit: string;
  sleep: string;
  steps: number;
  water: number;
  waterUnit: string;
};
