import React, { FC, Fragment } from 'react'
import { AdminPanelSearch } from '@/components/AdminPanelSearch/SearchForm/AdminPanelSearch'
import { BotInfo } from '@/components/AdminPanelSearch/BotInfo/BotInfo'

export const AdminPanel: FC = () => {
  return (
    <Fragment>
      <AdminPanelSearch />
      <BotInfo />
    </Fragment>
  )
}
