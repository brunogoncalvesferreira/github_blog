import { CardProfile } from '../../components/CardProfile'
import { PostCard } from '../../components/PostCard'
import { SearchForm } from './components/SearchForm'
import { HomeContainer, PostsContent } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <CardProfile />

      <SearchForm />

      <PostsContent>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostsContent>
    </HomeContainer>
  )
}
