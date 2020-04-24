import React, { Fragment, FC } from 'react'
import style from './style.scss'
import userImage1 from '@/assets/images/user-image-1.png'
// import userImage2 from '@/assets/images/user-image-2.png'
// import userImage3 from '@/assets/images/user-image-3.png'
import { NavLink } from 'react-router-dom'
import { Pagination } from './Pagination'

const ii = [0, 1, 2, 3, 4, 5, 6, 7, 8]

export const BotUserList: FC = () => {
  return (
    <Fragment>
      <ul className={style.userList}>
        {ii.map((i, index) => (
          <li key={index}>
            <img src={userImage1} />
            <NavLink className={style.userLink} to="/">
              Userfirstname userlastname
            </NavLink>
          </li>
        ))}
      </ul>
      <Pagination />
    </Fragment>
  )
}
