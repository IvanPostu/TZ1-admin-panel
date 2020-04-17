import React, { FunctionComponent } from 'react'
import style from './style.scss'
import { BotUserList } from './BotUserList'

import { FilterOrBotPanel } from './FilterOrBotPanel'

export const BotInfo: FunctionComponent = () => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={style.row}>
          <div style={{ flexGrow: 2 }} className={style.rowItem}>
            <FilterOrBotPanel />
          </div>

          <div style={{ flexGrow: 4 }} className={style.rowItem}>
            <BotUserList />
          </div>
        </div>
      </div>
    </div>
  )
}
