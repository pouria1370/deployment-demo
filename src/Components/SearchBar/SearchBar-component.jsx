import React from 'react'
import './SearchBar-component.css'
export const Search=({Placeholder,Changehandler})=>(
    <input type="search" 
    className="search"
    placeholder={Placeholder} 
    onChange={Changehandler} />
)

