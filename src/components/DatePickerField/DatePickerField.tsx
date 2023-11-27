import React from "react";
import {
  Control,
  Controller,
  FieldValues,
} from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface DatePickerFieldProps {
  control: Control<FieldValues> | undefined;
  name: string;
  label: string;
  value: Date | null | string; // Aceita string para a data formatada
  onChange: (date: string | null) => void;
  setValue: (name: string, value: string | null) => void;
}

export const DatePickerField: React.FC<DatePickerFieldProps> = ({
  control,
  name,
  label,
  value,
  onChange,
  setValue,
}) => {
  const handleDateChange = (newValue: Date | null) => {
    const formattedDate = newValue ? dayjs(newValue).toISOString() : null;
    setValue(name, formattedDate);
    onChange(formattedDate ? formattedDate : null); // Converta a string para Date antes de chamar onChange
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={value}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label={label}
              value={field.value}
              onChange={handleDateChange}
            />
          </DemoContainer>
        </LocalizationProvider>
      )}
    />
  );
};
