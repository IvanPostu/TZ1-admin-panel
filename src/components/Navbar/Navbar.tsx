import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import style from '@/components/Navbar/style.scss'
import { MenuIcon } from './Icons'

type HoverHandlerType = 'enter' | 'leave'

export const Navbar: React.FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const onHoverMenyHandler = (e: HoverHandlerType) => {
    if (e === 'enter') {
      setDropdownVisible(true)
    } else if (e === 'leave') {
      setDropdownVisible(false)
    }
  }

  return (
    <nav id={style.navbarId}>
      <div
        onMouseEnter={() => onHoverMenyHandler('enter')}
        onMouseLeave={() => onHoverMenyHandler('leave')}
        className={style.menuFlexContainer}
      >
        <div>
          <MenuIcon additionalClass="mr-1" />
        </div>
        <ul style={{ display: dropdownVisible ? 'block' : 'none' }}>
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
      </div>
    </nav>
  )
}
