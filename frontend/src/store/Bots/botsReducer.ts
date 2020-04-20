import { BotType, BotsStateType } from './index'
import { AnyAction } from 'redux'
import { FetchBotsAction } from '@/store/Bots/actionCreators'

const initialState: BotsStateType = {
  bots: new Array<BotType>(),
  isFetch: false,
  searchValue: '',
}

export const botsReducer = (
  state: BotsStateType = initialState,
  action: FetchBotsAction,
): BotsStateType => {
  return state
}
