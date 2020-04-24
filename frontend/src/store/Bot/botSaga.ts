import { takeEvery, put, call } from 'redux-saga/effects'
import { FetchBotActionType, botActionTypeConstants, BotType } from '@/store/Bot/types'
import * as AC from '@/store/Bot/actionCreators' //action creators
import { fetchBotById } from '@/api/BotsApi'

function* fetchBotSagaWorker(action: FetchBotActionType) {
  const id = action.payload

  try {
    yield put(AC.startLoading())
    const result: BotType = yield call(fetchBotById, id)
    const imageName = result.imageFilename
    result.imageFilename = imageName === null ? 'no-robot-image' : imageName

    yield put(AC.stopLoading())
    yield put(AC.updateBot(result))
  } catch (e) {
    const errorMessage = 'Ошибка...'
    yield put(AC.requestError(errorMessage))
    yield put(AC.stopLoading())
  }
}

export function* fetchBotSagaWatcher() {
  yield takeEvery(botActionTypeConstants.FETCH_BOT, fetchBotSagaWorker)
}
