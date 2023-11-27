import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { ThemeProvider, createTheme } from "@mui/material";

dayjs.extend(localizedFormat);

interface DatePickerFieldProps {
  control: Control<FieldValues> | undefined;
  name: string;
  label: string;
  value: Date | null | string; // Aceita string para a data formatada
  onChange: (date: string | null) => void;
  setValue: (name: string, value: string | null) => void;
  className?: string;
}

export const DatePickerField: React.FC<DatePickerFieldProps> = ({
  control,
  name,
  label,
  value,
  onChange,
  setValue,
  className,
}) => {
  const handleDateChange = (newValue: Date | null) => {
    const formattedDate = newValue ? dayjs(newValue).toISOString() : null;
    setValue(name, formattedDate);
    onChange(formattedDate ? formattedDate : null); // Converta a string para Date antes de chamar onChange
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#00A98E",
        contrastText: "#00A98E",
      },
      secondary: {
        main: "#00796B",
        contrastText: "#00796B",
      },
    },
  });

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={value}
      rules={{ required: "Este campo é obrigatório" }}
      render={({ field, fieldState: { error } }) => (
        <div style={{ overflow: "hidden" }}>
          <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  className={className}
                  label={label}
                  value={field.value}
                  onChange={handleDateChange}
                  slotProps={{ textField: { variant: "standard" } }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </ThemeProvider>
          {error ? <span style={{  color: "red", marginTop: '5px', display: 'block' }}>{error.message}</span> : null}
        </div>
      )}
    />
  );
};
