import { PostContainer, TitlePost } from './styles'

export function PostCard() {
  return (
    <PostContainer>
      <header>
        <TitlePost>Javascript data types and data structures</TitlePost>
        <time>Há 1 dia</time>
      </header>

      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in...
      </p>
    </PostContainer>
  )
}
