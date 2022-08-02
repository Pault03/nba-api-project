import React from 'react'
import './Search.css'

const Search = (props) => {
    const { search, setSearch } = props

    return (
        <div>
            <input
                type="text"
                name="search"
                value={search}
                onChange={(event) => { setSearch(event.target.value) }}
            />
        </div>
    )
}

export default Search