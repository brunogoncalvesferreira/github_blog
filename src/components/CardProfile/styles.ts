import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;

  background: ${(props) => props.theme['base-profile']};
  padding: 2.5rem;
  border-radius: 10px;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  margin-top: -5.8rem;
  position: sticky;
  z-index: 50;

  img {
    border-radius: 8px;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.75rem;
      font-weight: bold;
      line-height: 1.6;
      color: ${(props) => props.theme.blue};
      text-decoration: none;
      text-transform: uppercase;
    }
  }
`

export const TitleName = styled.h1`
  font-size: 1.5rem;
  color: ${(props) => props.theme['base-title']};
  line-height: 1.3;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const Bio = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};
  line-height: 1.6;
`

export const InfoContent = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.5rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
