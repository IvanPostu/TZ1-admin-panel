import React, { Suspense } from 'react'

const NotFound = React.lazy(() => import('./NotFound'))

const NotFoundLazyPage: React.FunctionComponent = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <NotFound />
  </Suspense>
)

export { NotFoundLazyPage }
