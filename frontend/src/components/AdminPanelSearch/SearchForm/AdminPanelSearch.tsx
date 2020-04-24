import React, { Component, PropsWithChildren } from 'react'

import style from './style.scss'
import { BotFindFormContainer } from './BotFindForm/BotFindFormContainer'
import { UserFindForm } from '@/components/AdminPanelSearch/SearchForm/UserFindForm'

export class AdminPanelSearch extends Component<PropsWithChildren<{}>> {
  render() {
    return (
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.rowItem} style={{ flexGrow: 3, zIndex: 2 }}>
            <BotFindFormContainer />
          </div>
          <div className={style.rowItem} style={{ flexGrow: 3, zIndex: 1 }}>
            <UserFindForm />
          </div>
        </div>
      </div>
    )
  }
}
