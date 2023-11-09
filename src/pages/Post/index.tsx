import { PostInfo } from './components/PostInfo'
import { PostContainer, PostContent } from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostInfo />

      <PostContent>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in...
        </p>

        <h2>Dynamic typing</h2>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in...
        </p>
      </PostContent>
    </PostContainer>
  )
}
