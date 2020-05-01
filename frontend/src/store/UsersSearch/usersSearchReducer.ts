import {
  usersActionTypeConstants as T,
  UsersSearchStateType,
  UsersRootActionType,
  UserType,
} from './types'
import { Reducer } from 'redux'

const initialState: UsersSearchStateType = {
  currentPage: 0,
  errorMessage: '',
  haveNextPage: false,
  isLoading: false,
  searchValue: '',
  users: new Array<UserType>(),
}

export const usersSearchReducer: Reducer<UsersSearchStateType, UsersRootActionType> = (
  state: UsersSearchStateType = initialState,
  action,
) => {
  switch (action.type) {
    case T.UPDATE_USERS:
      return {
        ...state,
        ...action.payload,
      }
    case T.LOADING_START:
      return {
        ...state,
        isLoading: true,
      }
    case T.LOADING_END:
      return {
        ...state,
        isLoading: false,
      }
    case T.CLEAR_USERS:
      return {
        ...state,
        users: new Array<UserType>(),
      }

    case T.FETCH_NEXT_PAGE:
    case T.REQUEST_ERROR:
    case T.FETCH_USERS: //handled by redux-saga
    default:
      return state
  }
}
