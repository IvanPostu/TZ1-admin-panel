import {
  fetchBotSubscriberPagination as fetchPagination,
  fetchBotSubscriberSpecificPage,
} from '@/api/BotsApi'
import { botActionTypeConstants, UpdateBotActionType } from '@/store/Bot/types'
import {
  addPage,
  requestError,
  setPagesCount,
  clearPages,
} from '@/store/BotSubscribers/actionCreators'
import { clearBot } from '@/store/Bot/actionCreators'
import {
  botSubscribersActionTypeConstants,
  FetchPageActionType,
} from '@/store/BotSubscribers/types'
import { call, put, takeEvery } from 'redux-saga/effects'
import { store } from '@/store/root'
import { avatarSetter } from './helper'

/**
 * Handler for action bot changes by user
 * and show pagination and first page of subscribers.
 */
function* selectBotSubscribersSagaWorker(action: UpdateBotActionType) {
  const botId = action.payload.id as number
  const usersPerPage: number = store.getState().botSubscribersReducer.usersPerPage
  const filter = store.getState().botSubscribersReducer.searchFilter
  const sortUsernameAlphabetical = filter.sortSubscriberNameAlphabetical
  const minUserAge = filter.subscriberMinAge
  const maxUserAge = filter.subscriberMaxAge

  try {
    const result = yield call(fetchPagination, {
      botId,
      usersPerPage,
      sortUsernameAlphabetical,
      minUserAge,
      maxUserAge,
    })
    const botSubscribers = result.firstPage.subscribers

    avatarSetter(botSubscribers)
    yield put(clearPages())
    yield put(setPagesCount(result.pageCount))
    yield put(addPage(1, botSubscribers))
  } catch (e) {
    const errorMessage = 'Ошибка...'
    yield put(requestError(errorMessage))
  }
}

/**
 * User select a bot from a search query, saga observer.
 */
export function* selectBotSubscribersSagaWatcher() {
  yield takeEvery(botActionTypeConstants.UPDATE_BOT, selectBotSubscribersSagaWorker)
}

/**
 * Fetch specific page
 */
function* fetchPageSagaWorker(action: FetchPageActionType) {
  const page = action.payload
  const usersPerPage: number = store.getState().botSubscribersReducer.usersPerPage
  const botId: number = store.getState().botReducer.id as number
  const filter = store.getState().botSubscribersReducer.searchFilter
  const sortUsernameAlphabetical = filter.sortSubscriberNameAlphabetical
  const minUserAge = filter.subscriberMinAge
  const maxUserAge = filter.subscriberMaxAge

  try {
    const result = yield call(fetchBotSubscriberSpecificPage, {
      botId,
      usersPerPage,
      page,
      sortUsernameAlphabetical,
      minUserAge,
      maxUserAge,
    })
    avatarSetter(result.subscribers)
    yield put(addPage(result.currentPage, result.subscribers))
  } catch (e) {
    const errorMessage = 'Ошибка...'
    yield put(requestError(errorMessage))
  }
}

/**
 * Fetch specific page, saga observer
 */
export function* fetchPageSagaWatcher() {
  yield takeEvery(botSubscribersActionTypeConstants.FETCH_PAGE, fetchPageSagaWorker)
}

/**
 * Handle change filter
 */
function* filterChangedSagaWorker() {
  yield put(clearBot())
}

export function* filterChangedSagaWatcher() {
  yield takeEvery(botSubscribersActionTypeConstants.CHANGE_FILTER, filterChangedSagaWorker)
}
