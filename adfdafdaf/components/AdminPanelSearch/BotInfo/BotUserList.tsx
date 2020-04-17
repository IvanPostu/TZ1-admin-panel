import React, { Fragment, FC } from 'react'
import style from './style.scss'
import userImage1 from '@/assets/images/user-image-1.png'
import userImage2 from '@/assets/images/user-image-2.png'
import userImage3 from '@/assets/images/user-image-3.png'
import { NavLink } from 'react-router-dom'
import { Pagination } from './Pagination'

export const BotUserList: FC = () => {
  return (
    <Fragment>
      <Pagination />
      <ul className={style.userList}>
        <li>
          <img src={userImage1} />
          <NavLink className={style.userLink} to="/">
            Userfirstname userlastname
          </NavLink>
        </li>
        <li>
          <img src={userImage2} />
          <NavLink className={style.userLink} to="/">
            Userfirstname userlastname
          </NavLink>
        </li>
        <li>
          <img src={userImage1} />
          <NavLink className={style.userLink} to="/">
            Userfirstname userlastname
          </NavLink>
        </li>
        <li>
          <img src={userImage3} />
          <NavLink className={style.userLink} to="/">
            Userfirstname userlastname
          </NavLink>
        </li>
        <li>
          <img src={userImage1} />
          <NavLink className={style.userLink} to="/">
            Userfirstname userlastname
          </NavLink>
        </li>
        <li>
          <img src={userImage2} />
          <NavLink className={style.userLink} to="/">
            Userfirstname userlastname
          </NavLink>
        </li>
        <li>
          <img src={userImage3} />
          <NavLink className={style.userLink} to="/">
            Userfirstname userlastname
          </NavLink>
        </li>
        <li>
          <img src={userImage3} />
          <NavLink className={style.userLink} to="/">
            Userfirstname userlastname
          </NavLink>
        </li>
        <li>
          <img src={userImage3} />
          <NavLink className={style.userLink} to="/">
            Userfirstname userlastname
          </NavLink>
        </li>
        <li>
          <img src={userImage2} />
          <NavLink className={style.userLink} to="/">
            Userfirstname userlastname
          </NavLink>
        </li>
      </ul>
      <Pagination />
    </Fragment>
  )
}
