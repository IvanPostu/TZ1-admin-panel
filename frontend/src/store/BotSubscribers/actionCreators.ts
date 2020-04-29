import {
  botSubscribersActionTypeConstants as T,
  FetchPageActionType,
  SearchSubscribersFilterType,
  ChangeFilterActionType,
  AddPageActionType,
  SubscriberType,
  RequestErrorActionType,
  SetTotalPagesActionType,
  ClearPagesActionType,
  SetCurrentPageActionType,
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

export const addPage = (pageIndex: number, page: Array<SubscriberType>): AddPageActionType => ({
  type: T.ADD_PAGE,
  payload: {
    page,
    pageIndex,
  },
})

export const requestError = (errorMessage: string): RequestErrorActionType => ({
  type: T.REQUEST_ERROR,
  payload: errorMessage,
})

export const setPagesCount = (totalPages: number): SetTotalPagesActionType => ({
  type: T.SET_TOTAL_PAGES,
  payload: totalPages,
})

export const clearPages = (): ClearPagesActionType => ({
  type: T.CLEAR_PAGES,
})

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
  type: T.SET_CURRENT_PAGE,
  payload: currentPage,
})
