import { HeaderContainer } from "./style"

import viteLogo from '../../assets/agrotis.png'

export const Header = () =>{
    return (
        <HeaderContainer>
        <img src={viteLogo} alt="Logo da Agrotis" />
      </HeaderContainer>
    )
}