export enum userActionTypeConstants {
  FETCH_USER = '@User/FETCH_USER',
  LOADING_START = '@User/LOADING_START',
  LOADING_END = '@User/LOADING_END',
  UPDATE_USER = '@User/UPDATE_USER',
  CLEAR_USER = '@User/CLEAR_USER',
  REQUEST_ERROR = '@User/REQUEST_ERROR',
  SHOW_HIDE = '@User/SHOW_HIDE',
}

export type UserType = {
  id: number
  fullname: string
  avatarFilename: string
  age: number
  email: string
  subscriptionCount: number
}

export type UserStateType = {
  isShowed: boolean
  isLoading: boolean
} & UserType

/**
 * Action types BEGIN
 */
export interface FetchUserActionType {
  type: typeof userActionTypeConstants.FETCH_USER
  payload: number
}

export interface StartLoadingType {
  type: typeof userActionTypeConstants.LOADING_START
}

export interface StopLoadingType {
  type: typeof userActionTypeConstants.LOADING_END
}

export interface UpdateUserActionType {
  type: typeof userActionTypeConstants.UPDATE_USER
  payload: UserType
}

export interface RequestErrorActionType {
  type: typeof userActionTypeConstants.REQUEST_ERROR
  payload: string
}

export interface ClearUserActionType {
  type: typeof userActionTypeConstants.CLEAR_USER
}

export interface ShowHideActionType {
  type: typeof userActionTypeConstants.SHOW_HIDE
  payload: boolean
}

export type UserRootActionType =
  | FetchUserActionType
  | StartLoadingType
  | StopLoadingType
  | UpdateUserActionType
  | RequestErrorActionType
  | ClearUserActionType
  | ShowHideActionType

/**
 * Action types END
 */
