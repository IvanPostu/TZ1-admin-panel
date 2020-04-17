import React, { Fragment, useState, FC } from 'react'
import style from './style.scss'
import botImage from '@/assets/images/robot-2.png'

type FilterPanelType = 'filter' | 'botBenu'

export const FilterOrBotPanel = () => {
  const [panelType, setPanelType] = useState<FilterPanelType>('botBenu')

  return (
    <Fragment>
      <button
        onClick={() => {
          setPanelType('filter')
        }}
        className={`${style.btnFilter} ${panelType === 'filter' ? style.btnFilterIsClicked : ''}`}
      >
        Фильтр
      </button>
      <button
        onClick={() => {
          setPanelType('botBenu')
        }}
        className={`${style.btnFilter} ${panelType === 'botBenu' ? style.btnFilterIsClicked : ''}`}
      >
        Бот инфо.
      </button>

      {panelType === 'botBenu' && <BotPanel />}
      {panelType === 'filter' && <FilterPanel />}
    </Fragment>
  )
}

const BotPanel: FC = () => (
  <div className={style.botInfo}>
    <img src={botImage} />
    <div>
      <p>Name: bot name bot name bot name</p>
      <p>ID: 90128939182</p>
    </div>
  </div>
)

const FilterPanel: FC = () => (
  <div className={style.filterPanel}>
    <div>
      <label style={{ flexGrow: 4 }}>Сортировать по алфавиту</label>
      <input style={{ flexGrow: 2 }} type="checkbox" />
    </div>
    <div>
      <label style={{ flexGrow: 4 }}>Минимальный возраст</label>
      <input style={{ flexGrow: 2 }} className={style.ageInput} type="text" />
    </div>
    <div>
      <label style={{ flexGrow: 4 }}>Максимальный возраст</label>
      <input style={{ flexGrow: 2 }} className={style.ageInput} type="text" />
    </div>
    <div>
      <label style={{ flexGrow: 4 }}>Пол</label>
      <select style={{ flexGrow: 2 }}>
        <option value="unknown">Не указан</option>
        <option value="female">Женский</option>
        <option value="male">Мужской</option>
      </select>
    </div>
  </div>
)
