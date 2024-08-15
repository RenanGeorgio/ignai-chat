export type User = {
  _id: string
  name: string
  email: string
  company: string
  companyId: string
}

export interface UserContextInterface {
  isAuthenticated?: boolean
  user: User
  setUser?: (user: User | null) => void
}