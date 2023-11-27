import { useForm, Controller, FieldValues } from "react-hook-form";
import { TextField } from "@mui/material";
import { RHFAutocompleteField } from "../../components/InputSelect";
import { RHFAutocompleteField1 } from "../../components/InputSelectDuplo";
import useRestRequest from "../../services/useRestRequest";
import { PageContainer } from "../../components/PageContainer";
import { TextLeftButtonRight } from "../../components/TextLeftButtonRight";
import {
  CardForm,
  ContainerHome,
  FormSection,
  TextLeftButtonRightSection,
} from "./style";
import { DatePickerField } from "../../components/DatePickerField";

function HomePage() {
  const labUrl = import.meta.env.VITE_API_URL_LAB;
  const propUrl = import.meta.env.VITE_API_URL_PROP;
  const { control, handleSubmit, setValue } = useForm();

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

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <PageContainer>
      <ContainerHome>
        <FormSection onSubmit={handleSubmit(onSubmit)}>
          <TextLeftButtonRightSection>
            <TextLeftButtonRight
              buttonText="Salvar"
              onButtonClick={handleSubmit(onSubmit)}
              textLeft={"Teste front-end"}
            />
          </TextLeftButtonRightSection>
          <CardForm>
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
            <DatePickerField
              control={control}
              name="dataInicial"
              label="Data Inicial"
              value={null} // ou você pode fornecer uma data inicial aqui
              onChange={(date) => console.log("Data selecionada:", date)}
              setValue={setValue}
            />

            <DatePickerField
              control={control}
              name="dataFinal"
              label="Data Final"
              value={null} // ou você pode fornecer uma data inicial aqui
              onChange={(date) => console.log("Data selecionada:", date)}
              setValue={setValue}
            />
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
          </CardForm>
        </FormSection>
      </ContainerHome>
    </PageContainer>
  );
}

export default HomePage;
