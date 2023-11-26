import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  FormControl,
} from "@mui/material";

import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { SetStateAction, useState } from "react";
import { Header } from "./components/Header";



function App() {
  const { register, handleSubmit } = useForm();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  const handleDateChange = (newValue: Date | null) => {
    setSelectedDate(newValue);
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <TextField id="standard-basic" label="Nome *" variant="standard" />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker", "DatePicker"]}>
              <DatePicker
                label="Uncontrolled picker"
                defaultValue={dayjs("2022-04-17")}
              />
              <DatePicker
                label="Controlled picker"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </DemoContainer>
          </LocalizationProvider>
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          Salvar
        </Button>
      </form>
    </div>
  );
}

export default App;
