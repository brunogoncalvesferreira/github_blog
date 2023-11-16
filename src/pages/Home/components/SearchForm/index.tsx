import { memo, useContext } from 'react'
import { FormContainer, SearchFormContainer } from './styles'
import { BlogGithubContext } from '../../../../contexts/BlogGithubContext'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type searchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { postsLength, filterPost } = useContext(BlogGithubContext)
  const { register, handleSubmit } = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleFilterPosts(data: searchFormInputs) {
    await filterPost(data.query)
  }

  return (
    <SearchFormContainer>
      <header>
        <h2>Publicações</h2>
        <span>{postsLength} publicações</span>
      </header>
      <FormContainer onSubmit={handleSubmit(handleFilterPosts)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </FormContainer>
    </SearchFormContainer>
  )
}

export const SearchFormMemo = memo(SearchForm)
