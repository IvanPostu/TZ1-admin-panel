import { SubscriberType } from './types'

export function avatarSetter(users: Array<SubscriberType>): void {
  for (let i = 0; i < users.length; i++) {
    if (users[i].avatarFilename === null) {
      users[i].avatarFilename = 'no-user-image'
    }
  }
}
