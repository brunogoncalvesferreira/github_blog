import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostContainer = styled(Link)`
  width: 100%;
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

  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.5rem;

    strong {
      flex: 1;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};
    }

    time {
      width: fit-content;
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
      line-height: 2;
    }
  }

  p {
    margin-top: 1.25rem;
    color: ${(props) => props.theme['base-text']};

    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    width: 20rem;
  }

  @media (max-width: 920px) {
    width: 100%;
  }
`
