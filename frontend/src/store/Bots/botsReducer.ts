import { BotType, BotsStateType } from './index'
// import { BotsRootActionType } from '@/store/Bots'
import { ActionTypes } from './types'
import { Reducer, Action } from 'redux'
import { FetchBotsActionType, UpdateBotsActionType } from './actionCreators'
// import { UpdateBotsActionType } from './actionCreators'

const initialState: BotsStateType = {
  bots: new Map<number, BotType>(),
  isLoading: false,
  currentPage: 0,
  searchValue: '',
}

const botsReducer: Reducer<BotsStateType, FetchBotsActionType | Action | UpdateBotsActionType> = (
  state = initialState,
  action,
): BotsStateType => {
  switch (action.type) {
    case ActionTypes.LOADING_START: {
      return { ...state, isLoading: true }
    }
    case ActionTypes.LOADING_END: {
      return { ...state, isLoading: false }
    }
    case ActionTypes.UPDATE_BOTS: {
      return {
        ...state,
        // ...payload,
      }
    }
    default:
      return state
  }
}

export { botsReducer }
