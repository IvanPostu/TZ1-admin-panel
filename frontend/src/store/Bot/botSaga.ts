import { fetchBotById } from '@/api/BotsApi'
import * as AC from '@/store/Bot/actionCreators' //action creators
import { botActionTypeConstants, BotType, FetchBotActionType } from '@/store/Bot/types'
import { call, put, takeEvery } from 'redux-saga/effects'

function* fetchBotSagaWorker(action: FetchBotActionType) {
  const id = action.payload

  try {
    yield put(AC.startLoading())
    const result: BotType = yield call(fetchBotById, id)
    const imageName = result.imageFilename
    result.imageFilename = imageName === null ? 'no-robot-image' : imageName
    result.category = result.category === null ? 'No category' : result.category

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
