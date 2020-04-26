import React, { FC } from 'react'
import style from '../style.scss'

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
      <button
        onClick={() => {
          confirm('Текущие список пользователей будет изменен !!!')
        }}
      >
        Применть
      </button>
    </div>
  </div>
)

export { FilterPanel }
