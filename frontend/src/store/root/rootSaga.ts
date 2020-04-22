import { all } from 'redux-saga/effects'
import { fetchBotsSagaWatcher, fetchNextPageBotsSagaWatcher } from '@/store/Bots/botsSagas'

export default function* () {
  yield all([fetchBotsSagaWatcher(), fetchNextPageBotsSagaWatcher()])
}
