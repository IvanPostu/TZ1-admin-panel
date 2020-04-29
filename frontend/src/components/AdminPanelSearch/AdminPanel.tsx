import React, { FC, Fragment } from 'react'
import { AdminPanelSearch } from '@/components/AdminPanelSearch/SearchForm/AdminPanelSearch'
import { BotSubscribers } from '@/components/AdminPanelSearch/BotInfo/BotSubscribers'
import { UserInfoAlertContainer } from '@/components/UserInfoAlert/UserInfoAlertContainer'

export const AdminPanel: FC = () => {
  return (
    <Fragment>
      <UserInfoAlertContainer />
      <AdminPanelSearch />
      <BotSubscribers />
    </Fragment>
  )
}
