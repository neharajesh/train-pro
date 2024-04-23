import { Flex, Box, Text } from "@mantine/core";
import { DateInput, DateValue } from "@mantine/dates";
import { useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

import { DetailsCard } from "./DetailsCard";
import { checkIns } from "@/app/data/checkIns";
import {
  getAnthropometricStats,
  getBiofeedbackStats,
  getFluidsStats,
  getTrainingStats,
  getNutritionStats,
} from "./helpers";
import { CheckinDetailsProps } from "./types";

dayjs.extend(customParseFormat);

export const CheckinDetails = ({ client }: CheckinDetailsProps) => {
  const [value, setValue] = useState<Date | null>(null);
  const [currentCheckIn, setCurrentCheckIn] = useState<any>(null);

  const handleDateChange = (value: DateValue) => {
    const checkin = checkIns.find(
      (checkin) =>
        checkin.checkinDate.isSame(dayjs(value)) && checkin.client === client.id
    );

    setValue(value);
    setCurrentCheckIn(checkin);
  };

  return (
    <Box w="100%" mt={32}>
      <DateInput
        value={value}
        onChange={handleDateChange}
        label="Check In Date"
        placeholder="Choose date to see check in details"
        valueFormat="DD/MM/YYYY"
        maxDate={new Date()}
        minDate={client?.planStartDate.toDate()}
        maw={500}
      />

      <Flex w="100%">
        {!currentCheckIn && value && (
          <Text mt={10} ml={1} fz={12} c={"neutral.6"}>
            No check ins found for this date
          </Text>
        )}

        {currentCheckIn && (
          <Flex w="100%" mt={40} justify="space-evenly" wrap="wrap" gap={20}>
            <DetailsCard
              cardTitle="Anthropometric"
              cardDetails={getAnthropometricStats(
                currentCheckIn.stats.anthropometric
              )}
            />
            <DetailsCard
              cardTitle="Biofeedback"
              cardDetails={getBiofeedbackStats(
                currentCheckIn.stats.biofeedback
              )}
            />
            <DetailsCard
              cardTitle="Fluids"
              cardDetails={getFluidsStats(currentCheckIn.stats.fluids)}
            />
            <DetailsCard
              cardTitle="Training"
              cardDetails={getTrainingStats(currentCheckIn.stats.training)}
            />
            <DetailsCard
              cardTitle="Nutrition"
              cardDetails={getNutritionStats(currentCheckIn.stats.nutrition)}
            />
            <DetailsCard
              cardTitle="Workout Notes"
              cardDetails={[{ title: "", value: "" }]}
            />
          </Flex>
        )}
      </Flex>
    </Box>
  );
};
