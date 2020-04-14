import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '@/components/Navbar/style.scss'

export const Navbar: React.FC = () => {
  return (
    <nav id={style.navbarId}>
      <ul className="f-left">
        <li>
          <NavLink className={`${style.linkBtn}`} id={style.navbarLogo} to="/">
            Панель администратора
          </NavLink>
        </li>
      </ul>

      <ul className="f-right">
        <li>
          <NavLink className={`${style.linkBtn}`} to="/">
            Настройки
          </NavLink>
        </li>
        <li>
          <NavLink className={`${style.linkBtn}`} to="/">
            Статистика
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
