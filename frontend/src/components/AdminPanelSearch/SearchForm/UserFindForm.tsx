import React, { FunctionComponent, useState } from 'react'
import style from './style.scss'
import { IoIosSearch, IoMdPeople } from 'react-icons/io'
import { Loader } from '@/components/LoaderA/Loader'
import { OutsideClickWrapper } from '@/components/OutsideClickWrapper'

export const UserFindForm: FunctionComponent = () => {
  const [resultIsShowed, setResultIsShowed] = useState(false)

  return (
    <div className={style.box}>
      <IoMdPeople className={style.panelIcon} />
      <h2>Поиск пользователя</h2>
      <p>Введите имя пользователя.</p>
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
