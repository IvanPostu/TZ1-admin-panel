import { combineReducers } from 'redux'
import { botsReducer } from '@/store/Bots/botsReducer'
import { botReducer } from '@/store/Bot/botReducer'

export const rootReducer = combineReducers({
  botsReducer,
  botReducer,
})
