export enum botSubscribersActionTypeConstants {
  FETCH_PAGE = '@BotSubscribers/FETCH_PAGE',
  LOADING_START = '@BotSubscribers/LOADING_START',
  LOADING_END = '@BotSubscribers/LOADING_END',
  REQUEST_ERROR = '@BotSubscribers/REQUEST_ERROR',
  CHANGE_FILTER = '@BotSubscribers/CHANGE_FILTER',
}

export type SearchSubscribersFilterType = {
  sortSubscriberNameAlphabetical: boolean
  subscriberMinAge: number
  subscriberMaxAge: number
}

export type SubscriberType = {
  id: number
  fullname: string
  avatarFilename: string
  age: number
}

export type BotSubscribersStateType = {
  totalPages: number
  usersPerPage: number
  botIsSelected: boolean
  pages: Map<number, Array<SubscriberType>>
  searchFilter: SearchSubscribersFilterType
}

/**
 * Action types BEGIN
 */
export interface FetchPageActionType {
  type: typeof botSubscribersActionTypeConstants.FETCH_PAGE
  payload: number
}

export interface ChangeFilterActionType {
  type: typeof botSubscribersActionTypeConstants.CHANGE_FILTER
  payload: SearchSubscribersFilterType
}

export type BotSubscribersRootActionType = FetchPageActionType | ChangeFilterActionType

/**
 * Action types END
 */
