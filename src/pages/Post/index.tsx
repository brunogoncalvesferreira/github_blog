import { useParams } from 'react-router-dom'
import { apiBlog } from '../../lib/axios'
import { PostInfo } from './components/PostInfo'
import { PostContainer, PostContent } from './styles'

import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'

export interface PostProps {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

const username = import.meta.env.VITE_GITHUB_USERNAME
const repository = import.meta.env.VITE_GITHUB_REPOSITORY

export function Post() {
  const { id } = useParams()
  const [postsData, setPostsData] = useState<PostProps>({} as PostProps)

  useEffect(() => {
    async function getGithubPagePosts() {
      const response = await apiBlog.get(
        `repos/${username}/${repository}/issues/${id}`,
      )
      setPostsData(response.data)
    }
    getGithubPagePosts()
  })

  return (
    <PostContainer>
      <PostInfo postsData={postsData} />

      <PostContent>
        <ReactMarkdown>{postsData.body}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
