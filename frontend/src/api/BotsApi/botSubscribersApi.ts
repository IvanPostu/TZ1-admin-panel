import { url } from '@/api/url'

type FetchBotSubscriberPropType = {
  readonly botId: number
  readonly usersPerPage: number
  readonly sortUsernameAlphabetical?: boolean
  readonly minUserAge?: number
  readonly maxUserAge?: number
}

export async function fetchBotSubscriberPagination(arg: FetchBotSubscriberPropType) {
  const urlWithParams = new URL(url.href + 'api/botsApi/usersPagination')
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  Object.entries(arg).forEach(([key, value]) => {
    urlWithParams.searchParams.append(key, String(value))
  })

  const result = await fetch(urlWithParams.toString(), options)
  if (!result.ok) throw new Error('Request failed...')
  const data = await result.json()
  return data
}

type FetchBotSubscriberSpecificPagePropType = {
  readonly page: number
} & FetchBotSubscriberPropType

/**
 * IMPORTANT on server read page index from 0 to n
 * on frontend from 1 to n+1
 * decriment inside ReactComponent
 */
export async function fetchBotSubscriberSpecificPage(arg: FetchBotSubscriberSpecificPagePropType) {
  const urlWithParams = new URL(url.href + 'api/botsApi/findSubscribers')
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  Object.entries(arg).forEach(([key, value]) => {
    urlWithParams.searchParams.append(key, String(value))
  })

  const result = await fetch(urlWithParams.toString(), options)
  if (!result.ok) throw new Error('Request failed...')
  const data = await result.json()
  return data
}
