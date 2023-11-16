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

import { formattedDate } from '../../../../utils/formatted'
import { PostsProps } from '../../../../contexts/BlogGithubContext'

interface PostInfoProps {
  postsData: PostsProps
}

export function PostInfo({ postsData }: PostInfoProps) {
  const formmatedDatePost = formattedDate(new Date(postsData.created_at))

  return (
    <PostInfoContainer>
      <header>
        <NavLink to={'/'}>
          <CaretLeft />
          Voltar
        </NavLink>

        <NavLink to={'https://github.com/brunogoncalvesferreira'}>
          Ver no Github
          <ArrowSquareOut size={16} />
        </NavLink>
      </header>

      <TitlePostInfo>{postsData.title}</TitlePostInfo>

      <InfoContent>
        <li>
          <GithubLogo />
          {postsData.user ? postsData.user.login : ''}
        </li>
        <li>
          <Calendar />
          {formmatedDatePost}
        </li>
        <li>
          <ChatCircle />
          {postsData.comments} Comentários
        </li>
      </InfoContent>
    </PostInfoContainer>
  )
}
