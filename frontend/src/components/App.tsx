import React, { useEffect } from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { routes } from '@/routes/routes'
import { Navbar } from '@/components/Navbar/index'
import { Footer } from '@/components/Footer'

export const App: React.FC = (): React.ReactElement => {
  // useEffect(() => {
  //   fetch('api/hello').then((e) => e.text().then((itm) => console.log(itm)))
  // }, [])

  return (
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
  )
}
