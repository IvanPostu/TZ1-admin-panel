export type BotType = {
  id: number
  name: string
  avatarFilename: string
}

export type BotsStateType = {
  bots: Array<BotType>
  isFetch: boolean
  searchValue: string
}
