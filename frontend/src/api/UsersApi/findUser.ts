import { url } from '@/api/url'

export async function findUserById(userId: number) {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const urlWithParams = new URL(url.href + 'api/usersApi/find')

  urlWithParams.searchParams.append('userId', String(userId))
  const result = await fetch(`${urlWithParams}`, options)
  if (!result.ok) throw new Error('Request failed...')
  const data = await result.json()
  return data
}
