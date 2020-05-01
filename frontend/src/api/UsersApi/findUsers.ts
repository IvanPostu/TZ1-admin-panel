import { url } from '@/api/url'

export async function findUserByName(name: string, currentPage = 0, usersPerPage = 8) {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const urlWithParams = new URL(url.href + 'api/usersApi/findByName')

  urlWithParams.searchParams.append('name', name)
  urlWithParams.searchParams.append('currentPage', String(currentPage))
  urlWithParams.searchParams.append('usersPerPage', String(usersPerPage))

  const result = await fetch(`${urlWithParams}`, options)
  if (!result.ok) throw new Error('Request failed...')
  const data = await result.json()
  return data
}
