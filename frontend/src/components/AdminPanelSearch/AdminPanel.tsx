import React, { FC, Fragment } from 'react'
import { AdminPanelSearch } from '@/components/AdminPanelSearch/SearchForm/AdminPanelSearch'
import { BotSubscribers } from '@/components/AdminPanelSearch/BotInfo/BotSubscribers'

export const AdminPanel: FC = () => {
  return (
    <Fragment>
      <AdminPanelSearch />
      <BotSubscribers />
    </Fragment>
  )
}
