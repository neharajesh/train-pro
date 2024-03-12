const checkIns = [
  {
    client: 1, //client id
    checkinDate: "12/02/2024",
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
