import { ReactNode, createContext, useState, useEffect } from 'react'
import { api, apiBlog } from '../lib/axios'

interface UserProps {
  avatar: string
  name: string
  bio: string
  username: string
  company: string
  followers: number
  link?: string
}

export interface PostsProps {
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

export type BlogGithubContextType = {
  user: UserProps
  posts: PostsProps[]
}

export const BlogGithubContext = createContext({} as BlogGithubContextType)

interface BlogGithubProviderProps {
  children: ReactNode
}

export function BlogGithubProvider({ children }: BlogGithubProviderProps) {
  const [user, setUser] = useState<UserProps>({
    avatar: '',
    name: '',
    bio: '',
    username: '',
    company: '',
    followers: 0,
    link: '',
  })

  const [posts, setPosts] = useState<PostsProps[]>([])

  async function getUserGithub() {
    const response = await api.get('brunogoncalvesferreira')

    setUser({
      avatar: response.data.avatar_url,
      name: response.data.name,
      bio: response.data.bio,
      username: response.data.login,
      company: response.data.company,
      followers: response.data.followers,
      link: response.data.html_url,
    })
  }

  async function getGithubIssues() {
    const response = await apiBlog.get('brunogoncalvesferreira/issues/issues')

    setPosts(response.data)
  }

  useEffect(() => {
    getUserGithub()
    getGithubIssues()
  }, [])

  const values = { user, posts }
  return (
    <BlogGithubContext.Provider value={values}>
      {children}
    </BlogGithubContext.Provider>
  )
}
