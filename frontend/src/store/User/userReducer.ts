import { userActionTypeConstants as T, UserStateType, UserRootActionType } from './types'
import { Reducer } from 'redux'

const initialState: UserStateType = {
  isShowed: false,
  isLoading: false,
  age: 0,
  avatarFilename: '',
  email: '',
  fullname: '',
  id: 0,
  subscriptionCount: 0,
}

const userReducer: Reducer<UserStateType, UserRootActionType> = (
  state: UserStateType = initialState,
  action,
) => {
  switch (action.type) {
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

    case T.UPDATE_USER:
      return {
        ...state,
        ...action.payload,
        isShowed: true,
      }
    case T.SHOW_HIDE:
      return {
        ...state,
        isShowed: action.payload,
      }
    case T.CLEAR_USER:
    case T.REQUEST_ERROR:
    case T.FETCH_USER: //handled by saga
    default:
      return state
  }
}

export { userReducer }
