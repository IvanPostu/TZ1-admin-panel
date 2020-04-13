import React, { Suspense } from 'react'

const AdminPage = React.lazy(() => import('./AdminPage'))

const AdminLazyPage: React.FunctionComponent = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <AdminPage />
  </Suspense>
)

export { AdminLazyPage }
