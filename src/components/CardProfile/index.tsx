import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import {
  Bio,
  CardContainer,
  CardContent,
  InfoContent,
  TitleName,
} from './styles'
import { useContext } from 'react'
import { BlogGithubContext } from '../../contexts/BlogGithubContext'

export function CardProfile() {
  const { user } = useContext(BlogGithubContext)
  return (
    <CardContainer>
      <img src={user.avatar} width={148} height={148} alt={user.name} />

      <CardContent>
        <header>
          <TitleName>{user.name}</TitleName>
          <NavLink to={user.link ? user.link : ''} target="_blank">
            Github <ArrowSquareOut size={16} />
          </NavLink>
        </header>

        <Bio>{user.bio}</Bio>

        <InfoContent>
          <li>
            <GithubLogo size={18} /> {user.username}
          </li>
          <li>
            <Buildings size={18} /> {user.company}
          </li>
          <li>
            <Users size={18} /> {user.followers} seguidores
          </li>
        </InfoContent>
      </CardContent>
    </CardContainer>
  )
}
