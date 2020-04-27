export enum botSubscribersActionTypeConstants {
  FETCH_PAGE = '@BotSubscribers/FETCH_PAGE',
  LOADING_START = '@BotSubscribers/LOADING_START',
  LOADING_END = '@BotSubscribers/LOADING_END',
  REQUEST_ERROR = '@BotSubscribers/REQUEST_ERROR',
}

export type SubscriberType = {
  readonly id: number
  readonly fullname: string
  readonly avatarFilename: string
  readonly age: number
}

export type BotSubscribersStateType = {
  readonly totalPages: number
  readonly usersPerPage: number
  botIsSelected: boolean
  pages: Map<number, Array<SubscriberType>>
}

/**
 * Action types BEGIN
 */
export interface FetchPageActionType {
  type: typeof botSubscribersActionTypeConstants.FETCH_PAGE
  payload: number
}

export type BotSubscribersRootActionType = FetchPageActionType

/**
 * Action types END
 */
