import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100%;
  /* display: grid; */
  grid-template-columns: 6fr 1fr;
  /* grid-template-areas:
    'textLeft textLeft'
    'nome nome'
    'dataInicial dataFinal'
    'prop lab'
    'obs obs'; */
  /* gap: 10px; Espaçamento entre as linhas e colunas */
  /* justify-content: center; */
  /* align-items: center; */
  /* height: 100vh; */
`;

export const FormSection = styled.form`
  grid-area: form;
  /* display: grid; */
  /* background-color: #ffff; */

  /* grid-template-columns: 1fr 2fr; */
  /* gap: 10px; */
  /* width: 100%; */
`;

export const ObservacoesSection = styled.div`
  /* width: 100%; */
  /* grid-area: obs; */
`;

export const TextLeftButtonRightSection = styled.div`
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
`;

export const CardForm = styled.div`
  display: grid;
  width: 98%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-bottom: 10px;
  gap: 10px;
  padding: 10px;
  background-color: #ffff;
  max-width: 800px;
  margin: 0 auto;
  .lastLine {
    grid-row: 3;
    grid-column: span 3;
  }

  .twoColumns {
    grid-column: span 1.5;
  }
`;
