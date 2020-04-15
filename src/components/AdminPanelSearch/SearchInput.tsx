import React from 'react'
import style from './style.scss'
import { IoIosSearch } from 'react-icons/io'

export const SearchInput = () => {
  return (
    <div className={style.tbox}>
      <input type="text" maxLength={50} />
      <button>
        <IoIosSearch className={style.searchIcon} />
      </button>
    </div>
  )
}
