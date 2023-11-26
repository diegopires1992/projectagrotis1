import React from 'react';
import TextField from '@mui/material/TextField';

interface FormValues {
  nome: string;
  propriedades: string;
  observacoes?: string;
  dataInicial: string;
  laboratorio: string;
  dataFinal: string;
}


interface CustomInputProps {
  label: string;
  name: string;
  register: FormValues; 
  required?: boolean;
  type?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, name, register, required = false, type = 'text' }) => {
  return (
    <TextField
      label={label}
      name={name}
      // inputRef={register({ required })}
      fullWidth
      margin="normal"
      type={type}
      variant="outlined"
    />
  );
};

export default CustomInput;
