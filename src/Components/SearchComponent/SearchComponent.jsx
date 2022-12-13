import React from 'react'
import './style.css'

export const SearchComponent = ({ handlehChange }) => {
    return (
        <div>
            <input className='search_input' type="text" onChange={(e) => handlehChange(e.target.value)} placeholder='Search' />
        </div>
    )
}

export default SearchComponent