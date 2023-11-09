import { HeaderContainer } from './styles'

import imageHeader from '../../assets/cover_header.svg'

export function Header() {
  return (
    <HeaderContainer
      style={{
        backgroundImage: `url(${imageHeader})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    ></HeaderContainer>
  )
}
