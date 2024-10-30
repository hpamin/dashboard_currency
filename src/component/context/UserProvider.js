import React, { createContext } from 'react'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    // add data

  return (
    <UserContext.Provider>
        {children}
    </UserContext.Provider>
  )
}

