import styled from 'styled-components'

export const HomeContainer = styled.main`
  padding-bottom: 4rem;
`

export const InfoPosts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`

export const PostsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  row-gap: 0rem;
`
