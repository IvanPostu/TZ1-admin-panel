import { call, put, takeEvery } from 'redux-saga/effects'
import { findUserById } from '@/api/UsersApi/findUser'
import * as AC from '@/store/User/actionCreators' //action creators
import { userActionTypeConstants as T, FetchUserActionType, UserType } from '@/store/User/types'

function* fetchUserSagaWorker(action: FetchUserActionType) {
  const id: number = action.payload

  try {
    yield put(AC.startLoading())
    const result: UserType = yield call(findUserById, id)
    const imageName = result.avatarFilename
    result.avatarFilename = imageName === null ? 'no-user-image' : imageName
    yield put(AC.stopLoading())
    yield put(AC.updateUser(result))
  } catch (e) {
    const errorMessage = 'Ошибка...'
    yield put(AC.requestError(errorMessage))
    yield put(AC.stopLoading())
  }
}

export function* fetchUserSagaWatcher() {
  yield takeEvery(T.FETCH_USER, fetchUserSagaWorker)
}
