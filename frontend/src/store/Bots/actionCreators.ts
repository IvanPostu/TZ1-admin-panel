import { botActionTypeConstants } from './types'
import {
  BotType,
  FetchBotsActionType,
  FetchNextPageBotsActionType,
  StartLoadingType,
  StopLoadingType,
  UpdateBotsActionType,
  ClearBotsActionType,
  RequestErrorActionType,
} from '@/store/Bots/types'

/**
 * This action creator is handled by saga
 */
export const fetchBots = (name: string, page = 0, botsPerPage = 0): FetchBotsActionType => ({
  type: botActionTypeConstants.FETCH_BOTS,
  payload: {
    name,
    page,
    botsPerPage,
  },
})

/**
 * This action creator is handled by saga
 */
export const fetchNextPageBots = (): FetchNextPageBotsActionType => ({
  type: botActionTypeConstants.FETCH_NEXT_PAGE,
})

export const updateBots = (
  bots: Array<BotType>,
  searchValue: string,
  haveNextPage: boolean,
  currentPage = 0,
): UpdateBotsActionType => ({
  type: botActionTypeConstants.UPDATE_BOTS,
  payload: {
    bots,
    haveNextPage,
    currentPage,
    searchValue,
  },
})

export const startLoading = (): StartLoadingType => ({
  type: botActionTypeConstants.LOADING_START,
})

export const stopLoading = (): StopLoadingType => ({
  type: botActionTypeConstants.LOADING_END,
})

export const clearBots = (): ClearBotsActionType => ({
  type: botActionTypeConstants.CLEAR_BOTS,
})

export const requestError = (errorMsg: string): RequestErrorActionType => ({
  type: botActionTypeConstants.REQUEST_ERROR,
  payload: errorMsg,
})
