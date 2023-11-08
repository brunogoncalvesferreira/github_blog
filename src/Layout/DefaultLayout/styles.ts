import styled from 'styled-components'

interface Layout {
  variant: 'layout'
}

export const LayoutContent = styled.div<Layout>`
  max-width: 54rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
`
