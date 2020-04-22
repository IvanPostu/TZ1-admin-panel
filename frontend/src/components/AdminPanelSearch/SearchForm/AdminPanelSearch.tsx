import React, { PureComponent, PropsWithChildren } from 'react'

import style from './style.scss'
import BotFindForm from './BotFindForm/BotFindFormContainer'
import { UserFindForm } from './UserFindForm'

export class AdminPanelSearch extends PureComponent<PropsWithChildren<{}>> {
  render() {
    return (
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.rowItem} style={{ flexGrow: 3, zIndex: 5 }}>
            <BotFindForm />
          </div>
          <div className={style.rowItem} style={{ flexGrow: 3, zIndex: 4 }}>
            <UserFindForm />
          </div>
        </div>
      </div>
    )
  }
}
