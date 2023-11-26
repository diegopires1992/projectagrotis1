import * as React from "react";
import { Controller, Control, Path, FieldValues } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { HTMLAttributes } from 'react';

interface RHFAutocompleteFieldProps<
  O extends { id: string; label: string },
  TField extends FieldValues
> {
  control: Control<TField>;
  name: Path<TField>;
  options: O[];
  placeholder?: string;
  labelNameSelect:string;
}

export const RHFAutocompleteField1 = <
  O extends { id: string; label: string },
  TField extends FieldValues
>(
  props: RHFAutocompleteFieldProps<O, TField>
) => {
  const { control, options, name,labelNameSelect } = props;
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: "this field is requried"
      }}
      render={({ field, fieldState: { error } }) => {
        const { onChange, value, ref } = field;
        return (
          <>
            <Autocomplete
              value={
                value
                  ? options.find((option) => {
                      return value === option.id;
                    }) ?? null
                  : null
              }
              getOptionLabel={(option:unknown) => {
                return option[labelNameSelect];
              }}
              onChange={(event: any, newValue) => {
                onChange(newValue ? newValue.id : null);
              }}
              id="controllable-states-demo"
              options={options}
              renderOption={(props: HTMLAttributes<HTMLDivElement>, option, state, ownerState) => (
                <div {...props} style={{ display: 'flex', flexDirection: 'column', padding: '10px', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                  <div style={{ fontWeight: 'bold', padding: '10px' }}>{option.nome}</div>
                  <div>{option.cnpj}</div>
                </div>
              )}
              renderInput={(params) => (
                <TextField
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
          </>
        );
      }}
    />
  );
};
