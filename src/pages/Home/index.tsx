import { CardProfile } from '../../components/CardProfile'
import { SearchForm } from './components/SearchForm'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <CardProfile />

      <SearchForm />
    </HomeContainer>
  )
}
