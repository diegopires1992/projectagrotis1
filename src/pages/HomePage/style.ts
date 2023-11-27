import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100%;


`;

export const FormSection = styled.form`
  grid-area: form;

`;

export const ObservacoesSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 30px;
  h2{
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #828D8C;
  }
`;

export const TextLeftButtonRightSection = styled.div`
  width: 100%;
  max-width: 1130px;
  margin: 0 auto;
 
`;

export const CardForm = styled.div`
  display: grid;
  width: 98%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin-bottom: 10px;
  gap: 10px;
  padding: 10px;
  background-color: #ffff;
  max-width: 1110px;
  margin: 0 auto;
  grid-template-areas:
    "nome dataFinal dataInicial"
    "infosPropriedade infosPropriedade laboratorio"
    "observacoes observacoes observacoes";

  .dataInicial {
    grid-area: dataInicial;
    margin-top: -8px;
    overflow: hidden;
  }
  .nome {
    grid-area: nome;
    grid-column: span 2;
  }

  .dataFinal {
    grid-area: dataFinal;
    margin-top: -8px;
    overflow: hidden;
    /* grid-column: span 2; */
  }

  .infosPropriedade {
    grid-area: infosPropriedade;
    grid-column: span 2;
  }

  .laboratorio {
    grid-area: laboratorio;
    grid-column: span 2;
  }

  .observacoes {
    grid-area: observacoes;
     grid-column: span 4;
  }

  label+.css-grtc11-MuiInputBase-root-MuiInput-root {
    margin-top: 29px;
}


`;
