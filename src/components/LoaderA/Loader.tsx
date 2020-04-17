import React, { FC } from 'react'
import style from './style.scss'
import T from 'prop-types'

type LoaderPropType = {
  size?: string
}

export const Loader: FC<LoaderPropType> = ({ size }) => {
  return <div style={{ width: size, height: size }} className={style.loader}></div>
}

Loader.defaultProps = {
  size: '20px',
}
