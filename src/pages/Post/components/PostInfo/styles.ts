import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  border-radius: 10px;
  margin-top: -5.8rem;
  position: sticky;
  z-index: 50;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      text-decoration: none;
      color: ${(props) => props.theme.blue};
      text-transform: uppercase;
      font-size: 0.75rem;
      font-weight: bold;
    }
  }
`

export const TitlePostInfo = styled.h1`
  margin-top: 1.25rem;
`
