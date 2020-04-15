import React, { PureComponent, Fragment, PropsWithChildren } from 'react'
import { IoIosCog, IoIosPricetags, IoIosArrowDown } from 'react-icons/io'

import style from './style.scss'
import { SearchInput } from './SearchInput'
import { categories } from '@/components/AdminPanelSearch/SearchForm/searchCategories'

type LocalStateType = {
  categoriesIsShowed: boolean
}

type HoverHandlerType = 'enter' | 'leave'

export class AdminPanelSearch extends PureComponent<PropsWithChildren<{}>, LocalStateType> {
  constructor(props: PropsWithChildren<{}>) {
    super(props)
    this.state = {
      categoriesIsShowed: false,
    }
  }

  onHoverCategoriesMenuHandler = (e: HoverHandlerType) => {
    this.setState({ categoriesIsShowed: e === 'enter' ? true : false })
  }

  render() {
    return (
      <Fragment>
        <div className={style.container}>
          <div className={style.item} style={{ flexGrow: 3 }}>
            <div className={style.box}>
              <IoIosCog className={style.panelIcon} />
              <h2>Поиск бота</h2>
              <p>Введите название либо ID бота.</p>
              <SearchInput />
            </div>
          </div>

          <div className={style.item} style={{ flexGrow: 1 }}>
            <div className={style.item}>
              <div className={style.box}>
                <IoIosPricetags className={style.panelIcon} />

                <h2>Параметры поиска</h2>

                <div className={style.searchParametersMenu}>
                  <div
                    onMouseEnter={() => this.onHoverCategoriesMenuHandler('enter')}
                    onMouseLeave={() => this.onHoverCategoriesMenuHandler('leave')}
                  >
                    <button>
                      Категории
                      <span className="mt-1">
                        <IoIosArrowDown />
                      </span>
                    </button>
                    {this.state.categoriesIsShowed && (
                      <ul>
                        {categories.map((item, index) => (
                          <li key={index}>
                            <button>{item}</button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
