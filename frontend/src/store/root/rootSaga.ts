import { all } from 'redux-saga/effects'
import { fetchBotsSagaWatcher, fetchNextPageBotsSagaWatcher } from '@/store/Bots/botsSagas'
import { fetchBotSagaWatcher } from '@/store/Bot/botSaga'
import {
  selectBotSubscribersSagaWatcher,
  fetchPageSagaWatcher,
} from '@/store/BotSubscribers/botSubscribersSaga'

export default function* () {
  yield all([
    fetchBotsSagaWatcher(),
    fetchNextPageBotsSagaWatcher(),
    fetchBotSagaWatcher(),
    selectBotSubscribersSagaWatcher(),
    fetchPageSagaWatcher(),
  ])
}
