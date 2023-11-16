import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  useCallback,
} from 'react'
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
  postsLength: number
  filterPost: (query: string) => Promise<void>
}

export const BlogGithubContext = createContext({} as BlogGithubContextType)

interface BlogGithubProviderProps {
  children: ReactNode
}

const username = import.meta.env.VITE_GITHUB_USERNAME
const repository = import.meta.env.VITE_GITHUB_REPOSITORY
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
    const response = await api.get(`${username}`)

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

  const getGithubPosts = useCallback(async () => {
    const response = await apiBlog.get(`repos/${username}/${repository}/issues`)

    setPosts(response.data)
  }, [])

  const filterPost = useCallback(async (query: string = '') => {
    const response = await apiBlog.get(
      `/search/issues?q=${query}%20repo:${username}/${repository}`,
    )

    setPosts(response.data.items)
  }, [])

  useEffect(() => {
    getUserGithub()
    getGithubPosts()
  }, [getGithubPosts])

  const postsLength = posts.length

  const values = { user, posts, postsLength, filterPost }
  return (
    <BlogGithubContext.Provider value={values}>
      {children}
    </BlogGithubContext.Provider>
  )
}
