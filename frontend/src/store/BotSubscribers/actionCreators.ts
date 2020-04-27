import { botSubscribersActionTypeConstants as T, FetchPageActionType } from './types'

export const fetchPage = (page: number): FetchPageActionType => {
  return {
    payload: page,
    type: T.FETCH_PAGE,
  }
}
