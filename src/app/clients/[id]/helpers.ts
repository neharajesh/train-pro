import {
  AnthroStats,
  BioStats,
  FluidsStats,
  NutritionStats,
  TrainingStats,
} from "./types";

const getAnthropometricStats = (anthroStats: AnthroStats) => {
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

const getBiofeedbackStats = (bioStats: BioStats) => {
  return [
    { title: "Energy", value: bioStats.energy },
    { title: "HRV", value: bioStats.hrv },
    { title: "Hunger", value: bioStats.hunger },
    { title: "Readiness", value: bioStats.readiness },
    { title: "Stress", value: bioStats.stress },
  ];
};

const getFluidsStats = (stats: FluidsStats) => {
  return [
    { title: "Caffeine", value: `${stats.caffeine} ${stats.caffeineUnit}` },
    { title: "Sleep", value: stats.sleep },
    { title: "Steps", value: stats.steps },
    { title: "Water", value: `${stats.water} ${stats.waterUnit}` },
  ];
};

const getTrainingStats = (stats: TrainingStats) => {
  return [
    { title: "Strength Training?", value: stats.strengthTraining },
    { title: "Rate of strength", value: `${stats.strengthRating}/10` },
    {
      title: "Cardio Time",
      value: `${stats.cardioTime} ${stats.cardioTimeUnit}`,
    },
    { title: "Steps", value: stats.steps },
  ];
};

const getNutritionStats = (stats: NutritionStats) => {
  return [
    { title: "Calories", value: stats.calories },
    { title: "Carbs", value: stats.carbs },
    { title: "Protein", value: stats.protein },
    { title: "Fats", value: stats.fats },
  ];
};

export {
  getAnthropometricStats,
  getBiofeedbackStats,
  getFluidsStats,
  getTrainingStats,
  getNutritionStats,
};
