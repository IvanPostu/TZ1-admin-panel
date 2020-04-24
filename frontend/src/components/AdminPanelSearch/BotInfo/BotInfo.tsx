import React, { FunctionComponent } from 'react'
import style from './style.scss'
import { BotUserList } from './BotUserList'

import { FilterOrBotPanelContainer } from './FilterOrBotPanel/FilterOrBotPanelContainer'

export const BotInfo: FunctionComponent = () => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={style.row}>
          <div style={{ flexGrow: 2 }} className={style.rowItem}>
            <FilterOrBotPanelContainer />
          </div>

          <div style={{ flexGrow: 4 }} className={style.rowItem}>
            {true && <div className={style.userlistTitle}>Пользователи текущего бота</div>}
            {/* {true && <div className={style.userlistTitle}>Укажите бота в поисковом запросе</div>} */}

            <BotUserList />
          </div>
        </div>
      </div>
    </div>
  )
}
