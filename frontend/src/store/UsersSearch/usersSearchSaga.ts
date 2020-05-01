import { takeEvery, put, call } from 'redux-saga/effects'
import {
  usersActionTypeConstants,
  FetchUsersActionType,
  FetchNextPageUsersActionType,
} from '@/store/UsersSearch/types'
import { findUserByName } from '@/api/UsersApi/findUsers'
import {
  updateUsers,
  stopLoading,
  requestError,
  fetchNextPage,
} from '@/store/UsersSearch/actionCreators'
import { avatarSetter } from '@/utils/avatarHelper'
import { store } from '@/store/root'

function* fetchUsersSagaWorker(action: FetchUsersActionType) {
  const { name, page } = action.payload

  try {
    const result = yield call(findUserByName, name, page)
    avatarSetter(result.users, 'no-user-image')
    yield put(stopLoading())
    yield put(updateUsers(result.currentPage, result.haveNextPage, result.findName, result.users))
  } catch (e) {
    const errorMessage = 'Ошибка...'
    yield put(requestError(errorMessage))
    yield put(stopLoading())
  }
}

export function* fetchUsersByNameSagaWatcher() {
  yield takeEvery(usersActionTypeConstants.FETCH_USERS, fetchUsersSagaWorker)
}

function* fetchUsersNextPageSagaWorker() {
  const { currentPage, searchValue, users } = store.getState().usersSearchReducer

  try {
    const result = yield call(findUserByName, searchValue + 1, currentPage)
    avatarSetter(result.users, 'no-user-image')
    yield put(stopLoading())
    yield put(
      updateUsers(result.currentPage, result.haveNextPage, result.findName, [
        ...users,
        ...result.users,
      ]),
    )
  } catch (e) {
    const errorMessage = 'Ошибка...'
    yield put(requestError(errorMessage))
    yield put(stopLoading())
  }
}

export function* fetchUsersNextPageByNameSagaWatcher() {
  yield takeEvery(usersActionTypeConstants.FETCH_NEXT_PAGE, fetchUsersNextPageSagaWorker)
}
