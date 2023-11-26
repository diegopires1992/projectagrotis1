import React from "react";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { TextField, Button, FormControl } from "@mui/material";

import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { Header } from "./components/Header";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Autocomplete from "@mui/material/Autocomplete";
import { RHFAutocompleteField } from "./components/InputSelect";
import { RHFAutocompleteField1 } from "./components/InputSelectDuplo";

function App() {
  const { control, handleSubmit, setValue } = useForm();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (newValue: Date | null) => {
    const formattedDate = newValue ? dayjs(newValue).toISOString() : null;
    setSelectedDate(newValue);
    setValue("date", formattedDate);
  };

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const newTheme = (theme: any) =>
    createTheme({
      ...theme,
      components: {
        MuiDateCalendar: {
          styleOverrides: {
            root: {
              color: "#bbdefb",
              borderRadius: 9,
              borderWidth: 8,
              borderColor: "#2196f3",
              border: "8px solid",
              backgroundColor: "#0d47a1",
            },
          },
        },
      },
    });

  // const defaultProps = {
  //   options: top100Films,
  //   getOptionLabel: (option: FilmOptionType) => option.title,
  // };

  const [options, setOptions] = useState([
    {
      id: 1,
      nome: "Fazenda Agrotis",
      cnpj: "79.200.214/0001-61",
    },
    {
      id: 2,
      nome: "Fazenda Wohirish",
      cnpj: "29.797.010/0001-81",
    },
    {
      id: 3,
      nome: "Fazenda Zeimninoa",
      cnpj: "79.538.444/0001-35",
    },
    {
      id: 4,
      nome: "Fazenda Veavaounn",
      cnpj: "43.299.844/0001-98",
    },
    {
      id: 5,
      nome: "Fazenda Nyugebor",
      cnpj: "53.235.887/0001-63",
    },
  ]);

  // const getOpObj = (option) => {
  //   if (!option.id) option = options.find((op) => op.id === option);
  //   return option;
  // };
  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <ThemeProvider theme={newTheme}>
            <Controller
              name="nome"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  id="standard-basic"
                  label="Nome *"
                  variant="standard"
                />
              )}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>           

              <DemoContainer components={["DatePicker", "DatePicker"]}>
                {/* <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2022-04-17')} /> */}
                <DatePicker
                  label="Data inicial"
                  value={selectedDate}
                  onChange={handleDateChange}
                />

                <DatePicker
                  label="Data Final"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </DemoContainer>

             

              <RHFAutocompleteField1
                options={options}
                labelNameSelect={"nome"}
                control={control}
                name="infosPropriedade"
                placeholder="Propriedade *"
              />

              <RHFAutocompleteField
                options={options}
                labelNameSelect={"nome"}
                control={control}
                name="laboratorio"
                placeholder="Laboratório *"
              />

              <Controller
                name="observacoes"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="standard-basic"
                    label="Obervações *"
                    variant="standard"
                  />
                )}
              />
            </LocalizationProvider>
          </ThemeProvider>
        </FormControl>

        <TextField id="standard-basic" label="" variant="standard" />

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default App;
