import React, { FC, useRef } from 'react'
import style from '../style.scss'
import { SearchSubscribersFilterType } from '@/store/BotSubscribers/types'

type FilterPanelPropType = {
  changeFilter: (filter: SearchSubscribersFilterType) => void
}

const FilterPanel: FC<FilterPanelPropType> = ({ changeFilter }) => {
  const sortAlphabetical = useRef<HTMLInputElement>(null)
  const minAge = useRef<HTMLInputElement>(null)
  const maxAge = useRef<HTMLInputElement>(null)

  return (
    <div className={style.filterPanel}>
      <div>
        <label style={{ flexGrow: 4 }}>Сортировать по алфавиту</label>
        <input ref={sortAlphabetical} style={{ flexGrow: 2 }} type="checkbox" />
      </div>
      <div>
        <label style={{ flexGrow: 4 }}>Минимальный возраст</label>
        <input
          ref={minAge}
          style={{ flexGrow: 2 }}
          className={style.ageInput}
          type="number"
          min={4}
        />
      </div>
      <div>
        <label style={{ flexGrow: 4 }}>Максимальный возраст</label>
        <input
          ref={maxAge}
          style={{ flexGrow: 2 }}
          className={style.ageInput}
          type="number"
          max={200}
        />
      </div>
      <div>
        <button
          onClick={() => {
            try {
              const filter: SearchSubscribersFilterType = {
                sortSubscriberNameAlphabetical: sortAlphabetical.current?.checked as boolean,
                subscriberMinAge: minAge.current?.valueAsNumber as number,
                subscriberMaxAge: maxAge.current?.valueAsNumber as number,
              }
              if (filter.subscriberMinAge > filter.subscriberMaxAge) throw 1

              const isOk = confirm('Текущий список пользователей будет изменен !!!')
              if (isOk) {
                changeFilter(filter)
              }
            } catch (e) {
              alert('Минимальный возраст не может быть больше максимального!')
            }
          }}
        >
          Применть
        </button>
      </div>
    </div>
  )
}

export { FilterPanel }
