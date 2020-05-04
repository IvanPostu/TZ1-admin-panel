import React, { FC, Fragment, useEffect } from 'react'
import { AdminPanelSearch } from '@/components/AdminPanelSearch/SearchForm/AdminPanelSearch'
import { BotSubscribers } from '@/components/AdminPanelSearch/BotInfo/BotSubscribers'
import { UserInfoAlertContainer } from '@/components/UserInfoAlert/UserInfoAlertContainer'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { fetchBot } from '@/store/Bot/actionCreators'

export const AdminPanel: FC = () => {
  const dispatch: Dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBot(1))
  }, [])

  return (
    <Fragment>
      <UserInfoAlertContainer />
      <AdminPanelSearch />
      <BotSubscribers />
    </Fragment>
  )
}
