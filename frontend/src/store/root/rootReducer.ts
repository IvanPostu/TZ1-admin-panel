import { combineReducers } from 'redux'
import { botsReducer } from '@/store/Bots/botsReducer'
import { botReducer } from '@/store/Bot/botReducer'
import { botSubscribersReducer } from '@/store/BotSubscribers/botSubscribersReducer'

export const rootReducer = combineReducers({
  botsReducer,
  botReducer,
  botSubscribersReducer,
})
