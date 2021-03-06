import { BotStateType, BotRootActionType, botActionTypeConstants as T } from './types'
import { Reducer } from 'redux'

const initialState: BotStateType = {
  name: '-',
  imageFilename: 'no-robot-image',
  id: null,
  isLoading: false,
  errorMessage: '',
  category: '',
  subscribersCount: 0,
}

const botReducer: Reducer<BotStateType, BotRootActionType> = (
  state = initialState,
  action,
): BotStateType => {
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
    case T.UPDATE_BOT:
      return {
        ...state,
        ...action.payload,
      }
    case T.REQUEST_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      }
    case T.CLEAR_BOT:
      return {
        ...state,
        name: '-',
        imageFilename: 'no-robot-image',
        id: null,
        isLoading: false,
        errorMessage: '',
        category: '',
        subscribersCount: 0,
      }

    case T.FETCH_BOT: //handled by saga
    default:
      return state
  }
}

export { botReducer }
