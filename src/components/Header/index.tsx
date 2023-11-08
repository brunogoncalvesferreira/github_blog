import { HeaderContainer, Logo } from './styles'

import LogoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Logo src={LogoImg} alt="Logo Github Blog" />
    </HeaderContainer>
  )
}
