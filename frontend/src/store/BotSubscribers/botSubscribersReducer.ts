import {
  BotSubscribersRootActionType,
  BotSubscribersStateType,
  SubscriberType,
  botSubscribersActionTypeConstants as T,
} from './types'
import { Reducer } from 'redux'

const initialState: BotSubscribersStateType = {
  totalPages: 100,
  pages: new Map<number, Array<SubscriberType>>(),
  usersPerPage: 10,
  searchFilter: {
    sortSubscriberNameAlphabetical: true,
    subscriberMinAge: 30,
    subscriberMaxAge: 40,
  },
  errorMessage: '',
}

const botSubscribersReducer: Reducer<BotSubscribersStateType, BotSubscribersRootActionType> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case T.CHANGE_FILTER:
      return {
        ...state,
        searchFilter: action.payload,
      }
    case T.ADD_PAGE:
      const newMap = new Map(state.pages)
      newMap.set(action.payload.pageIndex, action.payload.page)
      return {
        ...state,
        pages: newMap,
      }
    case T.REQUEST_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      }
    case T.SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload,
      }
    case T.CLEAR_PAGES:
      return {
        ...state,
        pages: new Map(),
      }
    case T.FETCH_PAGE: //handled by redux-saga
    default:
      return state
  }
}

export { botSubscribersReducer }
