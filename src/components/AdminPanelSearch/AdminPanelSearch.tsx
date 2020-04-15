import React, { Component, Fragment, PropsWithChildren, createRef } from 'react'
import { BotPanelIcon } from './Icons'
import style from './style.scss'
import { SearchInput } from './SearchInput'

export class AdminPanelSearch extends Component<PropsWithChildren<{}>> {
  /**
   * Ref to search input
   */
  private searchNodeRef = createRef<HTMLInputElement>()

  render() {
    return (
      <Fragment>
        <div className={style.container}>
          <div className={style.item}>
            <div className={style.box}>
              <BotPanelIcon additionalClass={style.panelIcon} />
              <h2>Поиск бота</h2>
              <p>Введите название бота либо ID для поиска.</p>

              <SearchInput />
            </div>
          </div>
          <div className={style.item}>
            <div className={style.item}>
              <div className={style.box}>
                <BotPanelIcon additionalClass={style.panelIcon} />
                <h2>Поиск бота</h2>
                <p>Введите название бота либо ID для поиска.</p>

                <SearchInput />
              </div>
            </div>
          </div>
          {/* <div className={style.box}>
            <BotPanelIcon additionalClass={style.panelIcon} />
            <h2>Поиск бота</h2>
            <p>Введите название бота либо ID для поиска.</p>

            <SearchInput />
          </div>
          <div className={style.containerRight}>
            <div className={style.blockItem}>
              <h1>Hello</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolorem facere eligendi
                deleniti!
              </p>
            </div>
          </div> */}
        </div>
      </Fragment>
    )
  }
}
