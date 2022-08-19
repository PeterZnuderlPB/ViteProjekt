import { useState } from 'react'
import './SearchBar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const SearchBar = (props) => {
    
  return (
    <>
        <form id="form" role="search" className='nav-search'> 
            <input type="search" id="query" name="qt" placeholder="Type..." aria-label="Search type of business" className='nav-search'/>
            <input type="search" id="query" name="ql" placeholder="Location..." aria-label="Search the location" className='nav-search'/>
            <button className='nav-search'><FontAwesomeIcon className="search" icon={faMagnifyingGlass} /></button>
        </form>
    </>
  )
}

export default SearchBar