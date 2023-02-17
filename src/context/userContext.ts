import { createContext } from 'react'

const userContext = createContext({ user: {} })
const userContextProvider = userContext.Provider

export { userContext, userContextProvider }
