import styled from 'styled-components'

export const PostContainer = styled.div`
  padding-bottom: 4rem;
`

export const PostContent = styled.div`
  margin-top: 2.5rem;

  padding: 0 2rem;

  h2 {
    color: ${(props) => props.theme.blue};
    line-height: 1.6;
    text-decoration-line: underline;
  }

  p {
    margin-bottom: 2rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-text']};
  }

  img {
    width: 100%;
  }
`
