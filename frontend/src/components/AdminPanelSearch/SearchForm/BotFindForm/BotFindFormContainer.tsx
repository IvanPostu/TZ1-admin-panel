import React, { FunctionComponent, useState, PropsWithChildren } from 'react'
import style from '../style.scss'
import { IoIosCog } from 'react-icons/io'
import { OutsideClickWrapper } from '@/components/OutsideClickWrapper'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { fetchBots, fetchNextPageBots, startLoading, clearBots } from '@/store/Bots/actionCreators'
import { fetchBot as fetchBotById } from '@/store/Bot/actionCreators'
import { BotList } from '@/components/AdminPanelSearch/SearchForm/BotFindForm/BotList'
import { GlobalStateType } from '@/store'
import { BotsRootActionType } from '@/store/Bots/types'
import debounce from '@/utils/debounceFunction'

function mapDispatchToProps(dispatch: Dispatch<BotsRootActionType>) {
  const actionCreators = { fetchBots, startLoading, clearBots, fetchNextPageBots, fetchBotById }
  return bindActionCreators(actionCreators, dispatch)
}

function mapStateToProps(state: GlobalStateType) {
  return {
    isLoading: state.botsReducer.isLoading,
    bots: state.botsReducer.bots,
    haveNextPage: state.botsReducer.haveNextPage,
  }
}

type BotFindFormPropType = PropsWithChildren<{}> &
  ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>

const BotFindForm: FunctionComponent<BotFindFormPropType> = (props) => {
  const [resultIsShowed, setResultIsShowed] = useState(false)
  const refToSearchInput = React.useRef<HTMLInputElement>(null)
  const inputChangeWithDebounce = debounce((textInput: string) => {
    /**
     * Дублирование кода с данными из input чтобы от асинхронной перерисовки
     * не сбивался debounce.
     */
    if (refToSearchInput.current?.value === textInput) {
      props.fetchBots(textInput)
    }
  }, 2000)
  const onSeeMoreClick = () => {
    props.fetchNextPageBots()
  }
  const showBotListCondition = resultIsShowed && (props.bots.length > 0 || props.isLoading)
  return (
    <div className={style.box}>
      <IoIosCog className={style.panelIcon} />
      <h2>Поиск бота</h2>
      <p>Введите имя бота.</p>

      <OutsideClickWrapper
        handlerIsActive={resultIsShowed}
        outsideClickHandler={() => {
          setResultIsShowed(false)
        }}
      >
        <div className={style.tbox}>
          <div>
            <input
              onChange={(e) => {
                if (!resultIsShowed) setResultIsShowed(true)
                if (!props.isLoading) props.startLoading()
                if (props.bots.length > 0) props.clearBots()
                inputChangeWithDebounce(e.target.value)
              }}
              ref={refToSearchInput}
              onFocus={() => setResultIsShowed(true)}
              type="text"
              maxLength={50}
            />
          </div>

          {showBotListCondition && (
            <BotList
              onSeeMoreClick={onSeeMoreClick}
              haveNextPage={props.haveNextPage}
              isLoading={props.isLoading}
              bots={props.bots}
              onBotInListClick={props.fetchBotById}
            />
          )}
        </div>
      </OutsideClickWrapper>
    </div>
  )
}

export const BotFindFormContainer = connect(mapStateToProps, mapDispatchToProps)(BotFindForm)
