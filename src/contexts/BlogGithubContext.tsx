import { ReactNode, createContext, useState, useEffect } from 'react'
import { api } from '../lib/axios'

interface UserProps {
  avatar: string
  name: string
  bio: string
  username: string
  company: string
  followers: number
}

export type BlogGithubContextType = {
  user: UserProps
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
  })

  async function getUserGithub() {
    const response = await api.get('brunogoncalvesferreira')
    setUser({
      avatar: response.data.avatar_url,
      name: response.data.name,
      bio: response.data.bio,
      username: response.data.login,
      company: response.data.company,
      followers: response.data.followers,
    })
  }

  useEffect(() => {
    getUserGithub()
  }, [])

  const values = { user }
  return (
    <BlogGithubContext.Provider value={values}>
      {children}
    </BlogGithubContext.Provider>
  )
}
