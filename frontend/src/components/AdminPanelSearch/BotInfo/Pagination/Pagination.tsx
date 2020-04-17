import React, { FC } from 'react'
import style from './style.scss'

export const Pagination: FC = () => {
  return (
    <div className={style.pagination}>
      <button>&laquo;</button>
      <button>1</button>
      <button className="active">2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>&raquo;</button>
    </div>
  )
}
