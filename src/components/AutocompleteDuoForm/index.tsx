import { Controller, Control, Path, FieldValues } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { HTMLAttributes } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

interface AutocompleteFielDuoProps<
  O extends { id: string; label: string },
  TField extends FieldValues
> {
  control: Control<TField>;
  name: Path<TField>;
  options: O[];
  placeholder?: string;
  labelNameSelect: string;
  className?: string;
}

export const AutocompleteFielDuo = <
  O extends { id: string; label: string },
  TField extends FieldValues
>(
  props: AutocompleteFielDuoProps<O, TField>
) => {
  const { control, options, name, labelNameSelect, className } = props;
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
                onChange={(event: any, newValue) => {
                  onChange(newValue ? newValue.id : null);
                }}
                id="controllable-states-demo"
                options={options}
                renderOption={(
                  props: HTMLAttributes<HTMLDivElement>,
                  option,
                  state,
                  ownerState
                ) => (
                  <div
                    {...props}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "10px",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  >
                    <div style={{ fontWeight: "bold", padding: "10px" }}>
                      {option.nome}
                    </div>
                    <div>{option.cnpj}</div>
                  </div>
                )}
                renderInput={(params) => (
                  <div>
                    <TextField
                      {...params}
                      label={props.placeholder}
                      inputRef={ref}
                      variant="standard"
                    />
                    {value ? (
                      <div style={{ marginTop: "8px", color: "gray",textAlign: "left" }}>
                        CNPJ {options.find((option) => value === option.id)?.cnpj}
                      </div>
                    ) : null}
                  </div>
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
