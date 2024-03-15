import dayjs from "dayjs";

type CheckIn = {
  client: number;
  checkinDate: Date;
  images: string[];
  stats: {
    anthropometric: {
      weight: number;
      weightUnit: string;
      rhr: number;
      bloodGlucose: number;
      bloodGlucoseUnit: string;
    };
    fluids: {
      water: number;
      waterUnit: string;
      caffeine: number;
      caffeineUnit: string;
      steps: number;
      sleep: string;
    };
    training: {
      strengthTraining: string;
      strengthRating: string;
      cardioTime: number;
      cardioTimeUnit: string;
      steps: number;
    };
    biofeedback: {
      //on 10
      stress: number;
      readiness: number;
      hunger: number;
      energy: number;
      hrv: number;
    };
    nutrition: {
      calories: number;
      carbs: number;
      protein: number;
      fats: number;
    };
  };
};

export const checkIns: CheckIn[] = [
  {
    client: 1, //client id
    checkinDate: dayjs("12/03/2024", "DD/MM/YYYY").toDate(),
    images: [],
    stats: {
      anthropometric: {
        weight: 70,
        weightUnit: "kg", //kg or lb
        rhr: 80,
        bloodGlucose: 60,
        bloodGlucoseUnit: "mg/dL",
      },
      fluids: {
        water: 5,
        waterUnit: "L",
        caffeine: 300,
        caffeineUnit: "mg",
        steps: 12000,
        sleep: "7 hours 30 minutes",
      },
      training: {
        strengthTraining: "yes",
        strengthRating: "8", //on 10
        cardioTime: 20,
        cardioTimeUnit: "minutes",
        steps: 12000,
      },
      biofeedback: {
        //on 10
        stress: 9,
        readiness: 4,
        hunger: 9,
        energy: 4,
        hrv: 3,
      },
      nutrition: {
        calories: 3000,
        carbs: 400,
        protein: 180,
        fats: 80,
      },
    },
  },
  {
    client: 2, //client id
    checkinDate: dayjs("12/03/2024", "DD/MM/YYYY").toDate(),
    images: [],
    stats: {
      anthropometric: {
        weight: 70,
        weightUnit: "kg", //kg or lb
        rhr: 80,
        bloodGlucose: 60,
        bloodGlucoseUnit: "mg/dL",
      },
      fluids: {
        water: 5,
        waterUnit: "L",
        caffeine: 300,
        caffeineUnit: "mg",
        steps: 12000,
        sleep: "7 hours 30 minutes",
      },
      training: {
        strengthTraining: "yes",
        strengthRating: "8", //on 10
        cardioTime: 20,
        cardioTimeUnit: "minutes",
        steps: 12000,
      },
      biofeedback: {
        //on 10
        stress: 9,
        readiness: 4,
        hunger: 9,
        energy: 4,
        hrv: 3,
      },
      nutrition: {
        calories: 3000,
        carbs: 400,
        protein: 180,
        fats: 80,
      },
    },
  },
];
