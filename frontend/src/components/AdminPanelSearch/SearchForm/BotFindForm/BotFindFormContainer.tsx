import React, { FunctionComponent, useState, PropsWithChildren } from 'react'
import style from '../style.scss'
import { IoIosSearch, IoIosCog } from 'react-icons/io'
import { OutsideClickWrapper } from '@/components/OutsideClickWrapper'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch, AnyAction } from 'redux'
import { fetchBots, startLoading } from '@/store/Bots/actionCreators'
import { BotList } from '@/components/AdminPanelSearch/SearchForm/BotFindForm/BotList'
import { GlobalStateType } from '@/store'
import debounce from '@/utils/debounceFunction'

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  const actionCreators = { fetchBots, startLoading }
  return bindActionCreators(actionCreators, dispatch)
}

function mapStateToProps(state: GlobalStateType) {
  return {
    isLoading: state.botsReducer.isLoading,
    bots: state.botsReducer.bots,
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
     * TODO: Дублирование кода с данными из input чтобы от асинхронной перерисовки
     * не сбивался debounce.
     */
    if (refToSearchInput.current?.value === textInput) {
      props.fetchBots(textInput)
    }
  }, 2000)

  return (
    <div className={style.box}>
      <IoIosCog className={style.panelIcon} />
      <h2>Поиск бота</h2>
      <p>Введите имя либо ID бота.</p>

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
                if (!props.isLoading) props.startLoading()
                inputChangeWithDebounce(e.target.value)
              }}
              ref={refToSearchInput}
              onFocus={() => setResultIsShowed(true)}
              type="text"
              maxLength={50}
            />
            <button
              onClick={() => {
                //
              }}
            >
              <IoIosSearch />
            </button>
          </div>

          {resultIsShowed && <BotList isLoading={props.isLoading} bots={props.bots} />}
        </div>
      </OutsideClickWrapper>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(BotFindForm)
