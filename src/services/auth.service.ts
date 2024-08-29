import { LoginUserType, NewUserType } from "../types/types"

export const loginService = async (payload: LoginUserType) => {
  const response = await fetch("https://hiragana-app-backend-reiz0s-projects.vercel.app/user/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(payload)
  })

  if(!response) {
    throw new Error("error while logging in")
  }

  const user = await response.json()
  return user
}

export const createUserService = async (user: NewUserType) => {
  const response = await fetch("https://hiragana-app-backend-reiz0s-projects.vercel.app/user/register", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(user)
  })
  if(!response) {
    throw new Error("error while register in")
  }

  const saved = await response.json()
  return saved
}