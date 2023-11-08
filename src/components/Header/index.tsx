import { HeaderContainer } from './styles'

import headerImage from '../../assets/cover_header.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerImage} alt="Image Header Banner" width="100%" />
    </HeaderContainer>
  )
}
