import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import style from '@/components/Navbar/style.scss'
import { IoIosMenu } from 'react-icons/io'
import { OutsideClickWrapper } from '@/components/OutsideClickWrapper'

export const Navbar: React.FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false)

  return (
    <nav id={style.navbarId}>
      <OutsideClickWrapper
        handlerIsActive={true}
        outsideClickHandler={() => setDropdownVisible(false)}
      >
        <div className={style.menuFlexContainer}>
          <div onClick={() => setDropdownVisible(dropdownVisible ? false : true)}>
            <IoIosMenu className={style.menuIcon} />
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
      </OutsideClickWrapper>
    </nav>
  )
}
