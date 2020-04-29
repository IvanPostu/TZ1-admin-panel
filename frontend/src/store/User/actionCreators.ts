import * as T from './types'

export const fetchUser = (id: number): T.FetchUserActionType => ({
  type: T.userActionTypeConstants.FETCH_USER,
  payload: id,
})

export const startLoading = (): T.StartLoadingType => ({
  type: T.userActionTypeConstants.LOADING_START,
})

export const stopLoading = (): T.StopLoadingType => ({
  type: T.userActionTypeConstants.LOADING_END,
})

export const updateUser = (data: T.UserType): T.UpdateUserActionType => ({
  type: T.userActionTypeConstants.UPDATE_USER,
  payload: data,
})

export const requestError = (errorMessage: string): T.RequestErrorActionType => ({
  type: T.userActionTypeConstants.REQUEST_ERROR,
  payload: errorMessage,
})

export const clearUser = (): T.ClearUserActionType => ({
  type: T.userActionTypeConstants.CLEAR_USER,
})

export const showOrHideUserInfo = (setVisible: boolean): T.ShowHideActionType => ({
  type: T.userActionTypeConstants.SHOW_HIDE,
  payload: setVisible,
})
