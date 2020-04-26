import { url } from '@/api/url'

/**
 *
 * @RequestResult
 * {
 *    name: string
 *    current-page: number
 *    bots: Map<number, {id, name, avatarFilename}>
 * }
 */
export async function fetchBots(name = '', currentPage = 0, botsPerPage = 8) {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const urlWithParams = new URL(url.href + 'api/botsApi/findByName') //url +

  urlWithParams.searchParams.append('current-page', String(currentPage))
  urlWithParams.searchParams.append('name', String(name))
  urlWithParams.searchParams.append('bots-per-page', String(botsPerPage))

  const result = await fetch(`${urlWithParams}`, options)

  if (!result.ok) throw new Error('Request failed...')

  const data = await result.json()
  return data
}

export async function fetchBotById(id: number) {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const urlWithParams = new URL(url.href + 'api/botsApi/find')

  urlWithParams.searchParams.append('id', String(id))
  const result = await fetch(`${urlWithParams}`, options)
  if (!result.ok) throw new Error('Request failed...')
  const data = await result.json()
  return data
}
