import React, { FunctionComponent } from 'react'
import style from './style.scss'
import { BotUserListContainer } from './SubscriberList/BotUserListContainer'
import { FilterOrBotPanelContainer } from './FilterOrBotPanel/FilterOrBotPanelContainer'

export const BotSubscribers: FunctionComponent = () => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={style.row}>
          <div style={{ flexGrow: 2 }} className={style.rowItem}>
            <FilterOrBotPanelContainer />
          </div>

          <div style={{ flexGrow: 4 }} className={style.rowItem}>
            <BotUserListContainer />
          </div>
        </div>
      </div>
    </div>
  )
}
