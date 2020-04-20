import { combineReducers } from 'redux'
import { botsReducer } from '@/store/Bots/botsReducer'

export const rootReducer = combineReducers({
  bots: botsReducer,
})
