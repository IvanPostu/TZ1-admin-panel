import { ExtendedRoute } from './index'
import { AdminLazyPage } from '@/pages/admin-page/index'
import { NotFoundLazyPage } from '@/pages/404-page/index'

export const routes: Array<ExtendedRoute> = [
  {
    component: AdminLazyPage,
    path: '/',
    exact: true,
  },
  {
    component: NotFoundLazyPage,
  },
]
