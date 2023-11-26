import React, { useEffect } from "react";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { TextField, Button, FormControl } from "@mui/material";

import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { Header } from "./components/Header";

// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import { RHFAutocompleteField } from "./components/InputSelect";
import { RHFAutocompleteField1 } from "./components/InputSelectDuplo";
import useRestRequest from "./services/useRestRequest";

function App() {
  const labUrl = import.meta.env.VITE_API_URL_LAB;
  const propUrl = import.meta.env.VITE_API_URL_PROP;
  const { control, handleSubmit, setValue } = useForm();

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const {
    data: labData,
    loading: labLoading,
    error: labError,
  } = useRestRequest({
    url: labUrl,
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    body: null,
  });

  const {
    data: propData,
    loading: propLoading,
    error: propError,
  } = useRestRequest({
    url: propUrl,
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    body: null,
  });

  // // Render based on the state for labUrl
  if (labLoading) {
    return <div>Loading lab data...</div>;
  }

  if (labError) {
    return <div>Error loading lab data: {String(labError)}</div>;
  }

  if (propLoading) {
    return <div>Loading prop data...</div>;
  }

  if (propError) {
    return <div>Error loading prop data: {String(propError)}</div>;
  }
  // const isDataAvailable = !loadingLab && !errorLab && !loadingProp && !errorProp;

  const handleDateChange = (newValue: Date | null) => {
    const formattedDate = newValue ? dayjs(newValue).toISOString() : null;
    setSelectedDate(newValue);
    setValue("date", formattedDate);
  };

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
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
              options={propData}
              labelNameSelect={"nome"}
              control={control}
              name="infosPropriedade"
              placeholder="Propriedade *"
            />

            <RHFAutocompleteField
              options={labData}
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
        </FormControl>
        <Button type="submit" color="primary">
          Salvar
        </Button>
      </form>
    </div>
  );
}

export default App;
