export enum botsActionTypeConstants {
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
  type: typeof botsActionTypeConstants.FETCH_BOTS
  payload: FetchBotsActionPayloadType
}

export interface FetchNextPageBotsActionType {
  type: typeof botsActionTypeConstants.FETCH_NEXT_PAGE
}

export interface StartLoadingType {
  type: typeof botsActionTypeConstants.LOADING_START
}

export interface StopLoadingType {
  type: typeof botsActionTypeConstants.LOADING_END
}

export interface UpdateBotsActionType {
  type: typeof botsActionTypeConstants.UPDATE_BOTS
  payload: UpdateBotsActionPayloadType
}

export interface ClearBotsActionType {
  type: typeof botsActionTypeConstants.CLEAR_BOTS
}

export interface RequestErrorActionType {
  type: typeof botsActionTypeConstants.REQUEST_ERROR
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
