import React, { Fragment, FC } from 'react'
import style from '../style.scss'
import { Loader } from '@/components/LoaderA/Loader'
import { SubscriberType } from '@/store/BotSubscribers/types'
import { NavLink } from 'react-router-dom'
import { images, ImageType } from '@/components/GlobalImageComponent'
import { Pagination } from '@/components/Pagination'

type SubscriberListPropType = {
  subscriberList: Array<SubscriberType>
  clickToPageHandler: (page: number) => void
  currentPage: number
  totalPages: number
}

export const SubscriberList = ({
  clickToPageHandler,
  currentPage,
  subscriberList,
  totalPages,
}: SubscriberListPropType) => (
  <Fragment>
    <div className={style.userlistTitle}>Пользователи текущего бота</div>
    <ul className={style.userList}>
      {subscriberList.map((item, index) => (
        <li key={index}>
          <img src={images.get(item.avatarFilename as ImageType)} />
          <NavLink className={style.userLink} to="/">
            {`${item.fullname} - age: ${item.age}`}
          </NavLink>
        </li>
      ))}
    </ul>
    <Pagination
      clickToPageHandler={clickToPageHandler}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  </Fragment>
)

export const BotIsNotDefined: FC = () => (
  <div className={style.userlistTitle}>Укажите бота в поисковом запросе</div>
)

export const ListIsLoading: FC = () => (
  <Fragment>
    <div className={style.userlistTitle}>Загрузка страницы...</div>
    <ul className={style.userList}>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <li key={index}>
          <Loader />
        </li>
      ))}
    </ul>
  </Fragment>
)

export const PagesIsZero: FC = () => (
  <div className={style.userlistTitle}>Список подписчиков пуст</div>
)
