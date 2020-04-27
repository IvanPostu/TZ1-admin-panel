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
  botIsSelected: false,
  searchFilter: {
    sortSubscriberNameAlphabetical: false,
    subscriberMinAge: 0,
    subscriberMaxAge: 200,
  },
}

const botSubscribersReducer: Reducer<BotSubscribersStateType, BotSubscribersRootActionType> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case T.FETCH_PAGE:
      return state
    case T.CHANGE_FILTER:
      return {
        ...state,
        searchFilter: action.payload,
      }
    default:
      return state
  }
}

export { botSubscribersReducer }
