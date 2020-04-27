import * as T from './types'

export const fetchBot = (id: number): T.FetchBotActionType => ({
  type: T.botActionTypeConstants.FETCH_BOT,
  payload: id,
})

export const startLoading = (): T.StartLoadingType => ({
  type: T.botActionTypeConstants.LOADING_START,
})

export const stopLoading = (): T.StopLoadingType => ({
  type: T.botActionTypeConstants.LOADING_END,
})

export const updateBot = (data: T.BotType): T.UpdateBotActionType => ({
  type: T.botActionTypeConstants.UPDATE_BOT,
  payload: data,
})

export const requestError = (errorMessage: string): T.RequestErrorActionType => ({
  type: T.botActionTypeConstants.REQUEST_ERROR,
  payload: errorMessage,
})

export const changeFilter = (filter: T.SearchSubscribersFilterType): T.ChangeFilterActionType => ({
  type: T.botActionTypeConstants.CHANGE_FILTER,
  payload: filter,
})
