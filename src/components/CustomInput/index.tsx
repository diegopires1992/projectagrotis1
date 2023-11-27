import React from "react";
import { Control, FieldValues } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

interface FormTextFieldProps {
  name: string;
  control: Control<FieldValues>;
  defaultValue?: string;
  label: string;
  variant?: "standard" | "outlined" | "filled";
  maxLength?: number;
  className?: string;
}

const FormTextField: React.FC<FormTextFieldProps> = ({
  name,
  control,
  defaultValue = "",
  label,
  variant = "standard",
  maxLength,
  className
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <div style={{ display: "flex", flexDirection: "column" }} className={className}>
          <TextField
            {...field}
            id={name}
            label={label}
            variant={variant}
            inputProps={{ maxLength: maxLength }}
          />
          {maxLength && (
            <div style={{ textAlign: "right", marginTop: "5px", color: "gray" }}>
              {field.value.length}/{maxLength}
            </div>
          )}
        </div>
      )}
    />
  );
};

export default FormTextField;
