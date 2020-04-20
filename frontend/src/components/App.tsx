import React, { useEffect } from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { routes } from '@/routes/routes'
import { Navbar } from '@/components/Navbar/index'
import { Footer } from '@/components/Footer'
import { ReduxWrapper } from '@/store/root'
import { fetchBots } from '@/api/BotsApi'

export const App: React.FC = (): React.ReactElement => {
  // useEffect(() => {
  //   const bots = fetchBots('ax')
  //   console.log(bots)
  // }, [])

  return (
    <ReduxWrapper>
      <BrowserRouter>
        <Navbar />
        {/* div wrapper for footer */}
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
