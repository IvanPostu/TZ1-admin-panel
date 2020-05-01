export enum usersActionTypeConstants {
  FETCH_USERS = '@UsersSearch/FETCH_USERS',
  FETCH_NEXT_PAGE = '@UsersSearch/FETCH_NEXT_PAGE',
  LOADING_START = '@UsersSearch/LOADING_START',
  LOADING_END = '@UsersSearch/LOADING_END',
  UPDATE_USERS = '@UsersSearch/UPDATE_USERS',
  CLEAR_USERS = '@UsersSearch/CLEAR_USERS',
  REQUEST_ERROR = '@UsersSearch/REQUEST_ERROR',
}

export type UserType = {
  id: number
  fullname: string
  avatarFilename: string
}

type CommonStateType = {
  currentPage: number
  searchValue: string
  haveNextPage: boolean
  users: Array<UserType>
}

export type UsersSearchStateType = {
  isLoading: boolean
  errorMessage: string
} & CommonStateType

/**
 * Payload types BEGIN
 */

type FetchUsersActionPayloadType = {
  name: string
  page: number
  usersPerPage: number
}

type UpdateUsersActionPayloadType = CommonStateType
/**
 * Payload types END
 */

/**
 * Action types BEGIN
 */
export interface FetchUsersActionType {
  type: typeof usersActionTypeConstants.FETCH_USERS
  payload: FetchUsersActionPayloadType
}

export interface FetchNextPageUsersActionType {
  type: typeof usersActionTypeConstants.FETCH_NEXT_PAGE
}

export interface StartLoadingActionType {
  type: typeof usersActionTypeConstants.LOADING_START
}

export interface StopLoadingActionType {
  type: typeof usersActionTypeConstants.LOADING_END
}

export interface UpdateUsersActionType {
  type: typeof usersActionTypeConstants.UPDATE_USERS
  payload: UpdateUsersActionPayloadType
}

export interface ClearUsersActionType {
  type: typeof usersActionTypeConstants.CLEAR_USERS
}

export interface RequestErrorActionType {
  type: typeof usersActionTypeConstants.REQUEST_ERROR
  payload: string
}

export type UsersRootActionType =
  | FetchUsersActionType
  | FetchNextPageUsersActionType
  | StartLoadingActionType
  | StopLoadingActionType
  | UpdateUsersActionType
  | ClearUsersActionType
  | RequestErrorActionType

/**
 * Action types END
 */
