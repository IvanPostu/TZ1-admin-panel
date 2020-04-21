import { takeEvery, put, call } from 'redux-saga/effects'
import { ActionTypes } from '@/store/Bots/types'
import { fetchBots } from '@/api/BotsApi'
import { FetchBotsActionType } from '@/store/Bots/actionCreators'
import { StopLoadingType, stopLoading } from '@/store/Bots/actionCreators'

function* sagaWorker(action: FetchBotsActionType) {
  const { name, page } = action.payload
  const payload = yield call(fetchBots, name, page)
  yield put<StopLoadingType>(stopLoading())
  console.log(payload)
}

export function* sagaWatcher() {
  yield takeEvery(ActionTypes.FETCH_BOTS, sagaWorker)
}
