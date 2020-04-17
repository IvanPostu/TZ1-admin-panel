import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { routes } from '@/routes/routes'
import { Navbar } from '@/components/Navbar/index'

export const App: React.FC = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {routes.map((item, index) => (
          <Route {...item} key={index} />
        ))}
      </Switch>
    </BrowserRouter>
  )
}
