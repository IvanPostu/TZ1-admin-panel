import { all, fork } from 'redux-saga/effects'
import { sagaWatcher } from '@/store/Bots/botsSagas'

export default function* () {
  yield all([sagaWatcher()])
}
