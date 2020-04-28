export enum botSubscribersActionTypeConstants {
  FETCH_PAGE = '@BotSubscribers/FETCH_PAGE',
  REQUEST_ERROR = '@BotSubscribers/REQUEST_ERROR',
  CHANGE_FILTER = '@BotSubscribers/CHANGE_FILTER',
  ADD_PAGE = '@BotSubscribers/ADD_PAGE',
  SET_TOTAL_PAGES = '@BotSubscribers/SET_TOTAL_PAGES',
  CLEAR_PAGES = '@BotSubscribers/CLEAR_PAGES',
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
  readonly usersPerPage: number //DON'T TOUCH THIS FIELD!!!!
  pages: Map<number, Array<SubscriberType>>
  searchFilter: SearchSubscribersFilterType
  errorMessage: string
}

type AddPagePayloadType = {
  readonly pageIndex: number
  readonly page: Array<SubscriberType>
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

export interface AddPageActionType {
  type: typeof botSubscribersActionTypeConstants.ADD_PAGE
  payload: AddPagePayloadType
}

export interface RequestErrorActionType {
  type: typeof botSubscribersActionTypeConstants.REQUEST_ERROR
  payload: string
}

export interface SetTotalPagesActionType {
  type: typeof botSubscribersActionTypeConstants.SET_TOTAL_PAGES
  payload: number
}

export interface ClearPagesActionType {
  type: typeof botSubscribersActionTypeConstants.CLEAR_PAGES
}

export type BotSubscribersRootActionType =
  | FetchPageActionType
  | ChangeFilterActionType
  | AddPageActionType
  | RequestErrorActionType
  | SetTotalPagesActionType
  | ClearPagesActionType

/**
 * Action types END
 */
