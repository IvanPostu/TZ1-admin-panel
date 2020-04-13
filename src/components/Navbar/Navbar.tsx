import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper px-1 indigo lighten-2">
        <NavLink to="/" className="brand-logo">
          Панель администратора
        </NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink className="waves-effect waves-light" to="/">
              Информация
            </NavLink>
          </li>
          <li>
            <NavLink className="waves-effect waves-light" to="/">
              Настройки
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
