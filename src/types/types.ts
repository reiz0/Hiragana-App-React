export type User = {
  _id: string
  accountName: string
  userName: string
  createdAt: string
  updatedAt: string
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

export type storeScoreType = {
  level: number
  user: string
  score: number
  quiz: string
}

export type getAllMaxScoreType = {
  user: string
}

export type scoreType = {
  _id: string
  level: number
  score: number
  createdAt: string
}