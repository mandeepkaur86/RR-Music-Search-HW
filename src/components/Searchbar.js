// SeachBar.js
//import { useState } from 'react'
import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

function SeachBar() {
    const{term,handleSearch}= useContext (SearchContext)
    return (
        <form >

            <input ref={term} type="text" placeholder=" search here"/>
             <button onclick={(e) => handleSearch(e, term.current.value)}>submit</button>

        </form>
    )
}

export default SeachBar