// components/PageContainer.tsx
import React, { ReactNode } from "react";
import { Header } from "../Header";
import { ContainerPage, Main } from "./style";

interface PageContainerProps {
  children: ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => (
  <ContainerPage>
    <Header />
    <Main>{children}</Main>

    <footer>
      <p>&copy; 2023 Meu Site</p>
    </footer>
  </ContainerPage>
);
