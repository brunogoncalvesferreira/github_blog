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
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
