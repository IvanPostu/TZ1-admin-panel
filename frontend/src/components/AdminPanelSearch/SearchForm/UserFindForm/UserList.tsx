import React, { PropsWithChildren, FC, useCallback } from 'react'
import { Loader } from '@/components/LoaderA/Loader'
import style from '../style.scss'
import { UserType } from '@/store/UsersSearch/types'

type LocalPropType = PropsWithChildren<{}> & {
  isLoading: boolean
  users: Array<UserType>
  haveNextPage: boolean
  onSeeMoreClick: () => void
  onBotInListClick: (id: number) => void
}

export const UserList: FC<LocalPropType> = ({
  users,
  isLoading,
  haveNextPage,
  onSeeMoreClick,
  onBotInListClick,
}) => {
  return (
    <ul>
      {isLoading && (
        <li>
          <div className={style.loader}>
            <Loader />
          </div>
        </li>
      )}
      {users.map((item) => (
        <li onClick={() => onBotInListClick(item.id)} key={item.id}>
          <button style={{ fontSize: '12px' }}>{item.fullname}</button>
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
