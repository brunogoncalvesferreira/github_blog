import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 25.9375rem;
  height: 16.25rem;
  margin-top: 3rem;

  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  border: 2px solid transparent;

  &:hover {
    cursor: pointer;
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.5rem;
  }

  time {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
    line-height: 2;
  }

  p {
    margin-top: 1rem;
    color: ${(props) => props.theme['base-text']};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const TitlePost = styled.h1`
  flex: 1;
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-title']};
`
