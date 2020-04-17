import React, { useState, FC } from 'react'
import { IoIosPricetags, IoIosArrowDown } from 'react-icons/io'

import { OutsideClickWrapper } from '@/components/OutsideClickWrapper/OutsideClickWrapper'
import { categories } from '@/components/AdminPanelSearch/SearchForm/searchCategories'
import style from './style.scss'

export const CategoriesInput: FC = () => {
  const [categoriesIsShowed, setCategoriesIsShowed] = useState(false)

  return (
    <div className={style.rowItem} style={{ flexGrow: 1 }}>
      <div className={style.rowItem}>
        <div className={style.box}>
          <IoIosPricetags className={style.panelIcon} />

          <h2>Категория бота</h2>

          <OutsideClickWrapper
            handlerIsActive={categoriesIsShowed}
            outsideClickHandler={() => {
              setCategoriesIsShowed(false)
            }}
          >
            <div className={style.searchParametersMenu}>
              <div onClick={() => setCategoriesIsShowed(true)}>
                <button>
                  Меню
                  <span className="mt-1">
                    <IoIosArrowDown />
                  </span>
                </button>
                {categoriesIsShowed && (
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
          </OutsideClickWrapper>
        </div>
      </div>
    </div>
  )
}
