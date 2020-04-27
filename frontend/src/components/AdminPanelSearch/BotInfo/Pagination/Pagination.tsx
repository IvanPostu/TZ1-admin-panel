import React, { FC } from 'react'
import style from './style.scss'

/**
 * totalPages [1..n] n inclusiv
 */
type PaginationPropTypes = {
  currentPage: number
  totalPages: number
  clickToPageHandler: (page: number) => void
}

export const Pagination: FC<PaginationPropTypes> = ({
  currentPage,
  totalPages,
  clickToPageHandler,
}) => {
  const size = 4
  const pageArray: Array<number> = [currentPage]
  let showJumpToLast = false
  let showJumpToFirst = false

  if (totalPages > 5) {
    showJumpToLast = currentPage !== totalPages
    showJumpToFirst = currentPage > size / 2
  }

  for (let i = 0, j = 1; i < size; j++) {
    if (currentPage + j <= totalPages) {
      pageArray.push(currentPage + j)
      i++
    }
    if (currentPage - j > 0) {
      pageArray.unshift(currentPage - j)
      i++
    }
  }

  return (
    <div className={style.pagination}>
      {showJumpToFirst && <button onClick={() => clickToPageHandler(1)}>&laquo;</button>}

      {pageArray.map((item, index) => (
        <button
          onClick={() => clickToPageHandler(item)}
          className={item === currentPage ? style.active : ''}
          key={index}
        >
          {item}
        </button>
      ))}

      {showJumpToLast && <button onClick={() => clickToPageHandler(totalPages)}>&raquo;</button>}
    </div>
  )
}
