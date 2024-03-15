import { AnthroStats, BioStats, FluidsStats } from "./types";

export const getAnthropometricStats = (anthroStats: AnthroStats) => {
  return [
    {
      title: "Weight",
      value: `${anthroStats?.weight} ${anthroStats?.weightUnit}`,
    },
    {
      title: "Blood Glucose",
      value: `${anthroStats?.bloodGlucose} ${anthroStats?.bloodGlucoseUnit}`,
    },
    {
      title: "Resting Heart Rate",
      value: anthroStats?.rhr,
    },
  ];
};

export const getBiofeedbackStats = (bioStats: BioStats) => {
  return [
    { title: "Energy", value: bioStats.energy },
    { title: "HRV", value: bioStats.hrv },
    { title: "Hunger", value: bioStats.hunger },
    { title: "Readiness", value: bioStats.readiness },
    { title: "Stress", value: bioStats.stress },
  ];
};

export const getFluidsStats = (stats: FluidsStats) => {
  return [
    { title: "Caffeine", value: `${stats.caffeine} ${stats.caffeineUnit}` },
    { title: "Sleep", value: stats.sleep },
    { title: "Steps", value: stats.steps },
    { title: "Water", value: `${stats.water} ${stats.waterUnit}` },
  ];
};
