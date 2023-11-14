import { useContext } from 'react'
import { CardProfile } from '../../components/CardProfile'
import { PostCard } from '../../components/PostCard'
import { SearchForm } from './components/SearchForm'
import { HomeContainer, PostsContent } from './styles'
import { BlogGithubContext } from '../../contexts/BlogGithubContext'

export function Home() {
  const { posts } = useContext(BlogGithubContext)
  return (
    <HomeContainer>
      <CardProfile />

      <SearchForm />

      <PostsContent>
        {posts.map((post) => {
          return <PostCard key={post.number} post={post} />
        })}
      </PostsContent>
    </HomeContainer>
  )
}
