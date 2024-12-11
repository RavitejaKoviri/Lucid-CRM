import { createContext } from "react"
import React from 'react'

type campgineContextType = {
    searchTerm: string,
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const icampgineContextState = {
    searchTerm: '',
    setSearchTerm: () => { }
}
const campgineContext = createContext<campgineContextType>(icampgineContextState)
export default campgineContext