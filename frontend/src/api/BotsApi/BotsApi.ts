import { url } from '@/api/url'

/**
 * @throws exceprion if request failed or json parse error
 * @todo write block try/catch
 */
export async function fetchBots(name = '', currentPage = 0) {
  const options: RequestInit = {
    method: 'GET',
    mode: 'cors', // no-cors, *cors, same-origin
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const urlWithParams = new URL(url.href + 'api/bots') //url +

  urlWithParams.searchParams.append('current-page', String(currentPage))
  urlWithParams.searchParams.append('name', String(name))

  const json = await fetch(`${urlWithParams}`, options)
  const data = await json.json()

  return data
}
