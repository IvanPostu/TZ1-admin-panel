import { takeEvery, put, call } from 'redux-saga/effects'
import { botActionTypeConstants, FetchBotsActionType } from '@/store/Bots/types'
import { fetchBots } from '@/api/BotsApi'
import { stopLoading, updateBots, requestError } from '@/store/Bots/actionCreators'
import { store } from '@/store/root'

function* fetchBotsSagaWorker(action: FetchBotsActionType) {
  const { name, page } = action.payload

  try {
    const result = yield call(fetchBots, name, page)
    yield put(stopLoading())
    yield put(updateBots(result.bots, result.name, result.haveNextPage, result.currentPage))
  } catch (e) {
    const errorMessage = 'Ошибка...'
    yield put(requestError(errorMessage))
    yield put(stopLoading())
  }
}

export function* fetchBotsSagaWatcher() {
  yield takeEvery(botActionTypeConstants.FETCH_BOTS, fetchBotsSagaWorker)
}

function* fetchNextPageBotsSagaWorker() {
  const botsState = store.getState().botsReducer
  const nextPage = botsState.currentPage + 1
  const name = botsState.searchValue
  try {
    const result = yield call(fetchBots, name, nextPage)
    if (botsState.searchValue === result.name) {
      yield put(
        updateBots(
          [...botsState.bots, ...result.bots],
          result.name,
          result.haveNextPage,
          result.currentPage,
        ),
      )
    }

    // console.log(result)
  } catch (e) {
    console.error(e)
  }
}

export function* fetchNextPageBotsSagaWatcher() {
  yield takeEvery(botActionTypeConstants.FETCH_NEXT_PAGE, fetchNextPageBotsSagaWorker)
}
