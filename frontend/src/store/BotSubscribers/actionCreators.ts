import {
  botSubscribersActionTypeConstants as T,
  FetchPageActionType,
  SearchSubscribersFilterType,
  ChangeFilterActionType,
} from './types'

export const fetchPage = (page: number): FetchPageActionType => {
  return {
    payload: page,
    type: T.FETCH_PAGE,
  }
}

export const changeFilter = (filter: SearchSubscribersFilterType): ChangeFilterActionType => ({
  type: T.CHANGE_FILTER,
  payload: filter,
})
