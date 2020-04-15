import React, { FC } from 'react'
import {} from 'react-icons/io'
import { IoIosMenu } from 'react-icons/io'
import style from './style.scss'
import T from 'prop-types'

type MenuIconPropType = {
  additionalClass?: string
}

export const MenuIcon: FC<MenuIconPropType> = ({ additionalClass }) => {
  return <IoIosMenu className={`${style.menuIcon} ${additionalClass}`} />
}

MenuIcon.propTypes = {
  additionalClass: T.string,
}

MenuIcon.defaultProps = {
  additionalClass: '',
}
