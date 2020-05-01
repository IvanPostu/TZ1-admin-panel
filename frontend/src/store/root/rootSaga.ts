import { all } from 'redux-saga/effects'
import { fetchBotsSagaWatcher, fetchNextPageBotsSagaWatcher } from '@/store/Bots/botsSagas'
import { fetchBotSagaWatcher } from '@/store/Bot/botSaga'
import {
  selectBotSubscribersSagaWatcher,
  fetchPageSagaWatcher,
  filterChangedSagaWatcher,
} from '@/store/BotSubscribers/botSubscribersSaga'
import { fetchUserSagaWatcher } from '@/store/User/userSaga'
import {
  fetchUsersByNameSagaWatcher,
  fetchUsersNextPageByNameSagaWatcher,
} from '@/store/UsersSearch/usersSearchSaga'

export default function* () {
  yield all([
    fetchBotsSagaWatcher(),
    fetchNextPageBotsSagaWatcher(),
    fetchBotSagaWatcher(),
    selectBotSubscribersSagaWatcher(),
    fetchPageSagaWatcher(),
    filterChangedSagaWatcher(),
    fetchUserSagaWatcher(),
    fetchUsersByNameSagaWatcher(),
    fetchUsersNextPageByNameSagaWatcher(),
  ])
}
