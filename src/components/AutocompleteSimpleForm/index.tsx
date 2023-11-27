import * as React from "react";
import { Controller, Control, Path, FieldValues } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { ThemeProvider, createTheme } from "@mui/material";

interface AutocompleteFieldSimpleProps<
  O extends { id: string; label: string },
  TField extends FieldValues
> {
  control: Control<TField>;
  name: Path<TField>;
  options: O[];
  placeholder?: string;
  labelNameSelect: string;
  className?: string;
  setValue: (name: string, value: string | null) => void;
}

export const AutocompleteFieldSimple = <
  O extends { id: string; label: string },
  TField extends FieldValues
>(
  props: AutocompleteFieldSimpleProps<O, TField>
) => {
  const { control, options, name, labelNameSelect, className } = props;
  const theme = createTheme({
    palette: {
      primary: {
        main: "#00A98E", 
        contrastText:"#00A98E",
       
      },
      secondary:{
        main: "#00796B",
        contrastText:"#00796B",
      }
    },
    
  });
  
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: 'Este campo é obrigatório' }}
      render={({ field, fieldState: { error } }) => {
        const { onChange, value, ref } = field;
        return (
          <ThemeProvider theme={theme}>
          <div className={className}>
            <Autocomplete
              value={
                value
                  ? options.find((option) => {
                      return value === option.id;
                    }) ?? null
                  : null
              }
              getOptionLabel={(option: unknown) => {
                return option[labelNameSelect];
              }}
              onChange={(event: unknown, newValue) => {
                onChange(newValue ? newValue.id : null);
              }}
              id="controllable-states-demo"
              options={options}
              renderInput={(params) => (
                <TextField
                  className={className}
                  {...params}
                  label={props.placeholder}
                  inputRef={ref}
                  variant="standard"
                />
              )}
            />
            {error ? (
              <span style={{ color: "red" }}>{error.message}</span>
            ) : null}
          </div>
          </ThemeProvider>
        );
      }}
    />
  );
};
