import React from "react";
import { Control, FieldValues } from "react-hook-form";
import { Controller } from "react-hook-form";
import { ThemeProvider, createTheme } from "@mui/material";
import { WhiteBorderTextField } from "./styles";

interface FormTextFieldProps {
  name: string;
  control: Control<FieldValues>;
  defaultValue?: string;
  label: string;
  variant?: "standard" | "outlined" | "filled";
  maxLength?: number;
  className?: string;
}

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

const FormTextField: React.FC<FormTextFieldProps> = ({
  name,
  control,
  defaultValue = "",
  label,
  variant = "standard",
  maxLength,
  className,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{ required: 'Este campo é obrigatório' }}
      render={({ field,fieldState: { error } }) => (
        <ThemeProvider theme={theme}>
          <div
            style={{ display: "flex", flexDirection: "column" }}
            className={className}
          >
            <WhiteBorderTextField
              {...field}
              id={name}
              label={label}
              variant={variant}
              inputProps={{
                maxLength: maxLength,                
              }}
            />
            {maxLength && (
              <div
                style={{ textAlign: "right", marginTop: "5px", color: "gray" }}
              >
                {field.value.length}/{maxLength}
              </div>
            )}
            {error ? (
                <span style={{ color: "red" }}>{error.message}</span>
              ) : null}
          </div>
        </ThemeProvider>
      )}
    />
  );
};

export default FormTextField;
