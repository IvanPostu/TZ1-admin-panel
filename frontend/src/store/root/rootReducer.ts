import { combineReducers } from 'redux'
import { botsReducer } from '@/store/Bots/botsReducer'
import { botReducer } from '@/store/Bot/botReducer'
import { botSubscribersReducer } from '@/store/BotSubscribers/botSubscribersReducer'
import { userReducer } from '@/store/User/userReducer'
import { usersSearchReducer } from '@/store/UsersSearch/usersSearchReducer'

export const rootReducer = combineReducers({
  botsReducer,
  botReducer,
  botSubscribersReducer,
  userReducer,
  usersSearchReducer,
})
