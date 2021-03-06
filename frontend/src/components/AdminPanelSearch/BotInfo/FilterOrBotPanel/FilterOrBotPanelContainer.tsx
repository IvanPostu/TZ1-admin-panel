import React, { Fragment, useState, FC, PropsWithChildren } from 'react'
import style from '../style.scss'
import { BotPanel } from './BotPanel'
import { FilterPanel } from './FilterPanel'
import { GlobalStateType } from '@/store'
import { connect } from 'react-redux'
import { BotPanelPropType } from './BotPanel'
import { bindActionCreators, Dispatch } from 'redux'
import { changeFilter } from '@/store/BotSubscribers/actionCreators'

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({ changeFilter }, dispatch)
}

function mapStateToProps(state: GlobalStateType) {
  return {
    botId: state.botReducer.id,
    botName: state.botReducer.name,
    botAvatarFilename: state.botReducer.imageFilename,
    botCategory: state.botReducer.category,
    isLoading: state.botReducer.isLoading,
  }
}

type FilterPanelType = 'filter' | 'botBenu'

type MenuButtonPropType = {
  onClickHandler: () => void
  isSelected: boolean
  name: string
}

const MenuButton: FC<MenuButtonPropType> = ({ onClickHandler, isSelected, name }) => (
  <button
    onClick={onClickHandler}
    className={`${style.btnFilter} ${isSelected ? style.btnFilterIsClicked : ''}`}
  >
    {name}
  </button>
)

type FilterOrBotPanelPropType = PropsWithChildren<{}> &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

const FilterOrBotPanel: FC<FilterOrBotPanelPropType> = ({
  botAvatarFilename,
  isLoading,
  botId,
  botName,
  botCategory,
  changeFilter,
}) => {
  const [panelType, setPanelType] = useState<FilterPanelType>('botBenu')
  const propsForBotPanel: BotPanelPropType = {
    id: botId as number,
    isLoading,
    imageFilename: botAvatarFilename,
    name: botName,
    category: botCategory,
  }

  return (
    <Fragment>
      <MenuButton
        name="Фильтр"
        onClickHandler={() => setPanelType('filter')}
        isSelected={panelType === 'filter'}
      />

      <MenuButton
        name="Бот инфо."
        onClickHandler={() => setPanelType('botBenu')}
        isSelected={panelType === 'botBenu'}
      />

      {panelType === 'botBenu' && <BotPanel {...propsForBotPanel} />}
      {panelType === 'filter' && <FilterPanel changeFilter={changeFilter} />}
    </Fragment>
  )
}

export const FilterOrBotPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterOrBotPanel)
