import React from 'react'
import { createContext } from "react"

type BrandContextType = {
    searchTerm: string,
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const iBrandContextState = {
    searchTerm: '',
    setSearchTerm: () => { }
}
const BrandContext = createContext<BrandContextType>(iBrandContextState)
export default BrandContext