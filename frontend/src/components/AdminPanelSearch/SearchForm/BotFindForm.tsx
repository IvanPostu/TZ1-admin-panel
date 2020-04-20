import React, { FunctionComponent, useState, PropsWithChildren } from 'react'
import style from './style.scss'
import { IoIosSearch, IoIosCog } from 'react-icons/io'
import { Loader } from '@/components/LoaderA/Loader'
import { OutsideClickWrapper } from '@/components/OutsideClickWrapper'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch, Action } from 'redux'
import { fetchBots, RootActionType } from '@/store/Bots/actionCreators'
import debounce from '@/utils/debounceFunction'

function mapDispatchToProps(dispatch: Dispatch<RootActionType>) {
  const actionCreators = { fetchBots }
  return bindActionCreators(actionCreators, dispatch)
}

type BotFindFormPropType = PropsWithChildren<{}> & ReturnType<typeof mapDispatchToProps>

const BotFindForm: FunctionComponent<BotFindFormPropType> = (props) => {
  const [resultIsShowed, setResultIsShowed] = useState(false)
  const inputChangeWithDebounce = debounce((textInput: string) => {
    // console.log(textInput)
    props.fetchBots(textInput)
  }, 2000)

  return (
    <div className={style.box}>
      <IoIosCog className={style.panelIcon} />
      <h2>Поиск бота</h2>
      <p>Введите имя либо ID бота.</p>

      <OutsideClickWrapper
        handlerIsActive={resultIsShowed}
        outsideClickHandler={() => setResultIsShowed(false)}
      >
        <div className={style.tbox}>
          <div>
            <input
              onChange={(e) => {
                const input = e.target.value
                inputChangeWithDebounce(input)
              }}
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

          {resultIsShowed && (
            <ul>
              <li>
                <div className={style.loader}>
                  <Loader />
                </div>
              </li>
              <li>
                <button>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod atque neque commodi
                  rem.
                </button>
              </li>
              <li>
                <button>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod atque neque commodi
                  rem.
                </button>
              </li>
              <li>
                <button>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod atque neque commodi
                  rem.
                </button>
              </li>
              <li>
                <button>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod atque neque commodi
                  rem.
                </button>
              </li>
              <li>
                <button>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod atque neque commodi
                  rem.
                </button>
              </li>
              <li>
                <button>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod atque neque commodi
                  rem.
                </button>
              </li>
              <li>
                <button>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod atque neque commodi
                  rem.
                </button>
              </li>
              <li>
                <button>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod atque neque commodi
                  rem.
                </button>
              </li>
              <li>
                <button>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod atque neque commodi
                  rem.
                </button>
              </li>
              <li>
                <button>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod atque neque commodi
                  rem.
                </button>
              </li>
              <li>
                <button>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod atque neque commodi
                  rem.
                </button>
              </li>
              <li>
                <button>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod atque neque commodi
                  rem.
                </button>
              </li>
              <li>
                <button>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod atque neque commodi
                  rem.
                </button>
              </li>
              <li>
                <button>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod atque neque commodi
                  rem.
                </button>
              </li>
              <li>
                <button>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod atque neque commodi
                  rem.
                </button>
              </li>
            </ul>
          )}
        </div>
      </OutsideClickWrapper>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(BotFindForm)
