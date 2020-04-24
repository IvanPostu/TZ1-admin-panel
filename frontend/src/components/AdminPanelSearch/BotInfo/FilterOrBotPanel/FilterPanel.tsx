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
      <label style={{ flexGrow: 4 }}>Пол</label>
      <select style={{ flexGrow: 2 }}>
        <option value="unknown">Не указан</option>
        <option value="female">Женский</option>
        <option value="male">Мужской</option>
      </select>
    </div>
  </div>
)

export { FilterPanel }
