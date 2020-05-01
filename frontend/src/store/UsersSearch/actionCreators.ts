import {
  usersActionTypeConstants as T,
  FetchUsersActionType,
  FetchNextPageUsersActionType,
  StartLoadingActionType,
  StopLoadingActionType,
  RequestErrorActionType,
  UpdateUsersActionType,
  UserType,
  ClearUsersActionType,
} from './types'

/**
 * Return action is handled by saga
 */
export const fetchUsers = (name: string, page = 0, usersPerPage = 8): FetchUsersActionType => ({
  type: T.FETCH_USERS,
  payload: {
    name,
    page,
    usersPerPage,
  },
})

export const fetchNextPage = (): FetchNextPageUsersActionType => ({
  type: T.FETCH_NEXT_PAGE,
})

export const startLoading = (): StartLoadingActionType => ({
  type: T.LOADING_START,
})

export const stopLoading = (): StopLoadingActionType => ({
  type: T.LOADING_END,
})

export const requestError = (errorMessage: string): RequestErrorActionType => ({
  type: T.REQUEST_ERROR,
  payload: errorMessage,
})

export const updateUsers = (
  currentPage: number,
  haveNextPage: boolean,
  searchValue: string,
  users: Array<UserType>,
): UpdateUsersActionType => ({
  type: T.UPDATE_USERS,
  payload: {
    currentPage,
    haveNextPage,
    searchValue,
    users,
  },
})

export const clearUserList = (): ClearUsersActionType => ({
  type: T.CLEAR_USERS,
})
