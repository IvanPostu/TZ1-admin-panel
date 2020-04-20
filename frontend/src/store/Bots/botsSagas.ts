import { takeEvery, put, call } from 'redux-saga/effects'
import { ActionTypes } from '@/store/Bots/types'
import { fetchBots } from '@/api/BotsApi'
import { FetchBotsAction } from '@/store/Bots/actionCreators'

function* sagaWorker(action: FetchBotsAction) {
  const { name, page, botsPerPage } = action.payload

  const payload = yield call(fetchBots, name, page)
  console.log(payload)
}

export function* sagaWatcher() {
  yield takeEvery(ActionTypes.FETCH_BOTS, sagaWorker)
}
