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
  twilioToken: string | undefined
  setUser?: (user: User | null) => void
}