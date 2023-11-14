import { PostContainer } from './styles'
import { PostsProps } from '../../contexts/BlogGithubContext'
import { formattedDate } from '../../utils/formatted'

interface PostCardProps {
  post: PostsProps
}

export function PostCard({ post }: PostCardProps) {
  const formmatedDate = formattedDate(new Date(post.created_at))
  return (
    <PostContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <time>{formmatedDate}</time>
      </div>

      <p>{post.body}</p>
    </PostContainer>
  )
}
