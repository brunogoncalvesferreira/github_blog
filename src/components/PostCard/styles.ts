import styled from 'styled-components'

export const PostContainer = styled.div`
  margin-top: 3rem;

  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  time {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
    line-height: 1.6;
  }

  p {
    margin-top: 1rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const TitlePost = styled.h1`
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-title']};
  line-height: 1.6;

  max-width: 17rem;
`
