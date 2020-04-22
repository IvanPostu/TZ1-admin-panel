import { BotsRootActionType, BotType, botActionTypeConstants } from './types'
import { Reducer } from 'redux'

type BotsStateType = {
  bots: Array<BotType>
  isLoading: boolean
  searchValue: string
  currentPage: number
  haveNextPage: boolean
  errorMessage: string
}

const initialState: BotsStateType = {
  bots: new Array<BotType>(),
  isLoading: false,
  haveNextPage: false,
  currentPage: 0,
  searchValue: '',
  errorMessage: '',
}

const botsReducer: Reducer<BotsStateType, BotsRootActionType> = (
  state = initialState,
  action,
): BotsStateType => {
  switch (action.type) {
    case botActionTypeConstants.LOADING_START:
      return { ...state, isLoading: true }
    case botActionTypeConstants.LOADING_END:
      return { ...state, isLoading: false }
    case botActionTypeConstants.UPDATE_BOTS:
      return {
        ...state,
        ...action.payload,
        errorMessage: '',
      }
    case botActionTypeConstants.CLEAR_BOTS:
      return {
        ...state,
        bots: [],
      }
    case botActionTypeConstants.REQUEST_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      }

    default:
      return state
  }
}

export { botsReducer }
