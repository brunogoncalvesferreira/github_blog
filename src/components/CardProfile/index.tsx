import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import {
  Bio,
  CardContainer,
  CardContent,
  InfoContent,
  TitleName,
} from './styles'

export function CardProfile() {
  return (
    <CardContainer>
      <img
        src="https://github.com/brunogoncalvesferreira.png"
        width={148}
        height={148}
        alt="Foto de Bruno Gonçalves Ferreira"
      />

      <CardContent>
        <header>
          <TitleName>Bruno Ferreira</TitleName>
          <NavLink to={'/post'}>
            Github <ArrowSquareOut size={16} />
          </NavLink>
        </header>

        <Bio>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </Bio>

        <InfoContent>
          <li>
            <GithubLogo size={18} /> bruno
          </li>
          <li>
            <Buildings size={18} /> Rocketseat
          </li>
          <li>
            <Users size={18} /> 32 seguidores
          </li>
        </InfoContent>
      </CardContent>
    </CardContainer>
  )
}
