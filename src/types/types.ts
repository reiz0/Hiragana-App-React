export type User = {
  _id: string
  accountName: string
  userName: string
}

export type NewUserType = {
  userName: string
  accountName: string
  password: string
}

export type LoginUserType = {
  accountName: string
  password: string
}