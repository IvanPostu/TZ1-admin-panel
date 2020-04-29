import React, { FC, ReactElement } from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { routes } from '@/routes/routes'
import { Navbar } from '@/components/Navbar/index'
import { Footer } from '@/components/Footer'
import { ReduxWrapper } from '@/store/root'

export const App: FC = (): ReactElement => {
  return (
    <ReduxWrapper>
      <BrowserRouter>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Switch>
            {routes.map((item, index) => (
              <Route {...item} key={index} />
            ))}
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </ReduxWrapper>
  )
}
