import { ActionTypes } from './types'
import { Action, ActionCreator, AnyAction } from 'redux'

type FetchBotsActionPayloadType = {
  name: string
  page: number
  botsPerPage: number
}

export interface FetchBotsAction extends Action<ActionTypes> {
  type: ActionTypes.FETCH_BOTS
  payload: FetchBotsActionPayloadType
}

export const fetchBots = (name: string, page = 0, botsPerPage = 0): FetchBotsAction => ({
  type: ActionTypes.FETCH_BOTS,
  payload: {
    name,
    page,
    botsPerPage,
  },
})

export type RootActionType = Action | FetchBotsAction
