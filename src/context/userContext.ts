import React from 'react'

const userContext = React.createContext({ user: {} })
const userContextProvider = userContext.Provider

export { userContext, userContextProvider }
