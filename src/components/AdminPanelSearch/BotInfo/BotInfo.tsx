import React, { FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'
import style from './style.scss'
import userImage1 from '@/assets/images/user-image-1.png'
import userImage2 from '@/assets/images/user-image-2.png'
import userImage3 from '@/assets/images/user-image-3.png'
import { FilterOrBotPanel } from './Components'

export const BotInfo: FunctionComponent = () => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={style.row}>
          <div style={{ flexGrow: 2 }} className={style.rowItem}>
            <FilterOrBotPanel />
          </div>

          <div style={{ flexGrow: 4 }} className={style.rowItem}>
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
          </div>
        </div>
      </div>
    </div>
  )
}
