import { all } from 'redux-saga/effects'
import { fetchBotsSagaWatcher, fetchNextPageBotsSagaWatcher } from '@/store/Bots/botsSagas'
import { fetchBotSagaWatcher } from '@/store/Bot/botSaga'

export default function* () {
  yield all([fetchBotsSagaWatcher(), fetchNextPageBotsSagaWatcher(), fetchBotSagaWatcher()])
}
