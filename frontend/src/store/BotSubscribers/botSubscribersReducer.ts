import {
  BotSubscribersRootActionType,
  BotSubscribersStateType,
  SubscriberType,
  botSubscribersActionTypeConstants,
} from './types'
import { Reducer } from 'redux'

const initialState: BotSubscribersStateType = {
  totalPages: 100,
  pages: new Map<number, Array<SubscriberType>>(),
  usersPerPage: 10,
  botIsSelected: false,
}

const botSubscribersReducer: Reducer<BotSubscribersStateType, BotSubscribersRootActionType> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case botSubscribersActionTypeConstants.FETCH_PAGE:
      return state
    default:
      return state
  }
}

export { botSubscribersReducer }
