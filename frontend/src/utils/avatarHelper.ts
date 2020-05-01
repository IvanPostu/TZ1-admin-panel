type ObjectWithAvatar = {
  avatarFilename: string
}

export function avatarSetter(users: Array<ObjectWithAvatar>, defaultValue: string): void {
  for (let i = 0; i < users.length; i++) {
    if (users[i].avatarFilename === null) {
      users[i].avatarFilename = defaultValue
    }
  }
}
