import { ImageType } from '@/components/GlobalImageComponent'

export enum botActionTypeConstants {
  FETCH_BOT = '@Bot/FETCH_BOT',
  LOADING_START = '@Bot/LOADING_START',
  LOADING_END = '@Bot/LOADING_END',
  UPDATE_BOT = '@Bot/UPDATE_BOT',
  REQUEST_ERROR = '@Bot/REQUEST_ERROR',
}

export type BotType = {
  name: string
  imageFilename: ImageType
  id: number
  category: string
}

//state type
export type BotStateType = BotType & {
  subscribersCount: number
  isLoading: boolean
  errorMessage: string
}

/**
 * Action types BEGIN
 */
export interface FetchBotActionType {
  type: typeof botActionTypeConstants.FETCH_BOT
  payload: number
}

export interface StartLoadingType {
  type: typeof botActionTypeConstants.LOADING_START
}

export interface StopLoadingType {
  type: typeof botActionTypeConstants.LOADING_END
}

export interface UpdateBotActionType {
  type: typeof botActionTypeConstants.UPDATE_BOT
  payload: BotType
}

export interface RequestErrorActionType {
  type: typeof botActionTypeConstants.REQUEST_ERROR
  payload: string
}

export type BotRootActionType =
  | FetchBotActionType
  | StartLoadingType
  | StopLoadingType
  | UpdateBotActionType
  | RequestErrorActionType

/**
 * Action types END
 */
