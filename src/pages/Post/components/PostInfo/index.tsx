import {
  CaretLeft,
  ArrowSquareOut,
  GithubLogo,
  Calendar,
  ChatCircle,
} from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { InfoContent } from '../../../../components/CardProfile/styles'
import { PostInfoContainer, TitlePostInfo } from './styles'

export function PostInfo() {
  return (
    <PostInfoContainer>
      <header>
        <NavLink to={'/'}>
          <CaretLeft />
          Voltar
        </NavLink>

        <NavLink to={'https:github.com/brunogoncalvesferreira'}>
          Ver no Github
          <ArrowSquareOut size={16} />
        </NavLink>
      </header>

      <TitlePostInfo>Javascript data types and structures</TitlePostInfo>

      <InfoContent>
        <li>
          <GithubLogo />
          brunogoncalvesferreira
        </li>
        <li>
          <Calendar />
          Há 1 dia
        </li>
        <li>
          <ChatCircle />5 Comentários
        </li>
      </InfoContent>
    </PostInfoContainer>
  )
}
