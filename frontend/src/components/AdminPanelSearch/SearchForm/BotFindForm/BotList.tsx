import React, { PropsWithChildren, FC } from 'react'
import { Loader } from '@/components/LoaderA/Loader'
import style from '../style.scss'
import { BotType } from '@/store/Bots/types'

type LocalPropType = PropsWithChildren<{}> & {
  isLoading: boolean
  bots: Array<BotType>
  haveNextPage: boolean
  onSeeMoreClick: () => void
}

export const BotList: FC<LocalPropType> = ({ bots, isLoading, haveNextPage, onSeeMoreClick }) => {
  return (
    <ul>
      {isLoading && (
        <li>
          <div className={style.loader}>
            <Loader />
          </div>
        </li>
      )}
      {bots.map((item) => (
        <li key={item.id}>
          <button>{item.name}</button>
        </li>
      ))}
      {haveNextPage && !isLoading && (
        <li>
          <button onClick={onSeeMoreClick} style={{ color: 'teal' }}>
            Смотреть больше
          </button>
        </li>
      )}
    </ul>
  )
}
