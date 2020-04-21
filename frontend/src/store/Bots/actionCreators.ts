import { ActionTypes } from './types'
import { Action } from 'redux'
import { BotType } from '@/store/Bots'

type FetchBotsActionPayloadType = {
  name: string
  page: number
  botsPerPage: number
}

export interface FetchBotsActionType extends Action<ActionTypes> {
  type: ActionTypes.FETCH_BOTS
  payload: FetchBotsActionPayloadType
}

export type StartLoadingType = Action<ActionTypes>

export type StopLoadingType = Action<ActionTypes>

type UpdateBotsActionPayloadType = {
  currentPage: number
  searchValue: string
  bots: Map<number, BotType>
}

export interface UpdateBotsActionType extends Action<ActionTypes> {
  type: ActionTypes.UPDATE_BOTS
  payload: UpdateBotsActionPayloadType
}

/**
 * Action results
 */

export const fetchBots = (name: string, page = 0, botsPerPage = 0): FetchBotsActionType => ({
  type: ActionTypes.FETCH_BOTS,
  payload: {
    name,
    page,
    botsPerPage,
  },
})

export const updateBots = (
  bots: Map<number, BotType>,
  searchValue: string,
  currentPage = 0,
): UpdateBotsActionType => ({
  type: ActionTypes.UPDATE_BOTS,
  payload: {
    bots,
    currentPage,
    searchValue,
  },
})

export const startLoading = (): StartLoadingType => ({
  type: ActionTypes.LOADING_START,
})

export const stopLoading = (): StopLoadingType => ({
  type: ActionTypes.LOADING_END,
})

// export type BotsRootActionType = FetchBotsActionType &
//   StartLoadingType &
//   StopLoadingType &
//   UpdateBotsActionType
