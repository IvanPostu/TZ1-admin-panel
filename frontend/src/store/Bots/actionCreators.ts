import {
  botsActionTypeConstants,
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
  type: botsActionTypeConstants.FETCH_BOTS,
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
  type: botsActionTypeConstants.FETCH_NEXT_PAGE,
})

export const updateBots = (
  bots: Array<BotType>,
  searchValue: string,
  haveNextPage: boolean,
  currentPage = 0,
): UpdateBotsActionType => ({
  type: botsActionTypeConstants.UPDATE_BOTS,
  payload: {
    bots,
    haveNextPage,
    currentPage,
    searchValue,
  },
})

export const startLoading = (): StartLoadingType => ({
  type: botsActionTypeConstants.LOADING_START,
})

export const stopLoading = (): StopLoadingType => ({
  type: botsActionTypeConstants.LOADING_END,
})

export const clearBots = (): ClearBotsActionType => ({
  type: botsActionTypeConstants.CLEAR_BOTS,
})

export const requestError = (errorMsg: string): RequestErrorActionType => ({
  type: botsActionTypeConstants.REQUEST_ERROR,
  payload: errorMsg,
})
