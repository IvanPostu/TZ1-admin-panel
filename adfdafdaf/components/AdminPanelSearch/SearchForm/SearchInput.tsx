import React, { FunctionComponent, useState } from 'react'
import style from './style.scss'
import { IoIosSearch, IoIosCog } from 'react-icons/io'
import { Loader } from '@/components/LoaderA/Loader'
import { OutsideClickWrapper } from '@/components/OutsideClickWrapper'

export const SearchInput: FunctionComponent = () => {
  const [resultIsShowed, setResultIsShowed] = useState(false)

  return (
    <div className={style.rowItem} style={{ flexGrow: 3, zIndex: 4 }}>
      <div className={style.box}>
        <IoIosCog className={style.panelIcon} />
        <h2>Поиск бота</h2>
        <p>Введите название либо ID бота.</p>
        <OutsideClickWrapper
          handlerIsActive={resultIsShowed}
          outsideClickHandler={() => setResultIsShowed(false)}
        >
          <div className={style.tbox}>
            <div>
              <input onFocus={() => setResultIsShowed(true)} type="text" maxLength={50} />
              <button>
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod atque neque
                    commodi rem.
                  </button>
                </li>
                <li>
                  <button>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod atque neque
                    commodi rem.
                  </button>
                </li>
                <li>
                  <button>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod atque neque
                    commodi rem.
                  </button>
                </li>
                <li>
                  <button>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod atque neque
                    commodi rem.
                  </button>
                </li>
                <li>
                  <button>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod atque neque
                    commodi rem.
                  </button>
                </li>
              </ul>
            )}
          </div>
        </OutsideClickWrapper>
      </div>
    </div>
  )
}
