import React, { useEffect } from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { routes } from '@/routes/routes'
import { Navbar } from '@/components/Navbar/index'
import { Footer } from '@/components/Footer'
import { ReduxWrapper } from '@/store/root'
import {
  fetchBots,
  fetchBotById,
  fetchBotSubscriberPagination,
  fetchBotSubscriberSpecificPage,
} from '@/api/BotsApi'
import { UserInfoAlert } from '@/components/CustomAlert'

export const App: React.FC = (): React.ReactElement => {
  // useEffect(() => {
  //   const data = fetchBotSubscriberSpecificPage({ botId: 1, usersPerPage: 10, page: 0 })
  //   console.log(data)
  // }, [])

  return (
    <ReduxWrapper>
      <BrowserRouter>
        <Navbar />
        <UserInfoAlert />
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
