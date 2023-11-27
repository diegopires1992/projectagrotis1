import { useForm, FieldValues } from "react-hook-form";
import { AutocompleteFieldSimple } from "../../components/AutocompleteSimpleForm";
import { AutocompleteFielDuo } from "../../components/AutocompleteDuoForm";
import useRestRequest from "../../services/useRestRequest";
import { PageContainer } from "../../components/PageContainer";
import { TextLeftButtonRight } from "../../components/TextLeftButtonRight";
import {
  CardForm,
  ContainerHome,
  FormSection,
  ObservacoesSection,
  TextLeftButtonRightSection,
} from "./style";
import { DatePickerField } from "../../components/DatePickerField";
import FormTextField from "../../components/CustomInput";

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
    const getCompleteInfo = (
      id: number,
      dataArray: { id: number; nome: string; cnpj?: string }[]
    ) => {
      const info = dataArray.find((item) => item.id === id);
      return info ? { id: info.id, nome: info.nome, cnpj: info.cnpj } : null;
    };

    const infosPropriedadeInfo = getCompleteInfo(
      data.infosPropriedade,
      propData
    );
    const laboratorioInfo = getCompleteInfo(data.laboratorio, labData);

    const mappedData = {
      nome: data.nome,
      dataInicial: data.dataInicial,
      dataFinal: data.dataFinal,
      infosPropriedade: {
        id: infosPropriedadeInfo?.id,
        nome: infosPropriedadeInfo?.nome,
      },
      laboratorio: { id: laboratorioInfo?.id, nome: laboratorioInfo?.nome },
      cnpj: infosPropriedadeInfo?.cnpj ?? "",
      observacoes: data.observacoes,
    };

    console.log(mappedData);
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
            <FormTextField
              name="nome"
              className="nome"
              control={control}
              defaultValue=""
              label="Nome *"
              variant="standard"
              maxLength={40}
            />
            <DatePickerField
              control={control}
              className="dataInicial"
              name="dataInicial"
              label="Data Inicial *"
              value={null}
              onChange={(date) => console.log("Data selecionada:", date)}
              setValue={setValue}
            />

            <DatePickerField
              control={control}
              className="dataFinal"
              name="dataFinal"
              label="Data Final *"
              value={null}
              onChange={(date) => console.log("Data selecionada:", date)}
              setValue={setValue}
            />
            <AutocompleteFielDuo
              className="infosPropriedade"
              options={propData}
              labelNameSelect={"nome"}
              control={control}
              name="infosPropriedade"
              placeholder="Propriedade *"
              setValue={setValue}
            />

            <AutocompleteFieldSimple
              className="laboratorio"
              options={labData}
              labelNameSelect={"nome"}
              control={control}
              name="laboratorio"
              placeholder="Laboratório *"
              setValue={setValue}
            />
            <ObservacoesSection className="observacoes">
              <h2>Obervações</h2>
              <FormTextField
                name="observacoes"
                control={control}
                defaultValue=""
                label=" "
                variant="standard"
                maxLength={100}
              />
            </ObservacoesSection>
          </CardForm>
        </FormSection>
      </ContainerHome>
    </PageContainer>
  );
}

export default HomePage;
