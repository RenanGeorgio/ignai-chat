export type User = {
  _id: string
  name: string
  cpf?: string
  email: string
  company: string
  companyId: string
  __v?: number
  createdAt?: any
  updatedAt?: any
}

export interface UserContextInterface {
  isAuthenticated?: boolean
  user: User
  twilioToken: string | undefined
  setUser?: (user: User | null) => void
}