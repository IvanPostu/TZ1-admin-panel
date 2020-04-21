import { url } from '@/api/url'

/**
 * @throws exceprion if request failed or json parse error
 * @todo write block try/catch
 *
 *
 * @RequestResult
 * {
 *    name: string
 *    current-page: number
 *    bots: Map<number, {id, name, avatarFilename}>
 * }
 */
export async function fetchBots(name = '', currentPage = 0, botsPerPage = 7) {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const urlWithParams = new URL(url.href + 'api/bots') //url +

  urlWithParams.searchParams.append('current-page', String(currentPage))
  urlWithParams.searchParams.append('name', String(name))
  urlWithParams.searchParams.append('bots-per-page', String(botsPerPage))

  const json = await fetch(`${urlWithParams}`, options)
  const data = await json.json()

  return data
}
