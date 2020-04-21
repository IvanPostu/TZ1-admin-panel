export type BotType = {
  id: number
  name: string
  avatarFilename: string
}

export type BotsStateType = {
  bots: Map<number, BotType>
  isLoading: boolean
  searchValue: string
  currentPage: number
}

// export { BotsRootActionType } from '@/store/Bots/actionCreators'
