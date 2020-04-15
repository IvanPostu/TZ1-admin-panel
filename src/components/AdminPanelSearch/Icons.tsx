import React, { FC } from 'react'
import { IoIosMenu, IoMdConstruct, IoIosCog } from 'react-icons/io'
import T from 'prop-types'

type BotPanelIconPropType = {
  additionalClass?: string
}

export const BotPanelIcon: FC<BotPanelIconPropType> = ({ additionalClass }) => {
  return <IoIosCog className={` ${additionalClass}`} />
}

BotPanelIcon.propTypes = {
  additionalClass: T.string,
}

BotPanelIcon.defaultProps = {
  additionalClass: '',
}
