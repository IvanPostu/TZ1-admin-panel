import React, { FC } from 'react'
import style from '../style.scss'
import { images, ImageType } from '@/components/GlobalImageComponent'
import { Loader } from '@/components/LoaderA/Loader'

export type BotPanelPropType = {
  id: number
  name: string
  imageFilename: string
  isLoading: boolean
  category: string
}

const BotPanel: FC<BotPanelPropType> = (props) => (
  <div className={style.botInfo}>
    {!props.isLoading && <img src={images.get(props.imageFilename as ImageType)} />}
    {props.isLoading && (
      <div className={style.loadBot}>
        <Loader size="90px" />
      </div>
    )}
    <div>
      <p>Name: {props.name}</p>
      <p>ID: {props.id}</p>
      <p>Category: {props.category}</p>
    </div>
  </div>
)

export { BotPanel }