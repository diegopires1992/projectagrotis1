import styled from 'styled-components';

export const ContainerHome = styled.div`
  /* display: grid; */
  grid-template-columns: 1fr 1fr; /* Duas colunas */
  grid-template-areas:
    'textLeft textLeft'
    'nome nome'
    'dataInicial dataFinal'
    'prop lab'
    'obs obs';
  gap: 10px; /* Espaçamento entre as linhas e colunas */
  /* justify-content: center; */
  /* align-items: center; */
  /* height: 100vh; */
`;

export const FormSection = styled.form`
  grid-area: form;
  display: grid;
  background-color: #ffff;
  
  /* grid-template-columns: 1fr 2fr; */
  /* gap: 10px; */
  /* width: 100%; */
`;

export const ObservacoesSection = styled.div`
    /* width: 100%; */
  /* grid-area: obs; */
`;

export const TextLeftButtonRightSection = styled.div`
  /* grid-area: textLeft; */
  /* width: 100%; */
`;

export const CardForm = styled.div`
    padding: 10px;
  /* grid-area: textLeft; */
  /* width: 100%; */
`;



