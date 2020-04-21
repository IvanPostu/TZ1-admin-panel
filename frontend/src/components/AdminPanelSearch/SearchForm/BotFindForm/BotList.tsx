import React, { PropsWithChildren, FC } from 'react'
import { Loader } from '@/components/LoaderA/Loader'
import style from '../style.scss'
import { BotType } from '@/store/Bots'

type LocalPropType = PropsWithChildren<{}> & {
  isLoading: boolean
  bots: Map<number, BotType>
}

export const BotList: FC<LocalPropType> = ({ bots, isLoading }) => {
  return (
    <ul>
      {isLoading && (
        <li>
          <div className={style.loader}>
            <Loader />
          </div>
        </li>
      )}

      {Array.from(bots).map(([key, val]) => (
        <li key={key}>
          <button>{val}</button>
        </li>
      ))}
    </ul>
  )
}

BotList.defaultProps = {
  bots: new Map(),
}
