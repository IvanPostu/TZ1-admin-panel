import React, { FunctionComponent, useState, useCallback } from 'react'
import style from '../style.scss'
import { IoMdPeople } from 'react-icons/io'
import { OutsideClickWrapper } from '@/components/OutsideClickWrapper'
import debounce from '@/utils/debounceFunction'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { GlobalStateType } from '@/store'
import {
  fetchUsers,
  startLoading,
  clearUserList,
  fetchNextPage,
} from '@/store/UsersSearch/actionCreators'
import { UserList } from './UserList'
import { useDispatch } from 'react-redux'
import { fetchUser } from '@/store/User/actionCreators'

function mapStateToProps(state: GlobalStateType) {
  return {
    currentPage: state.usersSearchReducer.currentPage,
    haveNextPage: state.usersSearchReducer.haveNextPage,
    isLoading: state.usersSearchReducer.isLoading,
    users: state.usersSearchReducer.users,
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({ fetchUsers, startLoading, clearUserList, fetchNextPage }, dispatch)
}

type UserFindFormPropType = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

const UserFindForm: FunctionComponent<UserFindFormPropType> = (props) => {
  const [resultIsShowed, setResultIsShowed] = useState(false)
  const [searchText, setSearchText] = useState('')

  const dispatch: Dispatch = useDispatch()
  const fetchUserHandler = useCallback((userId: number) => {
    dispatch(fetchUser(userId))
  }, [])

  const fetchSearchText = (text: string) => {
    props.fetchUsers(text)
  }
  const debounceHandler = useCallback(debounce(fetchSearchText, 2000), [])
  const searchInputHandler = useCallback((e) => {
    const textFromInput: string = e.target.value
    setSearchText(textFromInput)
    props.startLoading()
    props.clearUserList()
    debounceHandler(textFromInput)
  }, [])

  const showBotListCondition = resultIsShowed && (props.users.length > 0 || props.isLoading)

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
            <input
              onFocus={() => setResultIsShowed(true)}
              type="text"
              maxLength={50}
              onChange={searchInputHandler}
              value={searchText}
            />
          </div>

          {showBotListCondition && (
            <UserList
              haveNextPage={props.haveNextPage}
              isLoading={props.isLoading}
              onBotInListClick={fetchUserHandler}
              onSeeMoreClick={props.fetchNextPage}
              users={props.users}
            />
          )}
        </div>
      </OutsideClickWrapper>
    </div>
  )
}

export const UserFindFormContainer = connect(mapStateToProps, mapDispatchToProps)(UserFindForm)
