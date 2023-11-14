import { Outlet } from 'react-router-dom'

import { LayoutContent } from './styles'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <div>
      <Header />

      <LayoutContent>
        <Outlet />
      </LayoutContent>
    </div>
  )
}
