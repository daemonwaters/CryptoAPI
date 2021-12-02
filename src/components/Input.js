import React from 'react'

function Input({setSearch}) {
    return (
        <div className="input">
            <input onChange={e=> setSearch(e.target.value)} type="text" placeholder="Search a crypto currency..."/>
        </div>
    )
}

export default Input
