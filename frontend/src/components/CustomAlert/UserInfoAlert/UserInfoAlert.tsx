import React from 'react'
import style from '../style.scss'
import { ImageType, images } from '@/components/GlobalImageComponent'

export const UserInfoAlert = () => {
  return (
    <div id={style.alertBody}>
      <img src={images.get('no-user-image')} />
      <h4>Hello world</h4>
      <button className={style.close}>Закрыть</button>
    </div>
  )
}
