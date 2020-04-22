export enum botActionTypeConstants {
  FETCH_BOTS = '@Bots/FETCH_BOTS',
  FETCH_NEXT_PAGE = '@Bots/FETCH_NEXT_PAGE',
  LOADING_START = '@Bots/LOADING_START',
  LOADING_END = '@Bots/LOADING_END',
  UPDATE_BOTS = '@Bots/UPDATE_BOTS',
  CLEAR_BOTS = '@Bots/CLEAR_BOTS',
  REQUEST_ERROR = '@Bots/REQUEST_ERROR',
}

export type BotType = {
  id: number
  name: string
  avatarFilename: string
}

/**
 * Payload types BEGIN
 */

type FetchBotsActionPayloadType = {
  name: string
  page: number
  botsPerPage: number
}

type UpdateBotsActionPayloadType = {
  currentPage: number
  searchValue: string
  haveNextPage: boolean
  bots: Array<BotType>
}
/**
 * Payload types END
 */

/**
 * Action types BEGIN
 */
export interface FetchBotsActionType {
  type: typeof botActionTypeConstants.FETCH_BOTS
  payload: FetchBotsActionPayloadType
}

export interface FetchNextPageBotsActionType {
  type: typeof botActionTypeConstants.FETCH_NEXT_PAGE
}

export interface StartLoadingType {
  type: typeof botActionTypeConstants.LOADING_START
}

export interface StopLoadingType {
  type: typeof botActionTypeConstants.LOADING_END
}

export interface UpdateBotsActionType {
  type: typeof botActionTypeConstants.UPDATE_BOTS
  payload: UpdateBotsActionPayloadType
}

export interface ClearBotsActionType {
  type: typeof botActionTypeConstants.CLEAR_BOTS
}

export interface RequestErrorActionType {
  type: typeof botActionTypeConstants.REQUEST_ERROR
  payload: string
}

export type BotsRootActionType =
  | FetchBotsActionType
  | FetchNextPageBotsActionType
  | StartLoadingType
  | StopLoadingType
  | UpdateBotsActionType
  | ClearBotsActionType
  | RequestErrorActionType

/**
 * Action types END
 */
