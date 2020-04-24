import { BotsRootActionType, BotType, botsActionTypeConstants } from './types'
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
    case botsActionTypeConstants.LOADING_START:
      return { ...state, isLoading: true }
    case botsActionTypeConstants.LOADING_END:
      return { ...state, isLoading: false }
    case botsActionTypeConstants.UPDATE_BOTS:
      return {
        ...state,
        ...action.payload,
        errorMessage: '',
      }
    case botsActionTypeConstants.CLEAR_BOTS:
      return {
        ...state,
        bots: [],
      }
    case botsActionTypeConstants.REQUEST_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      }
    case botsActionTypeConstants.FETCH_BOTS: // handled by redux saga
    case botsActionTypeConstants.FETCH_NEXT_PAGE: // handled by redux saga
    default:
      return state
  }
}

export { botsReducer }
